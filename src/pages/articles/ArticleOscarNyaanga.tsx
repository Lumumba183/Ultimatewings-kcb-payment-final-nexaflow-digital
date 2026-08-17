import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Heart, Share2 } from 'lucide-react'
import gsap from 'gsap'

export default function ArticleOscarNyaanga() {
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
        <img src="/images/oscar-after.jpg" alt="Oscar Nyaanga healthy and happy in school" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 w-full content-max-width mx-auto px-6 lg:px-12 pb-16 pt-32">
          <div className="article-animate">
            <span className="inline-block bg-golden-hour/20 text-amber-light text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Child Health & Wellness</span>
            <h1 className="font-display font-bold text-cream-white leading-tight" style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}>
              From Scars to Smiles:<br />Oscar Nyaanga's Journey of Healing
            </h1>
            <div className="flex flex-wrap items-center gap-6 mt-6 text-cream-white/70 text-sm">
              <span className="flex items-center gap-2"><Calendar size={16} /> November 15, 2025</span>
              <span className="flex items-center gap-2"><Clock size={16} /> 6 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="content-max-width mx-auto max-w-3xl">
          <div className="article-animate bg-white rounded-2xl p-8 md:p-12 shadow-card">
            <p className="text-lg text-off-black/80 leading-relaxed mb-6">
              Some stories begin with pain. Oscar Nyaanga's did. A life-threatening accident left him with severe burns, a shattered sense of self, and a future that seemed to close before it had barely opened. But today, Oscar walks through the gates of his school with his head held high — a testament to what happens when a community refuses to let a child be defined by their scars.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">The Day Everything Changed</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Oscar was just seven years old when the accident happened. A cooking fire that should have been routine turned catastrophic in seconds. The burns covered a significant portion of his body, and the local clinic could do little more than provide basic first aid. His family, already struggling to make ends meet, had no means to access the specialized medical care Oscar desperately needed.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              "I remember the smell," Oscar's grandmother recounts, her voice trembling. "I remember his screams. And I remember the helplessness — knowing my grandson needed help I could never afford."
            </p>

            {/* Before/After: Oscar's Transformation */}
            <div className="my-10">
              <h3 className="font-display font-bold text-xl text-deep-forest mb-6 text-center">A Transformation Made Possible</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden shadow-card">
                  <img
                    src="/images/oscar-before.jpg"
                    alt="Oscar after the accident — severe burns visible"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="bg-red-50 py-3 text-center">
                    <span className="text-red-700 font-bold text-sm uppercase tracking-widest">Before</span>
                    <p className="text-red-600/70 text-xs mt-1">After the accident — severe burns, uncertain future</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-card">
                  <img
                    src="/images/oscar-after.jpg"
                    alt="Oscar healthy and happy back in school"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="bg-green-50 py-3 text-center">
                    <span className="text-green-700 font-bold text-sm uppercase tracking-widest">After</span>
                    <p className="text-green-600/70 text-xs mt-1">Healed, confident, and back in school</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">How Ultimate Wings Intervened</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Oscar's case came to our attention through a community health volunteer in Watamu who had been tracking families in need. Our medical assessment team visited Oscar within days and immediately recognized the severity of his injuries. Without intervention, the burns would lead to permanent disfigurement, limited mobility, and a lifetime of social stigma.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Within two weeks, we had mobilized resources to transport Oscar to a specialized burn unit in Mombasa. The treatment plan included:
            </p>
            <ul className="list-disc list-inside space-y-2 text-off-black/80 mb-6 ml-4">
              <li><strong>Emergency wound care</strong> — professional cleaning and dressing of burn wounds</li>
              <li><strong>Reconstructive surgery</strong> — skin grafting to restore function and appearance</li>
              <li><strong>Physical therapy</strong> — exercises to maintain mobility and prevent contractures</li>
              <li><strong>Psychological support</strong> — counseling to help Oscar process trauma and rebuild confidence</li>
              <li><strong>Nutritional support</strong> — high-protein diet to support healing and recovery</li>
            </ul>

            <blockquote className="border-l-4 border-golden-hour bg-golden-hour/5 rounded-r-xl p-6 my-8 italic text-deep-forest">
              "When I first saw Oscar after his surgery, he wouldn't look at me. He kept his head down. Today, he runs to me with a smile. That transformation — that's why we do this work." — Dr. Amina, Medical Coordinator
            </blockquote>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">The Road to Recovery</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Recovery was not linear. There were infections, setbacks, and days when Oscar's spirit wavered. But our team walked every step with him. We provided not just medical care, but a support system that wrapped around his entire family. His grandmother received training in wound care. His school was contacted to prepare for his return. And slowly, day by day, Oscar began to heal — inside and out.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              The turning point came when Oscar saw his reflection after the final bandages were removed. He didn't cry. He smiled. "I look like me again," he said. And then, with a courage that belies his years, he asked when he could go back to school.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">Back to School, Back to Life</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Oscar returned to school six months after the accident. We provided his school fees, a new uniform, and supplies. But more importantly, we worked with his teachers and classmates to create an environment of acceptance and support. The children who once stared at his scars now sit beside him, share their lunches, and include him in every game.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Today, Oscar is not just surviving — he's thriving. His grades have improved, he's made friends, and he dreams of becoming a doctor. "I want to help other children who are hurt," he says. "Like the doctors helped me."
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">More Than Medical Care</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Oscar's story is one of many. Across Kenya, thousands of children suffer from preventable injuries and treatable conditions simply because their families cannot afford care. Burns, fractures, infections, and congenital conditions that would be routine in developed countries become life-altering tragedies in communities with limited access to healthcare.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              At Ultimate Wings Kenya, our health and wellness program is built on the belief that every child deserves access to quality medical care — regardless of their family's income. We partner with local clinics, regional hospitals, and specialist providers to ensure that no child is turned away because their family cannot pay.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">Join the Healing Mission</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Oscar's miracle can be repeated — for children waiting in pain, hiding their scars, and losing hope. A comprehensive medical intervention like Oscar's costs approximately KSh 150,000 ($1,100 USD), including surgery, hospitalization, therapy, and follow-up care. Even partial contributions make a tangible difference.
            </p>

            <div className="bg-deep-forest rounded-2xl p-8 my-10">
              <h3 className="font-display font-bold text-xl text-cream-white mb-3">Heal a Child, Restore a Future</h3>
              <p className="text-cream-white/80 mb-6">
                Your contribution doesn't just treat wounds — it restores dignity, hope, and the chance for a child to dream again. Help us heal 50 children in 2026.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-pill bg-golden-hour text-deep-forest font-bold uppercase tracking-widest text-sm hover:bg-[#D9A33A] transition-all">
                Donate to Medical Care <Heart size={16} />
              </Link>
            </div>

            <p className="text-off-black/80 leading-relaxed mb-6">
              Every child deserves to heal. Every child deserves to play without pain. Every child deserves to look in the mirror and see possibility, not scars. Together, we can make that a reality — one child at a time.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#ChildHealth</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#MedicalCare</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#UltimateWingsKenya</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#HealingJourney</span>
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
