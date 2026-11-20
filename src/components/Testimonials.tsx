import { useState } from 'react'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import woman from '../assets/portrait-woman.jpg'
import man from '../assets/portrait-man.jpg'
import sky from '../assets/sky.jpg'
import { Reveal, SectionLabel } from './ui'

const items = [
  {
    name: '林悦',
    role: '运营副总裁 · 澜海零售',
    image: woman,
    position: 'object-center',
    quote: '三个月内，我们的库存周转和门店排班全部实现了智能化。Nimbra 不只是给方案，而是和我们一起把事情做成。',
    metrics: [
      ['-42%', '运营成本'],
      ['3.1×', '预测准确率'],
    ],
  },
  {
    name: '陈哲',
    role: '首席技术官 · 极光物流',
    image: man,
    position: 'object-top',
    quote: '他们对数据架构的理解非常深。原本需要一年的自动化改造，我们只用了十二周就上线，并且稳定运行至今。',
    metrics: [
      ['68%', '流程自动化'],
      ['12 周', '上线周期'],
    ],
  },
  {
    name: '周岚',
    role: '首席数据官 · 衡远金融',
    image: sky,
    position: 'object-center',
    quote: '在高度监管的行业落地生成式 AI 并不容易。Nimbra 的治理框架让我们既跑得快，又睡得着。',
    metrics: [
      ['¥2.4 亿', '新增收入'],
      ['100%', '合规审计通过'],
    ],
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const t = items[index]
  const go = (d: number) => setIndex((i) => (i + d + items.length) % items.length)

  return (
    <section id="cases" className="mx-auto max-w-[1240px] scroll-mt-24 px-5 py-20 sm:py-28">
      <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <SectionLabel>客户案例</SectionLabel>
          <h2 className="mt-5 max-w-xl text-[30px] leading-[1.2] font-medium tracking-[-0.03em] sm:text-5xl">
            真实的结果，
            <span className="text-ink/40">来自真实的伙伴</span>
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-[0.14em] text-ink/50">
            0{index + 1} / 0{items.length}
          </span>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="上一个案例"
            className="grid size-12 place-items-center rounded-full bg-mist transition-colors hover:bg-ink hover:text-white"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="下一个案例"
            className="grid size-12 place-items-center rounded-full bg-lime transition-colors hover:bg-lime-deep"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </Reveal>

      <div key={index} className="animate-fade-up mt-12 grid gap-4 sm:mt-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative min-h-[340px] overflow-hidden rounded-[28px] bg-sky sm:min-h-[440px]">
          <img src={t.image} alt={t.image === sky ? '' : t.name} className={`absolute inset-0 h-full w-full object-cover ${t.position}`} />
          {t.image === sky && (
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid size-28 place-items-center rounded-full bg-white/25 text-4xl font-medium text-white ring-1 ring-white/50 backdrop-blur-md">
                {t.name.slice(0, 1)}
              </span>
            </span>
          )}
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl bg-white/90 px-5 py-4 backdrop-blur">
            <div>
              <p className="font-medium">{t.name}</p>
              <p className="text-sm text-ink/55">{t.role}</p>
            </div>
            <span className="size-2.5 rounded-full bg-lime ring-4 ring-lime/30" />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-10 rounded-[28px] bg-mist p-7 sm:p-10">
          <div>
            <Quote className="size-8 fill-sky text-sky" />
            <blockquote className="mt-6 text-[22px] leading-[1.5] font-medium tracking-tight sm:text-[28px]">
              {t.quote}
            </blockquote>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {t.metrics.map(([v, l], i) => (
              <div key={l} className={`rounded-2xl p-5 ${i === 0 ? 'bg-white' : 'bg-ink text-white'}`}>
                <p className="text-3xl font-medium tracking-tight sm:text-4xl">{v}</p>
                <p className={`mt-1 text-sm ${i === 0 ? 'text-ink/55' : 'text-white/60'}`}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {items.map((it, i) => (
          <button
            key={it.name}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`查看 ${it.name} 的案例`}
            className={`h-1.5 rounded-full transition-all ${i === index ? 'w-8 bg-ink' : 'w-1.5 bg-ink/20 hover:bg-ink/40'}`}
          />
        ))}
      </div>
    </section>
  )
}
