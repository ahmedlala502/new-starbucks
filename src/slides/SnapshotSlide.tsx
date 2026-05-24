import { presentationData } from '../data/presentationData';

export default function SnapshotSlide() {
  const maleCreators = 1510;
  const femaleCreators = 8940;
  const genderTotal = maleCreators + femaleCreators;
  const maleShare = Math.round((maleCreators / genderTotal) * 100);
  const femaleShare = 100 - maleShare;
  const { instagram, tiktok, snapchat } = presentationData.platforms;

  const topMetrics = [
    {
      value: presentationData.totalContent.toLocaleString(),
      label: 'Total Content Records',
      sub: 'across all platforms',
      icon: '📊',
      color: 'from-blue-50 to-blue-100',
      textColor: 'text-blue-700',
      accentBg: 'bg-blue-500',
    },
    {
      value: `${maleShare}% / ${femaleShare}%`,
      label: 'Creator Gender Mix',
      sub: `${(maleCreators / 1000).toFixed(1)}K male creators`,
      icon: '👥',
      color: 'from-pink-50 to-pink-100',
      textColor: 'text-pink-700',
      accentBg: 'bg-pink-500',
    },
  ];

  const platformCards = [
    {
      key: 'instagram' as const,
      label: 'Instagram',
      emoji: '📸',
      pct: '28%',
      content: instagram.totalContent,
      creators: instagram.uniqueInfluencers,
      gradient: 'from-pink-600 via-rose-500 to-orange-400',
      lightGradient: 'from-pink-50 to-orange-50',
      textColor: 'text-pink-700',
      breakdown: [
        { label: 'Stories', value: instagram.breakdown.story.toLocaleString(), icon: '📱' },
        { label: 'Reels', value: instagram.breakdown.reel.toLocaleString(), icon: '🎬' },
        { label: 'Posts', value: instagram.breakdown.post.toLocaleString(), icon: '🖼️' },
        { label: 'Highlights', value: String(instagram.breakdown.highlight), icon: '⭐' },
      ],
    },
    {
      key: 'tiktok' as const,
      label: 'TikTok',
      emoji: '🎵',
      pct: '23%',
      content: tiktok.totalContent,
      creators: tiktok.uniqueInfluencers,
      gradient: 'from-gray-900 to-black',
      lightGradient: 'from-gray-900 to-slate-800',
      textColor: 'text-white',
      breakdown: [
        { label: 'Videos', value: tiktok.breakdown.reel.toLocaleString(), icon: '🎥' },
        { label: 'Stories', value: tiktok.breakdown.story.toLocaleString(), icon: '📱' },
        { label: 'Posts', value: tiktok.breakdown.post.toLocaleString(), icon: '📌' },
      ],
    },
    {
      key: 'snapchat' as const,
      label: 'Snapchat',
      emoji: '👻',
      pct: '48%',
      content: snapchat.totalContent,
      creators: snapchat.uniqueInfluencers,
      gradient: 'from-yellow-300 to-yellow-400',
      lightGradient: 'from-yellow-50 to-amber-50',
      textColor: 'text-yellow-700',
      breakdown: [
        { label: 'Stories', value: snapchat.breakdown.story.toLocaleString(), icon: '📸' },
        { label: 'Spotlight', value: String(snapchat.breakdown.spotlight), icon: '🌟' },
      ],
    },
  ];

  return (
    <div className="size-full bg-gradient-to-br from-slate-50 via-white to-blue-50 p-9 pl-10 flex flex-col">
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-[11px] uppercase font-black text-gray-400 tracking-[1.2px] mb-2">
              02 · Executive Snapshot
            </p>
            <h2 className="text-4xl font-black leading-[1.1] text-gray-950 tracking-tight">
              CREATOR & CONTENT
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">ECOSYSTEM OVERVIEW</span>
            </h2>
            <p className="text-sm text-gray-600 mt-2.5 font-semibold">
              Complete platform breakdown + audience composition across {presentationData.activeMonths} months of activation
            </p>
          </div>
        </div>
        {/* Accent line */}
        <div className="flex gap-1.5 mt-3 h-1">
          <div className="flex-[28%] rounded-full bg-gradient-to-r from-orange-500 to-orange-400" />
          <div className="flex-[23%] rounded-full bg-gradient-to-r from-gray-900 to-gray-800" />
          <div className="flex-[48%] rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300" />
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-3.5 mb-6">
        {topMetrics.map((metric) => (
          <div
            key={metric.label}
            className={`rounded-2xl bg-gradient-to-br ${metric.color} border border-white/60 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-5 flex flex-col justify-center backdrop-blur-sm`}
          >
            <div className="flex items-start justify-between mb-2">
              <span className="text-3xl">{metric.icon}</span>
            </div>
            <p className={`text-[2.5rem] leading-none font-black tabular-nums ${metric.textColor} mb-1`}>
              {metric.value}
            </p>
            <p className={`text-xs font-black uppercase tracking-wide ${metric.textColor}`}>{metric.label}</p>
            <p className={`text-xs font-semibold mt-1.5 ${metric.textColor} opacity-80`}>{metric.sub}</p>
            <div className={`h-1 rounded-full ${metric.accentBg} mt-3 opacity-40`} />
          </div>
        ))}
      </div>

      {/* Platform Cards */}
      <div className="grid grid-cols-3 gap-3.5 flex-1 min-h-0">
        {platformCards.map((platform) => {
          const isDark = platform.key === 'tiktok';
          const isYellow = platform.key === 'snapchat';

          return (
            <div
              key={platform.key}
              className={`rounded-2xl border shadow-[0_12px_32px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] group`}
              style={{
                background: isDark
                  ? 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)'
                  : isYellow
                    ? 'linear-gradient(135deg, #fef3c7 0%, #fde047 100%)'
                    : 'linear-gradient(135deg, #fecaca 0%, #fed7aa 100%)',
                borderColor: isDark ? '#333333' : isYellow ? '#fcd34d' : '#fed7aa',
              }}
            >
              {/* Header */}
              <div className={`px-5 pt-4 pb-3 ${isDark ? 'text-white' : isYellow ? 'text-amber-900' : 'text-rose-900'}`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{platform.emoji}</span>
                    <div>
                      <h3 className="text-xl font-black leading-none">{platform.label}</h3>
                      <p className={`text-[0.7rem] uppercase font-bold tracking-wider mt-0.5 ${isDark ? 'text-gray-400' : isYellow ? 'text-amber-700' : 'text-rose-700'} opacity-80`}>
                        Content Engine
                      </p>
                    </div>
                  </div>
                  <div
                    className={`rounded-xl px-3 py-1.5 text-xs font-black leading-none backdrop-blur-sm ${
                      isDark
                        ? 'bg-white/10 text-white border border-white/20'
                        : isYellow
                          ? 'bg-black/10 text-amber-900 border border-black/10'
                          : 'bg-white/20 text-rose-900 border border-white/30'
                    }`}
                  >
                    {platform.pct}
                  </div>
                </div>

                {/* Main Content Number */}
                <p
                  className={`text-[2.8rem] leading-none font-black tabular-nums tracking-tight ${
                    isDark ? 'text-white' : isYellow ? 'text-amber-900' : 'text-rose-900'
                  } mb-1`}
                >
                  {platform.content.toLocaleString()}
                </p>
                <p
                  className={`text-xs font-black uppercase tracking-wide ${
                    isDark ? 'text-gray-400' : isYellow ? 'text-amber-700' : 'text-rose-700'
                  }`}
                >
                  Content Records
                </p>

                {/* Progress bar */}
                <div
                  className={`mt-3 h-1.5 rounded-full overflow-hidden ${
                    isDark ? 'bg-white/10' : isYellow ? 'bg-black/10' : 'bg-white/20'
                  }`}
                >
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isDark ? 'bg-white' : isYellow ? 'bg-amber-900' : 'bg-rose-900'
                    }`}
                    style={{ width: platform.pct }}
                  />
                </div>
              </div>

              {/* Stats Grid */}
              <div
                className={`grid grid-cols-2 gap-2 px-5 py-3 border-t ${
                  isDark
                    ? 'bg-black/30 border-white/10'
                    : isYellow
                      ? 'bg-black/5 border-black/10'
                      : 'bg-white/40 border-white/40'
                }`}
              >
                <div
                  className={`rounded-lg p-2.5 text-center ${
                    isDark
                      ? 'bg-white/5 border border-white/10'
                      : isYellow
                        ? 'bg-black/8 border border-black/10'
                        : 'bg-white/40 border border-white/50'
                  }`}
                >
                  <p
                    className={`text-lg leading-none font-black tabular-nums ${
                      isDark ? 'text-white' : isYellow ? 'text-amber-900' : 'text-rose-900'
                    }`}
                  >
                    {(platform.creators / 1000).toFixed(1)}K
                  </p>
                  <p
                    className={`text-[0.65rem] uppercase font-black tracking-wider mt-1 ${
                      isDark ? 'text-gray-500' : isYellow ? 'text-amber-700' : 'text-rose-700'
                    }`}
                  >
                    Creators
                  </p>
                </div>
                <div
                  className={`rounded-lg p-2.5 text-center ${
                    isDark
                      ? 'bg-white/5 border border-white/10'
                      : isYellow
                        ? 'bg-black/8 border border-black/10'
                        : 'bg-white/40 border border-white/50'
                  }`}
                >
                  <p
                    className={`text-lg leading-none font-black tabular-nums ${
                      isDark ? 'text-white' : isYellow ? 'text-amber-900' : 'text-rose-900'
                    }`}
                  >
                    {platform.breakdown.length}
                  </p>
                  <p
                    className={`text-[0.65rem] uppercase font-black tracking-wider mt-1 ${
                      isDark ? 'text-gray-500' : isYellow ? 'text-amber-700' : 'text-rose-700'
                    }`}
                  >
                    Formats
                  </p>
                </div>
              </div>

              {/* Content Breakdown */}
              <div
                className={`flex-1 px-5 py-3.5 space-y-2 ${
                  isDark ? 'bg-black/20' : isYellow ? 'bg-black/3' : 'bg-white/30'
                }`}
              >
                {platform.breakdown.map((item) => (
                  <div key={item.label} className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 flex-1 min-w-0">
                      <span className="text-sm">{item.icon}</span>
                      <span
                        className={`text-xs font-bold leading-tight truncate ${
                          isDark
                            ? 'text-gray-300'
                            : isYellow
                              ? 'text-amber-800'
                              : 'text-rose-800'
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                    <span
                      className={`text-xs font-black tabular-nums whitespace-nowrap ${
                        isDark
                          ? 'text-white'
                          : isYellow
                            ? 'text-amber-900'
                            : 'text-rose-900'
                      }`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-3 border-t border-gray-300/40 flex justify-between items-center">
        <span className="text-xs font-semibold text-gray-500 tracking-wide">JUL 2025 — MAR 2026</span>
        <span className="text-xs font-black text-gray-400 tracking-[0.5px] uppercase">02 / 17 · SNAPSHOT</span>
      </div>
    </div>
  );
}
