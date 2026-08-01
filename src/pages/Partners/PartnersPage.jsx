import { motion } from 'framer-motion';
import { DataTable } from '../../components/Tables/DataTable';
import { partners } from '../../data/dashboardData';
import { StatusBadge } from '../../components/StatusBadge/StatusBadge';

export function PartnersPage() {
  const columns = [
    { key: 'name', label: 'Partner' },
    { key: 'tier', label: 'Tier' },
    {
      key: 'status',
      label: 'Status',
      render: (row) => <StatusBadge tone={row.status === 'Active' ? 'success' : 'warning'}>{row.status}</StatusBadge>,
    },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-6">
        <h2 className="text-2xl font-semibold text-white">Partner Ecosystem</h2>
        <p className="mt-2 text-sm text-slate-400">Coordinate partner tiers, enablement programs, and lifecycle health.</p>
      </div>
      <DataTable title="Partners" columns={columns} rows={partners} />
    </motion.div>
  );
}
