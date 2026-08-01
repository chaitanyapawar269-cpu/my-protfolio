import { motion } from 'framer-motion';
import { Bell, LayoutDashboard, Building2, GraduationCap, Briefcase, Users, Handshake, BarChart3, BadgeDollarSign, FileText, Settings, LogOut, ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import { useMobile } from '../../hooks/useMobile';
import { cn } from '../../utils/cn';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const menu = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/colleges', label: 'Colleges', icon: Building2 },
  { to: '/students', label: 'Students', icon: GraduationCap },
  { to: '/companies', label: 'Companies', icon: Briefcase },
  { to: '/jobs', label: 'Jobs', icon: Users },
  { to: '/partners', label: 'Partners', icon: Handshake },
  { to: '/revenue', label: 'Revenue', icon: BadgeDollarSign },
  { to: '/pricing', label: 'Pricing', icon: BarChart3 },
  { to: '/reports', label: 'Reports', icon: FileText },
  { to: '/settings', label: 'Settings', icon: Settings },
];

export function Sidebar({ collapsed, onToggle }) {
  const isMobile = useMobile();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const content = (
    <div className="flex h-full flex-col rounded-[28px] border border-white/10 bg-slate-950/80 p-4 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 p-2 text-white">
            <LayoutDashboard className="h-5 w-5" />
          </div>
          {!collapsed && <div><p className="text-sm font-semibold text-white">Northstar</p><p className="text-xs text-slate-400">Admin Console</p></div>}
        </div>
        <button onClick={onToggle} className="hidden rounded-full border border-white/10 p-2 text-slate-400 md:block">
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 font-semibold text-white">{(user?.name || 'A').slice(0, 2).toUpperCase()}</div>
          {!collapsed && <div>
            <p className="text-sm font-semibold text-white">{user?.name || 'Admin'}</p>
            <p className="text-xs text-slate-400">{user?.role || 'Platform Admin'}</p>
          </div>}
        </div>
      </div>

      <nav className="mt-6 space-y-1">
        {menu.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.to;
          return (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => cn('group flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition-all', isActive ? 'bg-gradient-to-r from-sky-500/20 to-violet-500/20 text-white shadow-lg shadow-sky-500/10' : 'text-slate-400 hover:bg-white/5 hover:text-white')}>
              <Icon className="h-4 w-4" />
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          );
        })}
      </nav>

      <div className="mt-auto flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-400">
        <div className="flex items-center gap-2">
          <Bell className="h-4 w-4" />
          {!collapsed && <span>Alerts</span>}
        </div>
        <button onClick={() => { logout(); navigate('/login'); }} className="rounded-full p-2 hover:bg-white/10"><LogOut className="h-4 w-4" /></button>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <>
        <button onClick={() => setMobileOpen(true)} className="rounded-2xl border border-white/10 bg-slate-900/70 p-2 text-white md:hidden">
          <Menu className="h-5 w-5" />
        </button>
        {mobileOpen && <div className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur" onClick={() => setMobileOpen(false)} />}
        <motion.aside initial={{ x: -260 }} animate={{ x: mobileOpen ? 0 : -280 }} className="fixed left-0 top-0 z-50 h-screen w-72 p-3">
          <div onClick={(e) => e.stopPropagation()}>{content}</div>
        </motion.aside>
      </>
    );
  }

  return <aside className={cn('hidden h-screen w-72 p-3 md:block', collapsed && 'w-24')}>{content}</aside>;
}
