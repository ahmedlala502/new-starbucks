// @ts-nocheck
import { presentationData } from '../data/presentationData';
import starbucksLogo from '../imports/images.jpg';

function formatBig(n: number): string {
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

export default function CoverSlide() {
  const metrics = [
    {
      value: formatBig(presentationData.totalInfluencers),
      label: 'Total Influencers',
      accent: 'orange',
      highlight: 'Creator Activations',
    },
    {
      value: presentationData.totalFollowers,
      label: 'Followers',
      accent: 'purple',
      featured: true,
      stackedLabel: 'Total Followers',
      useHighlightPill: true,
      hideLabel: true,
    },
    {
      value: presentationData.totalViews,
      label: 'Total Views',
      accent: 'black',
      highlight: 'Campaign Visibility',
    },
    {
      label: 'Demographic',
      accent: 'orange',
      badges: [
        { value: presentationData.governorates, label: 'Governorates' },
        { value: presentationData.totalBranches, label: 'Branch' },
        { value: presentationData.cities, label: 'City' },
      ],
    },
    {
      label: 'Campaign Window',
      accent: 'purple',
      badges: [
        { value: presentationData.campaigns, label: 'Campaigns' },
        { value: presentationData.activeMonths, label: 'Months' },
      ],
      variant: 'purple',
    },
  ];

  const accentClass: Record<string, string> = {
    orange: 'text-orange-500',
    purple: 'text-purple-600',
    black: 'text-black',
  };

  const cardClass: Record<string, string> = {
    orange: 'border-orange-200 bg-orange-50/60',
    purple: 'border-purple-200 bg-purple-50/60',
    black: 'border-gray-300 bg-white',
  };

  const demographicBadgeClass = [
    'border-orange-200 bg-orange-500 text-white',
    'border-purple-200 bg-purple-600 text-white',
    'border-gray-300 bg-gray-950 text-white',
  ];

  const campaignBadgeClass = [
    'border-purple-200 bg-purple-600 text-white',
    'border-orange-200 bg-orange-500 text-white',
  ];

  const channelClass = [
    'bg-pink-50 text-pink-700 border-pink-100',
    'bg-gray-950 text-white border-gray-950',
    'bg-yellow-50 text-yellow-700 border-yellow-100',
    'bg-purple-50 text-purple-700 border-purple-100',
  ];

  const renderMetric = (m: (typeof metrics)[number], size: 'top' | 'bottom' = 'top') => (
    <div
      key={m.label}
      className={`rounded-lg text-center border shadow-[0_14px_36px_rgba(15,23,42,0.08)] ${size === 'bottom' ? 'px-6 py-5' : 'px-5 py-4'} ${cardClass[m.accent]}`}
    >
      {'badges' in m ? (
        <div className="flex items-center justify-center gap-2.5">
          {m.badges.map((badge, index) => (
            <div
              key={badge.label}
              className={`${m.label === 'Demographic' ? 'min-w-32' : 'min-w-36'} rounded-lg border px-4 py-3 shadow-md ${
                m.label === 'Demographic' ? demographicBadgeClass[index] : campaignBadgeClass[index]
              }`}
            >
              <p className="text-[2.25rem] leading-none font-black tabular-nums">{badge.value}</p>
              <p className="text-sm font-black uppercase tracking-normal opacity-95 mt-1.5 whitespace-nowrap">{badge.label}</p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <p className={`${m.featured ? 'text-[2.7rem]' : 'text-[2.7rem]'} leading-none font-black tabular-nums ${accentClass[m.accent]}`}>{m.value}</p>
          {'stackedLabel' in m && !('useHighlightPill' in m) && (
            <p className={`mt-1 text-[1.85rem] leading-none font-black ${accentClass[m.accent]}`}>{m.stackedLabel}</p>
          )}
          {(('highlight' in m) || ('useHighlightPill' in m)) && (
            <div className={`mt-3 inline-flex items-center justify-center rounded-full border px-4 py-1.5 text-xs font-black uppercase tracking-wide text-white shadow-sm ${m.accent === 'purple' ? 'border-purple-200 bg-purple-600' : 'border-orange-200 bg-orange-500'}`}>
              {'highlight' in m ? m.highlight : m.stackedLabel}
            </div>
          )}
        </>
      )}
      {!('hideLabel' in m) && (
        <p className={`text-sm font-black uppercase tracking-wide text-gray-800 ${'highlight' in m ? 'mt-2' : 'mt-3'}`}>{m.label}</p>
      )}
      {'channels' in m && (
        <div className="mt-3 flex items-center justify-center gap-2 whitespace-nowrap">
          {m.channels.map((channel, index) => (
            <span key={channel} className={`rounded-full border px-3.5 py-1.5 text-xs font-black uppercase tracking-wide ${channelClass[index]}`}>
              {channel}
            </span>
          ))}
        </div>
      )}
      {'sub' in m && m.sub && <p className="text-xs font-semibold mt-1 text-gray-500">{m.sub}</p>}
    </div>
  );

  return (
    <div className="size-full bg-white flex flex-col justify-between p-10 relative">

      {/* Top bar */}
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase text-gray-500 tracking-widest">01 · Cover</p>
        <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-widest">
          <span>Saudi Arabia</span>
          <span>·</span>
          <span>Influencer Intelligence</span>
        </div>
      </div>

      {/* Center content */}
      <div className="flex flex-col items-center text-center gap-4">

        {/* Logo + TryGC */}
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 shrink-0">
            <img src={starbucksLogo} alt="Starbucks" className="w-full h-full object-cover" />
          </div>
          <div className="w-px h-10 bg-gray-200" />
          <div className="flex items-center gap-1 text-sm">
            <span className="text-gray-500">Powered by</span>
            <span className="font-bold text-purple-600"> Try</span>
            <span className="font-bold text-orange-500">GC</span>
          </div>
        </div>

        {/* Main title */}
        <div>
          <h1 className="text-[2.55rem] font-semibold leading-[1.08] tracking-normal text-gray-950 whitespace-nowrap">
            WE BUILT A <span className="font-extrabold text-orange-500">NATIONAL CREATOR ENGINE</span> ACROSS KSA.
          </h1>
          <p className="text-base text-gray-500 mt-2 tracking-normal">
            Scale. Visibility. Reach. Efficiency.
          </p>
        </div>

        {/* Period pill */}
        <div className="inline-block px-6 py-1.5 rounded-full border border-gray-300 text-xs font-semibold tracking-widest uppercase text-gray-600">
          JUL 2025 — MAR 2026
        </div>

        {/* Divider */}
        <div className="w-48 h-px bg-gray-200" />

        {/* Metrics */}
        <div className="w-full space-y-3">
          <div className="grid grid-cols-3 gap-3 px-10">
            {metrics.slice(0, 3).map((m) => renderMetric(m, 'top'))}
          </div>
          <div className="grid grid-cols-2 gap-3 px-28">
            {metrics.slice(3).map((m) => renderMetric(m, 'bottom'))}
          </div>
        </div>

      </div>

    </div>
  );
}
