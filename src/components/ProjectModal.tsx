import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react'
import type { Project } from './projects'

export function ProjectModal({
  projects,
  index,
  onClose,
  onNavigate,
}: {
  projects: Project[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const p = projects[index]
  const total = projects.length
  const prev = (index - 1 + total) % total
  const next = (index + 1) % total

  // Lock page scroll, focus the dialog, and restore focus when it closes.
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = overflow
      previouslyFocused?.focus?.()
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onNavigate(prev)
      if (e.key === 'ArrowRight') onNavigate(next)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onNavigate, prev, next])

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/55 p-3 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-up relative grid max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[28px] bg-white shadow-[0_40px_120px_-30px_rgba(0,30,80,0.6)] sm:rounded-[36px] md:grid-cols-[1.1fr_1fr] md:overflow-hidden"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="关闭"
          className="absolute top-4 right-4 z-10 grid size-10 place-items-center rounded-full bg-white/90 text-ink shadow-sm ring-1 ring-black/5 backdrop-blur transition-colors hover:bg-ink hover:text-white"
        >
          <X className="size-4" />
        </button>

        <div className="bg-mist p-3 sm:p-4">
          <img
            key={p.id}
            src={p.image}
            alt={p.title}
            className="animate-fade-up aspect-[4/3] h-full w-full rounded-[22px] object-cover md:aspect-auto md:max-h-[80vh]"
          />
        </div>

        <div key={p.id} className="animate-fade-up flex flex-col p-6 sm:p-9 md:overflow-y-auto">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-lime px-3 py-1 text-xs font-medium">{p.category}</span>
            <span className="font-mono text-xs tracking-[0.14em] text-ink/45">
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          </div>

          <h3 id="project-title" className="mt-5 pr-8 text-[28px] leading-tight font-medium tracking-[-0.02em] sm:text-4xl">
            {p.title}
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/65">{p.summary}</p>

          <dl className="mt-7 grid grid-cols-3 gap-3 border-y border-ink/10 py-5">
            {[
              ['年份', p.year],
              ['客户', p.client],
              ['角色', p.role],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[11px] tracking-[0.14em] text-ink/45 uppercase">{k}</dt>
                <dd className="mt-1.5 text-sm font-medium">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6">
            <p className="font-mono text-[11px] tracking-[0.14em] text-ink/45 uppercase">交付内容</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.deliverables.map((d) => (
                <span key={d} className="rounded-full bg-mist px-3 py-1.5 text-sm">
                  {d}
                </span>
              ))}
            </div>
          </div>

          <ul className="mt-6 space-y-2.5">
            {p.highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-[15px]">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-sky text-white">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex items-center justify-between gap-3 pt-8">
            <button
              type="button"
              onClick={() => onNavigate(prev)}
              aria-label={`上一个项目：${projects[prev].title}`}
              className="grid size-12 place-items-center rounded-full bg-mist transition-colors hover:bg-ink hover:text-white"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate(next)}
              className="group flex min-w-0 flex-1 items-center justify-end gap-3 rounded-full bg-ink py-1.5 pr-1.5 pl-5 text-white"
            >
              <span className="truncate text-sm">
                <span className="text-white/50">下一个 · </span>
                {projects[next].title}
              </span>
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-lime text-ink transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="size-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
