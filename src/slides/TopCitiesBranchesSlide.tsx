import { presentationData } from '../data/presentationData';

export default function TopCitiesBranchesSlide() {
  return (
    <div className="size-full bg-white p-10 flex flex-col">
      <div className="mb-5">
        <p className="text-xs uppercase text-gray-400 mb-1">09 · City & Branch Rankings</p>
        <h2 className="text-4xl font-black mb-2">TOP 10 CITIES & TOP 10 BRANCHES</h2>
        <p className="text-gray-500">Rankings based on total creator activations across all campaigns.</p>
      </div>

      <div className="grid grid-cols-2 gap-7 flex-1 min-h-0">
        <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
          <p className="text-xs uppercase text-orange-600 font-black mb-3">City Rankings</p>
          <div className="space-y-1">
            {presentationData.topCities.map((city, idx) => (
              <div key={city.name} className="flex items-center gap-3 bg-gray-50 rounded-lg p-2.5">
                <div className={`text-xl font-black w-10 shrink-0 ${idx < 3 ? 'text-orange-500' : 'text-purple-600'}`}>
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm">{city.name}</p>
                </div>
                <div className="w-32">
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${idx < 3 ? 'bg-orange-500' : 'bg-purple-600'}`}
                      style={{ width: `${(city.activations / presentationData.topCities[0].activations) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-right font-black w-20 text-sm">{city.activations.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-100 rounded-xl p-4">
          <p className="text-xs uppercase text-purple-600 font-black mb-3">Branch Rankings</p>
          <div className="space-y-1">
            {presentationData.topBranches.map((branch, idx) => (
              <div key={branch.name} className="bg-white rounded-lg p-2.5 border border-purple-100">
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <div className={`text-lg font-black w-8 shrink-0 ${idx < 3 ? 'text-orange-500' : 'text-purple-600'}`}>
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <p className="font-bold text-sm leading-tight">{branch.name}</p>
                      <p className="text-xs text-gray-500">{branch.city}</p>
                    </div>
                  </div>
                  <div className="text-right font-black">{branch.activations}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between text-xs text-gray-400">
        <span>JUL 2025 — MAR 2026</span>
        <span>09 / 19 · TOP CITIES & BRANCHES</span>
      </div>
    </div>
  );
}
