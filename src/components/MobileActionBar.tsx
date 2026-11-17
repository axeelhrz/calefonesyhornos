import { business } from '../data/business'

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper/95 px-4 py-3 backdrop-blur-md lg:hidden pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={business.phoneHref}
          className="flex flex-1 items-center justify-center bg-ink py-3.5 text-[12px] tracking-[0.12em] text-paper uppercase hover:bg-brand"
        >
          Llamar
        </a>
        <a
          href={business.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp flex flex-1 py-3.5 text-[12px] tracking-[0.12em] uppercase"
        >
          WhatsApp
        </a>
      </div>
    </div>
  )
}
