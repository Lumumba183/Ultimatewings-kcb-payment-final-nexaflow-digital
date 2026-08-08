import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Heart, Share2, Lock, CheckCircle } from 'lucide-react'
import gsap from 'gsap'

export default function ArticleYearInReview2025() {
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
        <img src="/images/blog-yearreview.jpg" alt="2025 Year in Review celebration" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 w-full content-max-width mx-auto px-6 lg:px-12 pb-16 pt-32">
          <div className="article-animate">
            <span className="inline-block bg-golden-hour/20 text-amber-light text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Updates</span>
            <h1 className="font-display font-bold text-cream-white leading-tight" style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}>
              2025 Year in Review:<br />45 Children in School, 31 Graduates,<br />Countless Lives Changed
            </h1>
            <div className="flex flex-wrap items-center gap-6 mt-6 text-cream-white/70 text-sm">
              <span className="flex items-center gap-2"><Calendar size={16} /> January 5, 2026</span>
              <span className="flex items-center gap-2"><Clock size={16} /> 10 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="content-max-width mx-auto max-w-3xl">
          <div className="article-animate bg-white rounded-2xl p-8 md:p-12 shadow-card">
            <p className="text-lg text-off-black/80 leading-relaxed mb-6">
              As the sun sets on 2025, we at Ultimate Wings Kenya find ourselves reflecting on a year that tested our resolve, expanded our reach, and reminded us why this work matters. It was a year of milestones and miracles, of challenges overcome and communities transformed. This is our story of 2025 — the numbers, the faces, and the faith that carried us through.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">By the Numbers: A Year of Growth</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-deep-forest/5 rounded-xl p-6">
                <span className="font-display font-bold text-4xl text-golden-hour">45</span>
                <p className="text-off-black/80 mt-2">Children enrolled and supported in school throughout 2025</p>
              </div>
              <div className="bg-deep-forest/5 rounded-xl p-6">
                <span className="font-display font-bold text-4xl text-golden-hour">31</span>
                <p className="text-off-black/80 mt-2">Young adults graduated from university and vocational programs</p>
              </div>
              <div className="bg-deep-forest/5 rounded-xl p-6">
                <span className="font-display font-bold text-4xl text-golden-hour">100+</span>
                <p className="text-off-black/80 mt-2">Widows empowered through vocational training and micro-enterprise</p>
              </div>
              <div className="bg-deep-forest/5 rounded-xl p-6">
                <span className="font-display font-bold text-4xl text-golden-hour">12</span>
                <p className="text-off-black/80 mt-2">Mobile health clinics conducted in Malindi and Nairobi communities</p>
              </div>
              <div className="bg-deep-forest/5 rounded-xl p-6">
                <span className="font-display font-bold text-4xl text-golden-hour">5,000+</span>
                <p className="text-off-black/80 mt-2">Sanitary towel packs distributed to schoolgirls across Kenya</p>
              </div>
              <div className="bg-deep-forest/5 rounded-xl p-6">
                <span className="font-display font-bold text-4xl text-golden-hour">8</span>
                <p className="text-off-black/80 mt-2">New houses built for vulnerable families and widows</p>
              </div>
            </div>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">The Stories Behind the Statistics</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Numbers tell part of the story, but the real impact lives in the faces of those we serve. Like David, a quiet 16-year-old from Watamu who had almost given up on school until our outreach team found him. Today, David is not just back in school — he's at the top of his class, dreaming of becoming a civil engineer to build roads in his community.
            </p>

            {/* Real Image: Children at School */}
            <div className="my-8 rounded-xl overflow-hidden shadow-card">
              <img
                src="/images/real-children-school.jpg"
                alt="Children at school in Kenya"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <p className="text-sm text-muted-sage text-center py-3 bg-warm-cream italic">
                Children at one of our partner schools — every uniform represents a dream being kept alive.
              </p>
            </div>

            <p className="text-off-black/80 leading-relaxed mb-6">
              Or Mama Grace, a widow who received her first beehive in March and harvested her first honey by October. The KSh 8,000 she earned from that harvest paid her youngest child's school fees for the entire term. "For the first time in years," she told us, "I didn't have to beg anyone for help. I did this myself."
            </p>

            <blockquote className="border-l-4 border-golden-hour bg-golden-hour/5 rounded-r-xl p-6 my-8 italic text-deep-forest">
              "2025 taught us that miracles don't always come with thunder. Sometimes they come with a child walking through a school gate for the first time, or a widow counting her first earnings, or a family sleeping dry under a new roof."
            </blockquote>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">Challenges We Faced</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              It would be dishonest to celebrate the victories without acknowledging the battles. 2025 brought unprecedented drought to parts of coastal Kenya, devastating crops and pushing food prices beyond what many families could afford. Our agriculture programs had to pivot rapidly, introducing drought-resistant crops and expanding irrigation support.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Funding was another constant challenge. Global economic uncertainty affected donor contributions, forcing us to stretch every shilling further. But our community stepped up — local businesses in Malindi and Nairobi hosted fundraising events, churches organized donation drives, and volunteers gave countless hours of their time. The Ultimate Wings family grew stronger in adversity.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">Expanding Our Reach</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              This year marked our expansion into two new communities in Nairobi's informal settlements. What started as a small pilot program in Kibera has grown into a thriving network of 25 sponsored children, 15 widows in table banking groups, and a community health partnership that brings monthly mobile clinics to over 300 residents.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              We also deepened our commitment to menstrual health, distributing sanitary supplies and conducting dignity workshops in 8 schools. The result? A 40% reduction in girls missing school during their periods — a statistic that translates directly into brighter futures.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">Looking Ahead: Our Vision for 2026</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              As we step into 2026, our ambitions are bolder. We aim to enroll 30 additional children in school, graduate 20 more young adults, and expand our widows' empowerment program to reach 50 new women. We plan to build 12 new houses, conduct 20 mobile health clinics, and distribute 10,000 sanitary towel packs.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              But beyond the numbers, our vision is deeper. We want to build a Kenya where no child is kept from school because of poverty. Where no widow is left destitute because of loss. Where every community has the resources and knowledge to care for its own. That is the Ultimate Wings dream — and in 2026, we intend to fly closer to it than ever before.
            </p>

            <div className="bg-deep-forest rounded-2xl p-8 my-10 text-center">
              <div className="w-12 h-12 rounded-full bg-golden-hour/20 flex items-center justify-center mx-auto mb-4">
                <Heart size={24} className="text-golden-hour" />
              </div>
              <h3 className="font-display font-bold text-xl text-cream-white mb-3">Be Part of Our 2026 Story</h3>
              <p className="text-cream-white/80 mb-6 max-w-lg mx-auto">
                The miracles of 2025 were made possible by people like you. As we look to 2026, we need partners, sponsors, and believers who will stand with us. <strong className="text-golden-hour">Every contribution writes a new chapter in a child's life.</strong>
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-pill bg-golden-hour text-deep-forest font-bold uppercase tracking-widest text-sm hover:bg-[#D9A33A] transition-all">
                  Join the Mission <Heart size={16} />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-pill border border-cream-white/30 text-cream-white font-medium text-sm transition-all hover:bg-cream-white/10">
                  Make a One-Time Donation
                </Link>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-5 text-cream-white/50 text-xs">
                <span className="flex items-center gap-1"><Lock size={12} /> Secure Payment</span>
                <span className="flex items-center gap-1"><CheckCircle size={12} /> Registered PBO Kenya</span>
                <span className="flex items-center gap-1"><Heart size={12} /> 100% to Programs</span>
              </div>
            </div>

            <p className="text-off-black/80 leading-relaxed mb-6">
              To our donors, volunteers, community partners, and the incredible families who trust us with their dreams — thank you. 2025 was your year as much as it was ours. And 2026? That belongs to all of us too.
            </p>

            <p className="text-off-black/80 leading-relaxed mb-6 italic">
              Here's to the next chapter. Here's to more miracles. Here's to the unstoppable power of a community that refuses to leave anyone behind.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#YearInReview</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#2025</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#UltimateWingsKenya</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#ImpactMatters</span>
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
