export function RangeSlider({ value, onChange, min, max }) {
  return (
    <div className="space-y-3">
      <input type="range" min={min} max={max} value={value} onChange={(event) => onChange(Number(event.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-700 accent-sky-500" />
      <div className="flex items-center justify-between text-sm text-slate-400">
        <span>${min}L</span>
        <span className="rounded-full bg-sky-400/10 px-2 py-1 text-sky-300">${value}L+</span>
        <span>${max}L+</span>
      </div>
    </div>
  );
}
