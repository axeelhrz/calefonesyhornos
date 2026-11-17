import { marqueeItems } from '../data/business'

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems]

  return (
    <section className="overflow-hidden border-y border-white/10 bg-ink py-4 text-paper">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center px-6 text-[12px] tracking-[0.18em] uppercase sm:px-10 sm:text-[13px]"
          >
            <span className="mr-6 inline-block h-[5px] w-[5px] rounded-full bg-brand sm:mr-10" />
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
