import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Heart, Share2 } from 'lucide-react'
import gsap from 'gsap'

export default function ArticleMenstrualHealth() {
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
      {/* Hero */}
      <section className="relative min-h-[50vh] bg-deep-earth flex items-end overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,51,40,0.3), rgba(28,51,40,0.95))' }} />
        <img src="/images/supplies-distribution.jpg" alt="Girls receiving sanitary supplies" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 w-full content-max-width mx-auto px-6 lg:px-12 pb-16 pt-32">
          <div className="article-animate">
            <span className="inline-block bg-golden-hour/20 text-amber-light text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Healthcare & Education</span>
            <h1 className="font-display font-bold text-cream-white leading-tight" style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}>
              Pads Are Not Charity –<br />Menstrual Dignity Is a Right
            </h1>
            <div className="flex flex-wrap items-center gap-6 mt-6 text-cream-white/70 text-sm">
              <span className="flex items-center gap-2"><Calendar size={16} /> March 15, 2026</span>
              <span className="flex items-center gap-2"><Clock size={16} /> 8 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 px-6">
        <div className="content-max-width mx-auto max-w-3xl">
          <div className="article-animate bg-white rounded-2xl p-8 md:p-12 shadow-card">
            <p className="text-lg text-off-black/80 leading-relaxed mb-6">
              In Kenya, a girl's education can be derailed by something as natural as menstruation. Not because of the biological process itself, but because of the systems that fail to support it. No water. No safe toilets. No information. No affordable products. The result? Thousands of girls miss up to <strong className="text-deep-forest">20% of school days every year</strong> simply because they lack access to sanitary towels.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">The World Is Waking Up</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              The World Economic Forum's 2026 report on women's health sends a chilling message: women's health conditions account for <strong className="text-deep-forest">14% of the global disease burden</strong>, yet they receive less than <strong className="text-deep-forest">1% of research funding</strong>. Menstrual health sits at the very bottom of that priority list — treated as an afterthought in global health discourse.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              But here's what the statistics don't capture: the girl who walks five kilometers to school, only to turn back because she started her period and has nothing to manage it. The shame. The missed exams. The dreams that quietly fade.
            </p>

            <blockquote className="border-l-4 border-golden-hour bg-golden-hour/5 rounded-r-xl p-6 my-8 italic text-deep-forest">
              "Menstruation is not the barrier — failed systems are. When we fix the systems, we fix the future."
            </blockquote>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">Ultimate Wings' Response</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              At Ultimate Wings Kenya, we refuse to accept a world where a natural biological process becomes a reason for a girl to drop out of school. Our <strong>sanitary towel distribution program</strong> is not a handout — it is a <strong>rights-based intervention</strong>.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Through our dedicated menstrual health program, we:
            </p>
            <ul className="list-disc list-inside space-y-2 text-off-black/80 mb-6 ml-4">
              <li>Distribute free, high-quality sanitary towels to girls in partner schools across Malindi and Nairobi</li>
              <li>Conduct menstrual health education sessions that break stigma and build confidence</li>
              <li>Train peer educators who become champions of menstrual dignity in their communities</li>
              <li>Advocate for better sanitation facilities in schools — because pads alone are not enough</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">Beyond the Pad</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Our approach goes deeper than product distribution. We engage parents, teachers, and community leaders in conversations that have been taboo for too long. We show communities that investing in a girl's menstrual health is investing in her education, her economic potential, and her community's future.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Research consistently shows that for every year a girl stays in school, her future earnings increase by 10-20%. She marries later. She has fewer, healthier children. She invests 90% of her income back into her family and community. The pad is the entry point. Education is the outcome.
            </p>

            <div className="bg-deep-forest rounded-2xl p-8 my-10">
              <h3 className="font-display font-bold text-xl text-cream-white mb-3">Join the Movement</h3>
              <p className="text-cream-white/80 mb-6">
                A monthly donation of just KSh 1,000 ($8 USD) provides sanitary towels for one girl for a full school year. That's less than the cost of a lunch — and it keeps a girl in school.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-pill bg-golden-hour text-deep-forest font-bold uppercase tracking-widest text-sm hover:bg-[#D9A33A] transition-all">
                Become a Monthly Donor <Heart size={16} />
              </Link>
            </div>

            <p className="text-off-black/80 leading-relaxed mb-6">
              Menstrual dignity is not a luxury. It is a fundamental right. And at Ultimate Wings Kenya, we are building a future where no girl has to choose between her body and her education.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#EducationForAll</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#UltimateWingsKenya</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#BuildingFutures</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#EmpowerGirls</span>
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
