import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Heart, Share2 } from 'lucide-react'
import gsap from 'gsap'

export default function ArticleFriendshipCommunity() {
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
        <img src="/images/group-photo-van.jpg" alt="Community members together" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 w-full content-max-width mx-auto px-6 lg:px-12 pb-16 pt-32">
          <div className="article-animate">
            <span className="inline-block bg-golden-hour/20 text-amber-light text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Human Interest</span>
            <h1 className="font-display font-bold text-cream-white leading-tight" style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}>
              Together We Rise –<br />The Power of Community in Healing
            </h1>
            <div className="flex flex-wrap items-center gap-6 mt-6 text-cream-white/70 text-sm">
              <span className="flex items-center gap-2"><Calendar size={16} /> December 25, 2025</span>
              <span className="flex items-center gap-2"><Clock size={16} /> 5 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="content-max-width mx-auto max-w-3xl">
          <div className="article-animate bg-white rounded-2xl p-8 md:p-12 shadow-card">
            <p className="text-lg text-off-black/80 leading-relaxed mb-6">
              There is a Swahili proverb that says, <em>"Kidole kimoja hakivunji chawa."</em> One finger cannot crush a louse. It is a simple truth that carries profound wisdom: we are stronger together. At Ultimate Wings Kenya, this philosophy is not just an idea — it is the foundation of everything we do.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">The Weight of Loneliness</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Poverty is not just a lack of money. It is a lack of connection. It is the isolation of a widow who has lost her husband and her social standing. It is the silence of a child who has no one to tell about the abuse they endure. It is the despair of a family who believes no one cares.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Ultimate Wings Kenya was founded on a simple but radical belief: that <strong className="text-deep-forest">community is medicine</strong>. That healing happens in connection. That hope is contagious.
            </p>

            <blockquote className="border-l-4 border-golden-hour bg-golden-hour/5 rounded-r-xl p-6 my-8 italic text-deep-forest">
              "Life becomes lighter when shared with friends whose support strengthens our hearts. Together we rise, face challenges, and turn pain into courage, and courage into growth."
            </blockquote>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">Community in Action</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Our programs are designed to build community at every level:
            </p>
            <ul className="list-disc list-inside space-y-2 text-off-black/80 mb-6 ml-4">
              <li><strong>Widow support groups</strong> — where women find sisters, not just neighbors</li>
              <li><strong>Peer education programs</strong> — where children learn from and support each other</li>
              <li><strong>Parent-Teacher Associations</strong> — building bridges between home and school</li>
              <li><strong>Community health workers</strong> — local advocates who know and care for their neighbors</li>
              <li><strong>Volunteer networks</strong> — connecting people who want to help with people who need help</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">The Science of Belonging</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Research in psychology and public health consistently shows that social connection is one of the strongest predictors of well-being. People with strong community ties live longer, recover from illness faster, and are more resilient in the face of adversity.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              At Ultimate Wings Kenya, we see this science in action every day. We see widows who arrived broken and alone, now laughing and thriving in their groups. We see children who were shy and withdrawn, now confident and leading peer sessions. We see communities that were divided, now united around a shared vision of a better future.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">You Are Part of This Community</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Whether you are in Kenya or Kenya is halfway around the world from you, you are part of the Ultimate Wings community. Every donation, every share, every prayer, every word of encouragement — it all matters. It all contributes to the web of support that holds our beneficiaries up.
            </p>

            <div className="bg-deep-forest rounded-2xl p-8 my-10">
              <h3 className="font-display font-bold text-xl text-cream-white mb-3">Join Our Community</h3>
              <p className="text-cream-white/80 mb-6">
                Follow us on social media, subscribe to our newsletter, volunteer, or donate. However you choose to engage, you become part of a global family committed to restoring hope.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-pill bg-golden-hour text-deep-forest font-bold uppercase tracking-widest text-sm hover:bg-[#D9A33A] transition-all">
                Connect With Us <Heart size={16} />
              </Link>
            </div>

            <p className="text-off-black/80 leading-relaxed mb-6">
              Together we rise. Together we heal. Together we build a future where no one is left behind. This is the power of community. This is Ultimate Wings Kenya.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#Community</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#UltimateWingsKenya</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#TogetherWeRise</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#Hope</span>
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
