import { motion } from 'framer-motion'
import { ABOUT_IMAGE, business } from '../data/business'
import { viewRise, viewport } from '../lib/motion'

export function WhyUs() {
  return (
    <section className="bg-ink">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[320px] lg:min-h-[520px]">
          <img
            src={ABOUT_IMAGE}
            alt="Técnico trabajando en una instalación de gas"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-5 py-16 text-paper sm:px-10 lg:py-24">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={viewRise}
            className="text-[11px] tracking-[0.28em] uppercase text-paper/40"
          >
            ( Nosotros )
          </motion.p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={viewRise}
            custom={0.08}
            className="mt-4 font-serif text-[12vw] leading-[0.9] tracking-[-0.04em] sm:text-[56px] lg:text-[64px]"
          >
            Trabajo como
            <br />
            si el gas <em className="italic">nunca</em>
            <br />
            se hubiera ido.
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={viewRise}
            custom={0.16}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/65"
          >
            Somos instaladores de gas en {business.tagline}. JuanCarlos y Matías
            atienden urgencias las 24 horas, con respuesta inmediata y trabajo prolijo.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
