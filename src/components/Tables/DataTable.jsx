import { motion } from 'framer-motion';
import { ArrowUpDown, Download, SlidersHorizontal } from 'lucide-react';

export function DataTable({ title, columns, rows }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-4 shadow-2xl">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <div className="flex gap-2">
          <button className="rounded-2xl border border-white/10 bg-white/5 p-2 text-slate-400"><SlidersHorizontal className="h-4 w-4" /></button>
          <button className="rounded-2xl border border-white/10 bg-white/5 p-2 text-slate-400"><Download className="h-4 w-4" /></button>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-white/10">
        <table className="min-w-full divide-y divide-white/10 text-sm">
          <thead className="bg-white/5 text-left text-slate-400">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="px-4 py-3 font-medium">{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 bg-slate-950/40">
            {rows.map((row, index) => (
              <motion.tr key={row.id ?? index} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
                {columns.map((column) => (
                  <td key={column.key} className="px-4 py-3 text-slate-300">{column.render ? column.render(row) : row[column.key]}</td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
