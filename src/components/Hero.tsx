import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, MapPin, Phone, Star } from 'lucide-react'
import { business, highlights } from '../data/business'
import { ease, fadeUp, staggerContainer } from '../lib/animations'
import { Button } from './ui/Button'
import { WhatsAppLink } from './ui/WhatsAppLink'

const iconMap = {
  shield: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
    />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" strokeWidth={2} />
      <path strokeLinecap="round" strokeWidth={2} d="M12 6v6l4 2" />
    </>
  ),
  map: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
      />
      <circle cx="12" cy="10" r="3" strokeWidth={2} />
    </>
  ),
  star: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"
    />
  ),
}

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="inicio" className="relative min-h-[100dvh] overflow-hidden bg-surface">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1920&q=80')",
        }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease }}
      />
      <div className="absolute inset-0 bg-linear-to-br from-black/92 via-black/78 to-black/88" />

      <motion.div
        className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand/20 blur-3xl sm:h-96 sm:w-96"
        animate={reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-brand/10 blur-3xl"
        animate={reduce ? undefined : { scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto flex min-h-[100dvh] w-full max-w-6xl flex-col justify-center px-4 pt-24 pb-28 sm:px-[4%] sm:pt-28 sm:pb-20 lg:pb-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} custom={0} className="glass mb-5 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full px-3 py-2 text-xs text-white/90 sm:mb-6 sm:gap-3 sm:px-4 sm:text-sm">
              <span className="flex items-center gap-0.5 text-brand">
                {Array.from({ length: 5 }).map((_, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.08, type: 'spring', stiffness: 300 }}
                  >
                    <Star className="h-3 w-3 fill-brand sm:h-3.5 sm:w-3.5" />
                  </motion.span>
                ))}
              </span>
              <span className="leading-snug">
                {business.rating} · {business.reviewCount} opiniones
              </span>
            </motion.div>

            <motion.p variants={fadeUp} custom={0.05} className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-brand-light uppercase sm:mb-4 sm:text-xs">
              {business.category}
            </motion.p>

            <motion.h1 variants={fadeUp} custom={0.1} className="max-w-3xl text-[1.75rem] leading-[1.08] font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {business.name.split(',')[0]},{' '}
              <span className="text-gradient">hornos a gas y más.</span>
            </motion.h1>

            <motion.p variants={fadeUp} custom={0.15} className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/75 sm:mt-6 sm:text-lg">
              Servicio técnico en {business.tagline}. {business.hours}, con respuesta
              rápida y trabajo prolijo.
            </motion.p>

            <motion.div variants={fadeUp} custom={0.2} className="mt-4 flex flex-col gap-2 text-sm text-white/70 sm:flex-row sm:flex-wrap sm:gap-4">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-brand" />
                <span className="truncate">{business.address.street}</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-brand" />
                {business.phone}
              </span>
            </motion.div>

            <motion.div variants={fadeUp} custom={0.25} className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4 lg:hidden">
              <Button href={business.phoneHref} className="w-full justify-center py-3.5 sm:w-auto">
                <Phone className="h-4 w-4" />
                Llamar ahora
              </Button>
              <WhatsAppLink className="w-full rounded-full px-6 py-3.5 text-sm sm:w-auto">
                Solicitar servicio
              </WhatsAppLink>
            </motion.div>

            <motion.div variants={fadeUp} custom={0.25} className="mt-6 hidden flex-wrap gap-4 lg:flex">
              <Button href={business.phoneHref}>
                <Phone className="h-4 w-4" />
                Llamar ahora
              </Button>
              <Button href={business.whatsappHref} variant="ghost">
                Solicitar servicio
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <div className="glass-dark rounded-2xl p-5 sm:rounded-3xl sm:p-8">
              <motion.p
                className="font-display text-xl text-white/80 italic sm:text-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Tu confort, en buenas manos.
              </motion.p>
              <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-8 sm:gap-4">
                {business.reviewKeywords.map((keyword, index) => (
                  <motion.div
                    key={keyword}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.08, ease }}
                    whileHover={{ scale: 1.03, borderColor: 'rgba(249,115,22,0.4)' }}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white/80 capitalize sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm"
                  >
                    #{keyword}
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, ease }}
                className="mt-4 rounded-xl border border-brand/30 bg-brand/10 p-3 sm:mt-6 sm:rounded-2xl sm:p-4"
              >
                <p className="text-xs text-white/80 sm:text-sm">
                  “Respondió rápido y cumplió con el día y hora acordado.”
                </p>
                <p className="mt-1.5 text-[11px] text-brand-light sm:mt-2 sm:text-xs">
                  — Cliente satisfecho
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-2 gap-3 border-t border-white/10 pt-6 sm:mt-14 sm:gap-4 sm:pt-8 xl:grid-cols-4"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={index * 0.08}
              whileHover={{ y: -3 }}
              className="flex items-start gap-2.5 sm:gap-3"
            >
              <motion.span
                whileHover={{ rotate: 8, scale: 1.08 }}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/15 text-brand sm:h-11 sm:w-11 sm:rounded-xl"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 sm:h-5 sm:w-5">
                  {iconMap[item.icon]}
                </svg>
              </motion.span>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-white sm:text-sm">{item.title}</p>
                <p className="text-[11px] leading-snug text-white/55 sm:text-xs">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
