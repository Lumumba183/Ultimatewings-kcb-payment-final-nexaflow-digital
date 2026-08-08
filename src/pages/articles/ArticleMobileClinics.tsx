import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Heart, Share2 } from 'lucide-react'
import gsap from 'gsap'

export default function ArticleMobileClinics() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.article-animate', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="min-h-screen bg-warm-cream">
      <section className="relative min-h-[50vh] bg-deep-earth flex items-end overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,51,40,0.3), rgba(28,51,40,0.95))' }} />
        <img src="/images/blog-healthcare.jpg" alt="Mobile clinic" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 w-full content-max-width mx-auto px-6 lg:px-12 pb-16 pt-32">
          <div className="article-animate">
            <span className="inline-block bg-golden-hour/20 text-amber-light text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Healthcare</span>
            <h1 className="font-display font-bold text-cream-white leading-tight" style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}>
              When the Hospital Is Too Far –<br />Mobile Clinics Bringing Healthcare to Kenya's Doorstep
            </h1>
            <div className="flex flex-wrap items-center gap-6 mt-6 text-cream-white/70 text-sm">
              <span className="flex items-center gap-2"><Calendar size={16} /> January 22, 2026</span>
              <span className="flex items-center gap-2"><Clock size={16} /> 6 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="content-max-width mx-auto max-w-3xl">
          <div className="article-animate bg-white rounded-2xl p-8 md:p-12 shadow-card">
            <p className="text-lg text-off-black/80 leading-relaxed mb-6">
              For many families in rural Kenya, the nearest hospital is a day's journey away. The cost of transport alone can be more than a week's wages. Medicines are expensive. Appointments require time off work that many cannot afford. The result? Preventable illnesses become life-threatening. Routine check-ups never happen. And communities suffer in silence.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">The Distance Problem</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              In communities across <strong>Malindi</strong> and <strong>Nairobi</strong>, healthcare access is not just a medical issue — it is an economic and geographic one. A mother with a sick child faces an impossible choice: spend the family's food budget on transport to a distant clinic, or hope the illness passes on its own.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Too often, families choose the latter. And too often, that choice ends in tragedy.
            </p>

            <blockquote className="border-l-4 border-golden-hour bg-golden-hour/5 rounded-r-xl p-6 my-8 italic text-deep-forest">
              "Hospitals and clinics are far and expensive. For our communities, healthcare is a luxury they cannot afford. We decided to change that."
            </blockquote>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">Ultimate Wings Mobile Clinics</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Our <strong>mobile health clinics</strong> are fully equipped medical units that travel directly to the communities that need them most. Staffed by qualified healthcare professionals, these clinics provide:
            </p>
            <ul className="list-disc list-inside space-y-2 text-off-black/80 mb-6 ml-4">
              <li><strong>General consultations</strong> — diagnosis and treatment of common illnesses</li>
              <li><strong>Maternal and child health</strong> — antenatal care, immunizations, growth monitoring</li>
              <li><strong>Chronic disease management</strong> — diabetes, hypertension, HIV/AIDS support</li>
              <li><strong>Health education</strong> — nutrition, hygiene, disease prevention</li>
              <li><strong>Mental health support</strong> — counseling and referrals for trauma and depression</li>
              <li><strong>Medication dispensing</strong> — free essential medicines for those who cannot afford them</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">Reaching the Unreached</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Our mobile clinics operate on a regular schedule, visiting the same communities monthly so that families can plan and trust that help is coming. In Malindi's coastal villages, we have reduced untreated malaria cases by 70%. In Nairobi's informal settlements, our maternal health program has helped hundreds of mothers deliver healthy babies.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              The impact is not just medical — it is psychological. When a community knows that healthcare is coming to them, they feel seen. They feel valued. They feel hope.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">The Road Ahead</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              We dream of a Kenya where no one dies because the hospital was too far. Where every child receives their vaccinations. Where every mother has access to prenatal care. Where chronic diseases are managed, not ignored.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Our mobile clinics are a step toward that dream. But we need your help to expand our reach.
            </p>

            <div className="bg-deep-forest rounded-2xl p-8 my-10">
              <h3 className="font-display font-bold text-xl text-cream-white mb-3">Fund a Mobile Clinic Visit</h3>
              <p className="text-cream-white/80 mb-6">
                KSh 15,000 ($120 USD) funds one mobile clinic visit to a rural community — covering fuel, medical supplies, staff allowances, and medications. One visit can serve 150-200 patients.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-pill bg-golden-hour text-deep-forest font-bold uppercase tracking-widest text-sm hover:bg-[#D9A33A] transition-all">
                Support Mobile Healthcare <Heart size={16} />
              </Link>
            </div>

            <p className="text-off-black/80 leading-relaxed mb-6">
              Healthcare is a human right. Distance should never be the reason someone doesn't receive it. Join us in bringing healing to Kenya's doorstep.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#HealthcareForAll</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#UltimateWingsKenya</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#MobileClinics</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#BuildingFutures</span>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <Link to="/blog" className="link-arrow text-deep-forest hover:text-golden-hour inline-flex items-center gap-2">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <button className="flex items-center gap-2 text-muted-sage hover:text-deep-forest transition-colors">
              <Share2 size={18} /> Share
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
