import { Search } from 'lucide-react';

export function SearchBar({ placeholder = 'Search...' }) {
  return (
    <label className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-400 shadow-inner">
      <Search className="h-4 w-4" />
      <input className="w-full bg-transparent outline-none placeholder:text-slate-500" placeholder={placeholder} />
    </label>
  );
}
