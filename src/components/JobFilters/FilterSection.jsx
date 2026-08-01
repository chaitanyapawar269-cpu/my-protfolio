import { ChevronDown, ChevronUp } from 'lucide-react';

export function FilterSection({ title, open, onToggle, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/60">
      <button type="button" onClick={onToggle} className="flex w-full items-center justify-between px-3 py-3 text-left text-sm font-semibold text-slate-100">
        <span>{title}</span>
        {open ? <ChevronUp className="h-4 w-4 text-sky-400" /> : <ChevronDown className="h-4 w-4 text-slate-400" />}
      </button>
      {open && <div className="border-t border-white/10 px-3 py-3">{children}</div>}
    </div>
  );
}
