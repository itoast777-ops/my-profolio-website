import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Logo } from './ui'

const links = [
  { label: '首页', href: '#top' },
  { label: '服务', href: '#services' },
  { label: '关于我们', href: '#about' },
  { label: '方法论', href: '#process' },
]

const more = [
  { label: '客户案例', desc: '看看 AI 如何改变真实业务', href: '#cases' },
  { label: '常见问题', desc: '合作方式、周期与费用', href: '#faq' },
  { label: '联系我们', desc: '预约一次 30 分钟咨询', href: '#contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const moreRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onDown = (e: PointerEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMoreOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const solid = scrolled || mobileOpen
  const navText = 'font-mono text-[12px] tracking-[0.16em] uppercase'

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div
        className={`mx-auto flex max-w-[1360px] items-center justify-between rounded-full py-2 pr-2 pl-5 transition-all duration-300 ${
          solid
            ? 'bg-white/85 text-ink shadow-[0_10px_40px_-16px_rgba(10,40,90,0.35)] ring-1 ring-black/5 backdrop-blur-xl'
            : 'text-white'
        }`}
      >
        <Logo />

        <nav className="hidden items-center gap-9 lg:flex" aria-label="主导航">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`${navText} opacity-85 transition-opacity hover:opacity-100`}>
              {l.label}
            </a>
          ))}
          <div
            ref={moreRef}
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              type="button"
              aria-expanded={moreOpen}
              onClick={() => setMoreOpen((v) => !v)}
              className={`${navText} flex items-center gap-1.5 opacity-85 transition-opacity hover:opacity-100`}
            >
              更多
              <ChevronDown className={`size-3.5 transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              className={`absolute top-full left-1/2 w-72 -translate-x-1/2 pt-4 transition-all duration-200 ${
                moreOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
              }`}
            >
              <div className="rounded-2xl bg-white p-2 text-ink shadow-[0_24px_60px_-20px_rgba(10,40,90,0.4)] ring-1 ring-black/5">
                {more.map((m) => (
                  <a
                    key={m.href}
                    href={m.href}
                    onClick={() => setMoreOpen(false)}
                    className="block rounded-xl px-4 py-3 transition-colors hover:bg-mist"
                  >
                    <span className="block text-sm font-medium">{m.label}</span>
                    <span className="block text-xs text-ink/50">{m.desc}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className={`hidden rounded-full bg-lime px-5 py-2.5 text-ink transition-colors hover:bg-lime-deep sm:inline-block ${navText}`}
          >
            预约咨询
          </a>
          <button
            type="button"
            aria-label={mobileOpen ? '关闭菜单' : '打开菜单'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className={`grid size-10 place-items-center rounded-full transition-colors lg:hidden ${
              solid ? 'bg-ink text-white' : 'bg-white/15 text-white backdrop-blur'
            }`}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={`mx-auto mt-2 max-w-[1360px] overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_-20px_rgba(10,40,90,0.4)] ring-1 ring-black/5 transition-all duration-300 lg:hidden ${
          mobileOpen ? 'visible max-h-[520px] opacity-100' : 'invisible max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col p-3" aria-label="移动端导航">
          {[...links, ...more].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-2xl px-4 py-3.5 text-[15px] font-medium transition-colors hover:bg-mist"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className={`mt-2 rounded-full bg-lime px-5 py-3.5 text-center text-ink ${navText}`}
          >
            预约咨询
          </a>
        </nav>
      </div>
    </header>
  )
}
