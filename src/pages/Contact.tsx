import { useState, useEffect, useRef } from 'react'
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Twitter, Youtube, Check, Lock, CheckCircle, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type FormState = 'idle' | 'submitting' | 'success' | 'error'

// EmailJS Configuration — Vite env vars (set in Vercel dashboard)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-content > *',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' },
        }
      )
    }, el)
    return () => ctx.revert()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: 'uwrcafrica@gmail.com'
        },
        EMAILJS_PUBLIC_KEY
      )
      setFormState('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (error) {
      console.error('EmailJS error:', error)
      setFormState('error')
    }
  }

  return (
    <section ref={sectionRef} className="bg-warm-cream min-h-screen pt-28 pb-20">
      <div className="contact-content content-max-width mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-forest/10 text-deep-forest text-sm font-medium mb-4">
            <MessageCircle size={16} className="text-golden-hour" />
            Get in Touch
          </div>
          <h1 className="text-heading text-deep-forest mb-4" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
            Contact Us
          </h1>
          <p className="text-deep-forest/70 max-w-[600px] mx-auto leading-relaxed">
            Have questions about our programs, want to volunteer, or partner with us? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-[1100px] mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-body font-bold text-deep-forest text-lg mb-5">Reach Us Directly</h3>
              <div className="space-y-4">
                <a href="mailto:uwrcafrica@gmail.com" className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-deep-forest/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-deep-forest" />
                  </div>
                  <div>
                    <div className="text-xs text-deep-forest/60">Email</div>
                    <div className="font-medium text-deep-forest group-hover:text-golden-hour transition-colors">uwrcafrica@gmail.com</div>
                  </div>
                </a>
                <a href="mailto:info@ultimatewingskenya.org" className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-deep-forest/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-deep-forest" />
                  </div>
                  <div>
                    <div className="text-xs text-deep-forest/60">Alternative Email</div>
                    <div className="font-medium text-deep-forest group-hover:text-golden-hour transition-colors">info@ultimatewingskenya.org</div>
                  </div>
                </a>
                <a href="tel:+254700000000" className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-deep-forest/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-deep-forest" />
                  </div>
                  <div>
                    <div className="text-xs text-deep-forest/60">Phone</div>
                    <div className="font-medium text-deep-forest group-hover:text-golden-hour transition-colors">+254 700 000 000</div>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-deep-forest/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-deep-forest" />
                  </div>
                  <div>
                    <div className="text-xs text-deep-forest/60">Location</div>
                    <div className="font-medium text-deep-forest">Watamu, Kilifi County, Kenya</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-deep-forest rounded-2xl shadow-lg p-6">
              <h3 className="font-body font-bold text-cream-white text-lg mb-4">Follow Our Journey</h3>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/ultimatewingskenya" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cream-white/10 flex items-center justify-center text-cream-white/70 hover:bg-golden-hour hover:text-deep-forest transition-all">
                  <Facebook size={18} />
                </a>
                <a href="https://www.instagram.com/ultimatewingskenya" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cream-white/10 flex items-center justify-center text-cream-white/70 hover:bg-golden-hour hover:text-deep-forest transition-all">
                  <Instagram size={18} />
                </a>
                <a href="https://twitter.com/ultimatewingske" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cream-white/10 flex items-center justify-center text-cream-white/70 hover:bg-golden-hour hover:text-deep-forest transition-all">
                  <Twitter size={18} />
                </a>
                <a href="https://www.youtube.com/@ultimatewingskenya" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cream-white/10 flex items-center justify-center text-cream-white/70 hover:bg-golden-hour hover:text-deep-forest transition-all">
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            {/* Donate CTA */}
            <div className="bg-golden-hour/10 border border-golden-hour/30 rounded-2xl p-6 text-center">
              <Heart size={28} className="text-golden-hour mx-auto mb-3" />
              <p className="text-deep-forest font-medium mb-4">Want to support our mission directly?</p>
              <Link
                to="/donate"
                className="inline-block px-6 py-3 rounded-pill bg-golden-hour text-deep-forest font-bold text-sm uppercase tracking-widest hover:bg-[#D9A33A] transition-all"
              >
                Donate Now
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="font-body font-bold text-deep-forest text-lg mb-6">Send Us a Message</h3>

              {formState === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Check size={32} className="text-green-600" />
                  </div>
                  <h4 className="font-bold text-deep-forest text-xl mb-2">Message Sent!</h4>
                  <p className="text-deep-forest/70 mb-6">Thank you for reaching out. We'll get back to you within 24-48 hours.</p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="px-6 py-3 rounded-pill bg-deep-forest text-cream-white font-bold text-sm uppercase tracking-widest hover:bg-deep-forest/90 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-deep-forest/70 mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-golden-hour focus:outline-none text-deep-forest"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-deep-forest/70 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-golden-hour focus:outline-none text-deep-forest"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-deep-forest/70 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-golden-hour focus:outline-none text-deep-forest"
                        placeholder="+254 700 000 000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-deep-forest/70 mb-2">Subject *</label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-golden-hour focus:outline-none text-deep-forest bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Volunteer">Volunteer</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Donation Question">Donation Question</option>
                        <option value="Media/Press">Media/Press</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-deep-forest/70 mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-golden-hour focus:outline-none text-deep-forest resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  {formState === 'error' && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                      Something went wrong sending your message. Please try again or email us directly at uwrcafrica@gmail.com
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full py-4 rounded-xl bg-deep-forest text-cream-white font-bold text-sm uppercase tracking-widest hover:bg-deep-forest/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-cream-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  <p className="text-xs text-deep-forest/50 text-center flex items-center justify-center gap-1">
                    <Lock size={12} /> Your information is kept private and secure
                  </p>
                </form>
              )}
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-deep-forest/50 text-xs mt-6">
              <span className="flex items-center gap-1"><CheckCircle size={12} /> Registered PBO Kenya</span>
              <span className="flex items-center gap-1"><Heart size={12} /> Community Driven</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
