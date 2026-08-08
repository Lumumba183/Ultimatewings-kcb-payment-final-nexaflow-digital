# Ultimate Wings Kenya — Vercel Deployment

## Setup Instructions

### 1. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and create an account
2. Import this repository: `https://github.com/Lumumba183/Ultimatewings-kcb-payment-final-nexaflow-digital`
3. Vercel will auto-detect Vite settings
4. Deploy!

### 2. Environment Variables (Vercel Dashboard)
Add these in Vercel Project Settings → Environment Variables:

#### KCB Payment Gateway (Required for card payments)
```
KCB_MERCHANT_ID=your_kcb_merchant_id
KCB_API_KEY=your_kcb_api_key
KCB_API_SECRET=your_kcb_api_secret
KCB_ENV=test          # Change to 'production' when going live
```

#### EmailJS (Required for contact form)
```
REACT_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
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
1. Get Merchant ID, API Key, and API Secret from KCB bank
2. Add them to Vercel environment variables
3. Test in test environment first (`KCB_ENV=test`)
4. Switch to production when ready (`KCB_ENV=production`)

### 5. Custom Domain (Optional)
1. In Vercel project settings, add your domain
2. Update DNS records as instructed by Vercel

---

## Features

- ✅ Full Vercel deployment ready
- ✅ KCB Unified Checkout integration (cards, Google Pay, Apple Pay)
- ✅ M-Pesa Paybill & Till Number options
- ✅ WhatsApp floating chat button
- ✅ EmailJS contact form → uwrcafrica@gmail.com
- ✅ Facebook link updated
- ✅ All donation buttons wired to /donate

---

## File Structure Changes

```
api/
  payment-session.js    # Vercel serverless function — creates KCB session
  payment-verify.js     # Vercel serverless function — verifies payment
src/
  pages/
    Donate.tsx          # New donation page with KCB + M-Pesa
  components/
    WhatsAppFloat.tsx   # Floating WhatsApp button
```

---

## Support

For issues, contact: uwrcafrica@gmail.com
