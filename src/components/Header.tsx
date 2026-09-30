import { motion, useReducedMotion } from 'framer-motion'
import { Menu, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { business, navLinks } from '../data/business'
import { useActiveSection } from '../hooks/useActiveSection'
import { MobileNav } from './MobileNav'

const sectionIds = navLinks.map((link) => link.id)

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <motion.header
        initial={reduce ? false : { y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-5"
      >
        <motion.div
          layout
          transition={{ duration: 0.3 }}
          className={`pointer-events-auto mx-auto flex w-full max-w-6xl items-center gap-3 rounded-2xl px-3 py-2.5 sm:gap-4 sm:px-4 sm:py-3 md:px-6 ${
            scrolled || open
              ? 'border border-white/10 bg-surface/95 shadow-2xl shadow-black/30 backdrop-blur-xl'
              : 'bg-black/20 backdrop-blur-md sm:bg-transparent sm:backdrop-blur-none'
          }`}
        >
          <a href="#inicio" className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3 lg:flex-none">
            <motion.span
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-brand/25 sm:h-10 sm:w-10"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current sm:h-5 sm:w-5">
                <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" />
              </svg>
            </motion.span>
            <span className="min-w-0 leading-tight text-white">
              <strong className="block truncate text-[13px] sm:text-sm md:text-base">
                {business.shortName}
              </strong>
              <small className="hidden truncate text-[11px] text-white/60 sm:block">
                {business.category}
              </small>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative rounded-full px-4 py-2 text-sm font-medium transition text-white/70 hover:text-white"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-white/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? 'text-white' : ''}`}>
                    {link.label}
                  </span>
                </a>
              )
            })}
          </nav>

          <motion.a
            href={business.phoneHref}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="hidden items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-brand/25 md:inline-flex md:text-sm"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden xl:inline">{business.phone}</span>
            <span className="xl:hidden">Llamar</span>
          </motion.a>

          <motion.button
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            whileTap={{ scale: 0.92 }}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 text-white lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </motion.header>

      <MobileNav open={open} active={active} onClose={() => setOpen(false)} />
    </>
  )
}
