import { useEffect, useRef } from 'react'
import { BookOpen, Briefcase, Heart, Stethoscope, Sprout, Droplets, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const programs = [
  {
    icon: BookOpen,
    title: 'Education First',
    description: 'Providing quality education, school supplies, and tutoring to ensure every child has access to learning opportunities that transform their future. Currently supporting 63+ children in school.',
  },
  {
    icon: Briefcase,
    title: 'Economic Empowerment',
    description: 'Offering vocational training, table banking, micro-grants, and business support to help widows build sustainable livelihoods and achieve financial independence. 100+ widows empowered.',
  },
  {
    icon: Heart,
    title: 'Holistic Support',
    description: 'Providing comprehensive care including nutrition, safe housing, emotional support, and spiritual guidance to create a foundation for lasting change.',
  },
  {
    icon: Stethoscope,
    title: 'Mobile Health Clinics',
    description: 'Bringing essential healthcare directly to underserved communities in Malindi and Nairobi. When hospitals are too far and too expensive, we come to their doorstep.',
  },
  {
    icon: Sprout,
    title: 'Agriculture & Food Security',
    description: 'Distributing chickens, goats, vegetable seeds, fruit trees (oranges, mangoes, cashew nuts, tomatoes), and supporting beekeeping for honey production. Turning hardship into harvest.',
  },
  {
    icon: Droplets,
    title: 'Menstrual Health & Dignity',
    description: 'Distributing sanitary towels and breaking the stigma around menstruation. Ensuring no girl misses school because of her period.',
  },
]

export default function ProgramsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo('.programs-header > *',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: '.programs-header', start: 'top 80%', toggleActions: 'play none none none' },
        }
      )
      gsap.fromTo('.program-card',
        { opacity: 0, y: 80 },
        {
          opacity: 1, y: 0, duration: 0.9, stagger: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: '.programs-grid', start: 'top 75%', toggleActions: 'play none none none' },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="programs"
      className="bg-deep-forest section-padding"
    >
      <div className="content-max-width mx-auto">
        <div className="programs-header text-center mb-16">
          <span className="text-label text-cream-white/50">OUR PROGRAMS</span>
          <h2 className="text-heading text-cream-white mt-4" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Comprehensive care<br />for those who need it most
          </h2>
        </div>

        <div className="programs-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => {
            const Icon = program.icon
            return (
              <div
                key={program.title}
                className="program-card group bg-cream-white/[0.06] border border-cream-white/10 rounded-2xl p-10 md:p-12 transition-all duration-400 hover:bg-cream-white/10 hover:border-golden-hour/30 hover:-translate-y-1 hover:shadow-xl cursor-default"
              >
                <div className="w-16 h-16 rounded-full bg-golden-hour/20 flex items-center justify-center mb-6">
                  <Icon size={24} className="text-golden-hour" />
                </div>
                <h3 className="font-display font-bold text-2xl md:text-[28px] text-cream-white mb-4">
                  {program.title}
                </h3>
                <p className="text-cream-white/80 leading-relaxed">
                  {program.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="/contact"
            className="link-arrow text-golden-hour hover:text-amber-light underline underline-offset-4"
          >
            Explore All Programs <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
