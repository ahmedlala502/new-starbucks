import { presentationData } from '../data/presentationData';
import { SocialIcon } from '../components/SocialIcon';

export default function ChannelsSlide() {
  const { instagram, tiktok, snapchat } = presentationData.platforms;

  const platformCards = [
    {
      key: 'instagram' as const,
      label: 'Instagram',
      role: 'Brand polish',
      pct: '28%',
      content: instagram.totalContent,
      creators: instagram.uniqueInfluencers,
      className: 'border-orange-200 bg-orange-50/70 text-orange-500',
      bar: 'bg-orange-500',
      breakdown: [
        { label: 'Stories', value: instagram.breakdown.story.toLocaleString() },
        { label: 'Reels', value: instagram.breakdown.reel.toLocaleString() },
        { label: 'Posts', value: instagram.breakdown.post.toLocaleString() },
      ],
    },
    {
      key: 'tiktok' as const,
      label: 'TikTok',
      role: 'Discovery engine',
      pct: '23%',
      content: tiktok.totalContent,
      creators: tiktok.uniqueInfluencers,
      className: 'border-gray-300 bg-gray-950 text-white',
      bar: 'bg-white',
      breakdown: [
        { label: 'Reels', value: tiktok.breakdown.reel.toLocaleString() },
        { label: 'Stories', value: tiktok.breakdown.story.toLocaleString() },
        { label: 'Posts', value: tiktok.breakdown.post.toLocaleString() },
      ],
    },
    {
      key: 'snapchat' as const,
      label: 'Snapchat',
      role: 'Local touchpoints',
      pct: '48%',
      content: snapchat.totalContent,
      creators: snapchat.uniqueInfluencers,
      className: 'border-purple-200 bg-purple-600 text-white',
      bar: 'bg-white',
      breakdown: [
        { label: 'Stories', value: snapchat.breakdown.story.toLocaleString() },
        { label: 'Spotlight', value: String(snapchat.breakdown.spotlight) },
      ],
    },
  ];

  const summaryCards = [
    {
      value: presentationData.totalContent.toLocaleString(),
      label: 'Content Records',
      sub: 'all formats',
      className: 'border-gray-300 bg-white text-gray-950',
    },
    {
      value: presentationData.totalViews,
      label: 'Total Views',
      sub: 'visibility',
      className: 'border-orange-200 bg-orange-50/70 text-orange-500',
    },
    {
      value: presentationData.totalLikes,
      label: 'Total Likes',
      sub: 'engagement',
      className: 'border-purple-200 bg-purple-50/70 text-purple-600',
    },
    {
      value: presentationData.totalComments,
      label: 'Comments',
      sub: 'audience response',
      className: 'border-gray-300 bg-gray-950 text-white',
    },
  ];

  return (
    <div className="size-full bg-white p-10 flex flex-col">
      <div className="mb-5">
        <p className="text-xs uppercase text-gray-400 mb-1">03 · Channels + Content</p>
        <h2 className="text-4xl font-black mb-2">CHANNEL ENGINE — CONTENT, REACH & PLATFORM ROLES</h2>
        <p className="text-gray-500">
          One consolidated view of where activity happened and how content performed across the key social channels.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-5">
        {summaryCards.map((card) => (
          <div key={card.label} className={`rounded-lg border p-5 shadow-[0_12px_30px_rgba(15,23,42,0.07)] ${card.className}`}>
            <p className="text-[2.9rem] leading-none font-black tabular-nums mb-2">{card.value}</p>
            <p className="text-xs uppercase font-black tracking-wide">{card.label}</p>
            <p className="text-xs font-semibold mt-1 opacity-70">{card.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-5 flex-1 min-h-0">
        {platformCards.map((platform) => (
          <div
            key={platform.key}
            className={`rounded-lg border p-6 flex flex-col shadow-[0_16px_38px_rgba(15,23,42,0.09)] ${platform.className}`}
          >
            <div className="flex items-center gap-3 mb-5">
              <SocialIcon platform={platform.key} size={22} />
              <div>
                <h3 className="text-2xl font-black">{platform.label}</h3>
                <p className="text-xs uppercase font-black tracking-wide opacity-70">{platform.role}</p>
              </div>
              <span className="ml-auto rounded-full bg-white/80 text-gray-950 border border-black/5 px-3 py-1 text-sm font-black">
                {platform.pct}
              </span>
            </div>

            <p className="text-[3.7rem] leading-none font-black tabular-nums">{platform.content.toLocaleString()}</p>
            <p className="text-sm uppercase font-black tracking-wide mt-2 opacity-80">Content Records</p>

            <div className="mt-5 h-2.5 rounded-full bg-black/10 overflow-hidden">
              <div className={`h-full rounded-full ${platform.bar}`} style={{ width: platform.pct }} />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-5">
              <div className="rounded-lg bg-white/70 border border-black/5 p-3 text-gray-950">
                <p className="text-2xl leading-none font-black tabular-nums">{platform.creators.toLocaleString()}</p>
                <p className="text-[0.7rem] uppercase font-black tracking-wide mt-1 text-gray-500">Creators</p>
              </div>
              <div className="rounded-lg bg-white/70 border border-black/5 p-3 text-gray-950">
                <p className="text-2xl leading-none font-black tabular-nums">{platform.breakdown.length}</p>
                <p className="text-[0.7rem] uppercase font-black tracking-wide mt-1 text-gray-500">Formats</p>
              </div>
            </div>

            <div className="space-y-2 mt-auto pt-5">
              {platform.breakdown.map((item) => (
                <div key={item.label} className="flex items-center justify-between text-sm">
                  <span className="font-bold opacity-75">{item.label}</span>
                  <span className="font-black tabular-nums">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between text-xs text-gray-400">
        <span>JUL 2025 — MAR 2026</span>
        <span>03 / 19 · CHANNELS + CONTENT MIX</span>
      </div>
    </div>
  );
}
