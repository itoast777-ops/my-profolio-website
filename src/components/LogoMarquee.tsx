import { Atom, CircleDashed, Hexagon, Layers, Orbit, Sun, Wind } from 'lucide-react'

const brands = [
  { name: 'Vertexa', Icon: Hexagon },
  { name: 'Lumenly', Icon: Sun },
  { name: 'Orbital', Icon: Orbit },
  { name: 'Haloware', Icon: CircleDashed },
  { name: 'Quantix', Icon: Atom },
  { name: 'Northwind', Icon: Wind },
  { name: 'Stratos', Icon: Layers },
]

export function LogoMarquee() {
  const row = [...brands, ...brands]
  return (
    <section
      className="overflow-hidden py-10 sm:py-12"
      aria-label="合作客户"
      style={{
        maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
      }}
    >
      <div className="animate-marquee flex w-max">
        {row.map(({ name, Icon }, i) => (
          <div key={i} className="flex items-center gap-2 px-8 text-ink/35 sm:px-12" aria-hidden={i >= brands.length}>
            <Icon className="size-6" strokeWidth={2.2} />
            <span className="text-lg font-semibold tracking-tight">{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
