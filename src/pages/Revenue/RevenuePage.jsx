import { motion } from 'framer-motion';
import { RevenueChart } from '../../components/Charts/RevenueChart';
import { DonutChart } from '../../components/Charts/DonutChart';
import { pricingPlans, revenueSeries, revenueSources } from '../../data/dashboardData';
import { StatusBadge } from '../../components/StatusBadge/StatusBadge';

export function RevenuePage() {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: 'MRR', value: '$84K' },
          { label: 'ARR', value: '$1.01M' },
          { label: 'Subscribers', value: '3.2K' },
          { label: 'Avg Revenue', value: '$26K' },
        ].map((item) => (
          <div key={item.label} className="rounded-[24px] border border-white/10 bg-slate-950/60 p-5">
            <p className="text-sm text-slate-400">{item.label}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{item.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-4">
          <h3 className="mb-4 text-lg font-semibold text-white">Revenue Growth</h3>
          <RevenueChart data={revenueSeries} />
        </div>
        <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-4">
          <h3 className="mb-4 text-lg font-semibold text-white">Revenue Source</h3>
          <DonutChart data={revenueSources} />
        </div>
      </div>

      <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-4">
        <h3 className="mb-4 text-lg font-semibold text-white">Subscription Plans</h3>
        <div className="grid gap-4 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-white">{plan.name}</h4>
                <StatusBadge tone={plan.status === 'Active' ? 'success' : 'warning'}>{plan.status}</StatusBadge>
              </div>
              <p className="mt-3 text-sm text-slate-400">{plan.billing}</p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-3xl font-semibold text-white">{plan.price}</span>
                <span className="pb-1 text-sm text-slate-400">/ month</span>
              </div>
              <div className="mt-4 flex gap-2">
                {plan.badge && <StatusBadge tone="info">{plan.badge}</StatusBadge>}
                {!plan.badge && <StatusBadge tone="neutral">Standard</StatusBadge>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
