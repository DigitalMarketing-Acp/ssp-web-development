import {
  Search,
  Sliders,
  Send,
  BarChart,
  RefreshCw,
} from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

const stages = [
  {
    num: '01',
    title: 'Identify',
    description: 'Find friction inside real healthcare operations.',
    icon: Search,
    color: 'text-blue-600',
    borderColor: 'border-blue-200',
    badgeBg: 'bg-blue-50',
  },
  {
    num: '02',
    title: 'Build',
    description: 'Design better workflows, automation and technology.',
    icon: Sliders,
    color: 'text-teal-600',
    borderColor: 'border-teal-200',
    badgeBg: 'bg-teal-50',
  },
  {
    num: '03',
    title: 'Deploy',
    description: 'Implement within live healthcare environments.',
    icon: Send,
    color: 'text-amber-600',
    borderColor: 'border-amber-200',
    badgeBg: 'bg-amber-50',
  },
  {
    num: '04',
    title: 'Measure',
    description: 'Track operational and financial outcomes.',
    icon: BarChart,
    color: 'text-indigo-600',
    borderColor: 'border-indigo-200',
    badgeBg: 'bg-indigo-50',
  },
  {
    num: '05',
    title: 'Improve',
    description: 'Iterate and scale what works.',
    icon: RefreshCw,
    color: 'text-rose-600',
    borderColor: 'border-rose-200',
    badgeBg: 'bg-rose-50',
  },
]

export function HowWeInnovateSection() {
  return (
    <section className="section-pad !pt-6 sm:!pt-8 lg:!pt-10 !pb-6 sm:!pb-8 lg:!pb-10 bg-white">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="How We Innovate"
            title="From idea to real-world deployment."
            description="We turn real operational challenges into practical solutions that create measurable impact for healthcare practices."
            className="mb-8 sm:mb-14"
          />
        </Reveal>

        {/* 5 Stages Sequence Cards with Connecting Indicators */}
        <div className="grid max-sm:grid-cols-[repeat(5,minmax(0,1fr))] gap-5 sm:grid-cols-2 max-sm:gap-1 md:grid-cols-3 lg:grid-cols-5">
          {stages.map((stage, idx) => {
            const Icon = stage.icon
            return (
              <Reveal key={stage.num} delay={idx * 80}>
                <div
                  className={`group relative flex h-full min-w-0 flex-col justify-between rounded-xl sm:rounded-3xl border ${stage.borderColor} bg-white px-1.5 py-3 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card`}
                >
                  <div>
                    {/* Stage number */}
                    <span className="block text-center sm:text-left text-sm sm:text-2xl font-black text-slate-300 group-hover:text-brand-600 transition-colors">
                      {stage.num}
                    </span>

                    <h3 className="mt-2 sm:mt-3 text-center sm:text-left text-[9px] min-[400px]:text-[10px] sm:text-lg font-bold text-slate-900 break-words">{stage.title}</h3>
                    <p className="mt-1.5 sm:mt-2 text-center sm:text-left text-[7px] min-[400px]:text-[8px] sm:text-sm leading-tight sm:leading-relaxed text-slate-600 break-words hyphens-auto">
                      {stage.description}
                    </p>
                  </div>

                  <div className="mt-3 sm:mt-6 pt-2 sm:pt-4 border-t border-slate-100 flex items-center justify-center sm:justify-between">
                    <div
                      className={`flex h-7 w-7 sm:h-11 sm:w-11 items-center justify-center rounded-lg sm:rounded-xl ${stage.badgeBg} ${stage.color}`}
                    >
                      <Icon className="h-3.5 w-3.5 sm:h-5 sm:w-5" aria-hidden="true" />
                    </div>

                    {idx < stages.length - 1 && (
                      <span className="hidden lg:block text-slate-300 font-bold" aria-hidden="true">
                        →
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
