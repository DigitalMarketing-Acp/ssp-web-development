import { Users, PhoneCall, Calendar, Stethoscope } from 'lucide-react'
import { Reveal } from '../ui/Reveal'

const stats = [
  {
    value: '150+',
    labelFirst: 'Healthcare Operations',
    labelSecond: 'Professionals',
    icon: Users,
  },
  {
    value: '12,000+',
    labelFirst: 'Patient Calls',
    labelSecond: 'Weekly',
    icon: PhoneCall,
  },
  {
    value: '2,000+',
    labelFirst: 'Appointments',
    labelSecond: 'Scheduled Weekly',
    icon: Calendar,
  },
  {
    value: '60+',
    labelFirst: 'Providers',
    labelSecond: 'Supported',
    icon: Stethoscope,
  },
]

export function StatsSection() {
  return (
    <section className="relative z-10 -mt-6 sm:-mt-8 mb-6 sm:mb-10">
      <div className="container-page">
        <Reveal>
          <div className="rounded-3xl border border-slate-200/90 bg-white px-2 py-5 sm:p-8 lg:p-10 shadow-card">
            <div className="grid grid-cols-4 divide-x divide-slate-200/80">
              {stats.map((s, idx) => (
                <div
                  key={s.value}
                  className={`flex h-full flex-col items-center justify-start text-center px-1 ${
                    idx > 0 ? 'sm:pl-6 lg:pl-8' : ''
                  }`}
                >
                  <div className="flex h-8 w-8 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-transform duration-300 hover:scale-110">
                    <s.icon className="h-4 w-4 sm:h-7 sm:w-7" aria-hidden="true" />
                  </div>
                  <div className="mt-2 sm:mt-4 text-base min-[400px]:text-lg sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-brand-900 leading-none">
                    {s.value}
                  </div>
                  <div className="mt-1.5 sm:mt-2 text-[9px] min-[400px]:text-[10px] sm:text-sm font-semibold text-slate-600 leading-tight sm:leading-snug min-h-[3.2em] sm:min-h-0 flex flex-col items-center justify-start">
                    <span className="block">{s.labelFirst}</span>
                    <span className="block">{s.labelSecond}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
