import { FileText, Users, BarChart3, Coins, Settings2, Cpu } from 'lucide-react'

const coreAreas = [
  { label: 'Revenue Cycle', icon: FileText, color: 'text-blue-600 bg-blue-50' },
  { label: 'Patient Access', icon: Users, color: 'text-teal-600 bg-teal-50' },
  { label: 'Analytics', icon: BarChart3, color: 'text-indigo-600 bg-indigo-50' },
  { label: 'Finance', icon: Coins, color: 'text-purple-600 bg-purple-50' },
  { label: 'Automation', icon: Settings2, color: 'text-cyan-600 bg-cyan-50' },
  { label: 'AI', icon: Cpu, color: 'text-amber-600 bg-amber-50' },
]

export function CoreAreasGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
      {coreAreas.map((area) => (
        <div
          key={area.label}
          className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50/50 p-5 text-center transition-all duration-200 hover:border-brand-300 hover:bg-white hover:shadow-card"
        >
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl ${area.color} transition-transform duration-200 group-hover:scale-110`}
          >
            <area.icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <span className="mt-3 text-sm font-bold text-slate-900">{area.label}</span>
        </div>
      ))}
    </div>
  )
}
