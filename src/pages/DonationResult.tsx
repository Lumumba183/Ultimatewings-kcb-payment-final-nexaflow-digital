import { Link, useSearchParams } from 'react-router-dom'
import { CheckCircle, XCircle, AlertCircle, Heart } from 'lucide-react'

type Status = 'success' | 'failed' | 'cancelled'

const CONTENT: Record<Status, {
  icon: JSX.Element
  title: string
  body: string
  tone: string
}> = {
  success: {
    icon: <CheckCircle size={56} className="text-green-600" />,
    title: 'Thank You for Your Donation',
    body: 'Your payment was received successfully. Your generosity goes directly to education, healthcare, and empowerment programs across Kenya.',
    tone: 'bg-green-50 border-green-200'
  },
  failed: {
    icon: <XCircle size={56} className="text-red-600" />,
    title: 'Payment Not Completed',
    body: 'Something went wrong while processing your donation and no payment was completed. Please try again — if the problem continues, use the M-Pesa option or contact us.',
    tone: 'bg-red-50 border-red-200'
  },
  cancelled: {
    icon: <AlertCircle size={56} className="text-amber-600" />,
    title: 'Payment Cancelled',
    body: 'You cancelled the payment before it was completed. No charge was made. You can restart your donation whenever you are ready.',
    tone: 'bg-amber-50 border-amber-200'
  }
}

export default function DonationResult({ status }: { status: Status }) {
  const [params] = useSearchParams()
  const ref = params.get('ref')
  const amount = params.get('amount')
  const c = CONTENT[status]

  return (
    <section className="bg-warm-cream min-h-screen pt-28 pb-20">
      <div className="content-max-width mx-auto px-6 lg:px-12 max-w-[640px]">
        <div className={`bg-white rounded-2xl shadow-lg p-8 md:p-10 text-center border ${c.tone}`}>
          <div className="flex justify-center mb-5">{c.icon}</div>
          <h1 className="text-heading text-deep-forest mb-3" style={{ fontSize: 'clamp(26px, 4vw, 36px)' }}>
            {c.title}
          </h1>
          <p className="text-deep-forest/70 leading-relaxed mb-6">{c.body}</p>

          {status === 'success' && (ref || amount) && (
            <div className="bg-gray-50 rounded-xl p-4 mb-6 text-sm text-deep-forest/70 space-y-1">
              {amount && <p>Amount: <strong className="text-deep-forest">KSh {Number(amount).toLocaleString()}</strong></p>}
              {ref && <p>Transaction reference: <strong className="text-deep-forest">{ref}</strong></p>}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {status !== 'success' && (
              <Link
                to="/donate"
                className="px-6 py-3 rounded-pill bg-golden-hour text-deep-forest font-bold text-sm uppercase tracking-widest hover:bg-[#D9A33A] transition-all"
              >
                Try Again
              </Link>
            )}
            <Link
              to="/"
              className="px-6 py-3 rounded-pill border-2 border-deep-forest/20 text-deep-forest font-bold text-sm uppercase tracking-widest hover:border-golden-hour transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {status === 'success' && (
          <p className="text-center text-deep-forest/50 text-xs mt-6 flex items-center justify-center gap-1">
            <Heart size={12} className="text-golden-hour" />
            100% of your donation supports our programs
          </p>
        )}
      </div>
    </section>
  )
}
