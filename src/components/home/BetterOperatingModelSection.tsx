import { TrendingUp, Maximize2, PiggyBank } from 'lucide-react'
import { Reveal } from '../ui/Reveal'

const outcomes = [
  {
    num: '01',
    title: 'Better Performance',
    description:
      'Streamline day-to-day healthcare operations with experienced teams, connected workflows, and technology.',
    icon: TrendingUp,
    badgeBg: 'bg-blue-50 text-blue-600',
    borderColor: 'border-blue-200',
  },
  {
    num: '02',
    title: 'Greater Scalability',
    description:
      'Build operational capabilities that can grow with your practice and evolving business needs.',
    icon: Maximize2,
    badgeBg: 'bg-purple-50 text-purple-600',
    borderColor: 'border-purple-200',
  },
  {
    num: '03',
    title: 'Lower Administrative Cost',
    description:
      'Improve efficiency and reduce administrative overhead through better processes, technology, and automation.',
    icon: PiggyBank,
    badgeBg: 'bg-emerald-50 text-emerald-600',
    borderColor: 'border-emerald-200',
  },
]

export function BetterOperatingModelSection() {
  return (
    <section className="section-pad !pt-6 sm:!pt-8 lg:!pt-10 !pb-6 sm:!pb-8 lg:!pb-10 bg-surface-soft border-t border-slate-200/80">
      <div className="container-page space-y-12">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow justify-center">Our Operating Model</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem]">
              A Better Operating Model
            </h2>
            <p className="mt-2 text-xl font-bold text-brand-700">
              Better performance. Greater scalability. Lower administrative cost.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              SSP combines healthcare expertise, technology, automation, and data to create more
              efficient operating models for medical practices.
            </p>
          </div>
        </Reveal>

        {/* 3 Balanced Outcome Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item, idx) => {
            const Icon = item.icon
            return (
              <Reveal key={item.num} delay={idx * 100}>
                <div
                  className={`group relative flex h-full flex-col justify-between rounded-3xl border ${item.borderColor} bg-white p-7 sm:p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black tracking-widest text-slate-400">
                        {item.num}
                      </span>
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.badgeBg}`}
                      >
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600">
                      <span>Operational Outcome</span>
                      <span>→</span>
                    </span>
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
