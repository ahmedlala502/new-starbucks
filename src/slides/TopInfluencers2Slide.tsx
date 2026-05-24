export default function TopInfluencers2Slide() {
  const influencers = [
    { name: 'Ekrasikander', handle: '@ekra_beauty', followers: '1.14M' },
    { name: 't.alfai', handle: '@t.alfai', followers: '1.11M' },
    { name: 'Rehab Ikhaldi', handle: '@roroalkhaldi', followers: '1.08M' },
    { name: 'Khaled', handle: '@kldidalharbi1', followers: '1.06M' },
    { name: 'TURKI', handle: '@chef_turki1', followers: '1.05M' },
    { name: 'Huncho', handle: '@huncho1sa', followers: '1.01M' },
    { name: 'Amna Mushtaq', handle: '@aamna.mushtaq1', followers: '1.01M' },
    { name: 'Abdullah bin Odeh', handle: '@binoudaah', followers: '1M' },
    { name: 'abdulaziz Alyami', handle: '@azeez000a', followers: '963K' },
    { name: 'Eman Gusti', handle: '@eman_gusti', followers: '914K' },
    { name: 'Moaz Al-Jammaz', handle: '@muath_aljammaz', followers: '900K' },
    { name: 'hassan', handle: '@rhr1', followers: '853K' },
    { name: 'kahramana', handle: '@ehtmamat_bnat', followers: '850K' },
    { name: 'Mashari Hilal', handle: '@msharihilal', followers: '813K' },
    { name: 'Ward', handle: '@xlliix5', followers: '799K' },
  ];

  return (
    <div className="size-full bg-gradient-to-br from-slate-50 via-white to-orange-50/20 p-10 pl-14 flex flex-col justify-between border-l-8 border-orange-500 relative">
      {/* Header */}
      <div>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-black bg-[#00704A] text-white px-2.5 py-1 rounded-md tracking-wider uppercase shadow-sm">
                Starbucks KSA
              </span>
              <span className="text-[10px] font-bold text-gray-400 tracking-wider">
                15 · Creator Network
              </span>
            </div>
            <h2 className="text-[2.2rem] font-extrabold tracking-tight mt-2.5 text-gray-950">
              TOP <span className="text-orange-500 font-black">INFLUENCERS</span> <span className="text-gray-400 font-light">/</span> SET 2
            </h2>
            <p className="text-gray-500 text-xs mt-1 max-w-2xl font-medium">
              The secondary cohort of 15 creators ranked by aggregate follower reach across regional campaign channels.
            </p>
          </div>
          <span className="text-[10px] bg-orange-500 text-white font-black uppercase px-3 py-1.5 rounded-full tracking-wider shadow-sm shadow-orange-500/20">
            Top Cohort · Set 2
          </span>
        </div>

        {/* Elegant accent lines */}
        <div className="flex gap-1.5 mt-3 mb-1">
          <div className="w-12 h-1.5 bg-[#00704A] rounded-full" />
          <div className="w-4 h-1.5 bg-orange-500 rounded-full" />
          <div className="w-2 h-1.5 bg-orange-300 rounded-full" />
        </div>
      </div>

      {/* Grid of Influencers */}
      <div className="grid grid-cols-5 gap-3.5 my-3 flex-1 min-h-0">
        {influencers.map((influencer, idx) => (
          <div
            key={influencer.handle}
            className="bg-white border border-gray-150/80 rounded-2xl p-3.5 hover:border-orange-500 hover:shadow-[0_12px_30px_rgba(249,115,22,0.08)] transition-all duration-300 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.01)] relative group overflow-hidden"
          >
            {/* Subtle reactive hover bar on the left edge */}
            <div className="w-1 h-8 rounded-r bg-orange-500 absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Premium Rank Badge */}
            <div className="absolute top-3.5 right-3.5 text-[9px] font-black text-orange-600 bg-orange-50/70 border border-orange-100/30 px-2 py-0.5 rounded-md shadow-[0_1px_3px_rgba(249,115,22,0.05)] group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-colors duration-300">
              #{String(idx + 16).padStart(2, '0')}
            </div>

            <div className="flex items-center gap-3">
              {/* Dual-ring initials avatar */}
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-orange-500 to-red-500 p-0.5 shadow-md shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <span className="text-orange-600 font-black text-[11px]">
                    {influencer.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="min-w-0 pr-4">
                <h3 className="font-extrabold text-[12px] text-gray-900 truncate leading-tight group-hover:text-orange-500 transition-colors duration-300">{influencer.name}</h3>
                <p className="text-[9px] font-semibold text-gray-400 truncate mt-0.5">{influencer.handle}</p>
              </div>
            </div>

            {/* Prominent pill container for followers */}
            <div className="mt-3.5 bg-gradient-to-r from-orange-50 to-amber-50/30 border border-orange-100/50 rounded-xl px-2.5 py-1.5 flex items-center justify-between shadow-[0_2px_8px_rgba(249,115,22,0.02)] group-hover:from-orange-100/40 group-hover:to-amber-100/20 transition-all duration-300">
              <div className="flex flex-col">
                <span className="text-[7.5px] uppercase font-black text-orange-500 tracking-wider">Followers</span>
                <span className="text-[8px] font-semibold text-orange-400">Total Reach</span>
              </div>
              <span className="text-lg font-black text-orange-700 tracking-tight leading-none">{influencer.followers}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-gray-100 flex justify-between text-xs text-gray-400">
        <span>JUL 2025 — MAR 2026</span>
        <span>15 / 19 · LEADING INFLUENCERS · SET 2 OF 2</span>
      </div>
    </div>
  );
}
