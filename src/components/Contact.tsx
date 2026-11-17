import { motion } from 'framer-motion'
import { business } from '../data/business'
import { viewRise, viewport } from '../lib/motion'

export function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-ink py-24 text-paper sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,92,38,0.18),transparent_50%)]" />
      <div className="relative px-5 sm:px-8 lg:px-10">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={viewRise}
          className="text-[11px] tracking-[0.28em] uppercase text-paper/40"
        >
          ( Contacto )
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={viewRise}
          custom={0.08}
          className="mt-4 max-w-4xl font-serif text-[13vw] leading-[0.88] tracking-[-0.045em] sm:text-[8vw] lg:text-[6vw]"
        >
          Hecho para
          <br />
          cómo <em className="italic">vivís</em>
          <br />
          la casa.
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={viewRise}
          custom={0.18}
          className="mt-6 max-w-lg text-[15px] leading-relaxed text-paper/60"
        >
          Coordiná visita en el día. Atendemos urgencias en {business.tagline}, las 24 horas.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={viewRise}
          custom={0.28}
          className="mt-12 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-3"
        >
          <a href={business.phoneHref} className="group block hover:-translate-y-0.5">
            <p className="text-[11px] tracking-[0.2em] uppercase text-paper/40">Teléfono</p>
            <p className="mt-2 font-serif text-3xl tracking-[-0.03em] group-hover:text-brand">
              {business.phone}
            </p>
            <p className="mt-1 text-sm text-paper/50">{business.hours}</p>
          </a>
          <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="group block hover:-translate-y-0.5">
            <p className="text-[11px] tracking-[0.2em] uppercase text-paper/40">Dirección</p>
            <p className="mt-2 font-serif text-3xl tracking-[-0.03em] group-hover:text-brand">
              {business.address.street}
            </p>
            <p className="mt-1 text-sm text-paper/50">{business.address.city}</p>
          </a>
          <a href={business.whatsappHref} target="_blank" rel="noopener noreferrer" className="group block hover:-translate-y-0.5">
            <p className="text-[11px] tracking-[0.2em] uppercase text-paper/40">WhatsApp</p>
            <p className="mt-2 font-serif text-3xl tracking-[-0.03em] group-hover:text-brand">
              Escribinos
            </p>
            <p className="mt-1 text-sm text-paper/50">Respuesta inmediata</p>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
