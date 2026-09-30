import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { business } from '../../data/business'

type WhatsAppLinkProps = ComponentPropsWithoutRef<'a'> & {
  children: ReactNode
}

export function WhatsAppLink({
  children,
  className = '',
  href = business.whatsappHref,
  target = '_blank',
  rel = 'noopener noreferrer',
  ...props
}: WhatsAppLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`btn-whatsapp ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
