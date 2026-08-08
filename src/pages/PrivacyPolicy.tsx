import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Lock } from 'lucide-react'
import gsap from 'gsap'

export default function PrivacyPolicy() {
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
          <Lock size={48} className="text-golden-hour mx-auto mb-4" />
          <h1 className="text-heading text-cream-white" style={{ fontSize: 'clamp(36px, 6vw, 64px)' }}>
            Privacy Policy
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
                Ultimate Wings Kenya ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website <strong>ultimatewings.co.ke</strong> or interact with our Services. This policy complies with the <em>Data Protection Act, 2019</em> of the Republic of Kenya and applicable international standards.
              </p>

              <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">1. Information We Collect</h2>
              <p className="leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <h3 className="font-bold text-lg text-deep-forest mt-6 mb-2">1.1 Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Name, email address, phone number, and postal address</li>
                <li>Payment information (processed securely through third-party payment providers)</li>
                <li>Information you provide when contacting us or signing up for newsletters</li>
                <li>Sponsorship or donation preferences</li>
              </ul>
              <h3 className="font-bold text-lg text-deep-forest mt-6 mb-2">1.2 Non-Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Browser type and version, device information, and operating system</li>
                <li>IP address and geographic location (approximate)</li>
                <li>Pages visited, time spent on pages, and referral sources</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">2. How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>To process donations and send receipts and acknowledgments</li>
                <li>To communicate with you about our programs, events, and impact</li>
                <li>To send newsletters and updates (you may opt out at any time)</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations, including tax and reporting requirements</li>
                <li>To prevent fraud and ensure the security of our Services</li>
              </ul>

              <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">3. Legal Basis for Processing (Under Kenyan Law)</h2>
              <p className="leading-relaxed mb-4">
                Under the <em>Data Protection Act, 2019</em>, we process your personal data based on one or more of the following legal grounds:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li><strong>Consent:</strong> You have given us clear consent to process your personal data for specific purposes</li>
                <li><strong>Contract:</strong> Processing is necessary for the performance of a contract with you</li>
                <li><strong>Legal Obligation:</strong> Processing is necessary for compliance with a legal obligation</li>
                <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate interests, provided your rights do not override those interests</li>
              </ul>

              <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">4. Data Sharing and Disclosure</h2>
              <p className="leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website, processing payments, or conducting our business (e.g., PayPal, Stripe, email service providers)</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law, regulation, legal process, or governmental request</li>
                <li><strong>Protection of Rights:</strong> We may disclose information to protect our rights, property, or safety, or the rights, property, or safety of others</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction</li>
              </ul>

              <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">5. Data Security</h2>
              <p className="leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure payment processing through PCI-compliant providers</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and staff training on data protection</li>
              </ul>
              <p className="leading-relaxed mb-4">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>

              <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">6. Data Retention</h2>
              <p className="leading-relaxed mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including for legal, accounting, or reporting requirements. Donation records are retained for a minimum of seven (7) years in accordance with Kenyan tax regulations.
              </p>

              <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">7. Your Rights</h2>
              <p className="leading-relaxed mb-4">
                Under the <em>Data Protection Act, 2019</em>, you have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li><strong>Right to Access:</strong> You have the right to request copies of your personal data</li>
                <li><strong>Right to Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate</li>
                <li><strong>Right to Erasure:</strong> You have the right to request that we erase your personal data, under certain conditions</li>
                <li><strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data</li>
                <li><strong>Right to Object:</strong> You have the right to object to our processing of your personal data</li>
                <li><strong>Right to Data Portability:</strong> You have the right to request that we transfer your data to another organization, or directly to you</li>
              </ul>
              <p className="leading-relaxed mb-4">
                To exercise any of these rights, please contact us using the information provided below. We will respond to your request within 30 days.
              </p>

              <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">8. Cookies</h2>
              <p className="leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small text files stored on your device that help us understand how you use our site and improve its functionality.
              </p>
              <p className="leading-relaxed mb-4">
                You can control cookies through your browser settings. However, disabling cookies may affect the functionality of certain features on our website.
              </p>

              <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">9. Children's Privacy</h2>
              <p className="leading-relaxed mb-4">
                Our Services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
              </p>

              <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">10. International Transfers</h2>
              <p className="leading-relaxed mb-4">
                Your information may be transferred to — and maintained on — computers located outside of Kenya, where data protection laws may differ. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy.
              </p>

              <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">11. Changes to This Privacy Policy</h2>
              <p className="leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. The updated policy will be posted on this page with a revised "Last updated" date. We encourage you to review this policy periodically.
              </p>

              <h2 className="font-display font-bold text-2xl text-deep-forest mt-10 mb-4">12. Contact Us</h2>
              <p className="leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer:
              </p>
              <p className="leading-relaxed mb-4">
                <strong>Email:</strong> <a href="mailto:info@ultimatewings.co.ke" className="text-golden-hour hover:underline">info@ultimatewings.co.ke</a><br />
                <strong>Phone:</strong> <a href="tel:+254742287771" className="text-golden-hour hover:underline">+254 742 287 771</a><br />
                <strong>Address:</strong> P.O. Box 28, 80202, Watamu, Kenya<br />
                <strong>Data Protection Officer:</strong> Ultimate Wings Kenya Administration
              </p>
              <p className="leading-relaxed mb-4">
                You also have the right to lodge a complaint with the <strong>Office of the Data Protection Commissioner</strong> of Kenya if you believe we have violated your data protection rights.
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <Link to="/" className="link-arrow text-deep-forest hover:text-golden-hour inline-flex items-center gap-2">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <Link to="/terms" className="link-arrow text-deep-forest hover:text-golden-hover inline-flex items-center gap-2">
              Terms of Service <ArrowLeft size={16} className="rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
