export default function LiveReportSlide() {
  return (
    <div className="size-full bg-white p-8 flex flex-col">
      <div className="mb-4">
        <p className="text-xs uppercase text-gray-400 mb-1">19 · Live Report</p>
        <h1 className="text-3xl font-black mb-1">
          LIVE DASHBOARD — <span className="text-orange-500">ALWAYS CURRENT</span>
        </h1>
        <p className="text-gray-500">Real-time campaign data — drill into any branch, city, channel, or creator.</p>
      </div>

      <div className="grid grid-cols-[1.1fr_0.9fr] gap-6 flex-1 min-h-0">
        <div className="flex flex-col gap-4 min-h-0">
          <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-xl p-4">
            <p className="text-xs uppercase text-orange-700 font-black mb-2">Live Report URL</p>
            <div className="bg-white rounded-xl p-4 border border-orange-200">
              <p className="font-mono text-xs break-all text-gray-700">
                https://try-gc.com/ar/report/private/U3RhcmJ1Y2tzbWF0Y2hhMTVncHJvdGVpbnZpc2l0a3NhbWFyMjAyNlN0YXJidWNrcwjwp1d4
              </p>
            </div>
            <p className="text-sm font-semibold text-gray-600 mt-3">
              Access the full interactive dashboard — filter by branch, city, platform, or campaign window.
            </p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 rounded-r-xl p-4 flex-1 min-h-0">
            <p className="text-xs uppercase text-purple-700 font-black mb-2">What's Inside</p>
            <ul className="grid grid-cols-1 gap-2 text-sm text-gray-700">
              <li className="bg-white rounded-lg p-2.5 font-bold"><span className="text-orange-500 font-black">01</span> Creator activation logs by campaign</li>
              <li className="bg-white rounded-lg p-2.5 font-bold"><span className="text-orange-500 font-black">02</span> City & branch performance breakdown</li>
              <li className="bg-white rounded-lg p-2.5 font-bold"><span className="text-orange-500 font-black">03</span> Platform-level content & engagement</li>
              <li className="bg-white rounded-lg p-2.5 font-bold"><span className="text-orange-500 font-black">04</span> Month-over-month trend views</li>
              <li className="bg-white rounded-lg p-2.5 font-bold"><span className="text-orange-500 font-black">05</span> Top creators ranked by reach & views</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-gray-50 rounded-xl border-2 border-gray-200 p-6">
          <div className="w-52 h-52 bg-gray-900 rounded-xl flex items-center justify-center mb-5">
            <span className="text-white text-5xl font-black">QR</span>
          </div>
          <p className="text-xl font-black text-gray-900 text-center">Scan for Live Dashboard</p>
          <p className="text-sm font-semibold text-gray-500 text-center mt-2">Branch, city, channel, and creator performance in one live view.</p>
          <div className="mt-4 px-5 py-2.5 bg-purple-600 text-white text-xs rounded-full font-black uppercase tracking-wider">
            Grand Community × Starbucks KSA
          </div>
        </div>
      </div>

      <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between text-xs text-gray-400">
        <span>END OF REPORT · JUL 2025 — MAR 2026</span>
        <span>19 / 19 · LIVE REPORT</span>
      </div>
    </div>
  );
}
