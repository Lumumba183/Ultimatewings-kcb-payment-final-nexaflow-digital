import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Heart, Share2 } from 'lucide-react'
import gsap from 'gsap'

export default function ArticlePowerOfEducation() {
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
        <img src="/images/blog-education.jpg" alt="Children learning in a classroom" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 w-full content-max-width mx-auto px-6 lg:px-12 pb-16 pt-32">
          <div className="article-animate">
            <span className="inline-block bg-golden-hour/20 text-amber-light text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Education</span>
            <h1 className="font-display font-bold text-cream-white leading-tight" style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}>
              The Power of Education:<br />Breaking the Cycle of Poverty in Rural Kenya
            </h1>
            <div className="flex flex-wrap items-center gap-6 mt-6 text-cream-white/70 text-sm">
              <span className="flex items-center gap-2"><Calendar size={16} /> December 20, 2025</span>
              <span className="flex items-center gap-2"><Clock size={16} /> 6 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="content-max-width mx-auto max-w-3xl">
          <div className="article-animate bg-white rounded-2xl p-8 md:p-12 shadow-card">
            <p className="text-lg text-off-black/80 leading-relaxed mb-6">
              In the heart of rural Kenya, where the red earth meets endless skies, a quiet revolution is taking place. It is not fought with weapons or shouted from podiums — it is fought with books, pencils, and the unwavering belief that every child deserves a chance to learn. This is the story of how education is breaking the cycle of poverty, one child at a time.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">The Weight of Poverty on Young Shoulders</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              For many children in Kenya's rural communities, poverty is not just a circumstance — it is a daily reality that dictates whether they eat, whether they sleep under a roof, and whether they ever step inside a classroom. Parents working as casual laborers often earn less than KSh 200 ($1.50 USD) per day, making school fees an impossible dream rather than a basic right.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Girls face an even steeper climb. Early marriage, household responsibilities, and the lack of sanitary supplies force thousands of girls to abandon their education before they reach adolescence. By age 14, many have already accepted that their dreams are not meant for them.
            </p>

            <blockquote className="border-l-4 border-golden-hour bg-golden-hour/5 rounded-r-xl p-6 my-8 italic text-deep-forest">
              "When a child learns to read, they don't just gain a skill — they gain the ability to imagine a life beyond what they can currently see. That imagination is the seed of every transformation."
            </blockquote>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">How Ultimate Wings Steps In</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Ultimate Wings Kenya believes that education is not a privilege — it is a fundamental right. Our approach goes far beyond paying school fees. We create a comprehensive support system that removes every barrier standing between a child and their education.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              We provide school uniforms so children don't feel ashamed walking into class. We supply books, pencils, and learning materials. We organize special meals for children who would otherwise study on empty stomachs. And through our network of volunteer tutors, we offer after-school support to help struggling students catch up and thrive.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">The Ripple Effect</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              When you educate a child, you don't just change one life — you transform a family, a community, and future generations. Our graduates become teachers who return to their villages. They become nurses who open clinics. They become entrepreneurs who create jobs. They become advocates who fight for the next generation.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              In Watamu, a small coastal community, we have seen what happens when education takes root. Families that once struggled to feed themselves now have university graduates earning stable incomes. Children who once played in the streets now lead community development projects. The cycle is breaking — and it started with a single school uniform, a single book, a single believer.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">A Call to Action</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              The need is still enormous. Thousands of children in Kenya are still waiting for someone to believe in them. But together, we can reach them. Together, we can ensure that no child's future is determined by the circumstances of their birth.
            </p>

            <div className="bg-deep-forest rounded-2xl p-8 my-10">
              <h3 className="font-display font-bold text-xl text-cream-white mb-3">Join the Education Revolution</h3>
              <p className="text-cream-white/80 mb-6">
                Your support sends a child to school, provides learning materials, and fuels dreams that would otherwise never take flight. Become part of the transformation.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-pill bg-golden-hour text-deep-forest font-bold uppercase tracking-widest text-sm hover:bg-[#D9A33A] transition-all">
                Support Education <Heart size={16} />
              </Link>
            </div>

            <p className="text-off-black/80 leading-relaxed mb-6">
              Education is not just about classrooms and exams. It is about dignity. It is about possibility. It is about telling a child who has known nothing but struggle: <em>you are worth investing in, and your dreams matter.</em>
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#EducationForAll</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#BreakTheCycle</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#UltimateWingsKenya</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#RuralEducation</span>
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
