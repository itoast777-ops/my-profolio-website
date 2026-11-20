import { ArrowUpRight, ChartLine, Compass, Database, GraduationCap, Sparkles, Workflow } from 'lucide-react'
import sky from '../assets/sky.jpg'
import { CtaButton, Reveal, SectionLabel } from './ui'

const services = [
  {
    Icon: Compass,
    title: 'AI 战略规划',
    desc: '从业务目标出发，识别高价值场景，制定可落地的 AI 路线图与投资回报模型。',
    tags: ['路线图', 'ROI 评估'],
  },
  {
    Icon: Database,
    title: '数据基础建设',
    desc: '搭建现代化数据平台与治理体系，让数据可信、可用、可持续积累。',
    tags: ['数据平台', '治理'],
  },
  {
    Icon: Workflow,
    title: '智能流程自动化',
    desc: '重构关键业务流程，以 AI 代理与自动化替代重复劳动，释放团队精力。',
    tags: ['AI 代理', 'RPA'],
  },
  {
    Icon: Sparkles,
    title: '生成式 AI 应用',
    desc: '基于大模型打造知识助手、内容生产与客户服务应用，安全合规地上线。',
    tags: ['大模型', 'RAG'],
  },
  {
    Icon: ChartLine,
    title: '分析与预测',
    desc: '构建需求预测、风险识别与经营分析模型，让每一次决策都有据可依。',
    tags: ['预测模型', 'BI'],
  },
  {
    Icon: GraduationCap,
    title: '组织赋能',
    desc: '通过培训、工作坊与变革管理，帮助团队真正用好 AI，形成长期能力。',
    tags: ['培训', '变革管理'],
  },
]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1240px] scroll-mt-24 px-5 py-20 sm:py-28">
      <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <SectionLabel>服务</SectionLabel>
          <h2 className="mt-5 max-w-2xl text-[30px] leading-[1.2] font-medium tracking-[-0.03em] sm:text-5xl">
            从洞察到落地，
            <span className="text-ink/40">全链路 AI 咨询能力</span>
          </h2>
        </div>
        <p className="max-w-sm text-[15px] leading-relaxed text-ink/60">
          我们将战略顾问、数据工程师与 AI 专家组成一支团队，与你并肩，从第一天起就以结果为导向。
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ Icon, title, desc, tags }, i) => (
          <Reveal key={title} delay={(i % 3) * 90} className="h-full">
            <article className="group flex h-full flex-col rounded-[28px] bg-mist p-6 transition-colors duration-300 hover:bg-ink hover:text-white sm:p-7">
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-full bg-white text-ink transition-colors duration-300 group-hover:bg-lime">
                  <Icon className="size-5" />
                </span>
                <span className="font-mono text-xs text-ink/40 transition-colors group-hover:text-white/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-10 text-xl font-medium tracking-tight">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60 transition-colors group-hover:text-white/65">{desc}</p>
              <div className="mt-auto flex items-center justify-between pt-8">
                <div className="flex gap-2">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white px-3 py-1 text-xs text-ink/70 transition-colors group-hover:bg-white/10 group-hover:text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="size-5 opacity-0 transition-all duration-300 group-hover:rotate-45 group-hover:text-lime group-hover:opacity-100" />
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-4">
        <div className="relative overflow-hidden rounded-[28px] bg-sky">
          <img src={sky} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-r from-sky-deep/80 via-sky/40 to-transparent" />
          <div className="relative flex flex-col items-start gap-6 p-7 text-white sm:p-10 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-2xl font-medium tracking-tight sm:text-3xl">不确定从哪里开始？</p>
              <p className="mt-2 text-sm text-white/80 sm:text-base">先做一次免费的 AI 成熟度评估，两周内拿到优先级清单。</p>
            </div>
            <CtaButton href="#contact">免费评估</CtaButton>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
