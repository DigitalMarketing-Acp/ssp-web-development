import { useState } from 'react'
import { Users, Cpu, Stethoscope } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import miteshPortrait from '../../assets/Mitesh.jpg'
import vijayPortrait from '../../assets/Vijay.jpeg'

const leadershipPillars = [
  {
    title: 'Healthcare Operators',
    description: 'People who understand the realities of running healthcare operations.',
    icon: Users,
    color: 'text-blue-600',
    badgeBg: 'bg-blue-50',
  },
  {
    title: 'Technologists',
    description: 'Teams building automation, analytics, AI and technology-enabled workflows.',
    icon: Cpu,
    color: 'text-teal-600',
    badgeBg: 'bg-teal-50',
  },
  {
    title: 'Clinicians',
    description: 'Clinical perspectives that keep solutions grounded in patient care.',
    icon: Stethoscope,
    color: 'text-purple-600',
    badgeBg: 'bg-purple-50',
  },
]

interface VerifiedLeader {
  name: string
  role: string
  organization: string
  image: string
  initials: string
  alt: string
  bio: string[]
}

const verifiedLeaders: VerifiedLeader[] = [
  {
    name: 'Dr. Mitesh Amin, M.D.',
    role: 'Chief Executive Officer',
    organization: 'Solid State Practice & AlignedCardio',
    image: miteshPortrait,
    initials: 'MA',
    alt: 'Dr. Mitesh Amin, M.D., Chief Executive Officer',
    bio: [
      'Dr. Mitesh Amin, M.D., is a cardiologist with more than two decades of experience in cardiovascular medicine. He completed his medical education at VCU Medical Center and went on to advanced training focused on the diagnosis, treatment, and prevention of heart disease.',
      'He is dedicated to providing personalized, compassionate care across Central Virginia markets, including underserved and rural areas, and remains active in research and education, with peer-reviewed publications and presentations at national and international conferences.',
    ],
  },
  {
    name: 'Vijay Chandran',
    role: 'General Manager',
    organization: 'Solid State Practice',
    image: vijayPortrait,
    initials: 'VC',
    alt: 'Vijay Chandran, General Manager',
    bio: [
      'Vijay Chandran is a strategic healthcare operations leader with 20+ years of experience driving operational excellence, transformation, and client success across the U.S. healthcare and Revenue Cycle Management (RCM) landscape.',
      'As General Manager of Solid State Practice (SSP), Vijay provides strategic leadership across RCM, clinical operations, call center services, process transformation, and client delivery. He leads initiatives focused on building scalable operating models, strengthening performance, and delivering measurable business outcomes. Vijay works closely with clients and cross-functional leadership teams to identify opportunities, simplify complex processes, improve service delivery, and build efficient, scalable solutions.',
    ],
  },
]

// Functional leadership roles referenced in the organizational blueprint
const organizationalLeadership = [
  {
    role: 'Chief Operating Officer',
    org: 'Solid State Practice',
    scope: 'Leads healthcare operations, delivery and strategic growth for SSP.',
  },
  {
    role: 'Head of Technology & Innovation',
    org: 'Solid State Practice',
    scope: 'Drives automation, analytics and AI-enabled solutions across healthcare operations.',
  },
  {
    role: 'Chief Executive Officer',
    org: 'AlignedCardio',
    scope: 'Leads the physician-led platform and strategic direction for AlignedCardio.',
  },
  {
    role: 'Chief Medical Officer',
    org: 'AlignedCardio',
    scope: 'Brings clinical insight and physician perspective to our operational and technology strategy.',
  },
]

