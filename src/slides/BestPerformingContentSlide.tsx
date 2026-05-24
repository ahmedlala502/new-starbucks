export default function BestPerformingContentSlide() {
  const topViews = [
    { rank: '01', creator: 'mamammamia', handle: '@mamammamia', views: '919K', platform: 'Snapchat' },
    { rank: '02', creator: 'Hessa Abdul Aziz', handle: '@hasoo12341', views: '649K', platform: 'TikTok' },
    { rank: '03', creator: 'Mohammed', handle: '@meemformoh', views: '290K', platform: 'Instagram' },
    { rank: '04', creator: 'Rana', handle: '@raaaanosh3', views: '263K', platform: 'Instagram' },
    { rank: '05', creator: 'Salma', handle: '@slm.l01', views: '237K', platform: 'TikTok' },
  ];

  const topLikes = [
    { rank: '01', creator: 'saud.blog1', handle: '@saud.blog1', likes: '64.2K', platform: 'Instagram' },
    { rank: '02', creator: 'ترف', handle: '@mamammamia', likes: '33.4K', platform: 'Snapchat' },
    { rank: '03', creator: 'Noura Saleh', handle: '@1khadej', likes: '20.7K', platform: 'TikTok' },
    { rank: '04', creator: 'Rana', handle: '@hammss20', likes: '15.0K', platform: 'Instagram' },
    { rank: '05', creator: 'Ree', handle: '@rana.musaad', likes: '12.3K', platform: 'TikTok' },
  ];

  const renderPlatformBadge = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'snapchat':
        return (
          <span className="bg-[#FFFC00] text-black border border-yellow-400 text-[8px] font-black uppercase px-2 py-0.5 rounded shadow-sm tracking-wider">
            Snapchat
          </span>
        );
      case 'tiktok':
        return (
          <span className="bg-black text-white border border-gray-900 text-[8px] font-black uppercase px-2 py-0.5 rounded shadow-sm tracking-wider">
            TikTok
          </span>
        );
      case 'instagram':
        return (
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white text-[8px] font-black uppercase px-2 py-0.5 rounded shadow-sm tracking-wider">
            Instagram
          </span>
        );
      default:
        return (
          <span className="bg-gray-100 text-gray-800 border border-gray-200 text-[8px] font-black uppercase px-2 py-0.5 rounded shadow-sm tracking-wider">
            {platform}
          </span>
        );
    }
  };

  return (
    <div className="size-full bg-gradient-to-br from-slate-50 via-white to-purple-50/15 p-10 pl-14 flex flex-col justify-between border-l-8 border-purple-600 relative">
      {/* Header */}
      <div>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-black bg-[#00704A] text-white px-2.5 py-1 rounded-md tracking-wider uppercase shadow-sm">
                Starbucks KSA
              </span>
              <span className="text-[10px] font-bold text-gray-400 tracking-wider">
                16 · Campaign Performance
              </span>
            </div>
            <h2 className="text-[2.2rem] font-extrabold tracking-tight mt-2.5 text-gray-950">
              BEST-PERFORMING <span className="text-orange-500 font-black">CONTENT</span>
            </h2>
            <p className="text-gray-500 text-xs mt-1 max-w-2xl font-medium">
              Ranked showcase of leading creator posts by single-post view and like engagement metrics.
            </p>
          </div>
          <span className="text-[10px] bg-gradient-to-r from-orange-500 to-purple-600 text-white font-black uppercase px-3 py-1.5 rounded-full tracking-wider shadow-md shadow-purple-600/10">
            Engagement Leaders
          </span>
        </div>

        {/* Elegant accent lines */}
        <div className="flex gap-1.5 mt-3 mb-1">
          <div className="w-12 h-1.5 bg-[#00704A] rounded-full" />
          <div className="w-4 h-1.5 bg-orange-500 rounded-full" />
          <div className="w-2 h-1.5 bg-purple-600 rounded-full" />
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-[1.15fr_1.15fr_0.8fr] gap-5 my-3 flex-1 min-h-0">
        
        {/* Top Views Panel */}
        <div className="bg-orange-50/40 border border-orange-100/50 rounded-2xl p-4 flex flex-col justify-between shadow-[0_4px_20px_rgba(249,115,22,0.015)]">
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-orange-100 pb-2.5">
              <p className="text-[11px] uppercase text-orange-600 font-black tracking-wider">Top 5 by Single-Post Views</p>
              <span className="bg-orange-500 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded tracking-widest shadow-sm shadow-orange-500/10">Views</span>
            </div>
            <div className="space-y-2">
              {topViews.map((post) => (
                <div key={post.creator + post.views} className="bg-white border border-orange-100/70 rounded-xl p-2.5 flex items-center justify-between shadow-[0_2px_12px_rgba(249,115,22,0.01)] hover:border-orange-500 hover:shadow-[0_6px_16px_rgba(249,115,22,0.05)] transition-all duration-300 group relative overflow-hidden">
                  <div className="w-1 h-6 rounded-r bg-orange-500 absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3">
                    <span className="w-6.5 h-6.5 rounded-lg bg-orange-50 text-orange-600 border border-orange-100/60 font-black flex items-center justify-center text-[10px] shrink-0 shadow-sm group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-colors duration-300">
                      {post.rank}
                    </span>
                    <div className="min-w-0">
                      <p className="font-extrabold text-[12px] text-gray-950 truncate leading-none group-hover:text-orange-600 transition-colors duration-300">{post.creator}</p>
                      <p className="text-[9px] font-semibold text-gray-400 truncate mt-0.5">{post.handle}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-[1.35rem] font-black text-orange-600 leading-none tracking-tight tabular-nums">{post.views}</p>
                    <div className="mt-1">{renderPlatformBadge(post.platform)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Likes Panel */}
        <div className="bg-purple-50/40 border border-purple-100/50 rounded-2xl p-4 flex flex-col justify-between shadow-[0_4px_20px_rgba(139,92,246,0.015)]">
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-purple-100 pb-2.5">
              <p className="text-[11px] uppercase text-purple-600 font-black tracking-wider">Top 5 by Single-Post Likes</p>
              <span className="bg-purple-600 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded tracking-widest shadow-sm shadow-purple-600/10">Likes</span>
            </div>
            <div className="space-y-2">
              {topLikes.map((post) => (
                <div key={post.creator + post.likes} className="bg-white border border-purple-100/70 rounded-xl p-2.5 flex items-center justify-between shadow-[0_2px_12px_rgba(139,92,246,0.01)] hover:border-purple-600 hover:shadow-[0_6px_16px_rgba(139,92,246,0.05)] transition-all duration-300 group relative overflow-hidden">
                  <div className="w-1 h-6 rounded-r bg-purple-600 absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3">
                    <span className="w-6.5 h-6.5 rounded-lg bg-purple-50 text-purple-600 border border-purple-100/60 font-black flex items-center justify-center text-[10px] shrink-0 shadow-sm group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-colors duration-300">
                      {post.rank}
                    </span>
                    <div className="min-w-0">
                      <p className="font-extrabold text-[12px] text-gray-950 truncate leading-none group-hover:text-purple-600 transition-colors duration-300">{post.creator}</p>
                      <p className="text-[9px] font-semibold text-gray-400 truncate mt-0.5">{post.handle}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-[1.35rem] font-black text-purple-600 leading-none tracking-tight tabular-nums">{post.likes}</p>
                    <div className="mt-1">{renderPlatformBadge(post.platform)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Strategic Engagement Insights Panel */}
        <div className="border border-gray-900 rounded-2xl p-4 bg-gradient-to-b from-gray-950 to-slate-900 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden">
          {/* Subtle decorative glow overlays */}
          <div className="absolute -right-10 -bottom-10 w-24 h-24 rounded-full bg-orange-500/10 blur-xl pointer-events-none" />
          <div className="absolute -left-10 -top-10 w-24 h-24 rounded-full bg-purple-500/10 blur-xl pointer-events-none" />

          <div className="space-y-3.5 relative z-10">
            <p className="text-xs uppercase text-orange-400 font-black border-b border-white/10 pb-2 tracking-wider">Engagement Factors</p>
            
            <div className="space-y-2.5">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 border-l-4 border-l-orange-500 shadow-inner">
                <p className="text-[10px] font-extrabold uppercase text-orange-400 tracking-wider mb-1">High-Retention Hooks</p>
                <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
                  Top-viewed Snapchat/TikTok content opened with immediate visual hooks—showing coffee pours and branch walkthroughs.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3 border-l-4 border-l-purple-500 shadow-inner">
                <p className="text-[10px] font-extrabold uppercase text-purple-400 tracking-wider mb-1">Community Context</p>
                <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
                  Highly liked posts featured authentic local coffee culture framings, prompting comments and shares.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-800/90 to-orange-700/90 text-white rounded-xl p-3.5 mt-2 shadow-md border border-white/10 relative z-10">
            <p className="text-[9px] uppercase font-black tracking-widest text-orange-300 mb-0.5">Key Takeaway</p>
            <p className="text-[11px] font-bold leading-relaxed text-gray-100">
              Direct store call-to-actions combined with visual branch aesthetics maximized engagement rate across Riyadh and Jeddah.
            </p>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-gray-100 flex justify-between text-xs text-gray-400">
        <span>JUL 2025 — MAR 2026</span>
        <span>16 / 19 · BEST-PERFORMING CONTENT</span>
      </div>
    </div>
  );
}
