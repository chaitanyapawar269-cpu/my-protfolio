import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Sparkles } from 'lucide-react';
import { StatCard } from '../../components/Cards/StatCard';
import { ActionButton } from '../../components/Buttons/ActionButton';
import { RevenueChart } from '../../components/Charts/RevenueChart';
import { ApplicationChart } from '../../components/Charts/ApplicationChart';
import { DonutChart } from '../../components/Charts/DonutChart';
import { StatusBadge } from '../../components/StatusBadge/StatusBadge';
import { activity, applications, events, notifications, revenueSeries, applicationSeries, revenueSources, stats } from '../../data/dashboardData';

export function DashboardPage() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <div className="space-y-6">
      <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="overflow-hidden rounded-[32px] border border-sky-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-5 shadow-2xl lg:p-8">
        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-sm text-sky-300">
              <Sparkles className="h-4 w-4" /> Good Morning, Admin
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-white sm:text-4xl">Welcome back to your hiring command center.</h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">Track placements, student applications, employer matches, and growth from a modern workspace designed for smarter hiring.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-slate-200">
                <div className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-sky-400" /> {today}</div>
              </div>
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
                128 student interviews this week
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-sky-500/20 via-violet-500/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/70 p-3 shadow-[0_24px_60px_-24px_rgba(2,6,23,0.9)]">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                alt="Students being interviewed and recruited for jobs"
                className="h-[280px] w-full rounded-[22px] object-cover sm:h-[340px]"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-[20px] border border-white/10 bg-slate-950/80 p-4 backdrop-blur">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-white">Campus hiring is live</p>
                    <p className="text-xs text-slate-400">Students matched with top employers in real time</p>
                  </div>
                  <div className="rounded-full bg-sky-500/15 px-3 py-1 text-xs font-medium text-sky-300">
                    24 new matches
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <StatCard key={item.title} {...item} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-6">
          <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-4">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Revenue Overview</h3>
              <ActionButton>Export</ActionButton>
            </div>
            <RevenueChart data={revenueSeries} />
          </div>
          <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-4">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Application Overview</h3>
              <ActionButton>View Report</ActionButton>
            </div>
            <ApplicationChart data={applicationSeries} />
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-4">
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Actions</h3>
            <div className="space-y-3">
              <button className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-slate-300 hover:bg-white/10">
                <span>Review new college requests</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-slate-300 hover:bg-white/10">
                <span>Approve partner onboarding</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-slate-300 hover:bg-white/10">
                <span>Create pricing proposal</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-4">
            <h3 className="mb-4 text-lg font-semibold text-white">Revenue Sources</h3>
            <DonutChart data={revenueSources} />
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_1fr_1fr]">
        <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-4">
          <h3 className="mb-4 text-lg font-semibold text-white">Recent Activity</h3>
          <div className="space-y-3">
            {activity.map((entry) => (
              <div key={entry.id} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm text-slate-200">{entry.title}</p>
                  <StatusBadge tone={entry.type === 'warning' ? 'warning' : entry.type === 'success' ? 'success' : 'info'}>{entry.type}</StatusBadge>
                </div>
                <p className="mt-1 text-xs text-slate-400">{entry.meta}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-4">
          <h3 className="mb-4 text-lg font-semibold text-white">Recent Applications</h3>
          <div className="space-y-3">
            {applications.map((app) => (
              <div key={app.id} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                <div>
                  <p className="text-sm font-medium text-white">{app.student}</p>
                  <p className="text-xs text-slate-400">{app.company}</p>
                </div>
                <StatusBadge tone={app.status === 'Shortlisted' ? 'success' : app.status === 'Interview' ? 'info' : 'warning'}>{app.status}</StatusBadge>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-4">
          <h3 className="mb-4 text-lg font-semibold text-white">Upcoming Events</h3>
          <div className="space-y-3">
            {events.map((event) => (
              <div key={event.id} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                <p className="text-sm text-slate-200">{event.title}</p>
                <span className="text-xs text-slate-400">{event.time}</span>
              </div>
            ))}
          </div>
          <h3 className="mt-6 mb-3 text-lg font-semibold text-white">Latest Notifications</h3>
          <div className="space-y-3">
            {notifications.map((item) => (
              <div key={item.id} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="text-sm text-slate-200">{item.title}</p>
                <p className="mt-1 text-xs text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
