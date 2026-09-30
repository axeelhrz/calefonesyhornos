import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { WhatsAppLink } from './ui/WhatsAppLink'

export function WhatsAppButton() {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? false : { scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed right-5 bottom-6 z-50 hidden lg:block"
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <WhatsAppLink
          aria-label="Contactar por WhatsApp"
          className="h-14 w-14 rounded-full shadow-lg shadow-[rgba(37,211,102,0.4)]"
        >
          <MessageCircle className="h-7 w-7" />
        </WhatsAppLink>
      </motion.div>
    </motion.div>
  )
}
