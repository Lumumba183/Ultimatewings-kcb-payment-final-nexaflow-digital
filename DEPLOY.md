# Ultimate Wings Kenya — Vercel Deployment

## Setup Instructions

### 1. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and create an account
2. Import this repository: `https://github.com/Lumumba183/Ultimatewings-kcb-payment-final-nexaflow-digital`
3. Vercel will auto-detect Vite settings
4. Deploy!

### 2. Environment Variables (Vercel Dashboard)
Add these in Vercel Project Settings → Environment Variables:

#### Site
```
SITE_URL=https://ultimatewings.co.ke    # Public origin, used as Cybersource targetOrigin
```

#### KCB Payment Gateway (Required for card payments)
Server-side (used by the /api functions):
```
KCB_MERCHANT_ID=ultimatewingskenya_ke
KCB_API_KEY=your_kcb_api_key
KCB_API_SECRET=your_kcb_api_secret
KCB_ENV=test          # Change to 'production' when going live
```
Client-side (selects the test vs production Unified Checkout SDK in the browser):
```
VITE_KCB_ENV=test     # Must match KCB_ENV
```

#### EmailJS (Required for contact form)
NOTE: this is a Vite app — variables must be prefixed `VITE_` to reach the browser.
```
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### 3. EmailJS Setup
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Create a free account
3. Create an Email Service (Gmail, Outlook, etc.)
4. Create an Email Template with these variables:
   - `{{from_name}}` — Sender name
   - `{{from_email}}` — Sender email
   - `{{phone}}` — Phone number
   - `{{subject}}` — Subject line
   - `{{message}}` — Message body
   - `{{to_email}}` — Recipient (uwrcafrica@gmail.com)
5. Copy Service ID, Template ID, and Public Key to Vercel env vars

### 4. KCB Setup
1. Get the **API Key** and **API Secret** from KCB (merchant ID is already `ultimatewingskenya_ke`).
2. Add them to Vercel environment variables (server-side AND `VITE_KCB_ENV`).
3. Test in the test environment first (`KCB_ENV=test`, `VITE_KCB_ENV=test`).
4. Register the webhook URL with KCB: `https://ultimatewings.co.ke/api/payment-webhook`.
5. Switch to production when ready (`KCB_ENV=production`, `VITE_KCB_ENV=production`) and redeploy.

### 5. KCB Test Cards (Cybersource Unified Checkout)
Use these test cards in the checkout widget:
| Card Brand | Card Number | Expiration | CVV |
|------------|-------------|------------|-----|
| Visa | 4111111111111111 | 12/2026 | 123 |
| Mastercard | 5555555555554444 | 02/2026 | 265 |
| American Express | 378282246310005 | 03/2026 | 7890 |

More test data: https://developer.cybersource.com/docs/cybs/en-us/unified-checkout/developer/all/rest/unified-checkout/uc-reference-test-cards.html

### 6. KCB Integration Details
- Sessions API: `POST https://apitest.cybersource.com/uc/v1/sessions` (test) / `https://api.cybersource.com/uc/v1/sessions` (prod)
- Payment authorization: `POST /pts/v2/payments` with `tokenInformation.transientTokenJwt`
- Payment Details API: `GET /flex/v2/payment-details/{jti}` where `{jti}` is the `jti` claim inside the transient token JWT
- Sample integration: https://github.com/cybersource/cybersource-unified-checkout-sample-node

### 7. Important: URL Format
This app uses HashRouter — all page URLs contain `/#/`:
- Donation page: `https://ultimatewings.co.ke/#/donate`
- Success page: `https://ultimatewings.co.ke/#/donate/success`
- Failed page: `https://ultimatewings.co.ke/#/donate/failed`
Give these exact formats to KCB when registering redirect URLs.

### 8. Custom Domain (Optional)
1. In Vercel project settings, add your domain
2. Update DNS records as instructed by Vercel (add A + CNAME records; never change nameservers)

---

## Features

- ✅ Full Vercel deployment ready
- ✅ KCB Unified Checkout v1 integration (cards, Google Pay, Apple Pay)
- ✅ Payment success / failed / cancelled result pages
- ✅ Webhook endpoint for KCB payment notifications (signature-verified)
- ✅ M-Pesa Paybill & Till Number manual options
- ✅ WhatsApp floating chat button
- ✅ EmailJS contact form → uwrcafrica@gmail.com
- ✅ All donation buttons wired to /donate

---

## API Endpoints

```
api/
  payment-session.js    # Creates the KCB/Cybersource checkout session (POST /uc/v1/sessions)
  payment-verify.js     # Verifies the transient token, fetches payment details, authorizes the payment
  payment-webhook.js    # Receives KCB payment status notifications
```

---

## Support

For issues, contact: uwrcafrica@gmail.com
