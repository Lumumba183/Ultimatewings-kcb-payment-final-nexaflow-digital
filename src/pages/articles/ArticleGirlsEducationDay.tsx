import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Heart, Share2, Lock, CheckCircle } from 'lucide-react'
import gsap from 'gsap'

export default function ArticleGirlsEducationDay() {
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
        <img src="/images/books-distribution.jpg" alt="Girls education day" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 w-full content-max-width mx-auto px-6 lg:px-12 pb-16 pt-32">
          <div className="article-animate">
            <span className="inline-block bg-golden-hour/20 text-amber-light text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Ultimate Wings Kenya Day 2026</span>
            <h1 className="font-display font-bold text-cream-white leading-tight" style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}>
              Education Doesn't Just Change a Girl's Life –<br />It Changes Everything
            </h1>
            <div className="flex flex-wrap items-center gap-6 mt-6 text-cream-white/70 text-sm">
              <span className="flex items-center gap-2"><Calendar size={16} /> March 8, 2026</span>
              <span className="flex items-center gap-2"><Clock size={16} /> 6 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="content-max-width mx-auto max-w-3xl">
          <div className="article-animate bg-white rounded-2xl p-8 md:p-12 shadow-card">
            <p className="text-lg text-off-black/80 leading-relaxed mb-6">
              On <strong>Ultimate Wings Kenya Day 2026</strong>, we gathered communities, leaders, students, and partners to celebrate something extraordinary: the power of educating girls. Because when you educate a girl, you don't just change her life. You change her family. Her community. Her country's economy. You change <em>everything</em>.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">The Data Is Clear</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              The research is overwhelming and consistent. Educated girls:
            </p>
            <ul className="list-disc list-inside space-y-2 text-off-black/80 mb-6 ml-4">
              <li>Earn <strong>10-20% more</strong> for every additional year of schooling</li>
              <li>Marry <strong>later</strong> and have <strong>fewer, healthier children</strong></li>
              <li>Invest <strong>90% of their income</strong> back into their families and communities</li>
              <li>Are more likely to vaccinate their children and seek healthcare</li>
              <li>Become advocates for education within their communities</li>
              <li>Are more resilient to economic shocks and climate change</li>
            </ul>
            <p className="text-off-black/80 leading-relaxed mb-6">
              The World Bank estimates that limited educational opportunities for girls cost countries <strong className="text-deep-forest">$15-30 trillion</strong> in lost lifetime productivity and earnings. This is not just a moral issue — it is an economic one.
            </p>

            <blockquote className="border-l-4 border-golden-hour bg-golden-hour/5 rounded-r-xl p-6 my-8 italic text-deep-forest">
              "We are recommitting to a future where every girl can learn and choose what's next for her. Not because it is easy, but because it is right. And because it works."
            </blockquote>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">What Ultimate Wings Kenya Day Means</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Ultimate Wings Kenya Day is not just a celebration — it is a <strong>renewal of commitment</strong>. Every year, we bring together our beneficiaries, sponsors, partners, and community members to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-off-black/80 mb-6 ml-4">
              <li>Celebrate the achievements of our students and graduates</li>
              <li>Share stories of transformation and hope</li>
              <li>Launch new initiatives and programs</li>
              <li>Recognize our donors and volunteers</li>
              <li>Recommit to our shared mission</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">From Our Girls</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              At this year's event, we heard from girls who have been with us since primary school. Girls who are now in university. Girls who are becoming doctors, teachers, and engineers. Their stories are our proof of concept. Their success is our mission fulfilled.
            </p>

            {/* Real Image: Student Portrait */}
            <div className="my-8 rounded-xl overflow-hidden shadow-card">
              <img
                src="/images/real-student-portrait.jpg"
                alt="A proud student in her school uniform"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <p className="text-sm text-muted-sage text-center py-3 bg-warm-cream italic">
                One of our scholarship students — her education is changing her family's future.
              </p>
            </div>

            <p className="text-off-black/80 leading-relaxed mb-6">
              One of our students, Faith, put it best: <em>"Ultimate Wings didn't just pay my school fees. They showed me that someone believed in me. And once I believed in myself, nothing could stop me."</em>
            </p>

            <div className="bg-deep-forest rounded-2xl p-8 my-10 text-center">
              <div className="w-12 h-12 rounded-full bg-golden-hour/20 flex items-center justify-center mx-auto mb-4">
                <Heart size={24} className="text-golden-hour" />
              </div>
              <h3 className="font-display font-bold text-xl text-cream-white mb-3">Be Part of Ultimate Wings Kenya Day 2027</h3>
              <p className="text-cream-white/80 mb-6 max-w-lg mx-auto">
                Mark your calendar. Ultimate Wings Kenya Day 2027 is coming, and we want you there. Whether as a donor, volunteer, or partner — <strong className="text-golden-hour">your presence matters.</strong>
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-pill bg-golden-hour text-deep-forest font-bold uppercase tracking-widest text-sm hover:bg-[#D9A33A] transition-all">
                  Get Involved <Heart size={16} />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-pill border border-cream-white/30 text-cream-white font-medium text-sm transition-all hover:bg-cream-white/10">
                  Sponsor a Girl
                </Link>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-5 text-cream-white/50 text-xs">
                <span className="flex items-center gap-1"><Lock size={12} /> Secure Payment</span>
                <span className="flex items-center gap-1"><CheckCircle size={12} /> Registered PBO Kenya</span>
              </div>
            </div>

            <p className="text-off-black/80 leading-relaxed mb-6">
              Education doesn't just change a girl's life. It changes everything. And at Ultimate Wings Kenya, we are building that change — one girl, one classroom, one community at a time.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#GirlsEducation</span>
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
