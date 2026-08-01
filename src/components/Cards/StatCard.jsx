import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { cn } from '../../utils/cn';

export function StatCard({ title, value, change, icon, accent }) {
  const Icon = Icons[icon] || Icons['Activity'];

  return (
    <motion.div whileHover={{ y: -4, scale: 1.01 }} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_80px_-30px_rgba(15,23,42,0.8)] backdrop-blur-xl">
      <div className={cn('mb-4 inline-flex rounded-2xl bg-gradient-to-br p-3 text-white', accent)}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="space-y-2">
        <p className="text-sm text-slate-400">{title}</p>
        <div className="flex items-end justify-between">
          <h3 className="text-2xl font-semibold text-white">{value}</h3>
          <span className="text-sm font-medium text-emerald-400">{change}</span>
        </div>
      </div>
    </motion.div>
  );
}
