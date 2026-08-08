import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  {
    number: '63+',
    label: 'Children in School',
    description: 'Every child deserves an education. We\'re making that a reality across Kenya, from primary to university.',
  },
  {
    number: '31',
    label: 'University Graduates',
    description: 'From primary school to university — we walk the full journey with our students.',
  },
  {
    number: '100+',
    label: 'Widows Empowered',
    description: 'Through agriculture, table banking, and beekeeping — our widows build thriving, independent lives.',
  },
  {
    number: '95%',
    label: 'Success Rate',
    description: 'Your support creates measurable, lasting change in the communities we serve.',
  },
]

export default function ImpactSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo('.impact-header > *',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: '.impact-header', start: 'top 80%', toggleActions: 'play none none none' },
        }
      )
      gsap.fromTo('.stat-card',
        { opacity: 0, scale: 0.92 },
        {
          opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(1.4)',
          scrollTrigger: { trigger: '.stats-grid', start: 'top 70%', toggleActions: 'play none none none' },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="bg-warm-cream section-padding"
    >
      <div className="content-max-width mx-auto">
        <div className="impact-header text-center mb-16">
          <span className="text-label text-muted-sage">OUR IMPACT</span>
          <h2 className="text-heading text-deep-forest mt-4" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Lives transformed,<br />communities renewed
          </h2>
        </div>

        <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-card bg-white rounded-2xl p-10 md:p-12 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="font-display font-bold text-golden-hour" style={{ fontSize: 'clamp(48px, 6vw, 72px)' }}>
                {stat.number}
              </span>
              <h3 className="font-body font-medium text-lg md:text-xl text-deep-forest mt-2">
                {stat.label}
              </h3>
              <p className="text-muted-sage text-sm mt-2 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
