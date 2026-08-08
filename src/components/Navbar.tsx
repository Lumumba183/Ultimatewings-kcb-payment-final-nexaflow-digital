import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
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

  const isHome = location.pathname === '/'

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
          <Link to="/" className="flex items-center gap-2 group">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:scale-110">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill={isScrolled || !isHome ? '#C9912A' : '#C9912A'}/>
            </svg>
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
                  onClick={() => {
                    if (!isHome) {
                      window.location.href = '/' + link.hash
                    } else {
                      scrollToSection(link.hash)
                    }
                  }}
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
                  onClick={() => {
                    setMobileOpen(false)
                    if (!isHome) {
                      window.location.href = '/' + link.hash
                    } else {
                      setTimeout(() => scrollToSection(link.hash), 300)
                    }
                  }}
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
