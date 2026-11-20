import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal, SectionLabel } from './ui'

const faqs = [
  {
    q: '一个典型的合作周期是多久？',
    a: '从诊断到首个 MVP 上线通常为 8–12 周。之后我们会根据效果数据，与你一起规划规模化推广的节奏。',
  },
  {
    q: '我们的数据基础还很薄弱，适合开始吗？',
    a: '非常适合。许多客户正是从数据基础建设开始的。我们会先评估现状，用最小投入建立可用的数据底座，再逐步引入 AI 能力。',
  },
  {
    q: '如何保障数据安全与合规？',
    a: '所有项目都遵循最小权限与数据不出域原则，可支持私有化部署，并提供完整的模型治理与审计文档。',
  },
  {
    q: '费用如何计算？',
    a: '我们提供固定范围项目制与按月顾问制两种方式，并可根据业务指标设置部分效果挂钩费用。',
  },
  {
    q: '项目结束后，我们的团队能自己运营吗？',
    a: '能力转移是每个项目的必选项。我们会通过培训、文档与陪跑，确保你的团队可以独立维护和迭代。',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="mx-auto grid max-w-[1240px] scroll-mt-24 gap-12 px-5 pt-8 pb-20 sm:pb-28 lg:grid-cols-[0.8fr_1.2fr]">
      <Reveal>
        <SectionLabel>常见问题</SectionLabel>
        <h2 className="mt-5 text-[30px] leading-[1.2] font-medium tracking-[-0.03em] sm:text-5xl">
          你可能想知道的
          <br />
          <span className="text-ink/40">一切</span>
        </h2>
        <div className="mt-10 rounded-[28px] bg-lime p-6">
          <p className="text-lg font-medium">还有其他问题？</p>
          <p className="mt-1 text-sm text-ink/65">我们的顾问会在一个工作日内回复你。</p>
          <a
            href="mailto:hello@nimbra.ai"
            className="mt-5 inline-block rounded-full bg-ink px-5 py-3 font-mono text-[12px] tracking-[0.14em] text-white uppercase transition-opacity hover:opacity-85"
          >
            hello@nimbra.ai
          </a>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-lg font-medium tracking-tight sm:text-xl">{f.q}</span>
                  <span
                    className={`grid size-9 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                      isOpen ? 'rotate-45 bg-ink text-lime' : 'bg-mist'
                    }`}
                  >
                    <Plus className="size-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl pb-6 text-[15px] leading-relaxed text-ink/60">{f.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
