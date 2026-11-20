import { Play } from 'lucide-react'
import sky from '../assets/sky.jpg'
import { CtaButton } from './ui'
import { HeroFolder } from './HeroFolder'

export function Hero() {
  return (
    <section id="top" className="p-2 sm:p-3">
      <div className="relative overflow-hidden rounded-[28px] bg-sky sm:rounded-[36px]">
        <img src={sky} alt="" className="absolute inset-0 h-full w-full object-cover object-bottom" />
        <div className="absolute inset-0 bg-linear-to-b from-[#0a62d6]/75 via-[#1888ef]/25 to-transparent" />

        <div className="relative px-5 pt-32 text-center text-white sm:pt-40 lg:pt-44">
          <h1 className="animate-fade-up mx-auto max-w-4xl text-[40px] leading-[1.12] font-medium tracking-[-0.03em] sm:text-6xl lg:text-[76px]">
            Pro't'folio
          </h1>
          <p
            className="animate-fade-up mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-white/85 sm:text-base"
            style={{ animationDelay: '120ms' }}
          >
            welcome
          </p>
          <div
            className="animate-fade-up mt-9 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: '220ms' }}
          >
            <a
              href="#process"
              className="inline-flex items-center gap-2 rounded-full bg-[#073e86]/55 px-6 py-[15px] font-mono text-[12px] tracking-[0.14em] uppercase ring-1 ring-white/15 backdrop-blur-md transition-colors hover:bg-[#073e86]/75"
            >
              <Play className="size-3.5 fill-current" />
              观看演示
            </a>
            <CtaButton href="#contact">立即开始</CtaButton>
          </div>
        </div>

        <div className="relative mt-6 pb-10 sm:mt-8 sm:pb-14">
          <HeroFolder />
        </div>
      </div>
    </section>
  )
}
