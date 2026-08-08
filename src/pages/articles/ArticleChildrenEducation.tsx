import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Heart, Share2, Lock, CheckCircle } from 'lucide-react'
import gsap from 'gsap'

export default function ArticleChildrenEducation() {
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
        <img src="/images/students-assembly.jpg" alt="Children in school" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 w-full content-max-width mx-auto px-6 lg:px-12 pb-16 pt-32">
          <div className="article-animate">
            <span className="inline-block bg-golden-hour/20 text-amber-light text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Education</span>
            <h1 className="font-display font-bold text-cream-white leading-tight" style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}>
              63 Children and Counting –<br />How Ultimate Wings Keeps Dreams Alive
            </h1>
            <div className="flex flex-wrap items-center gap-6 mt-6 text-cream-white/70 text-sm">
              <span className="flex items-center gap-2"><Calendar size={16} /> February 28, 2026</span>
              <span className="flex items-center gap-2"><Clock size={16} /> 7 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="content-max-width mx-auto max-w-3xl">
          <div className="article-animate bg-white rounded-2xl p-8 md:p-12 shadow-card">
            <p className="text-lg text-off-black/80 leading-relaxed mb-6">
              There is a special kind of joy that lights up a child's face when they receive a meal they have only heard about in stories. At Ultimate Wings Kenya, we see that joy every day. Right now, <strong className="text-deep-forest">63 children</strong> are in school because someone — somewhere — decided that a child's dream is worth fighting for.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">More Than Numbers</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Behind every one of those 63 children is a story. Some are orphans. Some come from families where a single meal a day is a luxury. Some have never owned a pair of shoes. But they all share one thing: an unshakable belief that education is their way out.
            </p>
            
            {/* Real Image: School Deliveries */}
            <div className="my-8 rounded-xl overflow-hidden shadow-card">
              <img
                src="/images/real-school-deliveries.jpg"
                alt="Children receiving school supplies and books"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <p className="text-sm text-muted-sage text-center py-3 bg-warm-cream italic">
                School supplies delivery day — every book, every pen is a promise of a brighter future.
              </p>
            </div>

            <p className="text-off-black/80 leading-relaxed mb-6">
              We don't just pay school fees. We provide uniforms, books, school supplies, and — most importantly — a support system that tells each child: <em>you matter, and your future is worth investing in.</em>
            </p>

            <blockquote className="border-l-4 border-golden-hour bg-golden-hour/5 rounded-r-xl p-6 my-8 italic text-deep-forest">
              "Whenever someone steps forward to support these little angels, they get the chance to enjoy special meals they usually only hear about. That joy — it's the fuel that keeps us going."
            </blockquote>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">From Primary to University</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Our commitment doesn't end at primary school. We walk the entire journey with our children. To date, <strong className="text-deep-forest">31 young adults have graduated from university</strong> through our program — doctors, teachers, engineers, and entrepreneurs who are now giving back to their communities.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Each graduate represents a family lifted out of poverty. A community transformed. A cycle broken.
            </p>

            <div className="bg-deep-forest/5 rounded-xl p-6 my-8">
              <h3 className="font-display font-bold text-lg text-deep-forest mb-3">🌟 Wings of Hope, Seeds of Tomorrow</h3>
              <p className="text-off-black/80 italic leading-relaxed whitespace-pre-line">
                In every child a dream takes flight,
                A spark of hope, a beacon bright.
                Through fields of struggle, gardens of care,
                We plant the seeds of futures rare.

                Little angels, heads held high,
                With books in hand, they reach the sky.
                A meal, a smile, a school uniform —
                These simple gifts weather every storm.

                From Watamu's shores to Nairobi's streets,
                Where poverty and promise meet,
                We stand as wings beneath their soar,
                Opening windows, breaking down doors.

                Sixty-three dreams and counting still,
                Each one a promise, each one a will.
                To learn, to grow, to rise above —
                That's the power of unconditional love.

                Seeds of tomorrow, sown today,
                In classrooms where the hopeful play.
                Ultimate Wings — our vow, our creed:
                Every child deserves the chance to succeed.
              </p>
            </div>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">How You Can Help</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Child sponsorship is the heartbeat of our education program. For KSh 3,000 ($25 USD) per month, you can sponsor a child's full education — school fees, books, uniform, and nutrition support. You will receive updates, photos, and letters from your sponsored child.
            </p>

            <div className="bg-deep-forest rounded-2xl p-8 my-10 text-center">
              <div className="w-12 h-12 rounded-full bg-golden-hour/20 flex items-center justify-center mx-auto mb-4">
                <Heart size={24} className="text-golden-hour" />
              </div>
              <h3 className="font-display font-bold text-xl text-cream-white mb-3">Sponsor a Child Today</h3>
              <p className="text-cream-white/80 mb-6 max-w-lg mx-auto">
                Join our family of sponsors and watch a child's dream come to life. For just <strong className="text-golden-hour">KSh 3,000 ($25 USD) per month</strong>, you can sponsor a child's full education — school fees, books, uniform, and nutrition support.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-pill bg-golden-hour text-deep-forest font-bold uppercase tracking-widest text-sm hover:bg-[#D9A33A] transition-all">
                  Become a Sponsor <Heart size={16} />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-pill border border-cream-white/30 text-cream-white font-medium text-sm transition-all hover:bg-cream-white/10">
                  Make a One-Time Donation
                </Link>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-5 text-cream-white/50 text-xs">
                <span className="flex items-center gap-1"><Lock size={12} /> Secure Payment</span>
                <span className="flex items-center gap-1"><CheckCircle size={12} /> Tax Deductible</span>
                <span className="flex items-center gap-1"><Heart size={12} /> 100% to Programs</span>
              </div>
            </div>

            <p className="text-off-black/80 leading-relaxed mb-6">
              63 children in school. 31 graduates. Countless dreams kept alive. This is what happens when a community decides that no child should be left behind.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#EducationForAll</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#UltimateWingsKenya</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#ChildSponsorship</span>
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
