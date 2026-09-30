import type { ComponentPropsWithoutRef } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand text-white border-brand hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/30',
  secondary:
    'bg-neutral-900 text-white border-neutral-900 hover:bg-neutral-800',
  outline:
    'bg-transparent text-white border-white/35 hover:border-white hover:bg-white/10',
  ghost:
    'bg-white/10 text-white border-white/20 hover:bg-white/15 backdrop-blur-sm',
  whatsapp:
    'bg-whatsapp text-white border-whatsapp hover:bg-whatsapp-dark hover:shadow-lg hover:shadow-whatsapp/30',
}

type ButtonProps = ComponentPropsWithoutRef<'a'> & {
  variant?: Variant
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
