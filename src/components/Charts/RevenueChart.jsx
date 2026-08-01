import { AreaChart, Area, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export function RevenueChart({ data }) {
  return (
    <div className="h-72 w-full rounded-[24px] border border-white/10 bg-slate-950/60 p-4">
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.7} />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Area type="monotone" dataKey="revenue" stroke="#38bdf8" fill="url(#revenue)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
