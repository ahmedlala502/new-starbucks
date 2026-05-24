import { presentationData } from '../data/presentationData';

export default function ExecutiveSummarySlide() {
  return (
    <div className="size-full bg-white p-10 flex flex-col">
      <div className="mb-5">
        <p className="text-xs uppercase text-gray-400 mb-1">17 · Executive Summary</p>
        <h2 className="text-4xl font-black mb-2">EXECUTIVE SUMMARY — WHAT WE DELIVERED</h2>
        <p className="text-gray-500">National creator engine delivering local-to-national visibility across KSA.</p>
      </div>

      <div className="grid grid-cols-3 gap-5 mb-5">
        <div className="bg-orange-50 border-l-4 border-orange-500 rounded-xl p-6">
          <p className="text-xs uppercase text-orange-700 font-bold mb-3">Always-On Activation</p>
          <p className="text-6xl font-black mb-3">{presentationData.totalInfluencers.toLocaleString()}</p>
          <p className="text-gray-700 text-sm">
            Continuous creator activations across {presentationData.activeMonths} months — momentum, not bursts.
          </p>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
          <p className="text-xs uppercase text-gray-500 font-bold mb-3">Geographic Footprint</p>
          <p className="text-6xl font-black mb-3">{presentationData.totalBranches} / {presentationData.cities}</p>
          <p className="text-gray-700 text-sm">
            Branches across cities and {presentationData.governorates} governorates — a complete national footprint.
          </p>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-600 rounded-xl p-6">
          <p className="text-xs uppercase text-purple-700 font-bold mb-3">Performance Growth</p>
          <p className="text-6xl font-black text-purple-600 mb-3">+24%</p>
          <p className="text-gray-700 text-sm">
            Month-over-month growth in activations — engine accelerating, not flattening.
          </p>
        </div>
      </div>

      <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-xl p-6 mb-4">
        <p className="text-xs uppercase text-orange-700 font-bold mb-2">Strategic Impact</p>
        <p className="text-gray-700 text-base font-semibold leading-relaxed">
          Always-on cadence built momentum and consistency nationwide. Branch-to-national activation created continuous local relevance with scalable cost-efficiency. Sustained visibility across {presentationData.activeMonths} months with minimal gaps, ensuring top-of-mind presence.
        </p>
      </div>

      <div className="bg-purple-600 text-white rounded-xl p-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase mb-1">Campaign Period</p>
          <p className="text-3xl font-black">Jul 2025 — Mar 2026</p>
        </div>
        <p className="text-2xl font-black opacity-95">{presentationData.activeMonths} MONTHS ACTIVE</p>
      </div>

      <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between text-xs text-gray-400">
        <span>JUL 2025 — MAR 2026</span>
        <span>17 / 19 · EXECUTIVE SUMMARY</span>
      </div>
    </div>
  );
}