export function Leadership() {
  return (
    <section className="section-pad !pt-6 sm:!pt-8 lg:!pt-10 !pb-6 sm:!pb-8 lg:!pb-10 bg-white">
      <div className="container-page space-y-16">
        {/* Header matching image11.png */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow justify-center">Our Leadership</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem]">
              Healthcare operators. Technologists. Clinicians.
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              The people building technology work alongside the people running healthcare, bringing
              operational experience, clinical understanding and technology together inside real
              healthcare environments.
            </p>
          </div>
        </Reveal>

        {/* 3 Leadership Pillars Badges */}
        <Reveal delay={100}>
          <div className="grid max-md:grid-cols-[repeat(3,minmax(0,1fr))] gap-6 max-md:gap-1.5 md:grid-cols-3">
            {leadershipPillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="flex min-w-0 flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-1.5 sm:gap-4 rounded-xl sm:rounded-2xl border border-slate-200/80 bg-slate-50/50 px-1.5 py-3 sm:p-6 shadow-sm"
                >
                  <div
                    className={`flex h-8 w-8 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl ${pillar.badgeBg} ${pillar.color}`}
                  >
                    <Icon className="h-4 w-4 sm:h-6 sm:w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-[9px] min-[400px]:text-[10px] sm:text-base font-bold leading-tight text-slate-900 break-words">{pillar.title}</h3>
                    <p className="mt-1 text-[7px] min-[400px]:text-[8px] sm:text-sm text-slate-600 leading-tight sm:leading-relaxed break-words">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>

        {/* Verified Executive Leaders */}
        <div className="space-y-12">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Executive Leadership
            </span>
          </div>

          <div className="flex flex-col gap-12 lg:gap-16">
            {verifiedLeaders.map((leader, i) => (
              <LeaderRow key={leader.name} leader={leader} reversed={i % 2 === 1} />
            ))}
          </div>
        </div>

        {/* Organizational Alignment Roles */}
        <Reveal delay={150}>
          <div className="rounded-3xl border border-slate-200/90 bg-slate-50/60 p-3 sm:p-10 shadow-soft">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-6 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
                  Cross-Functional Governance
                </span>
                <h3 className="text-xl font-bold text-slate-900 sm:text-2xl mt-1">
                  SSP & AlignedCardio Leadership Structure
                </h3>
              </div>
              <span className="self-start rounded-full bg-white border border-slate-200 px-3.5 py-1 text-xs font-semibold text-slate-600">
                Operating Collaboration
              </span>
            </div>

            <div className="grid max-sm:grid-cols-[repeat(4,minmax(0,1fr))] gap-6 max-sm:gap-1 sm:grid-cols-2 lg:grid-cols-4">
              {organizationalLeadership.map((item) => (
                <div
                  key={item.role}
                  className="min-w-0 rounded-lg sm:rounded-2xl border border-slate-200 bg-white px-1 py-2.5 sm:p-6 shadow-sm text-center sm:text-left"
                >
                  <span className="block text-[6px] min-[400px]:text-[7px] sm:text-[11px] font-bold uppercase tracking-tight sm:tracking-wider leading-tight break-words text-brand-600">
                    {item.org}
                  </span>
                  <h4 className="mt-1.5 sm:mt-2 text-[8px] min-[400px]:text-[9px] sm:text-base font-bold text-slate-900 leading-tight sm:leading-snug break-words">
                    {item.role}
                  </h4>
                  <p className="mt-1 sm:mt-2 text-[6px] min-[400px]:text-[7px] sm:text-xs leading-tight sm:leading-relaxed text-slate-600 break-words">{item.scope}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function LeaderRow({ leader, reversed }: { leader: VerifiedLeader; reversed: boolean }) {
  const [imgOk, setImgOk] = useState(true)

  return (
    <div
      className={`grid items-center gap-8 sm:gap-12 md:items-start ${
        reversed
          ? 'md:grid-cols-[1fr_minmax(0,280px)]'
          : 'md:grid-cols-[minmax(0,280px)_1fr]'
      }`}
    >
      {/* Portrait */}
      <Reveal className={`mx-auto w-full max-w-[280px] ${reversed ? 'md:order-2' : ''}`}>
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 bg-brand-50 shadow-card">
          {imgOk ? (
            <img
              src={leader.image}
              alt={leader.alt}
              className="h-full w-full object-cover object-top"
              loading="lazy"
              decoding="async"
              onError={() => setImgOk(false)}
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center text-5xl font-extrabold text-brand-600"
              role="img"
              aria-label={leader.name}
            >
              {leader.initials}
            </div>
          )}
        </div>
      </Reveal>

      {/* Bio */}
      <Reveal delay={100} className={reversed ? 'md:order-1' : ''}>
        <div className="inline-block rounded-md bg-brand-50 px-2.5 py-1 text-xs font-bold text-brand-700">
          {leader.organization}
        </div>
        <h3 className="mt-2 text-2xl font-bold text-slate-900">{leader.name}</h3>
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          {leader.role}
        </p>
        <div className="mt-4 space-y-3.5 text-base leading-relaxed text-slate-600">
          {leader.bio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
    </div>
  )
}
