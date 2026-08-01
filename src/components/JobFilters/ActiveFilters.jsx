export function ActiveFilters({ pills, onRemove }) {
  if (!pills.length) {
    return (
      <div className="rounded-2xl border border-dashed border-white/10 bg-slate-950/70 px-3 py-4 text-sm text-slate-400">
        No filters selected yet.
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {pills.map((pill) => (
        <button key={`${pill.group}-${pill.label}`} type="button" onClick={() => onRemove(pill.group, pill.label)} className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300 transition hover:bg-sky-400/20">
          {pill.label} ×
        </button>
      ))}
    </div>
  );
}
