/**
 * KCB Unified Checkout — Create Payment Session
 * Vercel Serverless Function
 */

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { amount, currency = 'KES', description = 'Donation to Ultimate Wings Kenya' } = req.body || {};

  if (!amount || isNaN(Number(amount))) {
    return res.status(400).json({ error: 'Valid amount is required' });
  }

  // Check if KCB credentials are configured
  const MERCHANT_ID = process.env.KCB_MERCHANT_ID;
  const API_KEY = process.env.KCB_API_KEY;
  const API_SECRET = process.env.KCB_API_SECRET;

  if (!MERCHANT_ID || !API_KEY || !API_SECRET) {
    return res.status(503).json({
      error: 'KCB payment gateway not yet configured',
      message: 'Please add KCB_MERCHANT_ID, KCB_API_KEY, and KCB_API_SECRET to environment variables',
      amount,
      currency,
      description
    });
  }

  try {
    // Cybersource Sessions API endpoint
    const isTest = process.env.KCB_ENV !== 'production';
    const baseUrl = isTest
      ? 'https://apitest.cybersource.com'
      : 'https://api.cybersource.com';

    // Generate digest and signature
    const { createHash, createHmac } = await import('crypto');

    const payload = {
      targetOrigins: [process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'],
      clientVersion: '1.0',
      locale: 'en_KE',
      country: 'KE',
      orderInformation: {
        amountDetails: {
          totalAmount: String(amount),
          currency: currency
        },
        billTo: {
          country: 'KE'
        }
      },
      paymentInformation: {
        paymentType: {
          type: 'CARD'
        }
      }
    };

    const requestBody = JSON.stringify(payload);
    const digest = createHash('sha256').update(requestBody).digest('base64');

    const gmtDate = new Date().toUTCString();
    const signString = `host: ${isTest ? 'apitest.cybersource.com' : 'api.cybersource.com'}\ndate: ${gmtDate}\n(request-target): post /up/v1/sessions\ndigest: SHA-256=${digest}\nv-c-merchant-id: ${MERCHANT_ID}`;
    const signature = createHmac('sha256', API_SECRET).update(signString).digest('base64');

    const authHeader = `keyid="${API_KEY}", algorithm="HmacSHA256", headers="host date (request-target) digest v-c-merchant-id", signature="${signature}"`;

    const response = await fetch(`${baseUrl}/up/v1/sessions`, {
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

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({
        error: 'KCB session creation failed',
        details: errorText
      });
    }

    const data = await response.json();
    return res.status(200).json({
      success: true,
      sessionJWT: data.captureContext,
      status: data.status || 'created'
    });

  } catch (err) {
    console.error('KCB Session Error:', err);
    return res.status(500).json({
      error: 'Internal server error',
      message: err.message
    });
  }
}
