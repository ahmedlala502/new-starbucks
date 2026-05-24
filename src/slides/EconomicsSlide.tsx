import { presentationData } from '../data/presentationData';

export default function EconomicsSlide() {
  return (
    <div className="size-full bg-white p-10 flex flex-col">
      <div className="mb-5">
        <p className="text-xs uppercase text-gray-400 mb-1">04 · Economics</p>
        <h2 className="text-4xl font-black mb-2">
          COST ADVANTAGE ANALYSIS — <span className="text-orange-500">96%+ SAVINGS</span>
        </h2>
        <p className="text-gray-500">
          GC Flat-Rate vs Market Creator Cost — same scale, a fraction of the spend. GC effective model: ~400 SAR per creator.
        </p>
      </div>

      <div className="grid grid-cols-[1.05fr_0.95fr] gap-7 flex-1 min-h-0">
        <div className="flex flex-col bg-gray-50 border border-gray-200 rounded-xl p-5">
          <table className="w-full mb-5 bg-white rounded-lg overflow-hidden">
            <thead>
              <tr className="text-left text-xs uppercase text-gray-500 border-b">
                <th className="pb-3">Model</th>
                <th className="pb-3">Cost / Creator</th>
                <th className="pb-3">Total Cost</th>
                <th className="pb-3">Savings vs GC</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 font-bold">GC Flat-Rate</td>
                <td className="text-orange-500 font-black">400 SAR</td>
                <td className="font-black">4.20M SAR</td>
                <td className="text-gray-400">—</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-bold">Market Low</td>
                <td className="font-black">10,000 SAR</td>
                <td className="font-black">102.97M SAR</td>
                <td className="text-green-600 font-bold">98.85M SAR</td>
              </tr>
              <tr>
                <td className="py-3 font-bold">Market High</td>
                <td className="font-black">200,000 SAR</td>
                <td className="font-black">2,059.4M SAR</td>
                <td className="text-green-600 font-bold">2,055.28M SAR</td>
              </tr>
            </tbody>
          </table>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-r-lg mt-auto">
            <p className="text-xs uppercase text-orange-700 font-bold mb-2">Economic Advantage</p>
            <p className="text-gray-700 text-sm">
              GC model delivers <span className="font-black">96% cost savings</span> compared to traditional market contracting.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Potential value protected: ~98.9M SAR to ~2.1B SAR before service-scope differences.
            </p>
          </div>
        </div>

        <div className="flex flex-col bg-white border-2 border-purple-100 rounded-xl p-5">
          <p className="text-xs uppercase text-gray-500 font-black mb-4">Cost Formula Breakdown — 10,536 Activations</p>
          <div className="space-y-5 flex-1">
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold">GC Model</span>
                <span className="text-2xl font-black text-orange-500">4.20M SAR</span>
              </div>
              <div className="h-3 bg-orange-500 rounded" style={{ width: '12%' }}></div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold">Market Low</span>
                <span className="text-2xl font-black text-purple-600">102.97M SAR</span>
              </div>
              <div className="h-3 bg-purple-600 rounded" style={{ width: '28%' }}></div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold">Market High</span>
                <span className="text-2xl font-black text-purple-700">2,059.4M SAR</span>
              </div>
              <div className="h-3 bg-purple-700 rounded" style={{ width: '100%' }}></div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200">
            <div className="text-center bg-white border border-gray-200 rounded-lg p-3">
              <p className="text-xs uppercase text-gray-500 mb-1">GC Advantage</p>
              <p className="font-black text-sm">10,536 activations</p>
              <p className="text-xs text-gray-500">at 400 SAR each</p>
            </div>
            <div className="text-center bg-orange-50 border border-orange-100 rounded-lg p-3">
              <p className="text-xs uppercase text-gray-500 mb-1">Cost Efficiency</p>
              <p className="font-black text-orange-500 text-sm">95.9% savings</p>
              <p className="text-xs text-gray-500">25× activations same budget</p>
            </div>
            <div className="text-center bg-white border border-gray-200 rounded-lg p-3">
              <p className="text-xs uppercase text-gray-500 mb-1">Scale Achievement</p>
              <p className="font-black text-sm">10,536 creators</p>
              <p className="text-xs text-gray-500">{presentationData.totalBranches} branches · {presentationData.cities} cities</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between text-xs text-gray-400">
        <span>JUL 2025 — MAR 2026</span>
        <span>04 / 19 · GC FLAT-RATE VS MARKET</span>
      </div>
    </div>
  );
}
