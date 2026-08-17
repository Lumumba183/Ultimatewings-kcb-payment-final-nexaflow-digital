import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

/* ---------- smooth scroll helper ---------- */
function scrollToSection(id: string) {
  const element = document.querySelector(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const navLinks = [
  { label: 'Home', path: '/', hash: null },
  { label: 'About', path: '/', hash: '#about' },
  { label: 'Programs', path: '/', hash: '#programs' },
  { label: 'Impact', path: '/', hash: '#impact' },
  { label: 'Blog', path: '/blog', hash: null },
  { label: 'Contact', path: '/contact', hash: null },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Handle hash scrolling when arriving at home page with a hash
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      setTimeout(() => {
        scrollToSection(location.hash)
      }, 150)
    }
  }, [location.pathname, location.hash])

  const isHome = location.pathname === '/'

  const handleHashClick = (hash: string) => {
    if (!isHome) {
      // Navigate to home first, then scroll
      navigate('/' + hash)
    } else {
      scrollToSection(hash)
    }
    setMobileOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHome
            ? 'bg-deep-forest/98 backdrop-blur-xl shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="content-max-width mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/images/logo.jpg" 
              alt="Ultimate Wings Kenya Logo" 
              className="h-10 w-auto rounded-lg transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className={`font-display font-bold text-lg leading-tight transition-colors duration-300 ${isScrolled || !isHome ? 'text-cream-white' : 'text-cream-white'}`}>
                ULTIMATE WINGS
              </span>
              <span className={`text-label transition-colors duration-300 ${isScrolled || !isHome ? 'text-golden-hour' : 'text-golden-hour'}`}>
                KENYA
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              link.hash ? (
                <button
                  key={link.label}
                  onClick={() => handleHashClick(link.hash!)}
                  className={`font-body font-medium text-sm uppercase tracking-widest transition-colors duration-300 hover:text-golden-hour bg-transparent border-none cursor-pointer ${
                    isScrolled || !isHome ? 'text-cream-white/80' : 'text-cream-white/80'
                  }`}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`font-body font-medium text-sm uppercase tracking-widest transition-colors duration-300 hover:text-golden-hour ${
                    isScrolled || !isHome ? 'text-cream-white/80' : 'text-cream-white/80'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
            <Link
              to="/donate"
              className="btn-primary text-sm py-3 px-6 animate-pulse-dot"
              style={{ animation: 'pulse-dot 3s ease-in-out 1' }}
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-cream-white p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-deep-forest transition-transform duration-500 lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-end">
            <button
              onClick={() => setMobileOpen(false)}
              className="text-cream-white p-2"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {navLinks.map((link) => (
              link.hash ? (
                <button
                  key={link.label}
                  onClick={() => handleHashClick(link.hash!)}
                  className="font-display font-bold text-3xl text-cream-white hover:text-golden-hour transition-colors bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="font-display font-bold text-3xl text-cream-white hover:text-golden-hour transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
            <Link
              to="/donate"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-4"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
