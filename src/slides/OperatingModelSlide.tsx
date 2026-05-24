import { presentationData } from '../data/presentationData';

export default function OperatingModelSlide() {
  return (
    <div className="size-full bg-white p-10 flex flex-col">
      <div className="mb-5">
        <p className="text-xs uppercase text-gray-400 mb-1">05 · Operating Model</p>
        <h2 className="text-4xl font-black mb-2">WHAT WE BUILT — A NATIONAL CREATOR ENGINE</h2>
        <p className="text-gray-500">Always-on activation model delivering branch-to-national visibility.</p>
      </div>

      <div className="grid grid-cols-[1.05fr_0.95fr] gap-7 flex-1 min-h-0">
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 flex flex-col">
          <p className="text-xs uppercase text-orange-600 font-black mb-4">How It Works</p>
          <div className="grid grid-cols-2 gap-3 flex-1">
            {[
              { num: '01', title: 'Source at Scale', desc: 'Identify creators across KSA.' },
              { num: '02', title: 'Brief Fast', desc: 'Rapid campaign setup.' },
              { num: '03', title: 'Activate Weekly', desc: 'Consistent content delivery.' },
              { num: '04', title: 'Measure & Optimize', desc: 'Performance tracking.' },
              { num: '05', title: 'Branch-to-National', desc: 'Local relevance, national reach.' },
              { num: '06', title: 'Cost Efficiency', desc: 'Optimized spend per activation.' },
            ].map((item) => (
              <div key={item.num} className="bg-white border border-orange-100 rounded-lg p-4 flex gap-3">
                <div className="text-3xl font-black text-orange-500 w-12 shrink-0">{item.num}</div>
                <div>
                  <h3 className="font-black mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-xs uppercase text-purple-600 font-black mb-4">Performance Metrics</p>
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="bg-white border-2 border-orange-200 rounded-xl p-5">
              <p className="text-4xl font-black text-orange-500 mb-1">{presentationData.totalInfluencers.toLocaleString()}</p>
              <p className="text-sm uppercase font-black text-gray-700">Total Activations</p>
            </div>
            <div className="bg-white border-2 border-purple-200 rounded-xl p-5">
              <p className="text-4xl font-black text-purple-600 mb-1">{presentationData.uniqueInfluencers.toLocaleString()}</p>
              <p className="text-sm uppercase font-black text-gray-700">Unique Creators</p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
              <p className="text-4xl font-black mb-1">{presentationData.totalBranches}</p>
              <p className="text-sm uppercase font-black text-gray-700">Branches Covered</p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
              <p className="text-4xl font-black mb-1">{presentationData.cities}</p>
              <p className="text-sm uppercase font-black text-gray-700">Cities</p>
            </div>
          </div>

          <div className="bg-purple-600 text-white rounded-xl p-7 mt-auto">
            <p className="text-xs uppercase mb-1">Sustained Cadence</p>
            <p className="text-3xl font-black mb-2">{presentationData.activeMonths} months of continuous visibility</p>
            <p className="text-xs opacity-80">JULY 2025 — MARCH 2026</p>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between text-xs text-gray-400">
        <span>JUL 2025 — MAR 2026</span>
        <span>05 / 19 · WHAT WE BUILT</span>
      </div>
    </div>
  );
}
