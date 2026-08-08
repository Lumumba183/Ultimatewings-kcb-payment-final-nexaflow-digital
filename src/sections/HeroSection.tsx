import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import gsap from 'gsap'

/* ---------- smooth scroll helper ---------- */
function scrollToSection(id: string) {
  const element = document.querySelector(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

/* ---------- particle system ---------- */
interface Particle {
  x: number
  y: number
  size: number
  speedY: number
  opacity: number
  phase: number
  color: string
}

const PARTICLE_COLORS = ['#F7B731', '#C9912A', '#D4C5A9', '#E8D5A3']
const PARTICLE_COUNT = 250

function useParticles(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio, 2)
    let W = window.innerWidth
    let H = window.innerHeight
    canvas.width = W * dpr
    canvas.height = H * dpr
    ctx.scale(dpr, dpr)

    let wind = 0
    let mouseX = W / 2
    let time = 0
    let raf = 0

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      size: 1.5 + Math.random() * 2,
      speedY: 0.3 + Math.random() * 0.7,
      opacity: 0.2 + Math.random() * 0.4,
      phase: Math.random() * Math.PI * 2,
      color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
    }))

    const onMouse = (e: MouseEvent) => { mouseX = e.clientX }
    window.addEventListener('mousemove', onMouse, { passive: true })

    const loop = () => {
      time++
      const targetWind = (mouseX / W - 0.5) * 0.8
      wind += (targetWind - wind) * 0.02

      ctx.clearRect(0, 0, W, H)
      ctx.globalCompositeOperation = 'screen'

      for (const p of particles) {
        p.y -= p.speedY
        p.x += Math.sin(time * 0.002 + p.phase) * 0.25 + wind * 0.01

        if (p.y < -10) {
          p.y = H + 10
          p.x = Math.random() * W
        }

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size)
        gradient.addColorStop(0, p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, '0'))
        gradient.addColorStop(1, p.color + '00')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(loop)
    }

    raf = requestAnimationFrame(loop)

    const onResize = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = W * dpr
      canvas.height = H * dpr
      ctx.scale(dpr, dpr)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
    }
  }, [canvasRef])
}

/* ---------- hero section ---------- */
export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  useParticles(canvasRef)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    tl.fromTo('.hero-tagline', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, 0.8)
      .fromTo('.hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2 }, 1)
      .fromTo('.hero-sub', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, 1.5)
      .fromTo('.hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 2)
      .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 1, duration: 0.6 }, 2.5)

    return () => { tl.kill() }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Static image background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-image.png"
          alt="Community members in Kenya"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(201, 145, 42, 0.12) 0%, rgba(28, 51, 40, 0.45) 100%)',
          }}
        />
      </div>

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Content */}
      <div className="relative z-[3] w-full content-max-width mx-auto px-6 lg:px-12 pt-[15vh]">
        <div className="max-w-2xl">
          <p className="hero-tagline text-label text-cream-white/85 mb-6 opacity-0">
            EMPOWERING COMMUNITIES IN KENYA
          </p>
          <h1 className="hero-title text-display text-cream-white hero-text-shadow opacity-0" style={{ fontSize: 'clamp(60px, 10vw, 120px)' }}>
            Restoring<br />Hope
          </h1>
          <p className="hero-sub text-cream-white/90 mt-6 max-w-[520px] leading-relaxed opacity-0" style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)' }}>
            Through education, economic empowerment, and holistic support — we transform vulnerable lives across Kenya.
          </p>
          <div className="hero-cta flex flex-wrap items-center gap-5 mt-10 opacity-0">
            <Link to="/contact" className="btn-primary">
              Donate Now <ArrowRight size={18} />
            </Link>
            <button
              onClick={() => scrollToSection('#programs')}
              className="link-arrow text-cream-white hover:text-golden-hour underline underline-offset-4 bg-transparent border-none cursor-pointer"
            >
              Our Programs <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Impact indicator */}
      <div className="absolute bottom-[5vh] right-[5vw] z-[3] hidden md:flex items-center gap-3 bg-cream-white/12 backdrop-blur-md rounded-full px-5 py-3">
        <span className="w-2 h-2 rounded-full bg-amber-light animate-pulse-dot" />
        <span className="text-cream-white text-sm font-medium">63+ children in school</span>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-[5vh] left-1/2 -translate-x-1/2 z-[3] opacity-0">
        <ChevronDown size={24} className="text-cream-white/60 animate-bounce-chevron" />
      </div>
    </section>
  )
}
