import { motion } from 'framer-motion'
import { Clock, MessageCircle, Phone, Star } from 'lucide-react'
import { business } from '../data/business'
import { fadeUp, scaleIn, staggerContainer, viewport } from '../lib/animations'
import { Button } from './ui/Button'
import { WhatsAppLink } from './ui/WhatsAppLink'

export function CTA() {
  return (
    <section className="bg-neutral-950 pb-8 pt-4 sm:pb-24 sm:pt-6">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-[4%]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={scaleIn}
          custom={0}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 sm:rounded-[2rem]"
        >
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.18),transparent_55%)]"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative grid gap-8 p-5 sm:gap-10 sm:p-8 md:grid-cols-2 md:items-center md:p-12 lg:p-14">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
              <motion.span variants={fadeUp} custom={0} className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-[11px] font-semibold text-brand-light sm:px-4 sm:text-xs">
                <Clock className="h-3.5 w-3.5" />
                Disponibles las 24 horas
              </motion.span>

              <motion.h2 variants={fadeUp} custom={0.05} className="mt-4 text-2xl font-bold tracking-tight text-white sm:mt-5 sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-tight">
                ¿Urgencia con tu calefón u horno?
              </motion.h2>

              <motion.p variants={fadeUp} custom={0.1} className="mt-3 text-sm leading-relaxed text-white/60 sm:mt-4 sm:text-base">
                Coordinamos visita en el día en {business.tagline}. Escribinos o
                llamanos directo, sin vueltas.
              </motion.p>

              <motion.div variants={fadeUp} custom={0.15} className="mt-4 flex flex-wrap gap-3 text-xs text-white/50 sm:mt-6 sm:gap-4 sm:text-sm">
                <span className="inline-flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-brand text-brand" />
                  {business.rating} · {business.reviewCount} opiniones
                </span>
                <span className="hidden h-4 w-px bg-white/15 sm:block" />
                <span>{business.category}</span>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="flex flex-col gap-3 sm:gap-4"
            >
              <motion.a
                variants={fadeUp}
                custom={0}
                href={business.phoneHref}
                whileHover={{ scale: 1.02, borderColor: 'rgba(249,115,22,0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 sm:gap-4 sm:p-5"
              >
                <motion.span
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-brand/30 sm:h-14 sm:w-14"
                >
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.span>
                <div className="min-w-0">
                  <p className="text-[10px] font-medium tracking-wider text-white/45 uppercase sm:text-xs">
                    Llamada directa
                  </p>
                  <p className="text-xl font-bold text-white sm:text-2xl md:text-3xl">{business.phone}</p>
                </div>
              </motion.a>

              <motion.div variants={fadeUp} custom={0.08}>
                <WhatsAppLink className="w-full rounded-2xl px-5 py-3.5 text-sm sm:px-6 sm:py-4 sm:text-base">
                  <MessageCircle className="h-5 w-5" />
                  Escribir por WhatsApp
                </WhatsAppLink>
              </motion.div>

              <motion.div variants={fadeUp} custom={0.16}>
                <Button href={business.phoneHref} variant="outline" className="w-full rounded-2xl py-3.5 text-sm sm:py-4 sm:text-base">
                  <Phone className="h-5 w-5" />
                  Llamar ahora
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
