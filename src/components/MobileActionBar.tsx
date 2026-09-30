import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'
import { business } from '../data/business'
import { WhatsAppLink } from './ui/WhatsAppLink'

export function MobileActionBar() {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? false : { y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200/80 bg-white/95 px-4 py-3 backdrop-blur-lg lg:hidden pb-[max(0.75rem,env(safe-area-inset-bottom))]"
    >
      <div className="mx-auto flex max-w-lg gap-3">
        <motion.a
          href={business.phoneHref}
          whileTap={{ scale: 0.96 }}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-brand py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25"
        >
          <Phone className="h-4 w-4" />
          Llamar
        </motion.a>
        <motion.div whileTap={{ scale: 0.96 }} className="flex flex-1">
          <WhatsAppLink className="w-full rounded-2xl py-3.5 text-sm">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </WhatsAppLink>
        </motion.div>
      </div>
    </motion.div>
  )
}
