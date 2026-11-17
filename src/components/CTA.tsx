import { motion } from 'framer-motion'
import { business } from '../data/business'
import { viewRise, viewport } from '../lib/motion'

export function CTA() {
  return (
    <section className="bg-paper px-5 py-8 sm:px-8 sm:py-12 lg:px-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={viewRise}
        className="relative overflow-hidden bg-brand px-6 py-12 text-paper sm:px-12 sm:py-16"
      >
        <p className="text-[11px] tracking-[0.28em] uppercase text-white/70">Urgencias 24 horas</p>
        <h2 className="mt-4 max-w-2xl font-serif text-[12vw] leading-[0.9] tracking-[-0.04em] sm:text-[5.5vw]">
          ¿El calefón
          <br />
          se <em className="italic">apagó</em>?
        </h2>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center bg-ink px-7 text-[13px] text-paper hover:-translate-y-0.5 hover:bg-black hover:shadow-lg"
          >
            WhatsApp
          </a>
          <a
            href={business.phoneHref}
            className="inline-flex h-12 items-center justify-center border border-white/40 px-7 text-[13px] text-white hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-ink"
          >
            Llamar ahora
          </a>
        </div>
      </motion.div>
    </section>
  )
}
