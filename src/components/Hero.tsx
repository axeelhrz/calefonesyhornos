import { motion, useReducedMotion } from 'framer-motion'
import { business, HERO_IMAGE, HERO_VIDEO } from '../data/business'
import { expo, rise } from '../lib/motion'

const lines = ['El calor', 'no espera.', 'Nosotros', 'tampoco.']

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="inicio" className="relative h-[100dvh] min-h-[640px] overflow-hidden bg-ink">
      <motion.img
        src={HERO_IMAGE}
        alt="Cocina con equipo a gas"
        className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
        initial={reduce ? false : { scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: expo }}
      />
      {!reduce && (
        <video
          src={HERO_VIDEO}
          poster={HERO_IMAGE}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
        />
      )}
      <div className="absolute inset-0 bg-linear-to-b from-ink/60 via-ink/30 to-ink/85" />
      <div className="absolute inset-0 bg-linear-to-r from-ink/75 via-ink/20 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-16">
        <p className="mb-5 max-w-xs text-[11px] leading-relaxed tracking-[0.04em] text-white/70 sm:mb-8 sm:max-w-sm sm:text-xs">
          Servicio técnico de gas, hecho para las cosas que realmente necesitás: agua caliente, cocina y horno funcionando.
        </p>

        <h1 className="font-serif text-[18vw] leading-[0.82] tracking-[-0.045em] text-white sm:text-[12vw] lg:text-[9.2vw]">
          {lines.map((line, i) => (
            <motion.span key={line} className="block" {...rise(0.18 + i * 0.12)}>
              {i === 3 ? <em className="italic">{line}</em> : line}
            </motion.span>
          ))}
        </h1>

        <motion.div
          {...rise(0.78)}
          className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center"
        >
          <a
            href={business.phoneHref}
            className="inline-flex h-12 items-center justify-center rounded-full bg-paper px-7 text-[13px] tracking-[0.04em] text-ink hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_28px_rgba(0,0,0,0.25)]"
          >
            Llamar {business.phone}
          </a>
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-7 text-[13px] tracking-[0.04em] text-white hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-ink"
          >
            Escribir por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
