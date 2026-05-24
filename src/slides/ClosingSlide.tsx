import { presentationData } from '../data/presentationData';

export default function ClosingSlide() {
  const stats = [
    {
      label: 'Activations',
      value: presentationData.totalInfluencers.toLocaleString(),
      sub: 'creator engine deployed',
      className: 'border-orange-200 bg-orange-50/70 text-orange-500',
    },
    {
      label: 'Footprint',
      value: `${presentationData.totalBranches} / ${presentationData.cities}`,
      sub: 'branches / cities',
      className: 'border-gray-300 bg-white text-gray-950',
    },
    {
      label: 'Cost Savings',
      value: '96%',
      sub: 'budget protected',
      className: 'border-purple-200 bg-purple-600 text-white',
    },
    {
      label: 'Content Records',
      value: presentationData.totalContent.toLocaleString(),
      sub: 'proof points captured',
      className: 'border-gray-300 bg-gray-950 text-white',
    },
  ];

  return (
    <div className="size-full bg-white p-9 flex flex-col">
      <div className="mb-5">
        <p className="text-xs uppercase text-gray-400 mb-2">18 · Closing</p>
        <h1 className="text-[3.8rem] font-black leading-[0.96] tracking-normal">
          WE BUILT <span className="text-orange-500">REACH.</span>
          <br />
          WE PROTECTED <span className="text-purple-600">BUDGET.</span>
          <br />
          WE KEPT STARBUCKS <span className="text-orange-500">TOP OF MIND.</span>
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-5 flex-1 min-h-0">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-lg border p-5 flex flex-col justify-center shadow-[0_14px_36px_rgba(15,23,42,0.08)] ${stat.className}`}
          >
            <p className="text-[2.75rem] leading-none font-black tabular-nums mb-2">{stat.value}</p>
            <p className="text-sm uppercase font-black tracking-wide">{stat.label}</p>
            <p className="text-sm font-semibold mt-2 opacity-70">{stat.sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-lg bg-orange-500 text-white p-5 flex items-center justify-between shadow-[0_18px_40px_rgba(249,115,22,0.22)]">
        <div>
          <p className="text-xs uppercase font-black tracking-wide opacity-80 mb-1">Final Takeaway</p>
          <p className="text-2xl font-black">National visibility, measurable efficiency, sustained creator momentum.</p>
        </div>
        <div className="text-right">
          <p className="text-5xl font-black">{presentationData.activeMonths}</p>
          <p className="text-xs uppercase font-black tracking-wide opacity-80">Active Months</p>
        </div>
      </div>

      <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between text-xs text-gray-400">
        <span>JUL 2025 — MAR 2026</span>
        <span>18 / 19 · CLOSING</span>
      </div>
    </div>
  );
}
