export default function WhyCreatorsSlide() {
  return (
    <div className="size-full bg-white p-10 flex flex-col">
      <div className="mb-5">
        <p className="text-xs uppercase text-gray-400 mb-1">11 · Why Creators Mattered</p>
        <h2 className="text-4xl font-black mb-2">INFLUENCER POWER — TRUST, LOCAL RELEVANCE, BRANCH VISIBILITY</h2>
        <p className="text-gray-500">
          Authentic creator networks balanced across four tiers — engagement rate inversely scales with audience size.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="border-l-4 border-purple-600 bg-purple-50 rounded-xl p-5">
          <p className="text-xs uppercase text-purple-700 mb-1">Mega</p>
          <p className="text-4xl font-black mb-1">2%</p>
          <p className="text-xs text-gray-500 mb-3">of network</p>
          <p className="text-xs uppercase text-gray-500">500K+ followers</p>
          <div className="mt-3 pt-3 border-t border-purple-200">
            <p className="text-xs uppercase text-gray-500 mb-0.5">Engagement</p>
            <p className="text-2xl font-black text-purple-600">4.2%</p>
          </div>
        </div>

        <div className="border-l-4 border-purple-500 bg-purple-50 rounded-xl p-5">
          <p className="text-xs uppercase text-purple-700 mb-1">Macro</p>
          <p className="text-4xl font-black mb-1">18%</p>
          <p className="text-xs text-gray-500 mb-3">of network</p>
          <p className="text-xs uppercase text-gray-500">100K – 500K followers</p>
          <div className="mt-3 pt-3 border-t border-purple-200">
            <p className="text-xs uppercase text-gray-500 mb-0.5">Engagement</p>
            <p className="text-2xl font-black text-purple-500">5.8%</p>
          </div>
        </div>

        <div className="border-l-4 border-orange-500 bg-orange-50 rounded-xl p-5">
          <p className="text-xs uppercase text-orange-700 mb-1">Micro</p>
          <p className="text-4xl font-black mb-1">64%</p>
          <p className="text-xs text-gray-500 mb-3">of network</p>
          <p className="text-xs uppercase text-gray-500">10K – 100K followers</p>
          <div className="mt-3 pt-3 border-t border-orange-200">
            <p className="text-xs uppercase text-gray-500 mb-0.5">Engagement</p>
            <p className="text-2xl font-black text-orange-500">7.3%</p>
          </div>
        </div>

        <div className="border-l-4 border-orange-600 bg-orange-50 rounded-xl p-5">
          <p className="text-xs uppercase text-orange-700 mb-1">Nano</p>
          <p className="text-4xl font-black mb-1">15%</p>
          <p className="text-xs text-gray-500 mb-3">of network</p>
          <p className="text-xs uppercase text-gray-500">1K – 10K followers</p>
          <div className="mt-3 pt-3 border-t border-orange-200">
            <p className="text-xs uppercase text-gray-500 mb-0.5">Engagement</p>
            <p className="text-2xl font-black text-orange-600">8.9%</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 flex-1 min-h-0">
        <div className="bg-orange-50 p-5 rounded-xl border border-orange-100">
          <p className="text-sm uppercase text-orange-700 font-black mb-2">Trust & Authenticity</p>
          <p className="text-sm text-gray-700 font-semibold">Micro and nano creators deliver genuine content that builds consumer trust. Higher engagement → better conversion.</p>
        </div>
        <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
          <p className="text-sm uppercase text-purple-700 font-black mb-2">Local Relevance</p>
          <p className="text-sm text-gray-700 font-semibold">Creators from specific cities provide hyper-local content that resonates with local audiences. City-specific, regional focus.</p>
        </div>
        <div className="bg-orange-50 p-5 rounded-xl border border-orange-100">
          <p className="text-sm uppercase text-orange-700 font-black mb-2">Branch Visibility</p>
          <p className="text-sm text-gray-700 font-semibold">Strategic creator placement ensures Starbucks branches are visible to target demographics. Location tagging, check-ins.</p>
        </div>
        <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
          <p className="text-sm uppercase text-purple-700 font-black mb-2">Word of Mouth</p>
          <p className="text-sm text-gray-700 font-semibold">Creator networks amplify organic word-of-mouth through authentic recommendations. Social sharing, viral potential.</p>
        </div>
      </div>

      <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between text-xs text-gray-400">
        <span>4 TIERS · AUTHENTIC CREATOR NETWORKS</span>
        <span>11 / 19 · WHY CREATORS</span>
      </div>
    </div>
  );
}
