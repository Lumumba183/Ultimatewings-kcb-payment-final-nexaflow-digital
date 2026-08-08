import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stories = [
  {
    tag: 'Education',
    name: "David's Journey",
    quote: "From almost giving up on school to topping his class — David's story shows what happens when a child knows someone believes in them.",
    image: '/images/real-children-school.jpg',
  },
  {
    tag: 'Community',
    name: "The Power of School Supplies",
    quote: "These books, pens, and materials aren't just supplies — they're the keys that unlock a child's future. Every delivery is a promise kept.",
    image: '/images/real-school-deliveries.jpg',
  },
]

export default function StoriesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo('.stories-header > *',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: '.stories-header', start: 'top 80%', toggleActions: 'play none none none' },
        }
      )
      gsap.fromTo('.story-card-left',
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: '.stories-grid', start: 'top 75%', toggleActions: 'play none none none' },
        }
      )
      gsap.fromTo('.story-card-right',
        { opacity: 0, x: 60 },
        {
          opacity: 1, x: 0, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: '.stories-grid', start: 'top 75%', toggleActions: 'play none none none' },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-deep-earth section-padding"
    >
      <div className="content-max-width mx-auto">
        <div className="stories-header text-center mb-16">
          <span className="text-label text-cream-white/40">STORIES OF HOPE</span>
          <h2 className="text-heading text-cream-white mt-4" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Behind every number<br />is a human story
          </h2>
        </div>

        <div className="stories-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stories.map((story, idx) => (
            <div
              key={story.name}
              className={`group rounded-2xl overflow-hidden bg-cream-white/5 border border-cream-white/[0.08] transition-all duration-500 hover:border-golden-hour/30 ${
                idx === 0 ? 'story-card-left' : 'story-card-right'
              }`}
            >
              <div className="overflow-hidden h-[280px]">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <span className="inline-block bg-golden-hour/20 text-amber-light text-xs uppercase tracking-widest px-4 py-1.5 rounded-full">
                  {story.tag}
                </span>
                <h3 className="font-display font-bold text-2xl text-cream-white mt-4">
                  {story.name}
                </h3>
                <p className="text-cream-white/75 italic leading-relaxed mt-3">
                  "{story.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="link-arrow text-golden-hour hover:text-amber-light underline underline-offset-4"
          >
            Read More Stories <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
