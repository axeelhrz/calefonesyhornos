import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { business, testimonials } from '../data/business'
import { fadeUp, scaleIn, staggerContainer, viewport } from '../lib/animations'

function Stars({ count, size = 'md' }: { count: number; size?: 'sm' | 'md' }) {
  const iconSize = size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4'
  return (
    <span className="flex gap-0.5 text-brand">
      {Array.from({ length: count }).map((_, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.06, type: 'spring', stiffness: 400 }}
        >
          <Star className={`${iconSize} fill-brand`} />
        </motion.span>
      ))}
    </span>
  )
}

export function Testimonials() {
  const [featured, ...rest] = testimonials

  return (
    <section id="opiniones" className="section-pad bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-[4%]">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
            className="lg:sticky lg:top-28"
          >
            <motion.p variants={fadeUp} custom={0} className="mb-2 text-xs font-semibold tracking-[0.2em] text-brand uppercase">
              Opiniones
            </motion.p>
            <motion.h2 variants={fadeUp} custom={0.05} className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl md:text-4xl">
              Confianza que se nota
            </motion.h2>
            <motion.p variants={fadeUp} custom={0.1} className="mt-3 text-sm text-neutral-500 sm:mt-4 sm:text-base">
              Clientes reales que destacan nuestra rapidez, trato amable y calidad de trabajo.
            </motion.p>

            <motion.div
              variants={scaleIn}
              custom={0.15}
              whileHover={{ scale: 1.03 }}
              className="mt-6 flex w-full items-center gap-4 rounded-2xl bg-neutral-50 px-5 py-4 ring-1 ring-neutral-200 sm:mt-8 sm:inline-flex sm:w-auto sm:gap-5 sm:rounded-3xl sm:px-6 sm:py-5"
            >
              <motion.span
                className="text-4xl font-bold text-brand sm:text-5xl"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              >
                {business.rating}
              </motion.span>
              <div>
                <Stars count={5} />
                <p className="mt-1 text-sm font-medium text-neutral-700">{business.reviewCount} opiniones</p>
                <p className="text-xs text-neutral-400">Calificación en Google</p>
              </div>
            </motion.div>
          </motion.div>

          <div className="space-y-4 sm:space-y-5">
            <motion.article
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={viewport}
              transition={{ duration: 0.55 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-surface p-5 text-white sm:rounded-3xl sm:p-7 md:p-8"
            >
              <Stars count={featured.rating} />
              <p className="mt-4 text-sm leading-relaxed text-white/85 sm:mt-5 sm:text-base md:text-lg">
                {featured.text}
              </p>
              <footer className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4 sm:mt-6 sm:pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold sm:h-12 sm:w-12">
                  {featured.initial}
                </span>
                <div>
                  <p className="text-sm font-semibold sm:text-base">{featured.author}</p>
                  <p className="text-xs text-white/50 sm:text-sm">{featured.date}</p>
                </div>
              </footer>
            </motion.article>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="grid gap-4 sm:grid-cols-2 sm:gap-5"
            >
              {rest.map((item, index) => (
                <motion.article
                  key={item.id}
                  variants={fadeUp}
                  custom={index * 0.1}
                  whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
                  className="flex flex-col rounded-2xl bg-neutral-50 p-5 ring-1 ring-neutral-200/80 sm:rounded-3xl sm:p-6"
                >
                  <Stars count={item.rating} size="sm" />
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 sm:mt-4">{item.text}</p>
                  <footer className="mt-4 flex items-center gap-3 sm:mt-5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-xs font-bold text-white sm:h-10 sm:w-10">
                      {item.initial}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">{item.author}</p>
                      <p className="text-xs text-neutral-400">{item.date}</p>
                    </div>
                  </footer>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
