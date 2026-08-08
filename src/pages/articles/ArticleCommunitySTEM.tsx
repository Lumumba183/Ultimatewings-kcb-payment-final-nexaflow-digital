import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Heart, Share2 } from 'lucide-react'
import gsap from 'gsap'

export default function ArticleCommunitySTEM() {
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
        <img src="/images/blog-community.jpg" alt="Community empowerment" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 w-full content-max-width mx-auto px-6 lg:px-12 pb-16 pt-32">
          <div className="article-animate">
            <span className="inline-block bg-golden-hour/20 text-amber-light text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Community & STEM</span>
            <h1 className="font-display font-bold text-cream-white leading-tight" style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}>
              Behind Every Student Who Stays in School,<br />There's a Community
            </h1>
            <div className="flex flex-wrap items-center gap-6 mt-6 text-cream-white/70 text-sm">
              <span className="flex items-center gap-2"><Calendar size={16} /> January 5, 2026</span>
              <span className="flex items-center gap-2"><Clock size={16} /> 7 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="content-max-width mx-auto max-w-3xl">
          <div className="article-animate bg-white rounded-2xl p-8 md:p-12 shadow-card">
            <p className="text-lg text-off-black/80 leading-relaxed mb-6">
              Education doesn't happen in a vacuum. Behind every child who makes it to school — and stays there — stands an entire ecosystem of support. Parents who sacrifice. Elders who encourage. Teachers who go above and beyond. Community leaders who advocate. At Ultimate Wings Kenya, we understand that <strong className="text-deep-forest">sustainable change requires a village</strong>.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">The Power of Collective Action</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              When a community decides that every child will be educated, magic happens. School attendance rises. Dropout rates fall. And the entire community's trajectory shifts upward. This is why Ultimate Wings Kenya invests as heavily in <strong>community mobilization</strong> as we do in direct student support.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Our community engagement program works with local leaders, parents, elders, and advocates to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-off-black/80 mb-6 ml-4">
              <li>Create <strong>Parent-Teacher Associations</strong> that hold schools accountable</li>
              <li>Train <strong>community health workers</strong> who identify at-risk children early</li>
              <li>Establish <strong>child protection committees</strong> that safeguard vulnerable children</li>
              <li>Run <strong>community awareness campaigns</strong> on the value of education</li>
              <li>Engage <strong>religious and cultural leaders</strong> as champions for girls' education</li>
            </ul>

            <blockquote className="border-l-4 border-golden-hour bg-golden-hour/5 rounded-r-xl p-6 my-8 italic text-deep-forest">
              "Education can open a door. Skills help someone walk through it. But it takes a community to make sure the door stays open."
            </blockquote>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">STEM: The Skills of Tomorrow</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              In today's world, education alone is not enough. Young people need <strong>skills</strong> — particularly in Science, Technology, Engineering, and Mathematics (STEM). These are the fields that drive innovation, create jobs, and build economies.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Ultimate Wings Kenya is committed to STEM education because we believe that the next generation of Kenyan innovators, engineers, and scientists are already in our classrooms. They just need the opportunity.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Our STEM initiatives include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-off-black/80 mb-6 ml-4">
              <li><strong>Computer literacy programs</strong> — introducing children to digital skills early</li>
              <li><strong>Science kits and lab equipment</strong> — bringing practical science to rural schools</li>
              <li><strong>Math tutoring and competitions</strong> — building confidence and excellence</li>
              <li><strong>STEM mentorship</strong> — connecting students with professionals in technical fields</li>
              <li><strong>Innovation workshops</strong> — encouraging creative problem-solving</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">A Ripple Effect</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              When one child succeeds, the impact ripples outward. Siblings follow. Cousins enroll. Neighbors get inspired. A single graduate becomes a role model for an entire community. This is the multiplier effect of investing in education — and it is why community-centered approaches work.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              At Ultimate Wings Kenya, we don't just change individual lives. We transform entire communities. And we do it together.
            </p>

            <div className="bg-deep-forest rounded-2xl p-8 my-10">
              <h3 className="font-display font-bold text-xl text-cream-white mb-3">Invest in Community Education</h3>
              <p className="text-cream-white/80 mb-6">
                Your donation helps us train community volunteers, provide STEM materials, and run awareness campaigns. Together, we build a culture where education is valued and supported.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-pill bg-golden-hour text-deep-forest font-bold uppercase tracking-widest text-sm hover:bg-[#D9A33A] transition-all">
                Support Community Programs <Heart size={16} />
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#CommunityEmpowerment</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#UltimateWingsKenya</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#BuildingFutures</span>
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
