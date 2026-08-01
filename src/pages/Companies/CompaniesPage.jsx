import { motion } from 'framer-motion';
import { DataTable } from '../../components/Tables/DataTable';
import { companies } from '../../data/dashboardData';
import { StatusBadge } from '../../components/StatusBadge/StatusBadge';

export function CompaniesPage() {
  const columns = [
    { key: 'name', label: 'Company' },
    { key: 'industry', label: 'Industry' },
    { key: 'employees', label: 'Employees' },
    {
      key: 'status',
      label: 'Status',
      render: (row) => <StatusBadge tone={row.status === 'Active' ? 'success' : 'warning'}>{row.status}</StatusBadge>,
    },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-6">
        <h2 className="text-2xl font-semibold text-white">Employer Network</h2>
        <p className="mt-2 text-sm text-slate-400">Monitor hiring partners, industries, company health, and collaboration state.</p>
      </div>
      <DataTable title="Companies" columns={columns} rows={companies} />
    </motion.div>
  );
}
