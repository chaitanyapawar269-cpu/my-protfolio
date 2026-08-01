import { motion } from 'framer-motion';
import { BriefcaseBusiness, Building2, GraduationCap, ShieldCheck, Sparkles, Users } from 'lucide-react';

const cards = [
  { icon: Building2, label: 'Colleges', position: 'left-4 top-6' },
  { icon: Users, label: 'Students', position: 'right-4 top-10' },
  { icon: BriefcaseBusiness, label: 'Jobs', position: 'left-8 bottom-20' },
  { icon: ShieldCheck, label: 'Verified', position: 'right-8 bottom-12' },
];

export function AuthIllustration() {
  return (
    <div className="relative h-full min-h-[420px] overflow-hidden rounded-[32px]">
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
        alt="Professionals hiring students"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,6,23,0.55),rgba(15,23,42,0.75))]" />

      <motion.div
        animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-6 top-6 rounded-2xl border border-sky-400/20 bg-slate-900/40 px-4 py-3 text-sm font-semibold text-white shadow-2xl backdrop-blur-xl"
      >
        GrindUp
      </motion.div>

      <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 lg:p-10">
        <div className="max-w-md">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/80">AI Powered Hiring</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Welcome to GrindUp</h2>
          <p className="mt-3 text-sm leading-6 text-slate-200 sm:text-base">Connecting Students, Colleges & Companies with Smarter Hiring.</p>
        </div>

        <div className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className={`flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-3 py-3 text-sm text-white shadow-lg backdrop-blur-xl ${card.position}`}
                >
                  <div className="rounded-xl bg-white/20 p-2">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span>{card.label}</span>
                </motion.div>
              );
            })}
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-sm text-slate-100 shadow-lg backdrop-blur-xl">
            <div className="mb-2 flex items-center gap-2 text-sky-200">
              <Sparkles className="h-4 w-4" />
              Verified Hiring • Trusted by Colleges • Secure Platform
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-slate-200/90">
              <span className="rounded-full border border-white/20 px-2.5 py-1">Verified Recruiters</span>
              <span className="rounded-full border border-white/20 px-2.5 py-1">Trusted by Colleges</span>
              <span className="rounded-full border border-white/20 px-2.5 py-1">AI Powered</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
