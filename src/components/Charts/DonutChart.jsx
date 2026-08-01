import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export function DonutChart({ data }) {
  return (
    <div className="h-72 w-full rounded-[24px] border border-white/10 bg-slate-950/60 p-4">
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="value" innerRadius={70} outerRadius={110} paddingAngle={4}>
            {data.map((entry, index) => (
              <Cell key={`${entry.name}-${index}`} fill={['#38bdf8', '#818cf8', '#34d399'][index % 3]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
