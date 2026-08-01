import { useState } from 'react';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Navbar } from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

export function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(129,140,248,0.16),_transparent_32%),linear-gradient(135deg,_#020617,_#0f172a)] px-2 py-2 text-slate-100 sm:px-3 lg:px-4 lg:py-4">
      <div className="mx-auto flex w-full max-w-[1920px] gap-4 rounded-[40px] border border-white/10 bg-slate-950/40 p-2 shadow-[0_35px_90px_-32px_rgba(2,6,23,0.95)] backdrop-blur-xl lg:p-3">
        <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((value) => !value)} />
        <div className="flex-1 min-w-0">
          <Navbar />
          <motion.main initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-[32px] border border-white/10 bg-slate-900/60 p-4 shadow-2xl backdrop-blur-xl sm:p-6 lg:p-7">
            <Outlet />
          </motion.main>
        </div>
      </div>
    </div>
  );
}
