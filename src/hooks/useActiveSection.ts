import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: readonly string[]) {
  const [active, setActive] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const ids = [...sectionIds]

    const update = () => {
      const marker = window.scrollY + window.innerHeight * 0.28
      let current = ids[0]

      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.offsetTop <= marker) current = id
      }

      setActive((prev) => (prev === current ? prev : current))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [sectionIds])

  return active
}
