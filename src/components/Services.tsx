import { motion } from 'framer-motion'
import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react'
import { business, services } from '../data/business'
import { fadeUp, slideInRight, staggerContainer, viewport } from '../lib/animations'
import { Button } from './ui/Button'
import { WhatsAppLink } from './ui/WhatsAppLink'

export function Services() {
  return (
    <section id="servicios" className="section-pad bg-neutral-50">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-[4%]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.p variants={fadeUp} custom={0} className="mb-2 text-xs font-semibold tracking-[0.2em] text-brand uppercase">
              Nuestros servicios
            </motion.p>
            <motion.h2 variants={fadeUp} custom={0.05} className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl md:text-4xl">
              Todo lo que necesitás para tu hogar
            </motion.h2>
            <motion.p variants={fadeUp} custom={0.1} className="mt-3 text-sm leading-relaxed text-neutral-500 sm:mt-4 sm:text-base">
              Reparación e instalación de calefones, hornos y cocinas a gas en{' '}
              {business.tagline}. Respuesta rápida y trabajo prolijo.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideInRight}
            custom={0.1}
            className="hidden shrink-0 flex-col gap-3 sm:flex sm:flex-row lg:flex"
          >
            <Button href={business.phoneHref} variant="secondary" className="justify-center">
              <Phone className="h-4 w-4" />
              Llamar ahora
            </Button>
            <WhatsAppLink className="rounded-full px-6 py-3 text-sm">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </WhatsAppLink>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              variants={fadeUp}
              custom={index * 0.08}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200/80 sm:rounded-3xl"
            >
              <div className="relative h-40 overflow-hidden sm:h-44">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-full bg-brand px-2.5 py-0.5 text-[11px] font-semibold text-white sm:px-3 sm:py-1 sm:text-xs">
                  0{index + 1}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="text-base font-bold text-neutral-900 sm:text-lg">{service.title}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-neutral-500">{service.description}</p>
                <a
                  href={business.whatsappHref}
                  className="mt-3 inline-flex items-center gap-1 py-1 text-sm font-semibold text-brand sm:mt-4"
                >
                  Solicitar
                  <motion.span whileHover={{ x: 3, y: -3 }}>
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.span>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
