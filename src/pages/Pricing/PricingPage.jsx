import { motion } from 'framer-motion';
import { useState } from 'react';
import { pricingPlans } from '../../data/dashboardData';
import { StatusBadge } from '../../components/StatusBadge/StatusBadge';
import { Modal } from '../../components/Modal/Modal';
import { ConfirmDialog } from '../../components/ConfirmDialog/ConfirmDialog';
import { ActionButton } from '../../components/Buttons/ActionButton';

export function PricingPage() {
  const [plans, setPlans] = useState(pricingPlans);
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleDelete = (plan) => {
    setSelectedPlan(plan);
    setConfirmOpen(true);
  };

  const confirmDelete = () => {
    setPlans((current) => current.filter((plan) => plan.id !== selectedPlan.id));
    setConfirmOpen(false);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-[24px] border border-white/10 bg-slate-950/60 p-6">
        <div>
          <h2 className="text-2xl font-semibold text-white">Pricing Management</h2>
          <p className="mt-2 text-sm text-slate-400">Create, edit, and govern subscription tiers for every customer segment.</p>
        </div>
        <ActionButton onClick={() => setModalOpen(true)}>Add Plan</ActionButton>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.id} className="rounded-[24px] border border-white/10 bg-slate-950/60 p-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-slate-400">Order #{plan.order}</p>
              </div>
              <StatusBadge tone={plan.status === 'Active' ? 'success' : 'warning'}>{plan.status}</StatusBadge>
            </div>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-3xl font-semibold text-white">{plan.price}</span>
              <span className="mb-1 text-sm text-slate-400">/ seat</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {plan.badge && <StatusBadge tone="info">{plan.badge}</StatusBadge>}
              {plan.badge === 'Popular' && <StatusBadge tone="success">Popular</StatusBadge>}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <ActionButton>Edit</ActionButton>
              <ActionButton onClick={() => handleDelete(plan)}>Delete</ActionButton>
              <ActionButton>Duplicate</ActionButton>
            </div>
          </div>
        ))}
      </div>

      <Modal open={modalOpen} onOpenChange={setModalOpen} title="Create Plan">
        <div className="space-y-4">
          <input className="w-full rounded-2xl border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none" placeholder="Plan name" />
          <input className="w-full rounded-2xl border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none" placeholder="Price" />
          <input className="w-full rounded-2xl border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none" placeholder="Billing" />
          <div className="flex justify-end">
            <ActionButton onClick={() => setModalOpen(false)}>Save Plan</ActionButton>
          </div>
        </div>
      </Modal>

      <ConfirmDialog open={confirmOpen} onOpenChange={setConfirmOpen} title="Delete plan" description="This action will remove the selected pricing plan permanently." onConfirm={confirmDelete} />
    </motion.div>
  );
}
