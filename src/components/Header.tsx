import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { business, navLinks } from '../data/business'
import { useActiveSection } from '../hooks/useActiveSection'
import { expo } from '../lib/motion'

const sectionIds = navLinks.map((link) => link.id)

export function Header() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: expo }}
          className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/15 bg-ink/55 px-4 py-2.5 backdrop-blur-xl sm:px-5"
        >
          <a href="#inicio" className="min-w-0 text-white hover:opacity-70">
            <p className="truncate font-serif text-[18px] leading-none tracking-[-0.03em] sm:text-[22px]">
              {business.shortName}
            </p>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-3 py-2 text-[12px] tracking-[0.12em] uppercase transition ${
                    isActive ? 'text-white' : 'text-white/55 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-white/15"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={business.phoneHref}
              className="hidden rounded-full bg-paper px-4 py-2 text-[12px] text-ink hover:bg-white hover:shadow-md sm:inline-flex"
            >
              {business.phone}
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/15 md:hidden"
              aria-label="Abrir menú"
            >
              <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
                <path d="M0 1h22M0 9h22" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </button>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink/95 px-6 pt-6 text-paper backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between">
              <p className="font-serif text-xl">{business.shortName}</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-[12px] tracking-[0.2em] uppercase hover:text-brand"
              >
                Cerrar
              </button>
            </div>
            <nav className="mt-16 flex flex-col gap-5">
              {navLinks.map((link) => {
                const isActive = active === link.id
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`font-serif text-5xl tracking-[-0.04em] hover:text-brand ${
                      isActive ? 'text-brand' : 'text-paper'
                    }`}
                  >
                    {link.label}
                  </a>
                )
              })}
            </nav>
            <a href={business.phoneHref} className="mt-10 inline-block text-sm hover:text-brand">
              {business.phone}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
