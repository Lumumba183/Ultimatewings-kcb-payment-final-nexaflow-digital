import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Heart, Share2 } from 'lucide-react'
import gsap from 'gsap'

export default function ArticleWidowsEmpowerment() {
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
        <img src="/images/widow-home.jpg" alt="Widow at her home" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 w-full content-max-width mx-auto px-6 lg:px-12 pb-16 pt-32">
          <div className="article-animate">
            <span className="inline-block bg-golden-hour/20 text-amber-light text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Empowerment</span>
            <h1 className="font-display font-bold text-cream-white leading-tight" style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}>
              From Hardship to Harvest –<br />How Ultimate Wings Empowers Over 100 Widows
            </h1>
            <div className="flex flex-wrap items-center gap-6 mt-6 text-cream-white/70 text-sm">
              <span className="flex items-center gap-2"><Calendar size={16} /> February 10, 2026</span>
              <span className="flex items-center gap-2"><Clock size={16} /> 8 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="content-max-width mx-auto max-w-3xl">
          <div className="article-animate bg-white rounded-2xl p-8 md:p-12 shadow-card">
            <p className="text-lg text-off-black/80 leading-relaxed mb-6">
              Before the sun rises over the Kenyan coast, Mama Aisha is already in her garden. Her hands move with practiced rhythm — planting, watering, tending. Five years ago, she was a widow with no income, no land, and no hope. Today, she leads a group of 15 widows who produce enough vegetables to feed their families and sell at market. This is the power of transformation.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">The Widow's Burden</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              In many Kenyan communities, losing a husband doesn't just mean losing a partner — it often means losing everything. Property rights are precarious. Social standing evaporates. Children need to be fed, clothed, and educated. And society looks the other way.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Ultimate Wings Kenya looked directly at this problem and said: <em>not on our watch.</em> Today, <strong className="text-deep-forest">over 100 widows</strong> are organized into empowerment groups, building sustainable livelihoods and reclaiming their dignity.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">Agriculture: The Foundation of Independence</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Our agriculture program is not charity — it is a hand up. We provide:
            </p>
            <ul className="list-disc list-inside space-y-2 text-off-black/80 mb-6 ml-4">
              <li><strong>Chickens</strong> — for eggs and meat, creating immediate protein sources and income</li>
              <li><strong>Goats</strong> — hardy animals that provide milk, meat, and offspring to sell</li>
              <li><strong>Vegetable seeds</strong> — tomatoes, kale, spinach, and indigenous greens</li>
              <li><strong>Fruit trees</strong> — orange, mango, and cashew nut seedlings for long-term harvests</li>
              <li><strong>Beekeeping equipment</strong> — honey production for local and regional markets</li>
            </ul>

            <blockquote className="border-l-4 border-golden-hour bg-golden-hour/5 rounded-r-xl p-6 my-8 italic text-deep-forest">
              "Fields of promise, gardens of green,<br />
              Where once was barren, life is seen.<br />
              Bees hum softly, honey flows sweet,<br />
              From hardship's shadow, hope takes its seat."
            </blockquote>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">Table Banking: Community Finance</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Beyond agriculture, our widows participate in <strong>table banking</strong> — a community-driven microfinance system where members contribute regularly and take turns accessing pooled funds. No banks. No interest rates. Just women supporting women.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              This system has funded small businesses, paid school fees, covered medical emergencies, and — most importantly — built a sisterhood of mutual support that no economic downturn can break.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">The Transformation Story</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Meet Margaret. When her husband passed, she had three children under 12 and no source of income. She joined our widow's group in 2021. We provided her with 5 chickens and vegetable seeds. Today, she has 45 chickens, a thriving vegetable garden, and two beehives. Her eldest daughter is in secondary school. Her youngest is healthy and happy.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Margaret's story is not unique. It is replicated 100 times over — each one a testament to what happens when you invest in women.
            </p>

            <div className="bg-deep-forest rounded-2xl p-8 my-10">
              <h3 className="font-display font-bold text-xl text-cream-white mb-3">Support the Agriculture Program</h3>
              <p className="text-cream-white/80 mb-6">
                A donation of KSh 5,000 ($40 USD) provides a starter kit for one widow: chickens, seeds, and training. Your investment multiplies as she grows her farm and lifts her family.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-pill bg-golden-hour text-deep-forest font-bold uppercase tracking-widest text-sm hover:bg-[#D9A33A] transition-all">
                Donate to Agriculture <Heart size={16} />
              </Link>
            </div>

            <p className="text-off-black/80 leading-relaxed mb-6">
              From hardship to harvest. From despair to dignity. That is the journey of every widow in our program. And it is a journey that you can be part of.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#WidowEmpowerment</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#UltimateWingsKenya</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#Agriculture</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#SustainableImpact</span>
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
