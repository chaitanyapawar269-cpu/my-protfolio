import { motion } from 'framer-motion';
import { DataTable } from '../../components/Tables/DataTable';
import { jobs } from '../../data/dashboardData';
import { StatusBadge } from '../../components/StatusBadge/StatusBadge';
import { FilterSidebar } from '../../components/JobFilters/FilterSidebar';

export function JobsPage() {
  const columns = [
    { key: 'title', label: 'Job Title' },
    { key: 'company', label: 'Company' },
    { key: 'location', label: 'Location' },
    {
      key: 'status',
      label: 'Status',
      render: (row) => <StatusBadge tone={row.status === 'Live' ? 'success' : 'warning'}>{row.status}</StatusBadge>,
    },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 shadow-[0_20px_60px_-24px_rgba(2,6,23,0.9)]">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-400">Career hub</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Open Roles</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-400">Launch, review, and manage job opportunities across the partner network with a polished experience matching the rest of the dashboard.</p>
          </div>
          <div className="rounded-2xl border border-sky-400/20 bg-sky-400/10 px-4 py-3 text-sm text-sky-300">
            24 new matches this week
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
        <FilterSidebar />
        <div className="space-y-4">
          <div className="rounded-[24px] border border-white/10 bg-slate-900/70 p-4 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.6)] backdrop-blur">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-medium text-white">Recommended matches</p>
                <p className="mt-1 text-sm text-slate-400">Refine the list using the filter panel and review the best-fit opportunities.</p>
              </div>
              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-emerald-300">
                Live roles
              </div>
            </div>
          </div>
          <DataTable title="Jobs" columns={columns} rows={jobs} />
        </div>
      </div>
    </motion.div>
  );
}
