import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Heart, Share2 } from 'lucide-react'
import gsap from 'gsap'

export default function ArticleWidowsMicroEnterprise() {
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
        <img src="/images/blog-empowerment.jpg" alt="Women entrepreneurs in Kenya" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 w-full content-max-width mx-auto px-6 lg:px-12 pb-16 pt-32">
          <div className="article-animate">
            <span className="inline-block bg-golden-hour/20 text-amber-light text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Empowerment</span>
            <h1 className="font-display font-bold text-cream-white leading-tight" style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}>
              From Vulnerability to Independence:<br />Empowering Widows Through Micro-Enterprise
            </h1>
            <div className="flex flex-wrap items-center gap-6 mt-6 text-cream-white/70 text-sm">
              <span className="flex items-center gap-2"><Calendar size={16} /> November 8, 2025</span>
              <span className="flex items-center gap-2"><Clock size={16} /> 7 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="content-max-width mx-auto max-w-3xl">
          <div className="article-animate bg-white rounded-2xl p-8 md:p-12 shadow-card">
            <p className="text-lg text-off-black/80 leading-relaxed mb-6">
              The loss of a husband in rural Kenya does not just bring grief — it brings a devastating economic earthquake. For many widows, their husband was the sole breadwinner, the property owner, and the voice that was heard in community decisions. Overnight, these women find themselves stripped of security, voice, and hope. But at Ultimate Wings Kenya, we believe that widowhood is not the end of a story — it can be the beginning of a powerful new chapter.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">The Hidden Crisis of Widowhood</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              In many Kenyan communities, widows face systemic discrimination. Traditional laws and customs often deny them inheritance rights, leaving them without land, home, or savings. Many are forced to depend on reluctant relatives or face the streets with their children. The psychological weight of this sudden vulnerability is crushing — depression, anxiety, and a sense of worthlessness are common companions.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Yet within every widow we meet, we see something remarkable: resilience. Given the right tools, training, and community support, these women don't just survive — they thrive. They build businesses. They employ others. They become leaders. And they raise children who know that a woman's strength is limitless.
            </p>

            <blockquote className="border-l-4 border-golden-hour bg-golden-hour/5 rounded-r-xl p-6 my-8 italic text-deep-forest">
              "A widow is not a burden to be carried — she is a seed waiting for the right soil. Given opportunity and dignity, she will grow a forest."
            </blockquote>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">The Ultimate Wings Approach</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Our economic empowerment program is built on the understanding that charity is temporary, but enterprise is permanent. We don't just give handouts — we build hand-ups. Through a comprehensive model that combines vocational training, micro-grants, table banking, and ongoing mentorship, we help widows transform their skills into sustainable income.
            </p>

            <h3 className="font-display font-bold text-xl text-deep-forest mt-8 mb-3">🌾 Agriculture & Livestock</h3>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Many widows already have agricultural knowledge passed down through generations. We amplify this by providing quality seeds, fruit tree saplings (oranges, mangoes, cashew nuts), chicken and goat starter stock, and beekeeping equipment for honey production. What starts as a small kitchen garden can grow into a thriving farm that feeds families and generates income at local markets.
            </p>

            <h3 className="font-display font-bold text-xl text-deep-forest mt-8 mb-3">📚 Vocational Training</h3>
            <p className="text-off-black/80 leading-relaxed mb-6">
              From tailoring and beadwork to food processing and small-scale retail, we identify marketable skills and provide hands-on training. Our partnerships with local technical institutes ensure that training is practical, culturally relevant, and immediately applicable.
            </p>

            <h3 className="font-display font-bold text-xl text-deep-forest mt-8 mb-3">💰 Table Banking & Micro-Grants</h3>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Capital is the biggest barrier to starting a business. Our table banking groups allow widows to pool resources, access low-interest loans, and build creditworthiness within their community. For those with solid business plans, we provide seed grants of KSh 10,000–50,000 ($75–$375 USD) to launch their enterprises.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">Stories of Transformation</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              Margaret from Malindi lost her husband to malaria in 2022. With three children to feed and no source of income, she felt her world collapse. Through our program, Margaret received beekeeping training and two starter hives. Within 18 months, she was producing 50 kilograms of honey per harvest, selling at premium prices to tourist hotels along the coast. Today, Margaret employs two other widows and has expanded to eight hives. Her children are back in school, and she is saving to buy her own plot of land.
            </p>
            <div className="my-8 rounded-xl overflow-hidden shadow-card">
              <img
                src="/images/tailoring-workshop.jpg"
                alt="Widow learning tailoring skills in Eldoret"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <p className="text-sm text-muted-sage text-center py-3 bg-warm-cream italic">
                A widow participating in our vocational training program in Eldoret — building skills for a sustainable future.
              </p>
            </div>
            <p className="text-off-black/80 leading-relaxed mb-6">
              In Eldoret, we met Esther, a widow with four children who had been surviving on odd jobs and handouts. Through our table banking group, she accessed a micro-grant of KSh 25,000 and started a tailoring business. With training from our vocational program, Esther now makes school uniforms for local families and employs two young women from her community. Her eldest son just completed high school — a milestone she never thought possible.
            </p>
            <p className="text-off-black/80 leading-relaxed mb-6">
              These stories from Malindi and Eldoret represent what happens when widows are given tools, not pity. From the coastal plains of Kilifi County to the highlands of Eldoret, women are proving that widowhood is not the end — it is a new beginning filled with purpose and dignity.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">The Bigger Picture</h2>
            <p className="text-off-black/80 leading-relaxed mb-6">
              When a widow builds a business, she doesn't just lift herself — she lifts her entire community. She creates jobs. She pays school fees for her children and sometimes for her neighbors' children too. She becomes a role model, showing the next generation that women are capable of anything. And she breaks the cycle of dependency that keeps communities trapped in poverty.
            </p>

            <div className="bg-deep-forest rounded-2xl p-8 my-10">
              <h3 className="font-display font-bold text-xl text-cream-white mb-3">Empower a Widow Today</h3>
              <p className="text-cream-white/80 mb-6">
                Your donation provides training, resources, and seed capital that transforms a widow's life forever. Give a woman the tools to build her own future.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-pill bg-golden-hour text-deep-forest font-bold uppercase tracking-widest text-sm hover:bg-[#D9A33A] transition-all">
                Empower a Widow <Heart size={16} />
              </Link>
            </div>

            <p className="text-off-black/80 leading-relaxed mb-6">
              100+ widows empowered. Countless businesses launched. Families rebuilt. Communities strengthened. This is what happens when we believe in the power of women to shape their own destinies.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#WomenEmpowerment</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#MicroEnterprise</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#UltimateWingsKenya</span>
              <span className="text-xs bg-muted-sage/10 text-muted-sage px-3 py-1 rounded-full">#WidowSupport</span>
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
