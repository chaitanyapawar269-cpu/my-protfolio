export function CheckboxGroup({ items, selected, onSelect }) {
  return (
    <div className="space-y-2">
      {items.map((item) => {
        const checked = selected.includes(item);
        return (
          <label key={item} className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2 text-sm text-slate-200 transition hover:border-sky-400/40 hover:bg-sky-400/10">
            <input type="checkbox" checked={checked} onChange={() => onSelect(item)} className="h-4 w-4 rounded border-slate-600 text-sky-500 focus:ring-sky-400" />
            <span>{item}</span>
          </label>
        );
      })}
    </div>
  );
}
