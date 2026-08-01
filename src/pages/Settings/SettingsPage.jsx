import { motion } from 'framer-motion';
import { useState } from 'react';
import { ActionButton } from '../../components/Buttons/ActionButton';
import { Modal } from '../../components/Modal/Modal';
import { ConfirmDialog } from '../../components/ConfirmDialog/ConfirmDialog';
import * as Switch from '@radix-ui/react-switch';

const tabs = ['Profile', 'Security', 'Notifications', 'Platform'];

export function SettingsPage() {
  const [currentTab, setCurrentTab] = useState('Profile');
  const [openModal, setOpenModal] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-6">
        <h2 className="text-2xl font-semibold text-white">Settings</h2>
        <p className="mt-2 text-sm text-slate-400">Control account security, notification preferences, platform defaults, and institutional preferences.</p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.35fr_1fr]">
        <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-4">
          <div className="space-y-2">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setCurrentTab(tab)} className={`flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-sm ${currentTab === tab ? 'bg-sky-500/15 text-white' : 'bg-white/5 text-slate-400'}`}>
                <span>{tab}</span>
                <span className="text-xs">↗</span>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-6">
          {currentTab === 'Profile' && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 text-lg font-semibold text-white">AK</div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Profile</h3>
                  <p className="text-sm text-slate-400">Upload avatar and maintain contact details.</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <input className="rounded-2xl border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none" placeholder="Full name" />
                <input className="rounded-2xl border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none" placeholder="Email" />
                <input className="rounded-2xl border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none" placeholder="Phone" />
                <input className="rounded-2xl border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none" placeholder="Timezone" />
              </div>
            </div>
          )}

          {currentTab === 'Security' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Security</h3>
              <input className="w-full rounded-2xl border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none" placeholder="Current password" />
              <input className="w-full rounded-2xl border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none" placeholder="New password" />
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <div>
                  <p className="text-sm text-white">Two-factor authentication</p>
                  <p className="text-xs text-slate-400">Protect admin accounts with MFA.</p>
                </div>
                <Switch.Root className="h-6 w-11 rounded-full bg-slate-700 data-[state=checked]:bg-sky-500" defaultChecked>
                  <Switch.Thumb className="block h-5 w-5 rounded-full bg-white transition-transform data-[state=checked]:translate-x-5" />
                </Switch.Root>
              </div>
            </div>
          )}

          {currentTab === 'Notifications' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Notifications</h3>
              {['Institution Verification', 'Employer Verification', 'Weekly Report', 'Daily Summary', 'System Alerts'].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-sm text-slate-200">{item}</p>
                  <Switch.Root className="h-6 w-11 rounded-full bg-slate-700 data-[state=checked]:bg-sky-500" defaultChecked>
                    <Switch.Thumb className="block h-5 w-5 rounded-full bg-white transition-transform data-[state=checked]:translate-x-5" />
                  </Switch.Root>
                </div>
              ))}
            </div>
          )}

          {currentTab === 'Platform' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Platform</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <input className="rounded-2xl border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none" placeholder="Theme" />
                <input className="rounded-2xl border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none" placeholder="Accent color" />
                <input className="rounded-2xl border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none" placeholder="Timezone" />
                <input className="rounded-2xl border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none" placeholder="Language" />
              </div>
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <ActionButton onClick={() => setOpenModal(true)}>Save Changes</ActionButton>
            <ActionButton onClick={() => setOpenConfirm(true)}>Reset Settings</ActionButton>
          </div>
        </div>
      </div>

      <Modal open={openModal} onOpenChange={setOpenModal} title="Save settings">
        <p className="text-sm text-slate-400">Your changes will be applied to the admin workspace immediately.</p>
      </Modal>

      <ConfirmDialog open={openConfirm} onOpenChange={setOpenConfirm} title="Reset settings" description="This will restore default platform preferences." onConfirm={() => setOpenConfirm(false)} />
    </motion.div>
  );
}
