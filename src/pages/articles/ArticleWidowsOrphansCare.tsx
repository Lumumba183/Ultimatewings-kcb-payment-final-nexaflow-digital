import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Heart, Share2, BookOpen, Utensils, HandCoins, Users, Sparkles } from 'lucide-react'
import gsap from 'gsap'

export default function ArticleWidowsOrphansCare() {
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
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,51,40,0.35), rgba(28,51,40,0.95))' }} />
        <img src="/images/widows-orphans-team.jpg" alt="Ultimate Wings team with community members" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 w-full content-max-width mx-auto px-6 lg:px-12 pb-16 pt-32">
          <div className="article-animate">
            <span className="inline-block bg-golden-hour/20 text-amber-light text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Faith in Action</span>
            <h1 className="font-display font-bold text-cream-white leading-tight" style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}>
              Pure Religion: Caring for<br />Widows and Orphans
            </h1>
            <div className="flex flex-wrap items-center gap-6 mt-6 text-cream-white/70 text-sm">
              <span className="flex items-center gap-2"><Calendar size={16} /> August 12, 2026</span>
              <span className="flex items-center gap-2"><Clock size={16} /> 9 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="content-max-width mx-auto max-w-3xl">
          <div className="article-animate bg-white rounded-2xl p-8 md:p-12 shadow-card">
            <p className="text-lg text-off-black/80 leading-relaxed mb-6">
              Across the communities we serve in Kenya, widows and orphans carry burdens no one should bear alone — lost income, lost security, and too often, lost hope. Yet throughout Scripture, God is unmistakably clear about where His heart lies: with the widow, the fatherless, and the poor. At Ultimate Wings Kenya, this calling is not a side project. It is the very reason we exist.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4 flex items-center gap-3"><BookOpen size={22} className="text-golden-hour" /> Our Biblical Foundation</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Caring for widows and orphans is not charity we invented — it is a command woven through the whole of Scripture, from the Law of Moses to the early church:
            </p>

            <div className="space-y-4 mb-8">
              <blockquote className="border-l-4 border-golden-hour bg-golden-hour/5 rounded-r-xl p-5 italic text-deep-forest">
                "Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress."
                <span className="block not-italic text-sm font-bold mt-2 text-golden-hour">— James 1:27</span>
              </blockquote>
              <blockquote className="border-l-4 border-golden-hour bg-golden-hour/5 rounded-r-xl p-5 italic text-deep-forest">
                "A father to the fatherless, a defender of widows, is God in his holy dwelling."
                <span className="block not-italic text-sm font-bold mt-2 text-golden-hour">— Psalm 68:5</span>
              </blockquote>
              <blockquote className="border-l-4 border-golden-hour bg-golden-hour/5 rounded-r-xl p-5 italic text-deep-forest">
                "For the poor shall never cease out of the land: therefore I command thee, saying, Thou shalt open thine hand wide unto thy brother, to thy poor, and to thy needy, in thy land."
                <span className="block not-italic text-sm font-bold mt-2 text-golden-hour">— Deuteronomy 15:11</span>
              </blockquote>
              <blockquote className="border-l-4 border-golden-hour bg-golden-hour/5 rounded-r-xl p-5 italic text-deep-forest">
                "When you are harvesting in your field... leave [the portions] for the foreigner, the fatherless and the widow." — a harvest deliberately shared, teaching generosity.
                <span className="block not-italic text-sm font-bold mt-2 text-golden-hour">— Deuteronomy 24:19–21</span>
              </blockquote>
              <blockquote className="border-l-4 border-golden-hour bg-golden-hour/5 rounded-r-xl p-5 italic text-deep-forest">
                The early church appointed trusted leaders specifically to ensure that widows were not neglected in the daily distribution of food.
                <span className="block not-italic text-sm font-bold mt-2 text-golden-hour">— Acts 6:1–7</span>
              </blockquote>
            </div>

            <p className="text-off-black/80 leading-relaxed mb-6">
              From God's provision in the harvest fields of ancient Israel to the organized care of the first church, the pattern is clear: <strong className="text-deep-forest">faith that does not feed, clothe, and defend the vulnerable is incomplete.</strong> That conviction shapes everything we do.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-6">Our Four Practical Program Pillars</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              <div className="bg-warm-cream rounded-xl p-6 border border-muted-sage/15">
                <Utensils size={24} className="text-golden-hour mb-3" />
                <h3 className="font-display font-bold text-lg text-deep-forest mb-2">1. Provision</h3>
                <ul className="list-disc list-inside space-y-1.5 text-off-black/75 text-sm">
                  <li>School meals for orphans</li>
                  <li>Food baskets for widows</li>
                  <li>Emergency aid kits — clothing, hygiene, and medicine</li>
                </ul>
              </div>
              <div className="bg-warm-cream rounded-xl p-6 border border-muted-sage/15">
                <HandCoins size={24} className="text-golden-hour mb-3" />
                <h3 className="font-display font-bold text-lg text-deep-forest mb-2">2. Empowerment</h3>
                <ul className="list-disc list-inside space-y-1.5 text-off-black/75 text-sm">
                  <li>Skills training: tailoring, agriculture, and beekeeping — growing our apiary vision</li>
                  <li>Microfinance and savings groups for widows</li>
                  <li>Youth clubs for orphans, building leadership and resilience</li>
                </ul>
              </div>
              <div className="bg-warm-cream rounded-xl p-6 border border-muted-sage/15">
                <Sparkles size={24} className="text-golden-hour mb-3" />
                <h3 className="font-display font-bold text-lg text-deep-forest mb-2">3. Spiritual Care</h3>
                <ul className="list-disc list-inside space-y-1.5 text-off-black/75 text-sm">
                  <li>Bible study groups for widows</li>
                  <li>Mentorship pairing orphans with faith leaders</li>
                  <li>Evangelism integrated with practical support</li>
                </ul>
              </div>
              <div className="bg-warm-cream rounded-xl p-6 border border-muted-sage/15">
                <Users size={24} className="text-golden-hour mb-3" />
                <h3 className="font-display font-bold text-lg text-deep-forest mb-2">4. Community Integration</h3>
                <ul className="list-disc list-inside space-y-1.5 text-off-black/75 text-sm">
                  <li>Widows invited into leadership roles in outreach</li>
                  <li>Families encouraged to foster orphans</li>
                  <li>Widows and orphans celebrated during church and community events</li>
                </ul>
              </div>
            </div>

            <p className="text-off-black/80 leading-relaxed mb-6">
              Each pillar answers a real need we see every day. A food basket keeps a widow's household standing this week; skills training and savings groups make sure she never has to depend on one again. Mentorship gives an orphan more than survival — it gives identity, faith, and a future. And when widows lead outreaches and orphans are celebrated in front of their community, dignity is restored in a way no handout ever could.
            </p>

            <div className="rounded-2xl overflow-hidden my-8">
              <img src="/images/widows-orphans-team.jpg" alt="The Ultimate Wings team standing with widows and orphans in the community" className="w-full h-auto" />
              <p className="text-muted-sage text-xs mt-2 italic">Our team alongside the widows and young people we serve — this is what faith in action looks like.</p>
            </div>

            <div className="bg-deep-forest rounded-2xl p-8 my-10">
              <h3 className="font-display font-bold text-xl text-cream-white mb-3">Be the Answer to This Calling</h3>
              <p className="text-cream-white/80 mb-6">
                Your gift puts a school meal in front of an orphan, a food basket on a widow's table, and skills training in her hands. Join us in living out pure religion — open your hand wide, and watch hope multiply.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/donate" className="inline-flex items-center gap-2 px-8 py-3 rounded-pill bg-golden-hour text-deep-forest font-bold uppercase tracking-widest text-sm hover:bg-[#D9A33A] transition-all">
                  Donate Now <Heart size={16} />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-pill border border-cream-white/30 text-cream-white font-medium text-sm transition-all duration-300 hover:bg-cream-white/10">
                  Partner With Us
                </Link>
              </div>
            </div>

            <p className="text-off-black/80 leading-relaxed mb-6">
              Widows and orphans were never meant to be forgotten — not by God, and not by us. Whether you give, volunteer, pray, or simply share this story, you are part of a movement that turns belief into bread, and compassion into lasting change.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#WidowsAndOrphans</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#FaithInAction</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#UltimateWingsKenya</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#James127</span>
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
