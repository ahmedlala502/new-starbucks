import { presentationData } from '../data/presentationData';
import saudiMap from '../imports/saudi-arabia-adm-location-map.svg';

export default function GeographySlide() {
  const mapBounds = {
    top: 32.5,
    bottom: 16,
    left: 34.2,
    right: 56,
  };

  const cities = [
    { name: 'Riyadh', lat: 24.7136, lon: 46.6753, activations: 3444, branches: 28, tier: 'high' },
    { name: 'Jeddah', lat: 21.4858, lon: 39.1925, activations: 1563, branches: 27, tier: 'high' },
    { name: 'Dammam', lat: 26.4207, lon: 50.0888, activations: 590, branches: 13, tier: 'mid' },
    { name: "Ta'if", lat: 21.4373, lon: 40.5127, activations: 485, branches: 8, tier: 'mid' },
    { name: 'Khobar', lat: 26.2172, lon: 50.1971, activations: 471, branches: 7, tier: 'mid' },
    { name: 'Abha', lat: 18.2465, lon: 42.5117, activations: 356, branches: 5, tier: 'low' },
    { name: 'Tabuk', lat: 28.3835, lon: 36.5662, activations: 284, branches: 4, tier: 'low' },
    { name: 'Medina', lat: 24.5247, lon: 39.5692, activations: 245, branches: 4, tier: 'low' },
  ];

  const toMapPosition = (lat: number, lon: number) => ({
    left: `${((lon - mapBounds.left) / (mapBounds.right - mapBounds.left)) * 100}%`,
    top: `${((mapBounds.top - lat) / (mapBounds.top - mapBounds.bottom)) * 100}%`,
  });

  return (
    <div className="size-full bg-white p-8 flex flex-col">
      <div className="mb-4">
        <p className="text-xs uppercase text-gray-400 mb-1">08 · National Footprint</p>
        <h2 className="text-4xl font-black mb-2">GEOGRAPHY — KSA NATIONAL FOOTPRINT</h2>
        <p className="text-gray-500">
          {presentationData.totalBranches} branches across {presentationData.cities} cities and {presentationData.governorates} governorates.
        </p>
      </div>

      <div className="grid grid-cols-[1.15fr_0.85fr] gap-6 flex-1 min-h-0">
        <div className="rounded-xl border border-orange-100 bg-orange-50/60 p-4 flex flex-col min-h-0">
          <div className="relative flex-1 min-h-0 overflow-hidden rounded-lg bg-white border border-orange-100">
            <img
              src={saudiMap}
              alt="Map of Saudi Arabia"
              className="absolute inset-0 size-full object-contain opacity-95"
            />
            {cities.map((city) => {
              const sizeClass = city.tier === 'high' ? 'w-12 h-12' : city.tier === 'mid' ? 'w-9 h-9' : 'w-7 h-7';
              const colorClass = city.tier === 'high' ? 'bg-orange-500' : city.tier === 'mid' ? 'bg-purple-600' : 'bg-gray-950';
              const labelOffset = city.name === 'Khobar' || city.name === 'Dammam' ? 'translate-x-6 -translate-y-7' : 'translate-x-4 -translate-y-8';

              return (
                <div
                  key={city.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={toMapPosition(city.lat, city.lon)}
                >
                  <div className={`${sizeClass} ${colorClass} rounded-full border-2 border-white shadow-lg flex items-center justify-center`}>
                    <span className="text-[0.68rem] font-black text-white">{city.branches}</span>
                  </div>
                  <div className={`absolute left-1/2 top-1/2 ${labelOffset} rounded-md bg-white/95 border border-gray-200 px-2 py-1 shadow-md whitespace-nowrap`}>
                    <p className="text-[0.65rem] leading-none font-black text-gray-950">{city.name}</p>
                    <p className="text-[0.58rem] leading-none text-gray-500 mt-1">{city.activations.toLocaleString()} activations</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-3 flex items-center justify-between text-[0.65rem] text-gray-500">
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span><span>High activity</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span><span>Medium activity</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-gray-950"></span><span>Emerging cities</span></div>
            </div>
            <span>Map: NordNordWest / Wikimedia Commons</span>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-xs uppercase text-orange-500 font-black mb-3">Top 5 Governorates</p>
          <table className="w-full mb-5 bg-white rounded-xl overflow-hidden border border-gray-200">
            <thead>
              <tr className="text-left text-xs uppercase text-gray-500 border-b">
                <th className="pb-2">#</th>
                <th className="pb-2">Governorate</th>
                <th className="pb-2 text-right">Activations</th>
              </tr>
            </thead>
            <tbody>
              {presentationData.topStates.map((state, idx) => (
                <tr key={state.name} className="border-b last:border-b-0">
                  <td className="py-3 pl-3 font-bold">{idx + 1}</td>
                  <td className="py-3 font-bold">{state.name}</td>
                  <td className="py-3 pr-3 text-right font-black text-orange-500">{state.activations.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="grid grid-cols-3 gap-3 mt-auto">
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-xl p-5 text-center">
              <p className="text-4xl font-black text-orange-500">{presentationData.totalBranches}</p>
              <p className="text-xs uppercase text-gray-600 mt-1">Branches</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <p className="text-4xl font-black">{presentationData.cities}</p>
              <p className="text-xs uppercase text-gray-600 mt-1">Cities</p>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-600 rounded-xl p-5 text-center">
              <p className="text-4xl font-black text-purple-600">{presentationData.governorates}</p>
              <p className="text-xs uppercase text-gray-600 mt-1">Governorates</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between text-xs text-gray-400">
        <span>JUL 2025 — MAR 2026</span>
        <span>08 / 19 · {presentationData.totalBranches} BRANCHES · {presentationData.cities} CITIES</span>
      </div>
    </div>
  );
}
