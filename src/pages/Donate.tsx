import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Lock, CheckCircle, Copy, Check, Phone, MessageCircle, CreditCard, Smartphone, ExternalLink, X } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PRESET_AMOUNTS = [
  { value: 1000, label: 'KSh 1,000', desc: 'Feed a child for a week' },
  { value: 3000, label: 'KSh 3,000', desc: 'School supplies for 1 child' },
  { value: 5000, label: 'KSh 5,000', desc: 'Sanitary kits for 50 girls' },
  { value: 10000, label: 'KSh 10,000', desc: 'Support a widow\'s business' },
]

export default function Donate() {
  const [amount, setAmount] = useState<number>(3000)
  const [customAmount, setCustomAmount] = useState('')
  const [isCustom, setIsCustom] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<'kcb' | 'mpesa' | null>(null)
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [kcbLoading, setKcbLoading] = useState(false)
  const [kcbError, setKcbError] = useState<string | null>(null)
  const [showKcbModal, setShowKcbModal] = useState(false)
  const [kcbConfigured, setKcbConfigured] = useState(true)

  const sectionRef = useRef<HTMLElement>(null)
  const kcbContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.donate-content > *',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' },
        }
      )
    }, el)
    return () => ctx.revert()
  }, [])

  const handleAmountSelect = (value: number) => {
    setAmount(value)
    setIsCustom(false)
    setCustomAmount('')
  }

  const handleCustomAmount = (val: string) => {
    setCustomAmount(val)
    const num = parseInt(val.replace(/[^0-9]/g, ''))
    if (!isNaN(num) && num > 0) {
      setAmount(num)
      setIsCustom(true)
    }
  }

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const initKcbCheckout = async () => {
    setKcbLoading(true)
    setKcbError(null)

    try {
      const res = await fetch('/api/payment-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, currency: 'KES', description: 'Donation to Ultimate Wings Kenya' })
      })

      const data = await res.json()

      if (!res.ok) {
        if (res.status === 503 && data.error?.includes('not yet configured')) {
          setKcbConfigured(false)
          setKcbError('KCB payment gateway is not yet configured. Please ask the administrator to add KCB API credentials.')
        } else {
          setKcbError(data.error || 'Failed to initialize payment')
        }
        setKcbLoading(false)
        return
      }

      setKcbConfigured(true)
      setShowKcbModal(true)

      // Load KCB Unified Checkout SDK
      const script = document.createElement('script')
      script.src = 'https://apitest.cybersource.com/uc/v1/assets/1.0.0/UnifiedCheckout.js'
      script.onload = async () => {
        try {
          const client = await (window as any).VAS.UnifiedCheckout(data.sessionJWT)
          const checkout = await client.createCheckout({ autoProcessing: true })
          const result = await checkout.mount('#kcb-payment-container')
          
          // Send result to server for verification
          await fetch('/api/payment-verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ transientToken: result })
          })

          checkout.destroy()
          client.destroy()
          setShowKcbModal(false)
          alert('Thank you for your donation! Payment successful.')
        } catch (err: any) {
          setKcbError(err.message || 'Payment failed')
        }
      }
      document.body.appendChild(script)

    } catch (err: any) {
      setKcbError(err.message || 'Network error')
    } finally {
      setKcbLoading(false)
    }
  }

  return (
    <section ref={sectionRef} className="bg-warm-cream min-h-screen pt-28 pb-20">
      <div className="donate-content content-max-width mx-auto px-6 lg:px-12 max-w-[900px]">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-forest/10 text-deep-forest text-sm font-medium mb-4">
            <Heart size={16} className="text-golden-hour" />
            Support Our Mission
          </div>
          <h1 className="text-heading text-deep-forest mb-4" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
            Make a Donation
          </h1>
          <p className="text-deep-forest/70 max-w-[600px] mx-auto leading-relaxed">
            Your generosity transforms lives across Kenya. Every contribution goes directly to education, healthcare, and empowerment programs.
          </p>
        </div>

        {/* Amount Selection */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
          <h3 className="font-body font-bold text-deep-forest text-lg mb-4">Select Amount</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {PRESET_AMOUNTS.map((preset) => (
              <button
                key={preset.value}
                onClick={() => handleAmountSelect(preset.value)}
                className={`p-4 rounded-xl border-2 text-center transition-all ${
                  !isCustom && amount === preset.value
                    ? 'border-golden-hour bg-golden-hour/10'
                    : 'border-gray-200 hover:border-golden-hour/50'
                }`}
              >
                <div className="font-display font-bold text-deep-forest">{preset.label}</div>
                <div className="text-xs text-deep-forest/60 mt-1">{preset.desc}</div>
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="relative">
            <label className="block text-sm font-medium text-deep-forest/70 mb-2">Or enter custom amount</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-deep-forest/50 font-bold">KSh</span>
              <input
                type="text"
                value={customAmount}
                onChange={(e) => handleCustomAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full pl-14 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-golden-hour focus:outline-none text-deep-forest font-bold"
              />
            </div>
          </div>

          {isCustom && amount > 0 && (
            <p className="text-golden-hour font-medium mt-2 text-sm">You are donating: KSh {amount.toLocaleString()}</p>
          )}
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
          <h3 className="font-body font-bold text-deep-forest text-lg mb-4">Choose Payment Method</h3>

          {/* KCB Unified Checkout */}
          <button
            onClick={() => {
              setPaymentMethod('kcb')
              initKcbCheckout()
            }}
            className={`w-full p-5 rounded-xl border-2 flex items-center gap-4 transition-all mb-3 ${
              paymentMethod === 'kcb'
                ? 'border-golden-hour bg-golden-hour/5'
                : 'border-gray-200 hover:border-golden-hour/50'
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-deep-forest/10 flex items-center justify-center flex-shrink-0">
              <CreditCard size={24} className="text-deep-forest" />
            </div>
            <div className="text-left flex-1">
              <div className="font-bold text-deep-forest">Pay with Card / KCB Checkout</div>
              <div className="text-sm text-deep-forest/60">Visa, Mastercard, Google Pay, Apple Pay</div>
            </div>
            {kcbLoading && paymentMethod === 'kcb' && (
              <div className="w-6 h-6 border-2 border-golden-hour border-t-transparent rounded-full animate-spin" />
            )}
          </button>

          {/* M-Pesa Options */}
          <button
            onClick={() => setPaymentMethod('mpesa')}
            className={`w-full p-5 rounded-xl border-2 flex items-center gap-4 transition-all ${
              paymentMethod === 'mpesa'
                ? 'border-golden-hour bg-golden-hour/5'
                : 'border-gray-200 hover:border-golden-hour/50'
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <Smartphone size={24} className="text-green-700" />
            </div>
            <div className="text-left flex-1">
              <div className="font-bold text-deep-forest">M-Pesa / Direct Transfer</div>
              <div className="text-sm text-deep-forest/60">Paybill, Till Number, or KCB App</div>
            </div>
          </button>

          {/* KCB Error */}
          {kcbError && (
            <div className="mt-4 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
              <div className="flex items-center gap-2 mb-1">
                <X size={16} />
                <span className="font-bold">Payment Error</span>
              </div>
              {kcbError}
            </div>
          )}

          {/* M-Pesa Details */}
          {paymentMethod === 'mpesa' && (
            <div className="mt-6 space-y-4">
              <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <Phone size={18} />
                  M-Pesa Paybill
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white rounded-lg p-3">
                    <div>
                      <div className="text-xs text-green-700/70">Business Number</div>
                      <div className="font-bold text-green-800 text-lg">522533</div>
                    </div>
                    <button
                      onClick={() => copyToClipboard('522533', 'paybill')}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-green-100 text-green-700 text-sm hover:bg-green-200 transition-colors"
                    >
                      {copiedField === 'paybill' ? <Check size={14} /> : <Copy size={14} />}
                      {copiedField === 'paybill' ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-lg p-3">
                    <div>
                      <div className="text-xs text-green-700/70">Account Number</div>
                      <div className="font-bold text-green-800 text-lg">9700052</div>
                    </div>
                    <button
                      onClick={() => copyToClipboard('9700052', 'account')}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-green-100 text-green-700 text-sm hover:bg-green-200 transition-colors"
                    >
                      {copiedField === 'account' ? <Check size={14} /> : <Copy size={14} />}
                      {copiedField === 'account' ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <CreditCard size={18} />
                  KCB Till Number
                </h4>
                <div className="flex items-center justify-between bg-white rounded-lg p-3">
                  <div>
                    <div className="text-xs text-blue-700/70">Till Number</div>
                    <div className="font-bold text-blue-800 text-lg">9700052</div>
                  </div>
                  <button
                    onClick={() => copyToClipboard('9700052', 'till')}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-100 text-blue-700 text-sm hover:bg-blue-200 transition-colors"
                  >
                    {copiedField === 'till' ? <Check size={14} /> : <Copy size={14} />}
                    {copiedField === 'till' ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h4 className="font-bold text-deep-forest mb-2 flex items-center gap-2">
                  <ExternalLink size={18} />
                  How to Pay
                </h4>
                <ol className="text-sm text-deep-forest/70 space-y-2 list-decimal list-inside">
                  <li>Go to M-Pesa menu on your phone</li>
                  <li>Select <strong>Lipa na M-Pesa</strong></li>
                  <li>Select <strong>Paybill</strong> or <strong>Buy Goods</strong></li>
                  <li>Enter Business Number <strong>522533</strong> or Till <strong>9700052</strong></li>
                  <li>Enter Account Number <strong>9700052</strong> (for Paybill)</li>
                  <li>Enter Amount: <strong>KSh {amount.toLocaleString()}</strong></li>
                  <li>Enter your M-Pesa PIN and confirm</li>
                </ol>
                <p className="text-sm text-deep-forest/60 mt-3">
                  Or use <strong>KCB Mobile App</strong> or dial <strong>*522#</strong>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Security Note */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-deep-forest/50 text-xs">
          <span className="flex items-center gap-1"><Lock size={12} /> Secure Payment</span>
          <span className="flex items-center gap-1"><CheckCircle size={12} /> Registered PBO Kenya</span>
          <span className="flex items-center gap-1"><Heart size={12} /> 100% to Programs</span>
        </div>
      </div>

      {/* KCB Checkout Modal */}
      {showKcbModal && (
        <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-[500px] w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-deep-forest text-lg">Complete Your Donation</h3>
                <button onClick={() => setShowKcbModal(false)} className="text-deep-forest/50 hover:text-deep-foreground">
                  <X size={20} />
                </button>
              </div>
              <p className="text-sm text-deep-forest/70 mb-4">
                Amount: <strong className="text-golden-hour">KSh {amount.toLocaleString()}</strong>
              </p>
              <div id="kcb-payment-container" ref={kcbContainerRef} className="min-h-[200px]" />
              {!kcbConfigured && (
                <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-sm">
                  <strong>Note:</strong> KCB payment gateway is not yet configured. Please contact the administrator to complete setup.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
