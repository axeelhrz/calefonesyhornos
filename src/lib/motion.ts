export const expo = [0.16, 1, 0.3, 1] as const

export const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 28, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 1.05, delay, ease: expo },
})

export const viewRise = {
  hidden: { opacity: 0, y: 36, filter: 'blur(8px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, delay, ease: expo },
  }),
}

export const viewport = { once: true, margin: '-80px' as const }
