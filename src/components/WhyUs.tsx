import { motion } from 'framer-motion'
import { Clock, HeartHandshake, MapPinned, Wrench } from 'lucide-react'
import { fadeUp, slideInLeft, slideInRight, staggerContainer, viewport } from '../lib/animations'

const points = [
  {
    icon: Clock,
    title: 'Respuesta rápida',
    text: 'Clientes destacan respuesta inmediata y cumplimiento de día y hora acordados.',
  },
  {
    icon: HeartHandshake,
    title: 'Trato amable',
    text: 'Opiniones mencionan buena disposición y trato cordial, incluyendo a JuanCarlos y Matías.',
  },
  {
    icon: Wrench,
    title: 'Trabajo prolijo',
    text: 'Reseñas resaltan trabajo eficiente, correcto y de calidad en calefones y hornos.',
  },
  {
    icon: MapPinned,
    title: 'Montevideo y Canelones',
    text: 'Atendemos en Montevideo y Canelones, con servicio disponible las 24 horas.',
  },
]

export function WhyUs() {
  return (
    <section id="nosotros" className="overflow-hidden bg-surface">
      <div className="grid lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={slideInLeft}
          className="relative min-h-[240px] sm:min-h-[320px] lg:min-h-[640px]"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=80"
            alt="Técnico realizando trabajo de gas"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-black/25" />
        </motion.div>

        <div className="flex flex-col justify-center px-4 py-12 sm:px-[4%] sm:py-16 lg:px-12 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
          >
            <motion.p variants={fadeUp} custom={0} className="mb-3 text-xs font-semibold tracking-[0.2em] text-brand-light uppercase">
              Por qué elegirnos
            </motion.p>
            <motion.h2 variants={fadeUp} custom={0.05} className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              Lo que dicen quienes ya nos contrataron
            </motion.h2>
            <motion.p variants={fadeUp} custom={0.1} className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
              Más de cien clientes nos eligen por nuestra rapidez, trato y calidad de trabajo.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-5"
          >
            {points.map((point, index) => (
              <motion.div
                key={point.title}
                variants={slideInRight}
                custom={index * 0.08}
                whileHover={{ y: -4, borderColor: 'rgba(249,115,22,0.3)' }}
                className="rounded-xl border border-white/10 bg-white/5 p-4 sm:rounded-2xl sm:p-5"
              >
                <motion.div whileHover={{ rotate: 10, scale: 1.1 }}>
                  <point.icon className="mb-2 h-5 w-5 text-brand sm:mb-3" />
                </motion.div>
                <h3 className="text-sm font-semibold text-white sm:text-base">{point.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/60 sm:mt-2 sm:text-sm">{point.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
