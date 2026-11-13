import { Eye, Compass } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { visionMission } from '../../data/company'

const cards = [
  {
    icon: Eye,
    label: 'Our Vision',
    body: visionMission.vision,
  },
  {
    icon: Compass,
    label: 'Our Mission',
    body: visionMission.mission,
  },
]

export function VisionMission() {
  return (
    <section className="section-pad !pt-6 sm:!pt-8 lg:!pt-10">
      <div className="container-page grid gap-6 md:grid-cols-2">
        {cards.map((card, i) => (
          <Reveal
            key={card.label}
            delay={i * 100}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-card sm:p-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-50"
            />
            <span className="relative flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-brand-600 text-white">
              <card.icon className="h-5 w-5 sm:h-7 sm:w-7" aria-hidden="true" />
            </span>
            <h3 className="relative mt-4 text-xl sm:mt-6 sm:text-2xl font-bold text-ink">{card.label}</h3>
            <p className="relative mt-2 text-sm sm:mt-3 sm:text-base leading-relaxed text-ink-muted">{card.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
