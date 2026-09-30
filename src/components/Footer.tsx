import { motion } from 'framer-motion'
import { Flame, MapPin, Phone } from 'lucide-react'
import { business, navLinks } from '../data/business'
import { fadeUp, staggerContainer, viewport } from '../lib/animations'

export function Footer() {
  return (
    <footer className="bg-neutral-950 pb-[calc(5rem+env(safe-area-inset-bottom))] text-white/65 sm:pb-8">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-[4%]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-8 border-t border-white/10 py-10 sm:gap-10 sm:py-12 md:grid-cols-[1.4fr_1fr_1fr]"
        >
          <motion.div variants={fadeUp} custom={0}>
            <div className="flex items-center gap-3">
              <motion.span
                whileHover={{ rotate: 12, scale: 1.1 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white"
              >
                <Flame className="h-5 w-5" />
              </motion.span>
              <div>
                <p className="font-bold text-white">{business.shortName}</p>
                <p className="text-xs text-brand-light">{business.category}</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              {business.name} en {business.tagline}. Servicio técnico de confianza
              con {business.rating} estrellas.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} custom={0.08}>
            <p className="mb-3 text-sm font-semibold text-white sm:mb-4">Enlaces</p>
            <ul className="grid grid-cols-2 gap-2 text-sm sm:block sm:space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="block py-1 transition hover:translate-x-1 hover:text-brand-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} custom={0.16}>
            <p className="mb-3 text-sm font-semibold text-white sm:mb-4">Contacto</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={business.phoneHref} className="inline-flex items-center gap-2 py-1 transition hover:text-brand-light">
                  <Phone className="h-4 w-4 text-brand" />
                  {business.phone}
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{business.address.street}, {business.address.city}</span>
              </li>
              <li className="text-white/45">{business.hours}</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-white/10 pt-5 text-center text-xs text-white/40 sm:pt-6"
        >
          © {new Date().getFullYear()} {business.shortName}. Todos los derechos reservados.
        </motion.div>
      </div>
    </footer>
  )
}
