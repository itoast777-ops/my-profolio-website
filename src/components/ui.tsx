import { useEffect, useRef, useState, type ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'

export function useInView<T extends Element>(threshold = 0.2) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return { ref, inView }
}

export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.12)
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}

export function CountUp({
  to,
  suffix = '',
  duration = 1600,
}: {
  to: number
  suffix?: string
  duration?: number
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4)
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration)
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])
  return (
    <span ref={ref} className="tabular-nums">
      {value.toLocaleString()}
      {suffix}
    </span>
  )
}

export function SectionLabel({
  children,
  tone = 'dark',
}: {
  children: ReactNode
  tone?: 'dark' | 'light'
}) {
  return (
    <p
      className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] ${
        tone === 'dark' ? 'text-ink/60' : 'text-white/60'
      }`}
    >
      <span className="size-1 rounded-full bg-current" />
      {children}
    </p>
  )
}

export function CtaButton({
  children,
  href = '#contact',
  className = '',
}: {
  children: ReactNode
  href?: string
  className?: string
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full bg-lime py-1.5 pr-1.5 pl-5 font-mono text-[12px] tracking-[0.14em] text-ink uppercase transition-colors hover:bg-lime-deep ${className}`}
    >
      {children}
      <span className="grid size-9 place-items-center rounded-full bg-ink text-lime transition-transform duration-300 group-hover:rotate-45">
        <ArrowUpRight className="size-4" />
      </span>
    </a>
  )
}

export function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#top" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Nimbra 首页">
      <svg viewBox="0 0 34 24" className="h-5 w-auto" fill="currentColor" aria-hidden>
        <path d="M1.5 21.2 10.4 3.6a2.6 2.6 0 0 1 4.6 0l4.3 8.6-5.6 11H3.8a2.6 2.6 0 0 1-2.3-2Z" />
        <path d="m19.6 23.2 5.5-10.9a2.4 2.4 0 0 1 4.3 0l3.9 7.4a2.4 2.4 0 0 1-2.1 3.5H19.6Z" />
      </svg>
      <span className="text-[19px] font-medium tracking-tight">Nimbra</span>
    </a>
  )
}
