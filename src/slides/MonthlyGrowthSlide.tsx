import { presentationData } from '../data/presentationData';
import { XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from 'recharts';

export default function MonthlyGrowthSlide() {
  const avgActivations = Math.round(
    presentationData.monthlyActivations.reduce((sum, m) => sum + m.activations, 0) /
      presentationData.monthlyActivations.length
  );

  const peakMonth = presentationData.monthlyActivations.reduce((max, m) =>
    m.activations > max.activations ? m : max
  );

  return (
    <div className="size-full bg-white p-10 flex flex-col">
      <div className="mb-5">
        <p className="text-xs uppercase text-gray-400 mb-1">06 · Month-by-Month Growth</p>
        <h2 className="text-4xl font-black mb-2">CONTINUITY BUILT MOMENTUM</h2>
        <p className="text-gray-500">
          Creator activations by month — peak in {peakMonth.month} with {peakMonth.activations.toLocaleString()}; sustained performance across 9 months.
        </p>
      </div>

      <div className="grid grid-cols-[1.7fr_0.8fr] gap-7 flex-1 min-h-0">
        <div className="flex flex-col bg-white border-2 border-orange-100 rounded-xl p-5">
          <p className="text-xs uppercase text-gray-500 font-black mb-3">
            Creator Activations by Month — 9 Months · Total {presentationData.totalInfluencers.toLocaleString()}
          </p>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={presentationData.monthlyActivations}>
                <defs>
                  <linearGradient id="colorActivations" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid key="grid" strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis key="xaxis" dataKey="month" stroke="#6b7280" fontSize={11} />
                <YAxis key="yaxis" stroke="#6b7280" fontSize={11} />
                <Area
                  key="area"
                  type="monotone"
                  dataKey="activations"
                  stroke="#f97316"
                  strokeWidth={3}
                  fill="url(#colorActivations)"
                  dot={{ fill: '#f97316', r: 5 }}
                  isAnimationActive={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <div className="bg-orange-50 border-l-4 border-orange-500 rounded-xl p-4">
            <p className="text-xs uppercase text-gray-500 mb-1">Total Activations</p>
            <p className="text-4xl font-black text-orange-500">{presentationData.totalInfluencers.toLocaleString()}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <p className="text-xs uppercase text-gray-500 mb-1">Avg / Month</p>
            <p className="text-4xl font-black">{avgActivations.toLocaleString()}</p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-600 rounded-xl p-4">
            <p className="text-xs uppercase text-gray-500 mb-1">Peak · {peakMonth.month}</p>
            <p className="text-4xl font-black text-purple-600">{peakMonth.activations.toLocaleString()}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <p className="text-xs uppercase text-gray-500 mb-1">Active Months</p>
            <p className="text-4xl font-black">{presentationData.activeMonths}</p>
          </div>
          <div className="bg-purple-600 text-white rounded-xl p-4">
            <p className="text-xs uppercase mb-1">9 Months · Jul '25 — Mar '26</p>
            <p className="text-2xl font-black">ON TRACK</p>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between text-xs text-gray-400">
        <span>JUL 2025 — MAR 2026</span>
        <span>06 / 19 · MONTHLY GROWTH</span>
      </div>
    </div>
  );
}
