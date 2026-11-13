import {
  Users,
  Settings2,
  Lightbulb,
  Wrench,
  Send,
  LineChart,
  RotateCw,
  Layers,
  ArrowRight,
} from 'lucide-react'
import { Reveal } from '../ui/Reveal'

const operatingLoop = [
  { label: 'REAL HEALTHCARE PROBLEM', icon: Lightbulb },
  { label: 'BUILD', icon: Wrench },
  { label: 'DEPLOY', icon: Send },
  { label: 'MEASURE', icon: LineChart },
  { label: 'IMPROVE', icon: RotateCw },
]

const alignedNodes = [
  { label: 'AlignedCardio', subtitle: 'Physician Platform', isBrand: true },
  { label: 'Real Healthcare Operations', subtitle: 'Live Practice Needs', icon: Users },
  { label: 'Solid State Practice', subtitle: 'Operations Engine', icon: Layers },
  { label: 'Healthcare Operations + Technology', subtitle: 'Integrated Delivery', icon: Settings2 },
  { label: 'Better Infrastructure', subtitle: 'Physicians & Patients', icon: LineChart },
]

export function AboutAlignedCardio({
  showPartOfCard = true,
  showHeritageCard = true,
}: {
  showPartOfCard?: boolean
  showHeritageCard?: boolean
}) {
  return (
    <section id="alignedcardio" className="section-pad !pt-6 sm:!pt-8 lg:!pt-10 !pb-8 sm:!pb-10 lg:!pb-12 bg-surface-soft scroll-mt-24">
      <div className="container-page space-y-5">
        {/* Card 1: Built by Healthcare Operators */}
        <Reveal>
          <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 lg:p-12 shadow-card">
            {showHeritageCard && (
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
              {/* Left Column: Narrative */}
              <div className="lg:col-span-12 space-y-5">
                <span className="eyebrow">Operational Heritage</span>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Built by healthcare operators.
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-slate-600">
                  <p>
                    Solid State Practice was created to solve the everyday operational challenges of
                    growing healthcare organizations.
                  </p>
                  <p>
                    As part of <strong>AlignedCardio</strong>, SSP supports key areas such as patient
                    access, revenue cycle, finance, analytics, automation and AI.
                  </p>
                  <p>
                    Using real-world healthcare experience, we identify challenges, improve workflows
                    and deliver better results. Today, we bring this practical experience and
                    technology-driven approach to the healthcare organizations we support.
                  </p>
                </div>

                <div className="pt-2">
                  <div className="inline-block rounded-xl border border-brand-100 bg-brand-50/70 px-4 py-2.5 text-sm font-semibold text-brand-800">
                    “Real healthcare experience. Better operations. Technology built for what’s next.”
                  </div>
                </div>
              </div>
            </div>
            )}

            {/* Bottom Loop Strip */}
            <div className={showHeritageCard ? 'mt-10 pt-8 border-t border-slate-100' : ''}>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 text-center mb-6">
                Our Continuous Improvement Loop
              </p>
              <div className="grid grid-cols-5 gap-1 sm:gap-4">
                {operatingLoop.map((step, idx) => (
                  <div key={step.label} className="relative flex flex-col items-center text-center">
                    <div className="flex h-8 w-8 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-brand-50 text-brand-600 border border-brand-200/60 shadow-soft">
                      <step.icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                    </div>
                    <span className="mt-2 sm:mt-2.5 text-[8px] min-[400px]:text-[9px] sm:text-[11px] font-bold tracking-normal sm:tracking-wider leading-tight text-slate-700">
                      {step.label}
                    </span>
                    {idx < operatingLoop.length - 1 && (
                      <span
                        className="flex absolute top-0 h-8 sm:h-11 -right-0.5 sm:-right-2 translate-x-1/2 items-center text-[10px] sm:text-base text-slate-300 font-bold leading-none"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Card 2: Part of AlignedCardio */}
        {showPartOfCard && (
        <Reveal delay={100}>
          <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 lg:p-12 shadow-card">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
              {/* Left Column: AlignedCardio Narrative */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
                  Cardiovascular Infrastructure
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Part of AlignedCardio
                </h2>
                <p className="text-base leading-relaxed text-slate-600">
                  Solid State Practice is part of <strong>AlignedCardio</strong>, a physician-led
                  cardiovascular platform focused on improving healthcare for physicians and patients.
                </p>
                <p className="text-base leading-relaxed text-slate-600">
                  AlignedCardio has built its own operational support system instead of depending
                  entirely on external vendors. SSP plays an important role by bringing together
                  experienced teams, technology, analytics, automation and AI to improve healthcare
                  operations.
                </p>

                <div className="pt-2">
                  <a
                    href="https://alignedcardio.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-50 px-5 py-3 text-sm font-bold text-brand-700 transition-colors hover:bg-brand-100"
                  >
                    <span>Learn more about AlignedCardio</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Right Column: Connected Node Visualization */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-slate-100 bg-slate-50/60 px-2 py-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 text-center mb-6">
                    Integrated Platform Architecture
                  </p>

                  <div className="relative grid grid-cols-5 items-start gap-1 sm:gap-2">
                    {/* Horizontal connecting line */}
                    <div
                      aria-hidden="true"
                      className="absolute top-[18px] sm:top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-300 via-teal-300 to-indigo-300 -z-0"
                    />

                    {alignedNodes.map((node) => (
                      <div
                        key={node.label}
                        className="relative z-10 flex flex-col items-center text-center"
                      >
                        {node.isBrand ? (
                          <div className="flex h-9 w-9 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white border-2 border-brand-500 shadow-md">
                            <span className="text-[6px] sm:text-[11px] font-black tracking-tighter text-brand-700 leading-tight">
                              Aligned<br />Cardio
                            </span>
                          </div>
                        ) : (
                          <div className="flex h-9 w-9 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white border-2 border-slate-200 shadow-md text-brand-600">
                            {node.icon && <node.icon className="h-4 w-4 sm:h-6 sm:w-6" aria-hidden="true" />}
                          </div>
                        )}
                        <span className="mt-2 sm:mt-3 text-[8px] min-[400px]:text-[9px] sm:text-xs font-bold text-slate-900 leading-tight">
                          {node.label}
                        </span>
                        <span className="hidden sm:block mt-1 text-[10px] text-slate-500 font-medium leading-tight">
                          {node.subtitle}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        )}
      </div>
    </section>
  )
}
