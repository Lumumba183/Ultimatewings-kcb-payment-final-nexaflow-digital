import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Gallery images organized by category - all 108 images from live site
const galleryImages = [
  // Agriculture (11)
  { src: '/images/gallery/agriculture-01.jpg', alt: 'Agriculture program at Ultimate Wings', category: 'Agriculture' },
  { src: '/images/gallery/agriculture-02.jpg', alt: 'Farming activities', category: 'Agriculture' },
  { src: '/images/gallery/agriculture-03.jpg', alt: 'Agronomist teaching staff', category: 'Agriculture' },
  { src: '/images/gallery/agriculture-04.jpg', alt: 'Agronomist with Ultimate Wings team', category: 'Agriculture' },
  { src: '/images/gallery/agriculture-05.jpg', alt: 'Farming at Wings', category: 'Agriculture' },
  { src: '/images/gallery/agriculture-06.jpg', alt: 'Farm work', category: 'Agriculture' },
  { src: '/images/gallery/agriculture-07.jpg', alt: 'Crop cultivation', category: 'Agriculture' },
  { src: '/images/gallery/agriculture-08.jpg', alt: 'Agricultural training', category: 'Agriculture' },
  { src: '/images/gallery/agriculture-09.jpg', alt: 'Farm harvest', category: 'Agriculture' },
  { src: '/images/gallery/agriculture-10.jpg', alt: 'Spraying crops', category: 'Agriculture' },
  { src: '/images/gallery/agriculture-11.jpg', alt: 'Staff spraying crops', category: 'Agriculture' },

  // Children - Sheldon Story (6)
  { src: '/images/gallery/children-01.jpg', alt: 'Sheldon happy and healthy', category: 'Children' },
  { src: '/images/gallery/children-02.jpg', alt: 'Sheldon receiving medical care', category: 'Children' },
  { src: '/images/gallery/children-03.jpg', alt: 'Sheldon recovering', category: 'Children' },
  { src: '/images/gallery/children-04.jpg', alt: 'Sheldon during illness', category: 'Children' },
  { src: '/images/gallery/children-05.jpg', alt: 'Siblings together', category: 'Children' },
  { src: '/images/gallery/children-06.jpg', alt: 'Family moment', category: 'Children' },

  // Community (4)
  { src: '/images/gallery/community-01.jpg', alt: 'Food distribution in Majimboni', category: 'Community' },
  { src: '/images/gallery/community-02.jpg', alt: 'Woman receiving a goat', category: 'Community' },
  { src: '/images/gallery/community-03.jpg', alt: 'Community visit', category: 'Community' },
  { src: '/images/gallery/community-04.jpg', alt: 'Woman holding sanitary towels', category: 'Community' },

  // Daily Life (13)
  { src: '/images/gallery/dailylife-01.jpg', alt: 'Child at Ultimate Wings', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-02.jpg', alt: 'Children at Wings', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-03.jpg', alt: 'Community gathering', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-04.jpg', alt: 'Community visits', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-05.jpg', alt: 'Farm at Wings', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-06.jpg', alt: 'Mud house', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-07.jpg', alt: 'Traditional housing', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-08.jpg', alt: 'Before housing support', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-09.jpg', alt: 'Old house', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-10.jpg', alt: 'School activities', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-11.jpg', alt: 'New school shoes', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-12.jpg', alt: 'Supporting the community', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-13.jpg', alt: 'Goat distribution', category: 'Daily Life' },

  // WhatsApp Daily Life - Sept 25 (28)
  { src: '/images/gallery/dailylife-wa-01.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-02.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-03.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-04.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-05.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-06.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-07.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-08.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-09.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-10.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-11.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-12.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-13.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-14.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-15.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-16.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-17.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-18.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-19.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-20.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-21.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-22.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-23.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-24.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-25.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-26.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-27.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-28.jpg', alt: 'Community moment', category: 'Daily Life' },

  // WhatsApp Daily Life - Oct 4 (12)
  { src: '/images/gallery/dailylife-wa-29.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-30.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-31.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-32.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-33.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-34.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-35.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-36.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-37.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-38.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-39.jpg', alt: 'Community moment', category: 'Daily Life' },
  { src: '/images/gallery/dailylife-wa-40.jpg', alt: 'Community moment', category: 'Daily Life' },

  // Donors (7)
  { src: '/images/gallery/donors-01.jpg', alt: 'Our generous donors', category: 'Donors' },
  { src: '/images/gallery/donors-02.jpg', alt: 'Donor support', category: 'Donors' },
  { src: '/images/gallery/donors-03.jpg', alt: 'Donor visit', category: 'Donors' },
  { src: '/images/gallery/donors-04.jpg', alt: 'Partnership', category: 'Donors' },
  { src: '/images/gallery/donors-05.jpg', alt: 'Donor event', category: 'Donors' },
  { src: '/images/gallery/donors-06.jpg', alt: 'Supporters', category: 'Donors' },
  { src: '/images/gallery/donors-07.jpg', alt: 'Thank you donors', category: 'Donors' },

  // Education (5)
  { src: '/images/gallery/education-01.jpg', alt: 'Grace before joining school', category: 'Education' },
  { src: '/images/gallery/education-02.jpg', alt: 'High school students', category: 'Education' },
  { src: '/images/gallery/education-03.jpg', alt: 'Joseph and Grace smiling', category: 'Education' },
  { src: '/images/gallery/education-04.jpg', alt: 'Joseph before joining school', category: 'Education' },
  { src: '/images/gallery/education-05.jpg', alt: 'Student at Ultimate Wings', category: 'Education' },

  // Empowerment (4)
  { src: '/images/gallery/empowerment-01.jpg', alt: 'Sanitary pad program', category: 'Empowerment' },
  { src: '/images/gallery/empowerment-02.jpg', alt: 'Sanitary program outreach', category: 'Empowerment' },
  { src: '/images/gallery/empowerment-03.jpg', alt: 'Distributing sanitary towels', category: 'Empowerment' },
  { src: '/images/gallery/empowerment-04.jpg', alt: 'Women empowerment', category: 'Empowerment' },

  // Health (4)
  { src: '/images/gallery/health-01.jpg', alt: 'Oscar story', category: 'Health' },
  { src: '/images/gallery/health-02.jpg', alt: 'Oscar after accident', category: 'Health' },
  { src: '/images/gallery/health-03.jpg', alt: 'Oscar back in class', category: 'Health' },
  { src: '/images/gallery/health-04.jpg', alt: 'Oscar recovered', category: 'Health' },

  // Housing (7)
  { src: '/images/gallery/housing-01.jpg', alt: 'House being built', category: 'Housing' },
  { src: '/images/gallery/housing-02.jpg', alt: "Khadija's old house", category: 'Housing' },
  { src: '/images/gallery/housing-03.jpg', alt: "Khadija's family receiving food", category: 'Housing' },
  { src: '/images/gallery/housing-04.jpg', alt: "Khadija's broken house", category: 'Housing' },
  { src: '/images/gallery/housing-05.jpg', alt: 'Khadija with her nine siblings', category: 'Housing' },
  { src: '/images/gallery/housing-06.jpg', alt: 'Sainabu in her new home', category: 'Housing' },
  { src: '/images/gallery/housing-07.jpg', alt: 'Sainabu before new home', category: 'Housing' },

  // Team (7)
  { src: '/images/gallery/team-01.jpg', alt: 'Benson Omondi - Teacher', category: 'Team' },
  { src: '/images/gallery/team-02.jpg', alt: 'Brian Nyongesa - Cook', category: 'Team' },
  { src: '/images/gallery/team-03.jpg', alt: 'Feline Owino - Cleaner', category: 'Team' },
  { src: '/images/gallery/team-04.jpg', alt: 'James Thoya Baya', category: 'Team' },
  { src: '/images/gallery/team-05.jpg', alt: 'Jennifer Kadi - Teacher', category: 'Team' },
  { src: '/images/gallery/team-06.jpg', alt: 'Samuel Jomo - Gardener', category: 'Team' },
  { src: '/images/gallery/team-07.jpg', alt: 'Sheila Nabwere Okumu', category: 'Team' },
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
          opacity: 1, scale: 1, duration: 0.5, stagger: 0.05, ease: 'power2.out',
          scrollTrigger: { trigger: '.gallery-grid', start: 'top 85%', toggleActions: 'play none none none' },
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
          <p className="text-body text-off-black/70 mt-4 max-w-2xl mx-auto">
            Every photo tells a story of transformation, hope, and the power of community.
          </p>
        </div>

        <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className={`gallery-img group overflow-hidden rounded-xl ${
                idx % 7 === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ minHeight: idx % 7 === 0 ? '300px' : '200px' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">{img.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
