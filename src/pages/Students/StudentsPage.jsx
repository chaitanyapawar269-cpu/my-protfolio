import { motion } from 'framer-motion';
import { DataTable } from '../../components/Tables/DataTable';
import { students } from '../../data/dashboardData';
import { StatusBadge } from '../../components/StatusBadge/StatusBadge';

export function StudentsPage() {
  const columns = [
    { key: 'name', label: 'Student' },
    { key: 'college', label: 'College' },
    { key: 'degree', label: 'Degree' },
    {
      key: 'status',
      label: 'Status',
      render: (row) => <StatusBadge tone={row.status === 'Placed' ? 'success' : row.status === 'Interviewing' ? 'info' : 'warning'}>{row.status}</StatusBadge>,
    },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-6">
        <h2 className="text-2xl font-semibold text-white">Student Insights</h2>
        <p className="mt-2 text-sm text-slate-400">Follow application movement, placement progress, and interview readiness.</p>
      </div>
      <DataTable title="Students" columns={columns} rows={students} />
    </motion.div>
  );
}
