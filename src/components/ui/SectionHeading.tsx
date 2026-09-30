type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  light?: boolean
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = 'left',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <p
        className={`mb-3 text-xs font-semibold tracking-[0.2em] uppercase ${light ? 'text-brand-light' : 'text-brand'}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-bold tracking-tight md:text-4xl ${light ? 'text-white' : 'text-neutral-900'}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${light ? 'text-white/65' : 'text-neutral-500'}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
