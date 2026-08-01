import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';

export function SearchFilter({ items, selected, onSelect }) {
  const [query, setQuery] = useState('');

  const filteredItems = useMemo(() => {
    const term = query.toLowerCase();
    return items.filter((item) => item.toLowerCase().includes(term));
  }, [items, query]);

  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-400">
        <Search className="h-4 w-4" />
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search" className="w-full border-none bg-transparent text-slate-200 outline-none placeholder:text-slate-500" />
      </label>

      <div className="max-h-48 space-y-2 overflow-y-auto pr-1">
        {filteredItems.map((item) => {
          const checked = selected.includes(item);
          return (
            <label key={item} className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2 text-sm text-slate-200 transition hover:border-sky-400/40 hover:bg-sky-400/10">
              <input type="checkbox" checked={checked} onChange={() => onSelect(item)} className="h-4 w-4 rounded border-slate-600 text-sky-500 focus:ring-sky-400" />
              <span>{item}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
