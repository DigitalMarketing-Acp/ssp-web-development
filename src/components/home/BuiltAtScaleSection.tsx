import { MapPin, Users, Stethoscope, TrendingUp } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

const scaleDimensions = [
  {
    title: 'Multiple Locations',
    description: 'Support across geographies.',
    icon: MapPin,
    color: 'text-blue-600',
    badgeBg: 'bg-blue-50',
    borderColor: 'border-blue-200/80',
  },
  {
    title: 'Multiple Providers',
    description: 'From single specialties to multi-specialty groups.',
    icon: Users,
    color: 'text-teal-600',
    badgeBg: 'bg-teal-50',
    borderColor: 'border-teal-200/80',
  },
  {
    title: 'Multiple Service Lines',
    description: 'Across cardiology and adjacent services.',
    icon: Stethoscope,
    color: 'text-indigo-600',
    badgeBg: 'bg-indigo-50',
    borderColor: 'border-indigo-200/80',
  },
  {
    title: 'Growing Patient Volumes',
    description: 'Built to scale with your organization.',
    icon: TrendingUp,
    color: 'text-amber-600',
    badgeBg: 'bg-amber-50',
    borderColor: 'border-amber-200/80',
  },
]

export function BuiltAtScaleSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page space-y-12">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Built at Scale"
            title="Built for complex healthcare organizations."
            description="Our teams support the operational infrastructure behind growing physician organizations across multiple locations, providers and service lines."
            className="mb-8 sm:mb-14"
          />
        </Reveal>

        {/* 4 Scale Dimensions Grid */}
        <div className="grid max-sm:grid-cols-[repeat(4,minmax(0,1fr))] gap-6 max-sm:gap-1.5 sm:grid-cols-2 lg:grid-cols-4">
          {scaleDimensions.map((dim, idx) => {
            const Icon = dim.icon
            return (
              <Reveal key={dim.title} delay={idx * 70}>
                <div
                  className={`group flex h-full min-w-0 flex-col items-center sm:items-stretch text-center sm:text-left justify-between rounded-xl sm:rounded-3xl border ${dim.borderColor} bg-white px-1.5 py-3 sm:p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover`}
                >
                  <div>
                    <div
                      className={`mx-auto sm:mx-0 flex h-8 w-8 sm:h-13 sm:w-13 items-center justify-center rounded-lg sm:rounded-2xl ${dim.badgeBg} ${dim.color} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-4 w-4 sm:h-6 sm:w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-2 sm:mt-5 text-[9px] min-[400px]:text-[10px] sm:text-lg font-bold leading-tight text-slate-900 break-words">{dim.title}</h3>
                    <p className="mt-1 sm:mt-2 text-[7px] min-[400px]:text-[8px] sm:text-sm leading-tight sm:leading-relaxed text-slate-600 break-words">{dim.description}</p>
                  </div>

                  <div className="mt-2 sm:mt-6 pt-2 sm:pt-3 border-t border-slate-100 w-full">
                    <span className="text-[6px] min-[400px]:text-[7px] sm:text-[11px] font-bold uppercase tracking-tight sm:tracking-wider text-slate-400">
                      Enterprise Scale
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
