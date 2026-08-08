import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Lock, CheckCircle } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CtaBanner() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-content > *',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-golden-hour section-padding"
    >
      <div className="cta-content content-max-width mx-auto text-center max-w-[900px]">
        <h2 className="text-heading text-deep-forest" style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}>
          Every donation<br />creates a ripple of hope
        </h2>
        <p className="text-deep-forest/85 mt-6 max-w-[600px] mx-auto leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
          Join us in transforming lives across Kenya. Your generosity provides education, shelter, healthcare, and dignity to those who need it most.
        </p>

        {/* Donation Impact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 max-w-[700px] mx-auto">
          <div className="bg-deep-forest/10 rounded-xl p-5 text-center">
            <span className="font-display font-bold text-2xl text-deep-forest">KSh 3,000</span>
            <p className="text-deep-forest/70 text-sm mt-1">Sponsor a child's education for a month</p>
          </div>
          <div className="bg-deep-forest/10 rounded-xl p-5 text-center">
            <span className="font-display font-bold text-2xl text-deep-forest">KSh 5,000</span>
            <p className="text-deep-forest/70 text-sm mt-1">Provide sanitary supplies for 50 girls</p>
          </div>
          <div className="bg-deep-forest/10 rounded-xl p-5 text-center">
            <span className="font-display font-bold text-2xl text-deep-forest">KSh 10,000</span>
            <p className="text-deep-forest/70 text-sm mt-1">Support a widow's micro-enterprise</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 mt-10">
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-pill bg-deep-forest text-cream-white font-body font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:bg-deep-earth hover:-translate-y-0.5 hover:shadow-lg"
          >
            <Heart size={18} /> Donate Now
          </Link>
          <Link
            to="/donate"
            className="btn-secondary border-deep-forest text-deep-forest hover:bg-deep-forest/10"
          >
            Other Ways to Give
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-deep-forest/60 text-xs">
          <span className="flex items-center gap-1"><Lock size={12} /> Secure Payment</span>
          <span className="flex items-center gap-1"><CheckCircle size={12} /> Registered PBO Kenya</span>
          <span className="flex items-center gap-1"><Heart size={12} /> 100% to Programs</span>
        </div>
      </div>
    </section>
  )
}
