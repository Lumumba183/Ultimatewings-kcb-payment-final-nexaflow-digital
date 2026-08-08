import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const categories = ['All', 'Education', 'Empowerment', 'Healthcare', 'Community', 'Updates']

const articles = [
  {
    id: 1,
    tag: 'Healthcare',
    title: 'Pads Are Not Charity – Menstrual Dignity Is a Right',
    excerpt: 'Why girls in Kenya miss school — not because of menstruation itself, but because of failed systems. Discover how Ultimate Wings is changing the narrative.',
    meta: 'March 15, 2026 • 8 min read',
    image: '/images/supplies-distribution.jpg',
    slug: '/blog/pads-are-not-charity',
  },
  {
    id: 2,
    tag: 'Education',
    title: '63 Children and Counting – How Ultimate Wings Keeps Dreams Alive',
    excerpt: 'Meet the 63+ children in school through our sponsorship program. From special meals to university graduation — every dream matters.',
    meta: 'February 28, 2026 • 7 min read',
    image: '/images/students-assembly.jpg',
    slug: '/blog/63-children-and-counting',
  },
  {
    id: 3,
    tag: 'Empowerment',
    title: 'From Hardship to Harvest – How Ultimate Wings Empowers Over 100 Widows',
    excerpt: 'Through agriculture, table banking, and beekeeping — our widows are building sustainable livelihoods and reclaiming their dignity.',
    meta: 'February 10, 2026 • 8 min read',
    image: '/images/widow-home.jpg',
    slug: '/blog/from-hardship-to-harvest',
  },
  {
    id: 4,
    tag: 'Healthcare',
    title: 'When the Hospital Is Too Far – Mobile Clinics Bringing Healthcare to Kenya\'s Doorstep',
    excerpt: 'Hospitals are far and expensive. Ultimate Wings\' mobile clinics bridge the gap for communities in Malindi and Nairobi.',
    meta: 'January 22, 2026 • 6 min read',
    image: '/images/blog-healthcare.jpg',
    slug: '/blog/mobile-clinics-healthcare',
  },
  {
    id: 5,
    tag: 'Community',
    title: 'Behind Every Student Who Stays in School, There\'s a Community',
    excerpt: 'The role of local leaders, parents, elders, and advocates in keeping children educated — and why STEM skills are the future.',
    meta: 'January 5, 2026 • 7 min read',
    image: '/images/blog-community.jpg',
    slug: '/blog/community-stem-education',
  },
  {
    id: 6,
    tag: 'Updates',
    title: 'Education Doesn\'t Just Change a Girl\'s Life – It Changes Everything',
    excerpt: 'Ultimate Wings Kenya Day 2026: Recommitting to a future where every girl can learn and choose what\'s next for her.',
    meta: 'March 8, 2026 • 6 min read',
    image: '/images/books-distribution.jpg',
    slug: '/blog/girls-education-day-2026',
  },
  {
    id: 7,
    tag: 'Community',
    title: 'Together We Rise – The Power of Community in Healing',
    excerpt: 'A softer, emotional reflection on how friendship and community support strengthen our mission and our hearts.',
    meta: 'December 25, 2025 • 5 min read',
    image: '/images/group-photo-van.jpg',
    slug: '/blog/together-we-rise',
  },
  {
    id: 8,
    tag: 'Education',
    title: 'The Power of Education: Breaking the Cycle of Poverty in Rural Kenya',
    excerpt: 'Discover how access to quality education is transforming entire communities and creating pathways out of poverty for children in Kenya.',
    meta: 'December 20, 2025 • 6 min read',
    image: '/images/blog-education.jpg',
    slug: '/blog/power-of-education',
  },
  {
    id: 9,
    tag: 'Empowerment',
    title: 'From Vulnerability to Independence: Empowering Widows Through Micro-Enterprise',
    excerpt: 'Meet the remarkable women who have built thriving businesses and reclaimed their dignity through our economic empowerment programs.',
    meta: 'November 8, 2025 • 7 min read',
    image: '/images/blog-empowerment.jpg',
    slug: '/blog/widows-micro-enterprise',
  },
  {
    id: 10,
    tag: 'Healthcare',
    title: 'Holistic Healthcare: Healing Bodies and Minds in Underserved Communities',
    excerpt: 'Learn about our comprehensive approach to healthcare that addresses not just physical needs, but emotional and spiritual well-being too.',
    meta: 'October 15, 2025 • 5 min read',
    image: '/images/blog-healthcare.jpg',
    slug: '/blog',
  },
  {
    id: 11,
    tag: 'Community',
    title: "A House Becomes a Home: The Story of Sainabu and Her Family",
    excerpt: "When Sainabu's family received their new home, it wasn't just shelter — it was the foundation for a new beginning filled with hope and security.",
    meta: 'September 22, 2025 • 6 min read',
    image: '/images/blog-community.jpg',
    slug: '/blog/sainabu-home',
  },
  {
    id: 12,
    tag: 'Updates',
    title: '2025 Year in Review: 45 Children in School, 31 Graduates, Countless Lives Changed',
    excerpt: 'A look back at an incredible year of growth, impact, and transformation across the communities we serve in Kenya.',
    meta: 'January 5, 2026 • 10 min read',
    image: '/images/blog-yearreview.jpg',
    slug: '/blog/year-in-review-2025',
  },
]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const sectionRef = useRef<HTMLDivElement>(null)

  const filtered = articles.filter((a) => {
    const matchCat = activeCategory === 'All' || a.tag === activeCategory
    const matchSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        a.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCat && matchSearch
  })

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo('.blog-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: '.blog-grid', start: 'top 80%', toggleActions: 'play none none none' },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [filtered])

  return (
    <div ref={sectionRef}>
      {/* Blog Hero */}
      <section className="relative min-h-[60vh] bg-deep-earth flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(28, 51, 40, 0.7), rgba(28, 51, 40, 0.95))' }}
        />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <span className="text-label text-golden-hour tracking-[0.2em]">BLOG & STORIES</span>
          <h1 className="text-heading text-cream-white mt-4" style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}>
            Stories of<br />Transformation
          </h1>
          <p className="text-cream-white/75 mt-6 max-w-[560px] mx-auto leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
            Read about the lives changed, communities uplifted, and hope restored through our work in Kenya.
          </p>
          <div className="mt-8 relative max-w-md mx-auto">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-cream-white/40" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-cream-white/10 border border-cream-white/20 rounded-full py-3 pl-11 pr-4 text-cream-white placeholder:text-cream-white/50 focus:border-golden-hour focus:outline-none transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-warm-cream py-16 px-6">
        <div className="content-max-width mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-card flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <img
                src="/images/supplies-distribution.jpg"
                alt="Pads Are Not Charity"
                className="w-full h-full object-cover min-h-[300px] lg:min-h-[400px]"
              />
            </div>
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-label text-golden-hour tracking-[0.15em]">FEATURED STORY</span>
              <h2 className="font-display font-bold text-deep-forest mt-4 leading-tight" style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}>
                Pads Are Not Charity – Menstrual Dignity Is a Right
              </h2>
              <p className="text-off-black/70 mt-4 leading-relaxed">
                Why girls in Kenya miss school — not because of menstruation itself, but because of failed systems. Discover how Ultimate Wings is changing the narrative through sanitary towel distribution and stigma-breaking education.
              </p>
              <span className="text-muted-sage text-sm mt-4">March 15, 2026 &bull; 8 min read</span>
              <Link
                to="/blog/pads-are-not-charity"
                className="link-arrow text-deep-forest hover:text-golden-hour font-bold underline underline-offset-4 mt-6 inline-flex"
              >
                Read Full Story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-warm-cream pb-20 px-6">
        <div className="content-max-width mx-auto">
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-deep-forest text-cream-white'
                    : 'bg-transparent border border-muted-sage text-muted-sage hover:bg-deep-forest/10 hover:text-deep-forest'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles grid */}
          <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((article) => (
              <article
                key={article.id}
                className="blog-card bg-white rounded-2xl overflow-hidden shadow-card card-hover"
              >
                <div className="h-[220px] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-golden-hour/10 text-golden-hour text-xs uppercase tracking-widest px-3 py-1 rounded-full">
                    {article.tag}
                  </span>
                  <h3 className="font-display font-bold text-xl text-deep-forest mt-3 leading-tight line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-off-black/65 text-sm mt-2 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <span className="text-muted-sage text-xs mt-4 block">{article.meta}</span>
                  {article.slug !== '/blog' ? (
                    <Link
                      to={article.slug}
                      className="link-arrow text-deep-forest hover:text-golden-hour text-sm mt-3 inline-flex font-medium"
                    >
                      Read More <ArrowRight size={14} />
                    </Link>
                  ) : (
                    <span className="text-muted-sage text-sm mt-3 inline-flex font-medium">
                      Coming Soon <ArrowRight size={14} />
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-sage py-12">No articles found matching your criteria.</p>
          )}
        </div>
      </section>

      {/* Blog CTA Banner */}
      <section className="bg-deep-forest py-20 px-6">
        <div className="content-max-width mx-auto text-center max-w-[800px]">
          <h2 className="text-heading text-cream-white" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
            Want to support our mission?
          </h2>
          <p className="text-cream-white/75 mt-4 max-w-[480px] mx-auto">
            Your donation helps us continue writing these stories of transformation. Every contribution makes a difference.
          </p>

          {/* Impact Tiers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 max-w-[600px] mx-auto">
            <div className="bg-cream-white/10 rounded-xl p-4 text-center border border-cream-white/10">
              <span className="font-display font-bold text-xl text-golden-hour">$25</span>
              <p className="text-cream-white/70 text-xs mt-1">Sponsor a child for a month</p>
            </div>
            <div className="bg-cream-white/10 rounded-xl p-4 text-center border border-cream-white/10">
              <span className="font-display font-bold text-xl text-golden-hour">$50</span>
              <p className="text-cream-white/70 text-xs mt-1">School supplies for 10 children</p>
            </div>
            <div className="bg-cream-white/10 rounded-xl p-4 text-center border border-cream-white/10">
              <span className="font-display font-bold text-xl text-golden-hour">$100</span>
              <p className="text-cream-white/70 text-xs mt-1">Support a widow's business</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link to="/contact" className="btn-primary text-sm py-3 px-8">
              Donate Now
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-pill border border-cream-white/30 text-cream-white font-medium text-sm transition-all duration-300 hover:bg-cream-white/10"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
