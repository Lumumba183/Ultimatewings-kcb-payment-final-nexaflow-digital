import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ArticleMenstrualHealth from './pages/articles/ArticleMenstrualHealth'
import ArticleChildrenEducation from './pages/articles/ArticleChildrenEducation'
import ArticleWidowsEmpowerment from './pages/articles/ArticleWidowsEmpowerment'
import ArticleMobileClinics from './pages/articles/ArticleMobileClinics'
import ArticleCommunitySTEM from './pages/articles/ArticleCommunitySTEM'
import ArticleGirlsEducationDay from './pages/articles/ArticleGirlsEducationDay'
import ArticleFriendshipCommunity from './pages/articles/ArticleFriendshipCommunity'
import ArticlePowerOfEducation from './pages/articles/ArticlePowerOfEducation'
import ArticleWidowsMicroEnterprise from './pages/articles/ArticleWidowsMicroEnterprise'
import ArticleSainabuHome from './pages/articles/ArticleSainabuHome'
import ArticleYearInReview2025 from './pages/articles/ArticleYearInReview2025'
import ArticleWidowsOrphansCare from './pages/articles/ArticleWidowsOrphansCare'
import ArticleOscarNyaanga from './pages/articles/ArticleOscarNyaanga'
import ScrollToTop from './components/ScrollToTop'
import DonationFloat from './components/DonationFloat'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Donate from './pages/Donate'
import DonationResult from './pages/DonationResult'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <div className="min-h-screen bg-warm-cream">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/blog/pads-are-not-charity" element={<ArticleMenstrualHealth />} />
          <Route path="/blog/63-children-and-counting" element={<ArticleChildrenEducation />} />
          <Route path="/blog/from-hardship-to-harvest" element={<ArticleWidowsEmpowerment />} />
          <Route path="/blog/mobile-clinics-healthcare" element={<ArticleMobileClinics />} />
          <Route path="/blog/community-stem-education" element={<ArticleCommunitySTEM />} />
          <Route path="/blog/girls-education-day-2026" element={<ArticleGirlsEducationDay />} />
          <Route path="/blog/together-we-rise" element={<ArticleFriendshipCommunity />} />
          <Route path="/blog/power-of-education" element={<ArticlePowerOfEducation />} />
          <Route path="/blog/widows-micro-enterprise" element={<ArticleWidowsMicroEnterprise />} />
          <Route path="/blog/sainabu-home" element={<ArticleSainabuHome />} />
          <Route path="/blog/oscar-nyaanga" element={<ArticleOscarNyaanga />} />
          <Route path="/blog/pure-religion-widows-orphans" element={<ArticleWidowsOrphansCare />} />
          <Route path="/blog/year-in-review-2025" element={<ArticleYearInReview2025 />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donate/success" element={<DonationResult status="success" />} />
          <Route path="/donate/failed" element={<DonationResult status="failed" />} />
          <Route path="/donate/cancelled" element={<DonationResult status="cancelled" />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
      <DonationFloat />
    </div>
  )
}
