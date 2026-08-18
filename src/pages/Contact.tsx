import { useState, useEffect, useRef } from 'react'
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Twitter, Youtube, Check, Lock, CheckCircle, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type FormState = 'idle' | 'submitting' | 'success' | 'error'

// EmailJS Configuration
// TODO: Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
const RECIPIENT_EMAIL = 'uwrcafrica@gmail.com'

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'I want to donate',
    message: '',
  })
  const [emailjsReady, setEmailjsReady] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-animate > *',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: '.contact-grid', start: 'top 80%', toggleActions: 'play none none none' },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    // Initialize EmailJS with public key
    if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
      emailjs.init(EMAILJS_PUBLIC_KEY)
      setEmailjsReady(true)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!emailjsReady) {
      // Fallback: show instructions if EmailJS not configured
      alert('Email service is being set up. Please email us directly at uwrcafrica@gmail.com')
      return
    }

    setFormState('submitting')

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: RECIPIENT_EMAIL,
      }

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)

      setFormState('success')
      setFormData({ name: '', email: '', phone: '', subject: 'I want to donate', message: '' })
    } catch (err) {
      console.error('EmailJS Error:', err)
      setFormState('error')
    }
  }

  return (
    <div ref={sectionRef}>
      {/* Contact Hero */}
      <section className="relative min-h-[50vh] bg-golden-hour flex items-center justify-center">
        <div className="text-center px-6 max-w-3xl">
          <span className="text-label text-deep-forest/70 tracking-[0.2em]">GET IN TOUCH</span>
          <h1 className="text-heading text-deep-forest mt-4" style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}>
            We'd love to<br />hear from you
          </h1>
          <p className="text-deep-forest/80 mt-6 max-w-[520px] mx-auto leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
            Whether you want to donate, volunteer, partner with us, or simply learn more — reach out and let's make a difference together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-warm-cream section-padding">
        <div className="contact-grid contact-animate content-max-width mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Form */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card">
            {formState === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <Check size={32} className="text-green-600" />
                </div>
                <h3 className="font-display font-bold text-2xl text-deep-forest">Thank you!</h3>
                <p className="text-off-black/70 mt-3 max-w-sm">
                  Your message has been sent to uwrcafrica@gmail.com. We'll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="link-arrow text-golden-hour hover:text-deep-forest mt-6 underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-display font-bold text-2xl md:text-[28px] text-deep-forest">
                  Send us a message
                </h2>
                <p className="text-muted-sage text-sm mt-2">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {!emailjsReady && (
                  <div className="mt-4 p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-sm">
                    <strong>Note:</strong> Email service setup in progress. For urgent inquiries, please email us directly at{' '}
                    <a href="mailto:uwrcafrica@gmail.com" className="underline">uwrcafrica@gmail.com</a>
                  </div>
                )}

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="mt-6 space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-warm-cream border border-warm-sand rounded-lg px-4 py-3.5 text-off-black placeholder:text-muted-sage focus:border-golden-hour focus:outline-none focus:ring-2 focus:ring-golden-hour/15 transition-all"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-warm-cream border border-warm-sand rounded-lg px-4 py-3.5 text-off-black placeholder:text-muted-sage focus:border-golden-hour focus:outline-none focus:ring-2 focus:ring-golden-hour/15 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-warm-cream border border-warm-sand rounded-lg px-4 py-3.5 text-off-black placeholder:text-muted-sage focus:border-golden-hour focus:outline-none focus:ring-2 focus:ring-golden-hour/15 transition-all"
                    />
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-warm-cream border border-warm-sand rounded-lg px-4 py-3.5 text-off-black focus:border-golden-hour focus:outline-none focus:ring-2 focus:ring-golden-hour/15 transition-all appearance-none cursor-pointer"
                    >
                      <option>I want to donate</option>
                      <option>I want to volunteer</option>
                      <option>Partnership inquiry</option>
                      <option>General inquiry</option>
                      <option>Prayer request</option>
                    </select>
                  </div>

                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-warm-cream border border-warm-sand rounded-lg px-4 py-3.5 text-off-black placeholder:text-muted-sage focus:border-golden-hour focus:outline-none focus:ring-2 focus:ring-golden-hour/15 transition-all resize-none"
                  />

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>

                  {formState === 'error' && (
                    <p className="text-red-600 text-sm text-center">
                      Something went wrong. Please email us directly at{' '}
                      <a href="mailto:uwrcafrica@gmail.com" className="underline">uwrcafrica@gmail.com</a>
                    </p>
                  )}
                </form>
              </>
            )}
          </div>

          {/* Right — Contact Info + Donation */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <h3 className="font-display font-bold text-xl text-deep-forest">
                Contact Information
              </h3>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-teal-accent mt-0.5 flex-shrink-0" />
                  <span className="text-off-black">P.O. Box 28, 80202, Watamu, Kenya</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={20} className="text-teal-accent flex-shrink-0" />
                  <a href="tel:+254742287771" className="text-off-black hover:text-golden-hour transition-colors">+254 742 287 771</a>
                </div>
                <div className="flex items-center gap-4">
                  <MessageCircle size={20} className="text-teal-accent flex-shrink-0" />
                  <a href="https://wa.me/254742287771" target="_blank" rel="noopener noreferrer" className="text-off-black hover:text-golden-hour transition-colors">+254 742 287 771 (WhatsApp)</a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail size={20} className="text-teal-accent flex-shrink-0" />
                  <a href="mailto:uwrcafrica@gmail.com" className="text-golden-hour hover:underline">uwrcafrica@gmail.com</a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail size={20} className="text-teal-accent flex-shrink-0" />
                  <a href="mailto:info@ultimatewings.co.ke" className="text-golden-hour hover:underline">info@ultimatewings.co.ke</a>
                </div>
              </div>
            </div>

            {/* Donation Card */}
            <div className="bg-deep-forest rounded-2xl p-8">
              <h3 className="font-display font-bold text-xl text-cream-white">
                Make a Donation
              </h3>
              <p className="text-cream-white/75 text-sm mt-3 leading-relaxed">
                Your generosity directly supports children and families in Kenya. Every donation creates lasting change.
              </p>

              {/* Donation Tiers */}
              <div className="grid grid-cols-2 gap-3 mt-5">
                <div className="bg-cream-white/10 rounded-lg p-3 text-center border border-cream-white/10 hover:bg-cream-white/15 transition-colors cursor-pointer">
                  <span className="font-display font-bold text-lg text-golden-hour">KSh 3,000</span>
                  <p className="text-cream-white/60 text-xs mt-1">Child sponsorship / month</p>
                </div>
                <div className="bg-cream-white/10 rounded-lg p-3 text-center border border-cream-white/10 hover:bg-cream-white/15 transition-colors cursor-pointer">
                  <span className="font-display font-bold text-lg text-golden-hour">KSh 5,000</span>
                  <p className="text-cream-white/60 text-xs mt-1">Sanitary supplies</p>
                </div>
                <div className="bg-cream-white/10 rounded-lg p-3 text-center border border-cream-white/10 hover:bg-cream-white/15 transition-colors cursor-pointer">
                  <span className="font-display font-bold text-lg text-golden-hour">KSh 10,000</span>
                  <p className="text-cream-white/60 text-xs mt-1">Widow empowerment</p>
                </div>
                <div className="bg-cream-white/10 rounded-lg p-3 text-center border border-cream-white/10 hover:bg-cream-white/15 transition-colors cursor-pointer">
                  <span className="font-display font-bold text-lg text-golden-hour">Custom</span>
                  <p className="text-cream-white/60 text-xs mt-1">Any amount helps</p>
                </div>
              </div>

              <Link
                to="/donate"
                className="inline-flex items-center gap-2 mt-5 px-8 py-3.5 rounded-pill bg-golden-hour text-deep-forest font-body font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:bg-[#D9A33A]"
              >
                Donate Now &rarr;
              </Link>
              <div className="flex flex-wrap items-center gap-4 mt-5 text-cream-white/50 text-xs">
                <span className="flex items-center gap-1"><Lock size={12} /> Secure Payment</span>
                <span className="flex items-center gap-1"><CheckCircle size={12} /> Registered PBO Kenya</span>
                <span className="flex items-center gap-1"><Heart size={12} /> 100% to Programs</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-muted-sage text-sm font-medium mb-3">Follow our journey</p>
              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/share/1E8MwBREmV/" target="_blank" rel="noopener noreferrer" className="text-deep-forest hover:text-golden-hour transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-deep-forest hover:text-golden-hour transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-deep-forest hover:text-golden-hour transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-deep-forest hover:text-golden-hour transition-colors">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
