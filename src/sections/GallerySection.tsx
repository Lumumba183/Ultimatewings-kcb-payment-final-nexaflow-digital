import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const images = [
  { src: '/images/students-assembly.jpg', alt: 'Schoolchildren gathered for an outdoor assembly' },
  { src: '/images/real-school-deliveries.jpg', alt: 'School supplies and books delivered to children' },
  { src: '/images/books-distribution.jpg', alt: 'Young women receiving educational materials' },
  { src: '/images/goat-donation.jpg', alt: 'Community members receiving a goat for livelihood' },
  { src: '/images/tailoring-workshop.jpg', alt: 'Widow learning tailoring skills for income' },
  { src: '/images/children-mural.jpg', alt: 'Children posing in front of a colorful community mural' },
  { src: '/images/house-construction.jpg', alt: 'Community building a new home together' },
  { src: '/images/chicks-distribution.jpg', alt: 'Women receiving poultry chicks for farming' },
  { src: '/images/supplies-distribution.jpg', alt: 'Distributing supplies to schoolgirls' },
]

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo('.gallery-img',
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: '.gallery-grid', start: 'top 80%', toggleActions: 'play none none none' },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="bg-warm-cream section-padding"
    >
      <div className="content-max-width mx-auto">
        <div className="text-center mb-12">
          <span className="text-label text-muted-sage">GALLERY</span>
          <h2 className="text-heading text-deep-forest mt-4" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Moments of impact
          </h2>
        </div>

        <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`gallery-img group overflow-hidden rounded-xl ${
                idx === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ minHeight: idx === 0 ? '400px' : '200px' }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
