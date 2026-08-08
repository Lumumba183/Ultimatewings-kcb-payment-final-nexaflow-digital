import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield } from 'lucide-react'
import gsap from 'gsap'

export default function TermsOfService() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.legal-animate', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'power2.out' })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="min-h-screen bg-warm-cream">
      <section className="relative bg-deep-earth py-24 px-6">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(28,51,40,0.85), rgba(28,51,40,0.95))' }} />
        <div className="relative z-10 content-max-width mx-auto text-center">
          <Shield size={48} className="text-golden-hour mx-auto mb-4" />
          <h1 className="text-heading text-cream-white" style={{ fontSize: 'clamp(36px, 6vw, 64px)' }}>
            Terms of Service
          </h1>
          <p className="text-cream-white/70 mt-4 max-w-xl mx-auto">
            Last updated: March 1, 2026
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="content-max-width mx-auto max-w-4xl">
          <div className="legal-animate bg-white rounded-2xl p-8 md:p-12 shadow-card">
            <div className="prose prose-lg max-w-none text-off-black/80">
              <p className="text-lg leading-relaxed mb-6">
                Welcome to Ultimate Wings Kenya. These Terms of Service ("Terms") govern your use of our website <strong>ultimatewings.co.ke</strong> and any related services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
              </p>

              <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">1. About Us</h2>
              <p className="leading-relaxed mb-4">
                Ultimate Wings Kenya is a registered Public Benefit Organization (PBO) in the Republic of Kenya. Our mission is to restore hope among vulnerable children, widows, and communities affected by poverty, abuse, and disease through education, economic empowerment, healthcare, and spiritual guidance.
              </p>
              <p className="leading-relaxed mb-4">
                <strong>Registered Address:</strong><br />
                P.O. Box 28, 80202<br />
                Watamu, Kilifi County<br />
                Republic of Kenya
              </p>

              <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">2. Use of Our Services</h2>
              <p className="leading-relaxed mb-4">
                You may use our Services only for lawful purposes and in accordance with these Terms. You agree not to use our Services:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>In any way that violates any applicable national or international law or regulation</li>
                <li>To transmit any material that is defamatory, obscene, or offensive</li>
                <li>To impersonate or attempt to impersonate Ultimate Wings Kenya, our employees, or other users</li>
                <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Services</li>
                <li>To introduce any viruses, trojan horses, worms, or other harmful material</li>
              </ul>

              <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">3. Donations</h2>
              <p className="leading-relaxed mb-4">
                All donations made through our website are voluntary and non-refundable unless required by law. Donations are processed securely through our payment partners. By making a donation, you confirm that:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>You are at least 18 years of age or have parental consent</li>
                <li>You are authorized to use the payment method provided</li>
                <li>The information you provide is accurate and complete</li>
              </ul>
              <p className="leading-relaxed mb-4">
                Ultimate Wings Kenya reserves the right to refuse donations from any source at our discretion. All donations will be used in accordance with our mission and applicable laws, including the Kenyan <em>Public Benefit Organizations Act, 2013</em>.
              </p>

              <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">4. Intellectual Property</h2>
              <p className="leading-relaxed mb-4">
                The content on our website, including text, graphics, logos, images, and software, is the property of Ultimate Wings Kenya or our licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any of our content without our prior written consent.
              </p>
              <p className="leading-relaxed mb-4">
                You may share our content for non-commercial purposes, provided you give appropriate credit and link back to our website.
              </p>

              <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">5. Third-Party Links</h2>
              <p className="leading-relaxed mb-4">
                Our Services may contain links to third-party websites or services that are not owned or controlled by Ultimate Wings Kenya. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
              </p>

              <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">6. Limitation of Liability</h2>
              <p className="leading-relaxed mb-4">
                To the maximum extent permitted by Kenyan law, Ultimate Wings Kenya shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of or in connection with your use of our Services.
              </p>
              <p className="leading-relaxed mb-4">
                Our total liability to you for all claims arising from or relating to these Terms or your use of the Services shall not exceed the amount you have paid to us in the twelve (12) months preceding the claim.
              </p>

              <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">7. Governing Law</h2>
              <p className="leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Kenya.
              </p>

              <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">8. Changes to These Terms</h2>
              <p className="leading-relaxed mb-4">
                We may update these Terms from time to time. The updated Terms will be posted on this page with a revised "Last updated" date. Your continued use of our Services after any changes constitutes your acceptance of the revised Terms.
              </p>

              <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">9. Contact Us</h2>
              <p className="leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="leading-relaxed mb-4">
                <strong>Email:</strong> <a href="mailto:info@ultimatewings.co.ke" className="text-golden-hour hover:underline">info@ultimatewings.co.ke</a><br />
                <strong>Phone:</strong> <a href="tel:+254742287771" className="text-golden-hour hover:underline">+254 742 287 771</a><br />
                <strong>Address:</strong> P.O. Box 28, 80202, Watamu, Kenya
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <Link to="/" className="link-arrow text-deep-forest hover:text-golden-hour inline-flex items-center gap-2">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <Link to="/privacy" className="link-arrow text-deep-forest hover:text-golden-hover inline-flex items-center gap-2">
              Privacy Policy <ArrowLeft size={16} className="rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
