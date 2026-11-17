import { business, navLinks } from '../data/business'

export function Footer() {
  return (
    <footer className="bg-paper pb-[calc(5.5rem+env(safe-area-inset-bottom))] text-ink sm:pb-10">
      <div className="grid gap-10 border-t border-ink/10 px-5 py-12 sm:px-8 md:grid-cols-3 lg:px-10">
        <div>
          <p className="font-serif text-3xl tracking-[-0.03em]">{business.shortName}</p>
          <p className="mt-2 text-[12px] tracking-[0.16em] uppercase text-ink/45">
            {business.category}
          </p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-ink/40">Descubrir</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-brand hover:translate-x-0.5 inline-block">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-ink/40">Contacto</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={business.phoneHref} className="hover:text-brand">
                {business.phone}
              </a>
            </li>
            <li>
              {business.address.street}, {business.address.city}
            </li>
            <li>{business.hours}</li>
          </ul>
        </div>
      </div>
      <p className="px-5 text-[11px] tracking-[0.12em] uppercase text-ink/35 sm:px-8 lg:px-10">
        © {new Date().getFullYear()} {business.shortName}
      </p>
    </footer>
  )
}
