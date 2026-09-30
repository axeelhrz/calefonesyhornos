import { AnimatePresence, motion } from 'framer-motion'
import { Clock, MapPin, MessageCircle, Phone, X } from 'lucide-react'
import { business, navLinks } from '../data/business'
import { fadeUp, staggerContainer } from '../lib/animations'
import { Button } from './ui/Button'
import { WhatsAppLink } from './ui/WhatsAppLink'

type MobileNavProps = {
  open: boolean
  active: string
  onClose: () => void
}

export function MobileNav({ open, active, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Cerrar menú"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />

          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 320 }}
            className="fixed top-0 right-0 z-50 flex h-[100dvh] w-[min(320px,88vw)] flex-col border-l border-white/10 bg-surface shadow-2xl lg:hidden"
            aria-modal="true"
            role="dialog"
            aria-label="Menú de navegación"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <motion.span
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', delay: 0.1 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" />
                  </svg>
                </motion.span>
                <div>
                  <p className="text-sm font-bold text-white">{business.shortName}</p>
                  <p className="text-[11px] text-white/50">{business.category}</p>
                </div>
              </div>
              <motion.button
                type="button"
                aria-label="Cerrar"
                onClick={onClose}
                whileTap={{ scale: 0.9, rotate: 90 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white"
              >
                <X className="h-5 w-5" />
              </motion.button>
            </div>

            <motion.nav
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex-1 overflow-y-auto px-4 py-5"
            >
              <p className="mb-3 px-2 text-[11px] font-semibold tracking-widest text-white/35 uppercase">
                Menú
              </p>
              <ul className="space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = active === link.id
                  return (
                    <motion.li key={link.href} variants={fadeUp} custom={index * 0.06}>
                      <a
                        href={link.href}
                        onClick={onClose}
                        className={`flex items-center rounded-2xl px-4 py-3.5 text-base font-medium transition ${
                          isActive
                            ? 'bg-brand/15 text-brand-light'
                            : 'text-white/85 active:bg-white/10'
                        }`}
                      >
                        {link.label}
                        {isActive && (
                          <motion.span
                            layoutId="mobile-nav-active"
                            className="ml-auto h-2 w-2 rounded-full bg-brand"
                          />
                        )}
                      </a>
                    </motion.li>
                  )
                })}
              </ul>

              <motion.div
                variants={fadeUp}
                custom={0.3}
                className="mt-6 space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <Phone className="h-4 w-4 shrink-0 text-brand" />
                  <a href={business.phoneHref} className="font-semibold text-white">
                    {business.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3 text-sm text-white/70">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>{business.address.street}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <Clock className="h-4 w-4 shrink-0 text-brand" />
                  <span>{business.hours}</span>
                </div>
              </motion.div>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-3 border-t border-white/10 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
            >
              <WhatsAppLink className="w-full rounded-2xl px-5 py-3.5 text-sm">
                <MessageCircle className="h-4 w-4" />
                Escribir por WhatsApp
              </WhatsAppLink>
              <Button href={business.phoneHref} className="w-full justify-center rounded-2xl py-3.5">
                <Phone className="h-4 w-4" />
                Llamar {business.phone}
              </Button>
            </motion.div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
