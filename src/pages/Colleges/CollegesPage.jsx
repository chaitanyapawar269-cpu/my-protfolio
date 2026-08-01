import { motion } from 'framer-motion';
import { DataTable } from '../../components/Tables/DataTable';
import { colleges } from '../../data/dashboardData';
import { StatusBadge } from '../../components/StatusBadge/StatusBadge';

export function CollegesPage() {
  const columns = [
    { key: 'name', label: 'College' },
    { key: 'city', label: 'City' },
    { key: 'programs', label: 'Programs' },
    {
      key: 'status',
      label: 'Verification',
      render: (row) => <StatusBadge tone={row.status === 'Verified' ? 'success' : 'warning'}>{row.status}</StatusBadge>,
    },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-6">
        <h2 className="text-2xl font-semibold text-white">College Partnerships</h2>
        <p className="mt-2 text-sm text-slate-400">Review onboarding, verification status, program coverage, and collaboration health.</p>
      </div>
      <DataTable title="Colleges" columns={columns} rows={colleges} />
    </motion.div>
  );
}
