import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Heart, Share2, Lock, CheckCircle, Home, BookOpen, Sprout } from 'lucide-react'
import gsap from 'gsap'

export default function ArticleRescueCenter() {
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
        <img src="/images/rescue-center-hero.jpg" alt="Children and a caregiver at the Ultimate Wings Rescue Center" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 w-full content-max-width mx-auto px-6 lg:px-12 pb-16 pt-32">
          <div className="article-animate">
            <span className="inline-block bg-golden-hour/20 text-amber-light text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Rescue Center</span>
            <h1 className="font-display font-bold text-cream-white leading-tight" style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}>
              A Place of Refuge —<br />Inside the Ultimate Wings Rescue Center
            </h1>
            <div className="flex flex-wrap items-center gap-6 mt-6 text-cream-white/70 text-sm">
              <span className="flex items-center gap-2"><Calendar size={16} /> September 1, 2026</span>
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
              Some doors should never have to be locked. For the orphans, vulnerable children, and widows who arrive at the <strong className="text-deep-forest">Ultimate Wings Rescue Center</strong>, our door opens the other way — inwards, into safety. They come to us fleeing violence, neglect, exploitation, and circumstances no child and no mother should ever face alone. We house them until the danger passes, until it is safe to return, or until a new and better life has been built around them.
            </p>

            <blockquote className="border-l-4 border-golden-hour bg-golden-hour/5 rounded-r-xl p-6 my-8 italic text-deep-forest">
              "The God of my rock; in him will I trust: he is my shield, and the horn of my salvation, my high tower, and my refuge, my saviour; thou savest me from violence."
              <span className="block not-italic text-sm text-muted-sage mt-3 font-medium">— 2 Samuel 22:3</span>
            </blockquote>

            <p className="text-off-black/80 leading-relaxed mb-6">
              That verse is not decoration on a wall at the Rescue Center. It is the job description. A shield. A high tower. A refuge. A saviour from violence. Every meal served, every bed made, every school fee paid is that verse put into practice.
            </p>

            {/* In-article image 1 */}
            <div className="my-8 rounded-xl overflow-hidden shadow-card">
              <img
                src="/images/rescue-center-children.jpg"
                alt="Children at the Ultimate Wings Rescue Center receiving books and school supplies"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <p className="text-sm text-muted-sage text-center py-3 bg-warm-cream italic">
                Safe, fed, and learning — children at the Rescue Center receive books, uniforms, and a fresh start.
              </p>
            </div>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4 flex items-center gap-3">
              <Home size={24} className="text-golden-hour" /> Rescue Is Only the Beginning
            </h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              We do not believe in rescuing a child and stopping there. When the prevailing dangerous conditions have abated — and only when it is truly safe — orphans are <strong className="text-deep-forest">reintegrated back into their communities</strong>. But we never return a child to the same poverty that broke the family in the first place. Their relatives are empowered to take effective care of them, and Ultimate Wings keeps walking with every child: access to <strong className="text-deep-forest">education, nutrition, health, and sports</strong>.
            </p>

            <blockquote className="border-l-4 border-golden-hour bg-golden-hour/5 rounded-r-xl p-6 my-8 italic text-deep-forest">
              "The Lord also will be a refuge for the oppressed, a refuge in times of trouble."
              <span className="block not-italic text-sm text-muted-sage mt-3 font-medium">— Psalm 9:9</span>
            </blockquote>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4 flex items-center gap-3">
              <BookOpen size={24} className="text-golden-hour" /> Education: Placed to Excel, Not Just to Attend
            </h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              We are deliberate about where our children learn. We place our students in <strong className="text-deep-forest">competitive schools</strong> — schools where they are given a genuine opportunity to excel, not merely to attend. Then we remove every barrier between them and the classroom: we pay their <strong className="text-deep-forest">school fees</strong>, supply <strong className="text-deep-forest">books and school uniforms</strong>, and provide <strong className="text-deep-forest">counselling services</strong> so that hearts wounded by trauma can heal while minds grow.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              A rescued child with a book in hand is not a charity case. That child is a future doctor, teacher, engineer, or leader — and we treat them that way from day one.
            </p>

            {/* In-article image 2 */}
            <div className="my-8 rounded-xl overflow-hidden shadow-card">
              <img
                src="/images/rescue-widow-goats.jpg"
                alt="A widow with her children and dairy goats from the empowerment program"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <p className="text-sm text-muted-sage text-center py-3 bg-warm-cream italic">
                A widow and her children with a dairy goat — productive projects restore dignity and feed families.
              </p>
            </div>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4 flex items-center gap-3">
              <Sprout size={24} className="text-golden-hour" /> Widows Who Help Orphans: Their Dignity Is Our Pride
            </h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Here is something beautiful about the Rescue Center: <strong className="text-deep-forest">widows are helped to help orphans</strong>. The women we shelter do not sit idle — they are engaged in productive agricultural projects: <strong className="text-deep-forest">chicken rearing, dairy goats, beekeeping, and kitchen gardening</strong>. These projects feed the center, generate income, and rebuild the confidence that hardship tried to steal.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              It means no more widows doing casual labour on construction sites, where too many have been sexually exploited by foremen who mistook desperation for permission. That chapter is closed. <strong className="text-deep-forest">Their dignity is our pride.</strong>
            </p>

            <blockquote className="border-l-4 border-golden-hour bg-golden-hour/5 rounded-r-xl p-6 my-8 italic text-deep-forest">
              "In the fear of the Lord is strong confidence: and his children shall have a place of refuge."
              <span className="block not-italic text-sm text-muted-sage mt-3 font-medium">— Proverbs 14:26</span>
            </blockquote>

            <blockquote className="border-l-4 border-golden-hour bg-golden-hour/5 rounded-r-xl p-6 my-8 italic text-deep-forest">
              "O Lord, my strength, and my fortress, and my refuge in the day of affliction."
              <span className="block not-italic text-sm text-muted-sage mt-3 font-medium">— Jeremiah 16:19</span>
            </blockquote>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">A Haven for Weary Souls</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              The Ultimate Wings Rescue Center is a place of refuge — a haven for weary souls. A child who slept afraid now sleeps safe. A widow who was exploited now keeps bees, tends goats, and watches her garden grow. A family that was scattered is being gathered, healed, and strengthened to stand on its own.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              But every bed, every book, every goat, and every school fee is made possible by people who choose to care. The refuge stands because someone gives.
            </p>

            {/* CTA */}
            <div className="bg-deep-forest rounded-2xl p-8 my-10 text-center">
              <div className="w-12 h-12 rounded-full bg-golden-hour/20 flex items-center justify-center mx-auto mb-4">
                <Heart size={24} className="text-golden-hour" />
              </div>
              <h3 className="font-display font-bold text-xl text-cream-white mb-3">Become the Refuge Someone Is Praying For</h3>
              <p className="text-cream-white/80 mb-6 max-w-lg mx-auto">
                Your donation keeps a rescued child in school, puts food on the table at the center, and places a dairy goat, a beehive, or a kitchen garden in the hands of a widow rebuilding her life. <strong className="text-golden-hour">Give today — a weary soul is waiting for a haven.</strong>
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/donate" className="inline-flex items-center gap-2 px-8 py-3 rounded-pill bg-golden-hour text-deep-forest font-bold uppercase tracking-widest text-sm hover:bg-[#D9A33A] transition-all">
                  Donate Now <Heart size={16} />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-pill border border-cream-white/30 text-cream-white font-medium text-sm transition-all hover:bg-cream-white/10">
                  Partner With the Center
                </Link>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-5 text-cream-white/50 text-xs">
                <span className="flex items-center gap-1"><Lock size={12} /> Secure Payment</span>
                <span className="flex items-center gap-1"><CheckCircle size={12} /> Registered PBO Kenya</span>
                <span className="flex items-center gap-1"><Heart size={12} /> 100% to Programs</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#RescueCenter</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#UltimateWingsKenya</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#PlaceOfRefuge</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#WidowsAndOrphans</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#TheirDignityOurPride</span>
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
