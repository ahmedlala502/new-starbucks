export default function TopInfluencers1Slide() {
  const influencers = [
    { name: 'Khulod Almijlad', handle: '@khulod_almijlad', followers: '2.1M' },
    { name: 'janjon', handle: '@sj.j155', followers: '2M' },
    { name: 'Julie', handle: '@jolystyle', followers: '1.9M' },
    { name: 'Pigr', handle: '@xpigr', followers: '1.8M' },
    { name: 'abo wawe', handle: '@abo.wawe', followers: '1.7M' },
    { name: 'Reman', handle: '@riixix88', followers: '1.7M' },
    { name: 'Anas Altmimi', handle: '@anasx4444', followers: '1.5M' },
    { name: 'Maha', handle: '@meem7476', followers: '1.4M' },
    { name: 'Abdullah AlQafazy', handle: '@flmha_', followers: '1.3M' },
    { name: 'shaikha albader', handle: '@shaikha.albader', followers: '1.3M' },
    { name: 'aseel', handle: '@aseel.114', followers: '1.3M' },
    { name: 'Malak Aldawood', handle: '@malakaldawood', followers: '1.2M' },
    { name: 'Manal', handle: '@manal', followers: '1.2M' },
    { name: 'Safiya', handle: '@safiakhan90', followers: '1.2M' },
    { name: 'Naya ahmed', handle: '@naayaa20166', followers: '1.14M' },
  ];

  return (
    <div className="size-full bg-gradient-to-br from-slate-50 via-white to-purple-50/20 p-10 pl-14 flex flex-col justify-between border-l-8 border-purple-600 relative">
      {/* Header */}
      <div>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-black bg-[#00704A] text-white px-2.5 py-1 rounded-md tracking-wider uppercase shadow-sm">
                Starbucks KSA
              </span>
              <span className="text-[10px] font-bold text-gray-400 tracking-wider">
                14 · Creator Network
              </span>
            </div>
            <h2 className="text-[2.2rem] font-extrabold tracking-tight mt-2.5 text-gray-950">
              TOP <span className="text-purple-600 font-black">INFLUENCERS</span> <span className="text-gray-400 font-light">/</span> SET 1
            </h2>
            <p className="text-gray-500 text-xs mt-1 max-w-2xl font-medium">
              The leading cohort of 15 creators ranked by aggregate follower reach across regional campaign channels.
            </p>
          </div>
          <span className="text-[10px] bg-purple-600 text-white font-black uppercase px-3 py-1.5 rounded-full tracking-wider shadow-sm shadow-purple-600/20">
            Top Cohort · Set 1
          </span>
        </div>

        {/* Elegant accent lines */}
        <div className="flex gap-1.5 mt-3 mb-1">
          <div className="w-12 h-1.5 bg-[#00704A] rounded-full" />
          <div className="w-4 h-1.5 bg-purple-600 rounded-full" />
          <div className="w-2 h-1.5 bg-purple-300 rounded-full" />
        </div>
      </div>

      {/* Grid of Influencers */}
      <div className="grid grid-cols-5 gap-3.5 my-3 flex-1 min-h-0">
        {influencers.map((influencer, idx) => (
          <div
            key={influencer.handle}
            className="bg-white border border-gray-150/80 rounded-2xl p-3.5 hover:border-purple-500 hover:shadow-[0_12px_30px_rgba(139,92,246,0.08)] transition-all duration-300 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.01)] relative group overflow-hidden"
          >
            {/* Subtle reactive hover bar on the left edge */}
            <div className="w-1 h-8 rounded-r bg-purple-600 absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Premium Rank Badge */}
            <div className="absolute top-3.5 right-3.5 text-[9px] font-black text-purple-600 bg-purple-50/70 border border-purple-100/30 px-2 py-0.5 rounded-md shadow-[0_1px_3px_rgba(139,92,246,0.05)] group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-colors duration-300">
              #{String(idx + 1).padStart(2, '0')}
            </div>

            <div className="flex items-center gap-3">
              {/* Dual-ring initials avatar */}
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 p-0.5 shadow-md shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <span className="text-purple-700 font-black text-[11px]">
                    {influencer.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="min-w-0 pr-4">
                <h3 className="font-extrabold text-[12px] text-gray-900 truncate leading-tight group-hover:text-purple-600 transition-colors duration-300">{influencer.name}</h3>
                <p className="text-[9px] font-semibold text-gray-400 truncate mt-0.5">{influencer.handle}</p>
              </div>
            </div>

            {/* Prominent pill container for followers */}
            <div className="mt-3.5 bg-gradient-to-r from-purple-50 to-indigo-50/30 border border-purple-100/50 rounded-xl px-2.5 py-1.5 flex items-center justify-between shadow-[0_2px_8px_rgba(139,92,246,0.02)] group-hover:from-purple-100/40 group-hover:to-indigo-100/20 transition-all duration-300">
              <div className="flex flex-col">
                <span className="text-[7.5px] uppercase font-black text-purple-500 tracking-wider">Followers</span>
                <span className="text-[8px] font-semibold text-purple-400">Total Reach</span>
              </div>
              <span className="text-lg font-black text-purple-700 tracking-tight leading-none">{influencer.followers}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-gray-100 flex justify-between text-xs text-gray-400">
        <span>JUL 2025 — MAR 2026</span>
        <span>14 / 19 · LEADING INFLUENCERS · SET 1 OF 2</span>
      </div>
    </div>
  );
}
