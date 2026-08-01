import { cn } from '../../utils/cn';

export function StatusBadge({ children, tone = 'neutral' }) {
  const tones = {
    success: 'bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/20',
    info: 'bg-sky-500/15 text-sky-400 ring-1 ring-sky-500/20',
    warning: 'bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/20',
    neutral: 'bg-slate-500/15 text-slate-300 ring-1 ring-slate-500/20',
  };

  return <span className={cn('rounded-full px-3 py-1 text-xs font-semibold', tones[tone])}>{children}</span>;
}
