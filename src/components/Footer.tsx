import { Link, useNavigate } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react'

const scrollToSection = (id: string) => {
  const element = document.querySelector(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/#about', hash: '#about' },
  { label: 'Our Programs', path: '/#programs', hash: '#programs' },
  { label: 'Our Impact', path: '/#impact', hash: '#impact' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

const getInvolved = [
  { label: 'Donate', path: '/donate' },
  { label: 'Partner With Us', path: '/contact' },
  { label: 'Volunteer', path: '/contact' },
  { label: 'Fundraise', path: '/contact' },
  { label: 'Become a Monthly Donor', path: '/donate' },
]

const legalLinks = [
  { label: 'Terms of Service', path: '/terms' },
  { label: 'Privacy Policy', path: '/privacy' },
]

export default function Footer() {
  const navigate = useNavigate()

  const handleHashClick = (hash: string) => {
    navigate('/' + hash)
  }

  return (
    <footer className="bg-deep-forest text-cream-white">
      <div className="content-max-width mx-auto px-6 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/logo.jpg" 
                alt="Ultimate Wings Kenya Logo" 
                className="h-12 w-auto rounded-lg"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-cream-white">ULTIMATE WINGS</span>
                <span className="text-label text-golden-hour mt-1">KENYA</span>
              </div>
            </div>
            <p className="text-cream-white/60 text-sm leading-relaxed max-w-[280px]">
              Restoring hope among vulnerable children and communities across Kenya. Building education, empowerment, and healthcare for all.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.facebook.com/share/1E8MwBREmV/" target="_blank" rel="noopener noreferrer" className="text-cream-white/60 hover:text-golden-hour transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/uwrcafrica" target="_blank" rel="noopener noreferrer" className="text-cream-white/60 hover:text-golden-hour transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-cream-white/60 hover:text-golden-hour transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-cream-white/60 hover:text-golden-hour transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-bold text-sm uppercase tracking-widest text-cream-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.hash ? (
                    <button
                      onClick={() => handleHashClick(link.hash!)}
                      className="text-cream-white/60 text-sm hover:text-cream-white hover:translate-x-1 inline-block transition-all bg-transparent border-none cursor-pointer text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-cream-white/60 text-sm hover:text-cream-white hover:translate-x-1 inline-block transition-all"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-body font-bold text-sm uppercase tracking-widest text-cream-white mb-6">
              Get Involved
            </h4>
            <ul className="space-y-3">
              {getInvolved.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-cream-white/60 text-sm hover:text-cream-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-bold text-sm uppercase tracking-widest text-cream-white mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-teal-accent mt-0.5 flex-shrink-0" />
                <span className="text-cream-white/60 text-sm">P.O. Box 28, 80202<br />Watamu, Kilifi County<br />Republic of Kenya</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-teal-accent flex-shrink-0" />
                <a href="tel:+254742287771" className="text-golden-hour text-sm hover:underline">+254 742 287 771</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-teal-accent flex-shrink-0" />
                <a href="mailto:info@ultimatewings.co.ke" className="text-golden-hour text-sm hover:underline">info@ultimatewings.co.ke</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-teal-accent flex-shrink-0" />
                <a href="mailto:uwrcafrica@gmail.com" className="text-golden-hour text-sm hover:underline">uwrcafrica@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream-white/40 text-xs">
            &copy; 2026 Ultimate Wings Kenya. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-cream-white/40 text-xs">
              Registered PBO in Kenya
            </p>
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-cream-white/40 text-xs hover:text-golden-hour transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
