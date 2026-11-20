import { useState } from 'react'
import { Check } from 'lucide-react'
import { Reveal, SectionLabel } from './ui'

const steps = [
  {
    name: '诊断',
    en: 'Discover',
    time: '第 1–2 周',
    desc: '梳理业务目标、数据资产与流程瓶颈，识别最高价值的 AI 机会。',
    outputs: ['业务访谈与现状评估', 'AI 机会地图', '数据成熟度报告'],
  },
  {
    name: '设计',
    en: 'Design',
    time: '第 3–4 周',
    desc: '制定路线图与技术架构，明确 ROI 指标、治理框架与资源投入。',
    outputs: ['优先级路线图', '目标架构方案', 'ROI 与 KPI 体系'],
  },
  {
    name: '构建',
    en: 'Build',
    time: '第 5–10 周',
    desc: '以敏捷方式迭代交付模型与自动化流程，与你的团队并肩落地。',
    outputs: ['可用的 MVP', '模型与流程上线', '团队实操培训'],
  },
  {
    name: '规模化',
    en: 'Scale',
    time: '持续进行',
    desc: '监控、优化并推广至全组织，让 AI 带来的价值持续复利增长。',
    outputs: ['效果监控看板', '持续迭代优化', '全组织推广'],
  },
]

export function Process() {
  const [active, setActive] = useState(0)
  const step = steps[active]

  return (
    <section id="process" className="scroll-mt-24 px-2 sm:px-3">
      <div className="rounded-[28px] bg-ink px-5 py-20 text-white sm:rounded-[36px] sm:py-28">
        <div className="mx-auto max-w-[1240px]">
          <Reveal>
            <SectionLabel tone="light">方法论</SectionLabel>
            <h2 className="mt-5 max-w-3xl text-[30px] leading-[1.2] font-medium tracking-[-0.03em] sm:text-5xl">
              四个阶段，
              <span className="text-white/40">让 AI 真正产生可衡量的价值</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-3 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4" role="tablist" aria-label="合作流程">
            {steps.map((s, i) => {
              const on = i === active
              return (
                <button
                  key={s.name}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`group relative overflow-hidden rounded-3xl p-6 text-left transition-colors duration-300 ${
                    on ? 'bg-lime text-ink' : 'bg-white/[0.06] text-white hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-xs tracking-[0.14em] uppercase">
                    <span className={on ? 'text-ink/60' : 'text-white/45'}>0{i + 1}</span>
                    <span className={on ? 'text-ink/60' : 'text-white/45'}>{s.time}</span>
                  </div>
                  <p className="mt-12 text-2xl font-medium tracking-tight">{s.name}</p>
                  <p className={`font-mono text-xs tracking-[0.14em] uppercase ${on ? 'text-ink/50' : 'text-white/35'}`}>
                    {s.en}
                  </p>
                  <span
                    className={`absolute inset-x-6 bottom-0 h-0.5 origin-left rounded-full bg-ink transition-transform duration-500 ${
                      on ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          <div
            key={active}
            role="tabpanel"
            className="animate-fade-up mt-3 grid gap-8 rounded-3xl bg-white/[0.06] p-6 sm:p-8 md:grid-cols-[1.2fr_1fr] md:items-center"
          >
            <p className="text-lg leading-relaxed text-white/80 sm:text-xl">{step.desc}</p>
            <ul className="grid gap-3">
              {step.outputs.map((o) => (
                <li key={o} className="flex items-center gap-3 text-[15px]">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-lime text-ink">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
