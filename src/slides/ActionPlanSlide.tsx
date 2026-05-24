export default function ActionPlanSlide() {
  return (
    <div className="size-full bg-white p-10 flex flex-col">
      <div className="mb-5">
        <p className="text-xs uppercase text-gray-400 mb-1">13 · Action Plan</p>
        <h2 className="text-4xl font-black mb-2">RECOMMENDATIONS — ACTION PLAN</h2>
        <p className="text-gray-500">Five strategic actions to optimize Starbucks creator marketing — prioritized by impact and feasibility.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white border-2 border-orange-500 rounded-xl p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="text-4xl font-black text-orange-500">1</div>
            <div className="flex gap-2">
              <span className="text-xs uppercase bg-red-100 text-red-700 px-2 py-0.5 rounded">High</span>
              <span className="text-xs uppercase bg-green-100 text-green-700 px-2 py-0.5 rounded">90% Impl.</span>
            </div>
          </div>
          <h3 className="text-xl font-black mb-1">Always-On Calendar</h3>
          <p className="text-sm text-gray-500">Establish continuous content calendar with weekly creator activations.</p>
          <div className="mt-3 h-1.5 bg-orange-200 rounded-full"><div className="h-full bg-orange-500 rounded-full" style={{ width: '90%' }}></div></div>
        </div>

        <div className="bg-white border-2 border-orange-500 rounded-xl p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="text-4xl font-black text-orange-500">2</div>
            <div className="flex gap-2">
              <span className="text-xs uppercase bg-red-100 text-red-700 px-2 py-0.5 rounded">High</span>
              <span className="text-xs uppercase bg-green-100 text-green-700 px-2 py-0.5 rounded">75% Impl.</span>
            </div>
          </div>
          <h3 className="text-xl font-black mb-1">City Clusters</h3>
          <p className="text-sm text-gray-500">Group cities by proximity for coordinated regional campaigns.</p>
          <p className="text-xs text-gray-400 mt-1">5 CLUSTERS</p>
          <div className="mt-3 h-1.5 bg-orange-200 rounded-full"><div className="h-full bg-orange-500 rounded-full" style={{ width: '75%' }}></div></div>
        </div>

        <div className="bg-white border-2 border-purple-500 rounded-xl p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="text-4xl font-black text-purple-600">3</div>
            <div className="flex gap-2">
              <span className="text-xs uppercase bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">Medium</span>
              <span className="text-xs uppercase bg-green-100 text-green-700 px-2 py-0.5 rounded">60% Impl.</span>
            </div>
          </div>
          <h3 className="text-xl font-black mb-1">Top Branches</h3>
          <p className="text-sm text-gray-500">Focus creator content on highest-performing 20 branches.</p>
          <p className="text-xs text-gray-400 mt-1">20 BRANCHES</p>
          <div className="mt-3 h-1.5 bg-purple-200 rounded-full"><div className="h-full bg-purple-600 rounded-full" style={{ width: '60%' }}></div></div>
        </div>

        <div className="bg-white border-2 border-orange-500 rounded-xl p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="text-4xl font-black text-orange-500">4</div>
            <div className="flex gap-2">
              <span className="text-xs uppercase bg-red-100 text-red-700 px-2 py-0.5 rounded">High</span>
              <span className="text-xs uppercase bg-green-100 text-green-700 px-2 py-0.5 rounded">85% Impl.</span>
            </div>
          </div>
          <h3 className="text-xl font-black mb-1">Short-Form Video</h3>
          <p className="text-sm text-gray-500">Increase Reels/TikTok content by 40% for higher engagement.</p>
          <p className="text-xs text-gray-400 mt-1">+40% TARGET</p>
          <div className="mt-3 h-1.5 bg-orange-200 rounded-full"><div className="h-full bg-orange-500 rounded-full" style={{ width: '85%' }}></div></div>
        </div>
      </div>

      <div className="bg-purple-600 text-white rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="text-5xl font-black">5</div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs uppercase bg-purple-400 px-2 py-0.5 rounded">Medium</span>
                <span className="text-xs uppercase bg-purple-400 px-2 py-0.5 rounded">70% Impl.</span>
                <span className="text-xs uppercase bg-purple-400 px-2 py-0.5 rounded">In Progress</span>
              </div>
              <h3 className="text-2xl font-black mb-0.5">Executive Dashboard</h3>
              <p className="text-purple-100 text-sm">Build real-time analytics dashboard for campaign monitoring.</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 text-right">
            <div><p className="text-3xl font-black">5</p><p className="text-xs uppercase text-purple-200">Actions</p></div>
            <div><p className="text-3xl font-black">60</p><p className="text-xs uppercase text-purple-200">Days</p></div>
            <div><p className="text-3xl font-black">85%</p><p className="text-xs uppercase text-purple-200">Progress</p></div>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between text-xs text-gray-400">
        <span>JUL 2025 — MAR 2026</span>
        <span>13 / 19 · ACTION PLAN</span>
      </div>
    </div>
  );
}
