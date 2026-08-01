import { Bell, MessageSquare, Moon, Sun, ChevronRight, LogOut } from 'lucide-react';
import { SearchBar } from '../SearchBar/SearchBar';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const titleMap = {
  '/': 'Dashboard',
  '/colleges': 'Colleges',
  '/students': 'Students',
  '/companies': 'Companies',
  '/jobs': 'Jobs',
  '/partners': 'Partners',
  '/revenue': 'Revenue',
  '/pricing': 'Pricing',
  '/reports': 'Reports',
  '/settings': 'Settings',
};

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-20 mb-6 rounded-[28px] border border-white/10 bg-slate-950/70 px-4 py-3 backdrop-blur-xl">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span>Overview</span>
            <ChevronRight className="h-4 w-4" />
            <span className="font-semibold text-white">{titleMap[location.pathname] || 'Dashboard'}</span>
          </div>
          <h2 className="text-xl font-semibold text-white">{titleMap[location.pathname] || 'Dashboard'}</h2>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="w-full sm:w-64">
            <SearchBar placeholder="Search dashboards, colleges..." />
          </div>
          <button className="rounded-2xl border border-white/10 bg-white/5 p-2 text-slate-300">
            <Bell className="h-4 w-4" />
          </button>
          <button className="rounded-2xl border border-white/10 bg-white/5 p-2 text-slate-300">
            <MessageSquare className="h-4 w-4" />
          </button>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="rounded-2xl border border-white/10 bg-white/5 p-2 text-slate-300">
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 font-semibold text-white">{(user?.name || 'A').slice(0, 2).toUpperCase()}</div>
            <div>
              <p className="text-sm font-semibold text-white">{user?.name || 'Admin'}</p>
              <p className="text-xs text-slate-400">{user?.role || 'Super Admin'}</p>
            </div>
          </div>
          <button onClick={() => { logout(); navigate('/login'); }} className="rounded-2xl border border-white/10 bg-white/5 p-2 text-slate-300">
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
