import { Logo } from './ui'

const columns = [
  {
    title: '公司',
    links: [
      ['关于我们', '#about'],
      ['方法论', '#process'],
      ['客户案例', '#cases'],
    ],
  },
  {
    title: '服务',
    links: [
      ['AI 战略规划', '#services'],
      ['智能流程自动化', '#services'],
      ['生成式 AI 应用', '#services'],
    ],
  },
  {
    title: '支持',
    links: [
      ['常见问题', '#faq'],
      ['预约咨询', '#contact'],
      ['hello@nimbra.ai', 'mailto:hello@nimbra.ai'],
    ],
  },
]

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1240px] px-5 pt-20 pb-8">
      <div className="grid gap-12 md:grid-cols-[1.3fr_2fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink/55">
            以数据驱动的咨询与智能自动化，帮助组织在 AI 时代持续增长。
          </p>
          <p className="mt-6 font-mono text-[11px] tracking-[0.16em] text-ink/45 uppercase">上海 · 新加坡 · 伦敦</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((c) => (
            <div key={c.title}>
              <p className="font-mono text-[11px] tracking-[0.18em] text-ink/45 uppercase">{c.title}</p>
              <ul className="mt-5 space-y-3">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-ink/75 transition-colors hover:text-ink">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p
        className="mt-16 bg-linear-to-b from-ink/15 to-ink/0 bg-clip-text text-center text-[22vw] leading-[0.85] font-medium tracking-[-0.06em] text-transparent select-none lg:text-[260px]"
        aria-hidden
      >
        Nimbra
      </p>

      <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-ink/10 pt-6 font-mono text-[11px] tracking-[0.14em] text-ink/45 uppercase sm:flex-row">
        <span>© 2026 Nimbra AI Consulting</span>
        <a href="#top" className="transition-colors hover:text-ink">
          返回顶部 ↑
        </a>
      </div>
    </footer>
  )
}
