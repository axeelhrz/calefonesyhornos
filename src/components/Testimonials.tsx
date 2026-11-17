import { motion } from 'framer-motion'
import { business, testimonials } from '../data/business'
import { viewRise, viewport } from '../lib/motion'

export function Testimonials() {
  return (
    <section id="opiniones" className="bg-cream py-20 text-ink sm:py-28">
      <div className="px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={viewRise}
              className="text-[11px] tracking-[0.28em] uppercase text-ink/45"
            >
              ( Opiniones )
            </motion.p>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={viewRise}
              custom={0.08}
              className="mt-4 font-serif text-[12vw] leading-[0.9] tracking-[-0.04em] sm:text-[7vw] lg:text-[5.2vw]"
            >
              Confianza
              <br />
              que <em className="italic">se nota.</em>
            </motion.h2>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={viewRise}
            custom={0.16}
            className="flex items-baseline gap-3"
          >
            <span className="font-serif text-7xl leading-none tracking-[-0.05em]">{business.rating}</span>
            <span className="text-[13px] text-ink/55">
              {business.reviewCount} opiniones
              <br />
              en Google
            </span>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-px bg-ink/10 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.article
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={viewRise}
              custom={i * 0.1}
              className="bg-cream p-6 sm:p-8"
            >
              <p className="font-serif text-[22px] leading-[1.25] tracking-[-0.02em] sm:text-[26px]">
                “{item.text}”
              </p>
              <footer className="mt-8 flex items-center justify-between text-[12px] tracking-[0.08em] uppercase text-ink/50">
                <span>{item.author}</span>
                <span>{item.date}</span>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
