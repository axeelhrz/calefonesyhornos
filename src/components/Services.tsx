import { motion } from 'framer-motion'
import { business, services } from '../data/business'
import { viewRise, viewport } from '../lib/motion'

export function Services() {
  return (
    <section id="servicios" className="bg-paper pt-20 pb-8 text-ink sm:pt-28">
      <div className="px-5 sm:px-8 lg:px-10">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={viewRise}
          className="text-[11px] tracking-[0.28em] uppercase text-ink/45"
        >
          ( Nuestros servicios )
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={viewRise}
          custom={0.1}
          className="mt-4 max-w-3xl font-serif text-[12vw] leading-[0.9] tracking-[-0.04em] sm:text-[7vw] lg:text-[5.5vw]"
        >
          Tres formas
          <br />
          de <em className="italic">arreglarlo.</em>
        </motion.h2>
      </div>

      <div className="mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-6 sm:mt-16 sm:gap-4 sm:px-8 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-10">
        {services.map((service, i) => (
          <motion.a
            key={service.id}
            href={business.whatsappHref}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={viewRise}
            custom={i * 0.08}
            className="group relative h-[52vh] min-h-[340px] w-[78vw] shrink-0 snap-center overflow-hidden sm:w-[48vw] lg:h-[480px] lg:w-auto"
          >
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/15 to-ink/10" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
              <p className="text-[11px] tracking-[0.2em] text-white/55 uppercase">
                {service.kicker} / nuestro
              </p>
              <h3 className="mt-2 font-serif text-[32px] leading-none tracking-[-0.03em] sm:text-[36px]">
                ({service.title})
              </h3>
              <p className="mt-3 max-w-[18rem] text-[13px] leading-relaxed text-white/75">
                {service.description}
              </p>
              <span className="mt-5 inline-block text-[11px] tracking-[0.18em] uppercase transition group-hover:translate-x-1 group-hover:text-brand">
                Solicitar →
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
