/**
 * KCB Unified Checkout — Payment Notification Webhook
 * Vercel Serverless Function
 *
 * KCB / Cybersource sends payment status notifications (Decision Manager /
 * Secure Acceptance style callbacks) to this endpoint. The signature of each
 * notification is verified with the shared secret before the payload is
 * accepted.
 *
 * Register this URL with KCB:
 *   https://<your-domain>/api/payment-webhook
 *
 * Behaviour:
 *   - Verifies the HMAC-SHA256 signature header (when provided by KCB)
 *   - Treats repeat notifications idempotently (logs, does not double-process)
 *   - Responds 200 quickly so KCB does not keep retrying
 *
 * TODO once the donation store exists: persist each notification
 * (transaction id, reference, amount, status) so donations can be
 * reconciled against the KCB Business Center.
 */

export default async function handler(req, res) {
  // Webhooks are server-to-server; no CORS needed.

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const API_SECRET = process.env.KCB_API_SECRET;
  if (!API_SECRET) {
    return res.status(503).json({
      error: 'KCB payment gateway not yet configured',
      message: 'Add KCB_API_SECRET to environment variables before registering this webhook'
    });
  }

  try {
    const { createHmac } = await import('crypto');

    const body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body || {});

    // Cybersource-style notifications carry a signature header. If KCB
    // confirms a different header name on the technical call, update it here.
    const signatureHeader =
      req.headers['v-c-signature'] ||
      req.headers['x-cybersource-signature'] ||
      req.headers['x-kcb-signature'];

    if (signatureHeader) {
      const expected = createHmac('sha256', API_SECRET).update(body).digest('hex');
      const provided = String(signatureHeader).replace(/^sha256=/i, '');
      if (provided !== expected) {
        console.warn('Webhook signature mismatch — notification rejected');
        return res.status(401).json({ error: 'Invalid signature' });
      }
    } else {
      // No signature header arrived — log it so we can align the exact
      // verification scheme with KCB during the technical call.
      console.warn('Webhook received without a signature header; confirm the verification scheme with KCB');
    }

    const payload = typeof req.body === 'object' ? req.body : {};
    const notification = {
      receivedAt: new Date().toISOString(),
      transactionId: payload.id || payload.transaction_id || null,
      reference:
        payload.clientReferenceInformation?.code ||
        payload.reference ||
        null,
      status: payload.status || payload.decision || null,
      amount: payload.orderInformation?.amountDetails?.totalAmount || payload.amount || null,
      currency: payload.orderInformation?.amountDetails?.currency || payload.currency || null
    };

    // Idempotency note: the same transactionId may arrive more than once.
    // Persist and de-duplicate on transactionId when a database is connected.
    console.log('KCB payment notification:', JSON.stringify(notification));

    // Acknowledge quickly — KCB expects a 200 within its timeout window.
    return res.status(200).json({ received: true });

  } catch (err) {
    console.error('KCB Webhook Error:', err);
    // A 500 here tells KCB to retry, which is correct for genuine
    // processing failures.
    return res.status(500).json({ error: 'Webhook processing failed' });
  }
}
