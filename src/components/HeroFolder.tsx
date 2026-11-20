import { useEffect, useRef, useState, type PointerEvent } from 'react'
import { ArrowRight, Lightbulb } from 'lucide-react'
import { projects, type Project } from './projects'
import { ProjectModal } from './ProjectModal'

// Card placement when the folder is open (fanned) and closed (tucked inside).
const fan = [
  { x: -292, y: -72, r: -16 },
  { x: -182, y: -122, r: -9 },
  { x: -72, y: -150, r: -3 },
  { x: 60, y: -168, r: 4 },
  { x: 178, y: -122, r: 10 },
  { x: 290, y: -74, r: 16 },
]
const tucked = [
  { x: -40, r: -5 },
  { x: -24, r: -3 },
  { x: -8, r: -1 },
  { x: 8, r: 1 },
  { x: 24, r: 3 },
  { x: 40, r: 5 },
]

function CardFace({ project, index }: { project: Project; index: number }) {
  if (project.kind === 'frame') {
    return (
      <div className="w-[200px] rounded-[22px] bg-white p-2.5 shadow-[0_24px_40px_-16px_rgba(0,40,110,0.55)]">
        <img src={project.image} alt="" className="aspect-[4/3] w-full rounded-[14px] object-cover" draggable={false} />
        <div className="flex items-center justify-between px-1.5 pt-2.5 pb-1">
          <span className="font-mono text-[11px] text-ink/50">7/29</span>
          <span className="font-mono text-[11px] text-ink/35">{String(index + 1).padStart(2, '0')}</span>
        </div>
      </div>
    )
  }
  const size = project.kind === 'square' ? 'h-[170px] w-[170px]' : 'h-[204px] w-[153px]'
  return (
    <div
      className={`${size} overflow-hidden rounded-[20px] bg-white p-1 shadow-[0_24px_40px_-16px_rgba(0,40,110,0.55)]`}
    >
      <img src={project.image} alt="" className="h-full w-full rounded-[16px] object-cover" draggable={false} />
    </div>
  )
}

