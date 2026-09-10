/**
 * KCB Unified Checkout — Verify / Process Payment Result
 * Vercel Serverless Function
 *
 * Receives the Unified Checkout transient token (or auto-processed payment
 * result JWT) produced by the browser SDK, verifies its RS256 signature
 * against Cybersource's published public key, then processes the
 * authorization via POST /pts/v2/payments.
 *
 * The token's `jti` claim is also used to call the Payment Details API
 * (GET /flex/v2/payment-details/{jti}) to retrieve non-sensitive
 * cardholder / billing / shipping data for logging and reconciliation.
 */

const https = require('https');

const ALLOWED_JWT_ALG = 'RS256';
const JWK_CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour
const jwkCache = new Map();

function getApiHost(isTest) {
  return isTest ? 'apitest.cybersource.com' : 'api.cybersource.com';
}

function decodeJwt(token) {
  const parts = String(token).split('.');
  if (parts.length !== 3) {
    throw new Error('Invalid JWT format');
  }
  const header = JSON.parse(Buffer.from(parts[0], 'base64url').toString('utf8'));
  const payload = JSON.parse(Buffer.from(parts[1], 'base64url').toString('utf8'));
  return { header, payload, signature: parts[2] };
}

function fetchJson(host, path) {
  return new Promise((resolve, reject) => {
    const options = {
      host,
      path,
      method: 'GET',
      timeout: 8000,
      headers: { Accept: 'application/json' }
    };
    const req = https.request(options, (res) => {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => {
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode}: ${body}`));
        }
        try {
          resolve(JSON.parse(body));
        } catch (e) {
          reject(new Error(`JSON parse error: ${e.message}`));
        }
      });
    });
    req.on('timeout', () => req.destroy(new Error('Request timeout')));
    req.on('error', reject);
    req.end();
  });
}

function jwkToPem(jwk) {
  const key = require('crypto').createPublicKey({ key: jwk, format: 'jwk' });
  return key.export({ type: 'spki', format: 'pem' });
}

async function getCybersourcePublicKey(host, kid) {
  if (!/^[A-Za-z0-9_\-]{1,128}$/.test(kid)) {
    throw new Error('Invalid kid format');
  }
  const cacheKey = `${host}:${kid}`;
  const cached = jwkCache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) {
    return cached.pem;
  }
  const jwk = await fetchJson(host, `/flex/v2/public-keys/${encodeURIComponent(kid)}`);
  if (!jwk || typeof jwk !== 'object' || !jwk.kty) {
    throw new Error('Invalid JWK response');
  }
  const pem = jwkToPem(jwk);
  jwkCache.set(cacheKey, { pem, expiresAt: Date.now() + JWK_CACHE_TTL_MS });
  return pem;
}

async function verifyCybersourceJwt(token, host) {
  const { header, payload } = decodeJwt(token);
  if (!header || header.alg !== ALLOWED_JWT_ALG) {
    throw new Error(`Unexpected JWT algorithm: ${header && header.alg}`);
  }
  if (!header.kid) {
    throw new Error('Missing JWT key id');
  }
  const publicKey = await getCybersourcePublicKey(host, header.kid);
  const jwt = require('jsonwebtoken');
  const verified = jwt.verify(token, publicKey, { algorithms: [ALLOWED_JWT_ALG] });
  return { payload: verified, header };
}

function buildHttpSignature({ method, host, path, body, merchantId, apiKey, apiSecret }) {
  const { createHash, createHmac } = require('crypto');
  const gmtDate = new Date().toUTCString();
  let signString = `host: ${host}\ndate: ${gmtDate}\n(request-target): ${method.toLowerCase()} ${path}`;
  const headers = {
    'Host': host,
    'Date': gmtDate,
    'v-c-merchant-id': merchantId
  };
  if (body !== undefined) {
    const digest = createHash('sha256').update(body).digest('base64');
    signString += `\ndigest: SHA-256=${digest}`;
    headers['Digest'] = `SHA-256=${digest}`;
  }
  signString += `\nv-c-merchant-id: ${merchantId}`;
  const signature = createHmac('sha256', apiSecret).update(signString).digest('base64');
  headers['Signature'] = `keyid="${apiKey}", algorithm="HmacSHA256", headers="host date (request-target)${body !== undefined ? ' digest' : ''} v-c-merchant-id", signature="${signature}"`;
  return headers;
}

async function cybersourceRequest({ method, host, path, body, merchantId, apiKey, apiSecret }) {
  const headers = buildHttpSignature({ method, host, path, body, merchantId, apiKey, apiSecret });
  if (body !== undefined) {
    headers['Content-Type'] = 'application/json';
  }
  const response = await fetch(`https://${host}${path}`, {
    method,
    headers,
    body: body !== undefined ? body : undefined
  });
  const text = await response.text();
  let data;
  try {
    data = text ? JSON.parse(text) : {};
  } catch (e) {
    data = { raw: text };
  }
  return { ok: response.ok, status: response.status, data };
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { transientToken, reference } = req.body || {};

  if (!transientToken) {
    return res.status(400).json({ error: 'Transient token is required' });
  }

  const MERCHANT_ID = process.env.KCB_MERCHANT_ID;
  const API_KEY = process.env.KCB_API_KEY;
  const API_SECRET = process.env.KCB_API_SECRET;

  if (!MERCHANT_ID || !API_KEY || !API_SECRET) {
    return res.status(503).json({
      error: 'KCB payment gateway not yet configured',
      message: 'Please add KCB_MERCHANT_ID, KCB_API_KEY, and KCB_API_SECRET to environment variables'
    });
  }

  try {
    const isTest = process.env.KCB_ENV !== 'production';
    const host = getApiHost(isTest);

    // 1. Verify the token signature and read its claims.
    const { payload: tokenPayload } = await verifyCybersourceJwt(transientToken, host);
    const jti = tokenPayload.jti;

    // 2. Retrieve non-sensitive payment details (cardholder, billing, etc.).
    let paymentDetails = null;
    if (jti) {
      try {
        const detailsResult = await cybersourceRequest({
          method: 'GET',
          host,
          path: `/flex/v2/payment-details/${encodeURIComponent(jti)}`,
          merchantId: MERCHANT_ID,
          apiKey: API_KEY,
          apiSecret: API_SECRET
        });
        if (detailsResult.ok) {
          paymentDetails = detailsResult.data;
        } else {
          console.warn('Payment Details API returned', detailsResult.status, detailsResult.data);
        }
      } catch (detailsErr) {
        console.warn('Payment Details API failed:', detailsErr.message);
      }
    }

    // 3. Authorize / capture the payment using the transient token.
    const referenceCode = reference || `UWK-${Date.now()}`;
    const paymentBody = JSON.stringify({
      clientReferenceInformation: {
        code: referenceCode
      },
      tokenInformation: {
        transientTokenJwt: transientToken
      }
    });

    const paymentResult = await cybersourceRequest({
      method: 'POST',
      host,
      path: '/pts/v2/payments',
      body: paymentBody,
      merchantId: MERCHANT_ID,
      apiKey: API_KEY,
      apiSecret: API_SECRET
    });

    if (!paymentResult.ok) {
      return res.status(paymentResult.status).json({
        success: false,
        error: 'Payment authorization failed',
        details: paymentResult.data
      });
    }

    const data = paymentResult.data;
    const authorized = data.status === 'AUTHORIZED' || data.status === 'PENDING';

    // Log a safe, non-sensitive summary for reconciliation.
    console.log('KCB payment processed:', JSON.stringify({
      reference: referenceCode,
      status: data.status,
      transactionId: data.id,
      jti: jti || null,
      cardholderName: paymentDetails?.cardholderName || null,
      email: paymentDetails?.billTo?.email || null
    }));

    return res.status(200).json({
      success: authorized,
      status: data.status,
      amount: data.orderInformation?.amountDetails?.totalAmount,
      currency: data.orderInformation?.amountDetails?.currency,
      transactionId: data.id,
      reconciliationId: data.reconciliationId,
      reference: referenceCode,
      paymentDetails: paymentDetails
        ? {
            cardholderName: paymentDetails.cardholderName || null,
            billTo: paymentDetails.billTo || null,
            shipTo: paymentDetails.shipTo || null
          }
        : null
    });

  } catch (err) {
    console.error('KCB Verify Error:', err);
    return res.status(500).json({
      error: 'Internal server error',
      message: err.message
    });
  }
}
