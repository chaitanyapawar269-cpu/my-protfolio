import { motion } from 'framer-motion';
import { FileDown, ShieldCheck, BarChart3, CircleDollarSign } from 'lucide-react';
import { auditLogs } from '../../data/dashboardData';
import { StatusBadge } from '../../components/StatusBadge/StatusBadge';
import { ActionButton } from '../../components/Buttons/ActionButton';

export function ReportsPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-semibold text-white">Reports & Analytics</h2>
            <p className="mt-2 text-sm text-slate-400">Inspect funnel health, placement insights, audit events, and export-ready reporting assets.</p>
          </div>
          <ActionButton><FileDown className="mr-2 h-4 w-4" /> Export CSV</ActionButton>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: 'Verification Funnel', value: '82%', icon: ShieldCheck },
          { label: 'Placement Analytics', value: '74%', icon: BarChart3 },
          { label: 'Monthly Reports', value: '12', icon: FileDown },
          { label: 'Audit Logs', value: '208', icon: CircleDollarSign },
        ].map((item) => {
          const Icon = item.icon;
          return <div key={item.label} className="rounded-[24px] border border-white/10 bg-slate-950/60 p-5"><div className="flex items-center gap-2 text-sky-400"><Icon className="h-4 w-4" /><span className="text-sm">{item.label}</span></div><h3 className="mt-3 text-2xl font-semibold text-white">{item.value}</h3></div>;
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Monthly Reports</h3>
            <StatusBadge tone="info">Coming Soon</StatusBadge>
          </div>
          <div className="flex h-40 items-center justify-center rounded-[20px] border border-dashed border-white/10 bg-white/5 text-sm text-slate-400">Heatmap placeholder and analytics snapshots will appear here.</div>
        </div>
        <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-4">
          <h3 className="mb-4 text-lg font-semibold text-white">Audit Logs</h3>
          <div className="space-y-3">
            {auditLogs.map((entry) => (
              <div key={entry.id} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-200">{entry.action}</p>
                  <span className="text-xs text-slate-400">{entry.time}</span>
                </div>
                <p className="mt-1 text-xs text-slate-400">by {entry.user}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
