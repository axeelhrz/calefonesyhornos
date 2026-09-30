import { motion } from 'framer-motion'
import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react'
import { business } from '../data/business'
import { fadeUp, staggerContainer, viewport } from '../lib/animations'

const items = [
  {
    icon: Phone,
    title: 'Teléfono',
    value: business.phone,
    detail: business.hours,
    href: business.phoneHref,
    cta: 'Llamar',
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    value: business.address.street,
    detail: `${business.address.city}, Uruguay`,
    href: business.mapsUrl,
    cta: 'Cómo llegar',
    external: true,
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: 'Escribinos directo',
    detail: business.phone,
    href: business.whatsappHref,
    cta: 'Abrir chat',
    external: true,
  },
]

export function Contact() {
  return (
    <section id="contacto" className="section-pad bg-neutral-50">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-[4%]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p variants={fadeUp} custom={0} className="mb-2 text-xs font-semibold tracking-[0.2em] text-brand uppercase">
            Contacto
          </motion.p>
          <motion.h2 variants={fadeUp} custom={0.05} className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl md:text-4xl">
            Estamos disponibles las 24 horas
          </motion.h2>
          <motion.p variants={fadeUp} custom={0.1} className="mt-3 text-sm text-neutral-500 sm:mt-4 sm:text-base">
            Coordiná tu visita por teléfono o WhatsApp. Atendemos en {business.tagline}.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 md:grid-cols-3"
        >
          {items.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              variants={fadeUp}
              custom={index * 0.1}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-neutral-200/80 sm:rounded-3xl sm:p-7"
            >
              <motion.span
                whileHover={{ rotate: 8, scale: 1.1 }}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand sm:h-12 sm:w-12 sm:rounded-2xl sm:group-hover:bg-brand sm:group-hover:text-white"
              >
                <item.icon className="h-5 w-5" />
              </motion.span>
              <p className="mt-4 text-[11px] font-semibold tracking-wider text-neutral-400 uppercase sm:mt-5">
                {item.title}
              </p>
              <p className="mt-1 text-lg font-bold text-neutral-900 sm:text-xl">{item.value}</p>
              <p className="mt-1 text-sm text-neutral-500">{item.detail}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand sm:mt-5">
                {item.cta}
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  →
                </motion.span>
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ delay: 0.3 }}
          className="mt-6 flex flex-col items-center gap-3 text-center text-xs text-neutral-500 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 sm:text-sm"
        >
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-brand" />
            {business.hours}
          </span>
          <span className="hidden h-4 w-px bg-neutral-300 sm:block" />
          <span className="max-w-md leading-relaxed">{business.address.full}</span>
        </motion.div>
      </div>
    </section>
  )
}
