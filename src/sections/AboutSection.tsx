import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo('.about-left > *',
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' },
        }
      )
      gsap.fromTo('.about-image',
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' },
        }
      )
      gsap.fromTo('.about-stat',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: '.about-stat', start: 'top 85%', toggleActions: 'play none none none' },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-warm-cream section-padding"
    >
      <div className="content-max-width mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left column */}
        <div className="about-left space-y-6">
          <span className="text-label text-muted-sage">ABOUT US</span>
          <h2 className="text-heading text-deep-forest" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Driven by<br />compassion,<br />powered by<br />Christian values
          </h2>
          <p className="text-off-black/80 leading-relaxed max-w-[480px]" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)' }}>
            We restore hope among vulnerable children, widows, and communities affected by poverty, abuse, and disease in Kenya. Through education, shelter, healthcare, and spiritual guidance, we create lasting transformation.
          </p>
          <Link
            to="/contact"
            className="link-arrow text-deep-forest hover:text-teal-accent underline underline-offset-4 inline-flex mt-4"
          >
            Learn More About Us <ArrowRight size={16} />
          </Link>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <img
            src="/images/real-students-group.jpg"
            alt="Students and teachers in a Kenyan classroom"
            className="about-image w-full rounded-lg shadow-card object-cover max-h-[70vh]"
            loading="lazy"
          />
          <div className="about-stat bg-golden-hour/10 rounded-2xl p-8">
            <span className="font-display font-bold text-5xl text-golden-hour">63+</span>
            <p className="text-off-black mt-2">children supported in schools across Kenya</p>
          </div>
        </div>
      </div>
    </section>
  )
}
