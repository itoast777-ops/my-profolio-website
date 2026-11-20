import sky from '../assets/sky.jpg'
import { CtaButton, Reveal } from './ui'

export function Cta() {
  return (
    <section id="contact" className="scroll-mt-24 px-2 sm:px-3">
      <div className="relative overflow-hidden rounded-[28px] bg-sky sm:rounded-[36px]">
        <img src={sky} alt="" className="absolute inset-0 h-full w-full object-cover object-bottom" />
        <div className="absolute inset-0 bg-linear-to-b from-[#0a62d6]/70 via-[#1888ef]/20 to-transparent" />
        <Reveal className="relative px-5 py-24 text-center text-white sm:py-32">
          <h2 className="mx-auto max-w-3xl text-[34px] leading-[1.15] font-medium tracking-[-0.03em] sm:text-6xl">
            让 AI 成为你的
            <br />
            <span className="text-[#cfe6ff]/90">下一台增长引擎</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-white/85 sm:text-base">
            预约一次 30 分钟的免费咨询，我们将为你梳理最值得优先投入的 AI 机会。
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#services"
              className="inline-flex items-center rounded-full bg-[#073e86]/55 px-6 py-[15px] font-mono text-[12px] tracking-[0.14em] uppercase ring-1 ring-white/15 backdrop-blur-md transition-colors hover:bg-[#073e86]/75"
            >
              查看服务
            </a>
            <CtaButton href="mailto:hello@nimbra.ai?subject=预约咨询">预约免费咨询</CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
