import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, X } from 'lucide-react'

export default function DonationFloat() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (!visible || dismissed) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
      <div className="bg-deep-forest rounded-2xl shadow-2xl p-5 max-w-[320px] border border-golden-hour/20">
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-3 right-3 text-cream-white/40 hover:text-cream-white transition-colors"
        >
          <X size={16} />
        </button>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-golden-hour/20 flex items-center justify-center">
            <Heart size={18} className="text-golden-hour" />
          </div>
          <div>
            <p className="text-cream-white font-bold text-sm">Support Our Mission</p>
            <p className="text-cream-white/60 text-xs">Every donation changes a life</p>
          </div>
        </div>
        <p className="text-cream-white/70 text-xs leading-relaxed mb-3">
          Help us keep 63+ children in school, empower 100+ widows, and bring healthcare to communities in need.
        </p>
        <Link
          to="/donate"
          className="block w-full text-center px-4 py-2.5 rounded-pill bg-golden-hour text-deep-forest font-bold text-xs uppercase tracking-widest hover:bg-[#D9A33A] transition-all"
        >
          Donate Now
        </Link>
      </div>
    </div>
  )
}
