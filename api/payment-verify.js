/**
 * KCB Unified Checkout — Verify / Process Payment Result
 * Vercel Serverless Function
 *
 * Receives the transient token JWT produced by the Unified Checkout SDK
 * after the donor completes payment, then processes the authorization
 * via the Cybersource Payments API.
 */

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
    const baseUrl = isTest
      ? 'https://apitest.cybersource.com'
      : 'https://api.cybersource.com';

    const { createHash, createHmac } = await import('crypto');

    const requestBody = JSON.stringify({
      clientReferenceInformation: {
        code: reference || `UWK-${Date.now()}`
      },
      tokenInformation: {
        transientTokenJwt: transientToken
      }
    });

    const digest = createHash('sha256').update(requestBody).digest('base64');
    const gmtDate = new Date().toUTCString();
    const signString = `host: ${isTest ? 'apitest.cybersource.com' : 'api.cybersource.com'}\ndate: ${gmtDate}\n(request-target): post /pts/v2/payments\ndigest: SHA-256=${digest}\nv-c-merchant-id: ${MERCHANT_ID}`;
    const signature = createHmac('sha256', API_SECRET).update(signString).digest('base64');

    const authHeader = `keyid="${API_KEY}", algorithm="HmacSHA256", headers="host date (request-target) digest v-c-merchant-id", signature="${signature}"`;

    const response = await fetch(`${baseUrl}/pts/v2/payments`, {
      method: 'POST',
      headers: {
        'Host': isTest ? 'apitest.cybersource.com' : 'api.cybersource.com',
        'Date': gmtDate,
        'Digest': `SHA-256=${digest}`,
        'v-c-merchant-id': MERCHANT_ID,
        'Signature': authHeader,
        'Content-Type': 'application/json'
      },
      body: requestBody
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        error: 'Payment authorization failed',
        details: data
      });
    }

    const authorized = data.status === 'AUTHORIZED' || data.status === 'PENDING';

    return res.status(200).json({
      success: authorized,
      status: data.status,
      amount: data.orderInformation?.amountDetails?.totalAmount,
      currency: data.orderInformation?.amountDetails?.currency,
      transactionId: data.id,
      reconciliationId: data.reconciliationId
    });

  } catch (err) {
    console.error('KCB Verify Error:', err);
    return res.status(500).json({
      error: 'Internal server error',
      message: err.message
    });
  }
}
