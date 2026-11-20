import { ChartColumn, ChartPie, Lightbulb } from 'lucide-react'
import man from '../assets/portrait-man.jpg'
import woman from '../assets/portrait-woman.jpg'
import { CountUp, Reveal, SectionLabel } from './ui'

function InlineIcon({ tone, children }: { tone: 'sky' | 'lime'; children: React.ReactNode }) {
  return (
    <span
      className={`mx-[0.15em] inline-grid size-[0.95em] translate-y-[-0.06em] place-items-center rounded-full align-middle ${
        tone === 'sky' ? 'bg-sky text-white' : 'bg-lime text-ink'
      }`}
    >
      {children}
    </span>
  )
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1240px] scroll-mt-24 px-5 py-20 sm:py-28">
      <Reveal className="text-center">
        <SectionLabel>关于我们</SectionLabel>
        <h2 className="mt-6 text-[30px] leading-[1.25] font-medium tracking-[-0.03em] sm:text-5xl lg:text-[58px]">
          一家全球化的咨询伙伴，
          <br />
          致力于打造更
          <InlineIcon tone="sky">
            <ChartPie className="size-[0.5em]" />
          </InlineIcon>
          智能、
          <br className="sm:hidden" />
          <span className="text-ink/40">
            更
            <InlineIcon tone="lime">
              <Lightbulb className="size-[0.5em]" />
            </InlineIcon>
            敏捷的企业
          </span>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
        <Reveal className="h-full">
          <article className="relative h-full min-h-[420px] overflow-hidden rounded-[28px] bg-sky">
            <img src={man} alt="Nimbra 顾问团队成员" className="absolute inset-0 h-full w-full object-cover object-top" />
            <div className="absolute inset-0 bg-linear-to-t from-sky/40 to-transparent" />
            <div className="absolute inset-x-5 top-5 flex items-center justify-between">
              <span className="text-xl font-black tracking-tight text-white italic">NIMBRA</span>
              <span className="grid size-9 place-items-center rounded-lg bg-white text-ink">
                <ChartColumn className="size-4" />
              </span>
            </div>
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white p-5 sm:p-6">
              <p className="text-6xl font-medium tracking-tight">
                <CountUp to={120} suffix="+" />
              </p>
              <p className="mt-3 max-w-[240px] text-sm leading-relaxed text-ink/60">与领先的 AI 与云技术服务商深度合作。</p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={100} className="h-full">
          <article className="flex h-full min-h-[420px] flex-col justify-between rounded-[28px] bg-mist p-6 sm:p-7">
            <div>
              <p className="text-sm text-ink/60">可衡量的承诺</p>
              <p className="mt-3 text-6xl font-medium tracking-tight">
                <CountUp to={100} suffix="%" />
              </p>
            </div>
            <div>
              <div className="flex -space-x-2.5">
                <img src={woman} alt="" className="size-10 rounded-full object-cover ring-2 ring-mist" />
                <img src={man} alt="" className="size-10 rounded-full object-cover object-top ring-2 ring-mist" />
                <span className="grid size-10 place-items-center rounded-full bg-lime text-xs font-semibold ring-2 ring-mist">
                  LM
                </span>
                <span className="grid size-10 place-items-center rounded-full bg-ink text-xs font-medium text-white ring-2 ring-mist">
                  +2k
                </span>
              </div>
              <blockquote className="mt-5 text-[15px] leading-relaxed text-ink/80">
                “他们的自动化策略彻底重塑了我们的工作方式——高效、智能，而且无缝衔接。”
              </blockquote>
            </div>
          </article>
        </Reveal>

        <div className="grid gap-4 md:col-span-2 md:grid-cols-2 lg:col-span-1 lg:grid-cols-1 lg:grid-rows-[1fr_auto]">
          <Reveal delay={200} className="h-full">
            <article className="flex h-full min-h-[240px] flex-col justify-between rounded-[28px] bg-lime p-6 sm:p-7">
              <div>
                <p className="text-sm text-ink/60">数据点</p>
                <p className="mt-3 text-6xl font-medium tracking-tight">
                  <CountUp to={520} suffix="k+" />
                </p>
              </div>
              <p className="max-w-[260px] text-sm leading-relaxed text-ink/70">每月分析的数据量，持续驱动更聪明的商业策略。</p>
            </article>
          </Reveal>
          <Reveal delay={300} className="h-full">
            <article className="flex h-full items-center justify-between rounded-[28px] bg-ink px-6 py-7 text-white sm:px-7">
              <p className="text-sm text-white/70">服务国家与地区</p>
              <p className="text-5xl font-medium tracking-tight">
                <CountUp to={20} suffix="+" />
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