function SmileySticker() {
  return (
    <svg viewBox="0 0 100 100" className="size-[92px] drop-shadow-[0_8px_10px_rgba(0,40,110,0.35)]" aria-hidden>
      <defs>
        <path id="sticker-ring" d="M50 50 m-37 0 a37 37 0 1 1 74 0 a37 37 0 1 1 -74 0" />
      </defs>
      <circle cx="50" cy="50" r="49" fill="#fff" />
      <circle cx="50" cy="50" r="45" fill="#f6dc3c" />
      <text fontSize="7.4" fontWeight="700" letterSpacing="1.3" fill="#2b2b2b" fontFamily="Geist Mono, monospace">
        <textPath href="#sticker-ring">DESIGN PORTFOLIO · DESIGN PORTFOLIO ·</textPath>
      </text>
      <circle cx="50" cy="50" r="27" fill="#ffe86a" stroke="#2b2b2b" strokeWidth="1.6" />
      <circle cx="41" cy="46" r="7.5" fill="#fff" stroke="#2b2b2b" strokeWidth="1.6" />
      <circle cx="59" cy="46" r="7.5" fill="#fff" stroke="#2b2b2b" strokeWidth="1.6" />
      <circle cx="43" cy="47" r="3.4" fill="#111" />
      <circle cx="61" cy="47" r="3.4" fill="#111" />
      <path d="M41 59 q9 7 18 0" stroke="#2b2b2b" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function IdeaSticker() {
  return (
    <div className="rounded-[18px] bg-white p-1 shadow-[0_8px_16px_-6px_rgba(0,40,110,0.45)]" aria-hidden>
      <div className="flex flex-col items-center rounded-[14px] bg-[#e8f4ff] px-3 py-1.5">
        <span className="text-[11px] leading-none font-black text-ink italic">GOOD</span>
        <Lightbulb className="my-0.5 size-5 fill-lime text-ink" strokeWidth={2.2} />
        <span className="text-[11px] leading-none font-black text-ink italic">IDEA</span>
      </div>
    </div>
  )
}

export function HeroFolder() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<number | null>(null)
  const closeTimer = useRef<number | undefined>(undefined)
  const stageRef = useRef<HTMLDivElement>(null)

  const openNow = () => {
    window.clearTimeout(closeTimer.current)
    setOpen(true)
  }
  const closeSoon = () => {
    window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setOpen(false), 160)
  }
  useEffect(() => () => window.clearTimeout(closeTimer.current), [])

  // Hover opens only for mouse; touch users tap the folder to toggle.
  const onFolderEnter = (e: PointerEvent) => {
    if (e.pointerType === 'mouse') openNow()
  }
  const onStageLeave = (e: PointerEvent) => {
    if (e.pointerType === 'mouse') closeSoon()
  }

  return (
    <>
      <div className="relative mx-auto h-[220px] w-full max-w-[760px] sm:h-[340px] lg:h-[440px]">
        <div
          ref={stageRef}
          onPointerLeave={onStageLeave}
          onPointerEnter={() => open && openNow()}
          onFocus={(e) => {
            // Keyboard focus opens the folder; pointer taps are handled by the toggle's click.
            if ((e.target as HTMLElement).matches(':focus-visible')) openNow()
          }}
          onBlur={(e) => {
            if (!stageRef.current?.contains(e.relatedTarget as Node)) closeSoon()
          }}
          className="absolute bottom-0 left-1/2 h-[440px] w-[760px] origin-bottom -translate-x-1/2 scale-[0.48] select-none sm:scale-[0.76] lg:scale-100"
        >
          {/* Folder back with tab */}
          <div
            onPointerEnter={onFolderEnter}
            className="absolute bottom-0 left-1/2 h-[236px] w-[400px] -translate-x-1/2"
          >
            <div className="absolute -top-[22px] left-7 h-10 w-36 rounded-t-[20px] bg-[#3aa6fb]" />
            <div className="absolute inset-0 rounded-[30px] bg-linear-to-b from-[#3aa6fb] to-[#1570dc] shadow-[0_40px_80px_-30px_rgba(0,40,110,0.7)]" />
          </div>

          {/* Floating tags */}
          <span
            className={`absolute top-[118px] left-[18px] z-30 -rotate-[10deg] rounded-full bg-white px-3.5 py-1.5 font-mono text-[12px] text-ink shadow-md transition-all duration-500 ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            ui design
          </span>
          <span
            className={`absolute top-[96px] right-[30px] z-30 rotate-[8deg] rounded-full bg-lime px-3.5 py-1.5 font-mono text-[12px] text-ink shadow-md transition-all delay-100 duration-500 ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            branding
          </span>

          {/* Project cards */}
          {projects.map((p, i) => {
            const pos = open ? fan[i] : { ...tucked[i], y: 18 }
            return (
              <button
                key={p.id}
                type="button"
                tabIndex={open ? 0 : -1}
                aria-label={`查看项目：${p.title}`}
                onClick={() => setActive(i)}
                className={`group/card absolute bottom-[64px] left-1/2 cursor-pointer rounded-[22px] transition-transform duration-[650ms] ease-[cubic-bezier(0.2,0.9,0.25,1.12)] outline-none hover:z-30! focus-visible:z-30! focus-visible:ring-4 focus-visible:ring-lime ${
                  open ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
                style={{
                  transform: `translate(calc(-50% + ${pos.x}px), ${pos.y}px) rotate(${pos.r}deg)`,
                  transitionDelay: `${open ? i * 45 : (projects.length - i) * 20}ms`,
                  zIndex: 10 + (3 - Math.abs(i - 3)),
                }}
              >
                <div className="transition-transform duration-300 ease-out group-hover/card:-translate-y-5 group-hover/card:scale-[1.06]">
                  <CardFace project={p} index={i} />
                </div>
              </button>
            )
          })}

          {/* Folder front (glass panel) */}
          <div
            onPointerEnter={onFolderEnter}
            className="absolute bottom-0 left-1/2 z-40 h-[180px] w-[414px] -translate-x-1/2 [perspective:900px]"
          >
            <div
              className="relative h-full w-full origin-bottom transition-transform duration-500 ease-out"
              style={{ transform: open ? 'rotateX(-16deg)' : 'none' }}
            >
              <div className="absolute inset-0 rounded-[30px] border border-white/60 bg-linear-to-b from-[#8ad8ff]/80 via-[#46b4ff]/80 to-[#1f8ff2]/90 opacity-60 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-20px_40px_-20px_rgba(0,60,160,0.5),0_30px_60px_-24px_rgba(0,40,110,0.65)] backdrop-blur-[43px]" />

              <button
                type="button"
                aria-expanded={open}
                aria-label={open ? '收起作品集' : '展开作品集'}
                onClick={() => (open ? setOpen(false) : openNow())}
                className="absolute inset-0 cursor-pointer rounded-[30px] outline-none focus-visible:ring-4 focus-visible:ring-lime"
              />

              <div className="pointer-events-none absolute inset-0">
                <div
                  className={`absolute top-6 left-[92px] transition-transform duration-500 ${open ? '-rotate-[14deg] scale-105' : '-rotate-6'}`}
                >
                  <SmileySticker />
                </div>
                <div
                  className={`absolute top-[54px] left-[212px] transition-transform duration-500 ${open ? 'rotate-[22deg]' : 'rotate-[12deg]'}`}
                >
                  <IdeaSticker />
                </div>
                <div className="absolute bottom-6 left-7 text-white">
                  <p className="text-[26px] leading-none font-medium tracking-tight drop-shadow-sm">精选作品</p>
                  <p className="mt-1.5 font-mono text-[11px] tracking-[0.16em] text-white/75 uppercase">
                    {String(projects.length).padStart(2, '0')} Projects
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActive(0)}
                aria-label="从第一个项目开始浏览"
                className="absolute right-6 bottom-6 grid size-12 place-items-center rounded-full bg-white/25 text-white ring-1 ring-white/60 backdrop-blur transition-colors hover:bg-white hover:text-sky focus-visible:ring-4 focus-visible:ring-lime focus-visible:outline-none"
              >
                <ArrowRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className="relative mt-5 text-center font-mono text-[11px] tracking-[0.16em] text-white/75 uppercase">
        <span className="hidden sm:inline">悬停文件夹展开 · 点击卡片查看项目</span>
        <span className="sm:hidden">轻点文件夹展开 · 点击卡片查看项目</span>
      </p>

      {active !== null && (
        <ProjectModal projects={projects} index={active} onClose={() => setActive(null)} onNavigate={setActive} />
      )}
    </>
  )
}
