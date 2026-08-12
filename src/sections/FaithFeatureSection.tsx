import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Quote } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FaithFeatureSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.faith-animate',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 75%', toggleActions: 'play none none none' },
        }
      )
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="faith-in-action" className="bg-deep-forest section-padding">
      <div className="content-max-width mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="faith-animate relative">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src="/images/widows-orphans-team.jpg"
                alt="Ultimate Wings team with widows and orphans in the community"
                className="w-full h-full object-cover min-h-[320px]"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-golden-hour text-deep-forest rounded-2xl p-5 max-w-[240px] shadow-card">
              <Quote size={20} className="mb-2" />
              <p className="font-display font-bold text-sm leading-snug">
                "Pure religion is caring for widows and orphans in their distress."
              </p>
              <p className="text-xs mt-2 font-bold uppercase tracking-widest">James 1:27</p>
            </div>
          </div>

          {/* Copy + CTA */}
          <div>
            <span className="faith-animate text-label text-golden-hour tracking-[0.2em]">FAITH IN ACTION</span>
            <h2 className="faith-animate text-heading text-cream-white mt-4" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>
              Pure Religion: Caring for Widows &amp; Orphans
            </h2>
            <p className="faith-animate text-cream-white/75 mt-6 leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)' }}>
              God calls Himself a father to the fatherless and a defender of widows — and He commands us to open our hands wide to the poor and needy. That calling drives our four pillars of care: <strong className="text-cream-white">Provision</strong> with school meals and food baskets, <strong className="text-cream-white">Empowerment</strong> through skills training and savings groups, <strong className="text-cream-white">Spiritual Care</strong> through mentorship and Bible study, and <strong className="text-cream-white">Community Integration</strong> that restores dignity and belonging.
            </p>
            <div className="faith-animate flex flex-wrap items-center gap-4 mt-8">
              <Link to="/donate" className="inline-flex items-center gap-2 px-8 py-3 rounded-pill bg-golden-hour text-deep-forest font-bold uppercase tracking-widest text-sm hover:bg-[#D9A33A] transition-all">
                Donate to This Mission <Heart size={16} />
              </Link>
              <Link
                to="/blog/pure-religion-widows-orphans"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-pill border border-cream-white/30 text-cream-white font-medium text-sm transition-all duration-300 hover:bg-cream-white/10"
              >
                Read the Full Story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
