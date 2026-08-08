import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Heart, Share2 } from 'lucide-react'
import gsap from 'gsap'

export default function ArticleSainabuHome() {
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
        <img src="/images/blog-community.jpg" alt="Sainabu's new home" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 w-full content-max-width mx-auto px-6 lg:px-12 pb-16 pt-32">
          <div className="article-animate">
            <span className="inline-block bg-golden-hour/20 text-amber-light text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Community</span>
            <h1 className="font-display font-bold text-cream-white leading-tight" style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}>
              A House Becomes a Home:<br />The Story of Sainabu and Her Family
            </h1>
            <div className="flex flex-wrap items-center gap-6 mt-6 text-cream-white/70 text-sm">
              <span className="flex items-center gap-2"><Calendar size={16} /> September 22, 2025</span>
              <span className="flex items-center gap-2"><Clock size={16} /> 6 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="content-max-width mx-auto max-w-3xl">
          <div className="article-animate bg-white rounded-2xl p-8 md:p-12 shadow-card">
            <p className="text-lg text-off-black/80 leading-relaxed mb-6">
              There is a profound difference between a house and a home. A house is walls and a roof. A home is safety, dignity, and the quiet knowledge that you belong somewhere. For Sainabu and her family, that difference was made real on a warm September morning when they stepped through the door of a place they could finally call their own.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">Life Before the Key Turned</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Sainabu had known instability for as long as she could remember. After losing her husband to illness, she found herself responsible for two young children with no stable income and no place to call home. They moved between relatives' homes, sleeping in cramped corners, always aware that they were guests who had overstayed their welcome. Her children missed school frequently because they had no consistent place to study, no quiet corner to do homework, and no sense of security that allowed them to focus on learning.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              "I would lie awake at night," Sainabu recalls, "wondering what would happen to my children if I got sick. Where would they go? Who would care for them? The uncertainty was heavier than any physical burden."
            </p>

            <blockquote className="border-l-4 border-golden-hour bg-golden-hour/5 rounded-r-xl p-6 my-8 italic text-deep-forest">
              "This new house is a miracle for my family. My brother and daughter finally have a safe and peaceful place to call home." — Sainabu
            </blockquote>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">How Ultimate Wings Intervened</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Sainabu's story came to our attention through a community health worker in Malindi who had been tracking vulnerable families. Our housing assessment team visited her temporary accommodation and immediately recognized the urgency. Within three months, we had mobilized resources — combining donor funding, volunteer labor, and community contributions — to construct a modest but sturdy two-room house with a kitchen area and a small veranda.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              But we didn't stop at the structure. We furnished the home with beds, bedding, and a small study table for the children. We connected Sainabu with our widows' economic empowerment program, where she received training in poultry farming and a starter flock of chickens. Today, her eggs provide both nutrition and a small but growing income.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">The Transformation</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              The change in Sainabu's family was visible within weeks. Her children, who had been withdrawn and anxious, began to smile more. They started attending school regularly and their grades improved dramatically. The younger one, Amina, drew a picture of their new house for her class — a colorful rectangle with a sun above it and stick figures holding hands in front. She titled it "My Home."
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              For Sainabu, the house meant something else: dignity. She could invite neighbors for tea without shame. She could plan for the future without the constant fear of displacement. She could look her children in the eye and promise them stability — and mean it.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">More Than Bricks and Mortar</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Sainabu's story is one of many. Across Kenya, thousands of families — particularly widows and orphans — live in conditions that no human should endure. Leaking roofs, dirt floors, no sanitation, and no security. These conditions don't just affect physical health; they erode mental wellbeing, educational outcomes, and economic potential.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              At Ultimate Wings Kenya, our housing program is not about building mansions. It is about building foundations — literal and figurational — upon which families can rebuild their lives. Each house we construct is a statement: <em>you deserve dignity. You deserve safety. You deserve a place to dream.</em>
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">Join the Mission</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Sainabu's miracle can be repeated — for hundreds of families waiting for someone to believe they matter. A complete house construction costs approximately KSh 150,000 ($1,100 USD), including materials and labor. Even a partial contribution makes a tangible difference: KSh 5,000 buys a door and windows. KSh 10,000 covers the roof. KSh 20,000 funds the foundation.
            </p>

            <div className="bg-deep-forest rounded-2xl p-8 my-10">
              <h3 className="font-display font-bold text-xl text-cream-white mb-3">Build a Home, Build a Future</h3>
              <p className="text-cream-white/80 mb-6">
                Your contribution builds more than walls — it builds hope, security, and the foundation for a family to thrive. Help us build 50 homes in 2026.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-pill bg-golden-hour text-deep-forest font-bold uppercase tracking-widest text-sm hover:bg-[#D9A33A] transition-all">
                Donate to Housing <Heart size={16} />
              </Link>
            </div>

            <p className="text-off-black/80 leading-relaxed mb-6">
              Every family deserves a place to call home. Every child deserves to sleep without fear. Every widow deserves the dignity of a door she can lock and a roof that doesn't leak. Together, we can make that a reality — one home at a time.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#HousingForAll</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#CommunitySupport</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#UltimateWingsKenya</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#FamilyFirst</span>
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
