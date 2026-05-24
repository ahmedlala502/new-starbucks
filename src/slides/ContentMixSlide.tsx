import { presentationData } from '../data/presentationData';
import { SocialIcon } from '../components/SocialIcon';

export default function ContentMixSlide() {
  const { instagram, tiktok, snapchat, threads, facebook } = presentationData.platforms;

  const platforms = [
    {
      key: 'snapchat' as const,
      label: 'Snapchat',
      pct: '48%',
      total: snapchat.totalContent,
      color: 'border-yellow-400',
      bg: 'bg-yellow-50',
      textColor: 'text-yellow-600',
      barColor: 'bg-yellow-400',
      breakdown: [
        { label: 'Story', value: snapchat.breakdown.story.toLocaleString() },
        { label: 'Spotlight', value: String(snapchat.breakdown.spotlight) },
      ],
    },
    {
      key: 'instagram' as const,
      label: 'Instagram',
      pct: '28%',
      total: instagram.totalContent,
      color: 'border-orange-500',
      bg: 'bg-orange-50',
      textColor: 'text-orange-500',
      barColor: 'bg-orange-500',
      breakdown: [
        { label: 'Story', value: instagram.breakdown.story.toLocaleString() },
        { label: 'Post', value: instagram.breakdown.post.toLocaleString() },
        { label: 'Reel', value: instagram.breakdown.reel.toLocaleString() },
        { label: 'Highlight', value: String(instagram.breakdown.highlight) },
      ],
    },
    {
      key: 'tiktok' as const,
      label: 'TikTok',
      pct: '23%',
      total: tiktok.totalContent,
      color: 'border-gray-800',
      bg: 'bg-gray-50',
      textColor: 'text-gray-800',
      barColor: 'bg-gray-800',
      breakdown: [
        { label: 'Reel', value: tiktok.breakdown.reel.toLocaleString() },
        { label: 'Story', value: tiktok.breakdown.story.toLocaleString() },
        { label: 'Post', value: tiktok.breakdown.post.toLocaleString() },
      ],
    },
    {
      key: 'threads' as const,
      label: 'Threads',
      pct: '1%',
      total: threads.totalContent,
      color: 'border-purple-500',
      bg: 'bg-purple-50',
      textColor: 'text-purple-600',
      barColor: 'bg-purple-500',
      breakdown: [
        { label: 'Post', value: String(threads.totalContent) },
      ],
    },
    {
      key: 'facebook' as const,
      label: 'Facebook',
      pct: '0.4%',
      total: facebook.totalContent,
      color: 'border-blue-500',
      bg: 'bg-blue-50',
      textColor: 'text-blue-600',
      barColor: 'bg-blue-500',
      breakdown: [
        { label: 'Story', value: '98' },
        { label: 'Reel', value: '37' },
        { label: 'Post', value: '3' },
      ],
    },
  ];

  return (
    <div className="size-full bg-white p-10 flex flex-col">
      <div className="mb-4">
        <p className="text-xs uppercase text-gray-400 mb-1">04 · Content Mix</p>
        <h2 className="text-4xl font-black mb-2">ALL PLATFORMS — CONTENT BREAKDOWN</h2>
        <p className="text-gray-500">
          {presentationData.totalContent.toLocaleString()} content records across formats — {presentationData.totalViews} views, {presentationData.totalSaves} saves, {presentationData.totalComments} comments.
        </p>
      </div>

      <div className="grid grid-cols-5 gap-4 mb-4">
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
          <p className="text-xs uppercase text-gray-500 mb-1">Total Content</p>
          <p className="text-3xl font-black">{presentationData.totalContent.toLocaleString()}</p>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
          <p className="text-xs uppercase text-orange-600 mb-1">Total Views</p>
          <p className="text-3xl font-black text-orange-500">{presentationData.totalViews}</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
          <p className="text-xs uppercase text-purple-600 mb-1">Saves</p>
          <p className="text-3xl font-black text-purple-600">{presentationData.totalSaves}</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
          <p className="text-xs uppercase text-gray-500 mb-1">Comments</p>
          <p className="text-3xl font-black">{presentationData.totalComments}</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
          <p className="text-xs uppercase text-gray-500 mb-1">Influencer Followers</p>
          <p className="text-3xl font-black">{presentationData.totalFollowers}</p>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 flex-1">
        {platforms.map((p) => (
          <div key={p.key} className={`${p.bg} border-l-4 ${p.color} rounded-lg p-4 flex flex-col`}>
            <div className="flex items-center gap-2 mb-2">
              <SocialIcon platform={p.key} size={16} />
              <h3 className="font-black text-sm">{p.label}</h3>
              <span className={`ml-auto text-xs font-bold ${p.textColor}`}>{p.pct}</span>
            </div>

            <p className={`text-4xl font-black ${p.textColor} mb-0.5`}>{p.total.toLocaleString()}</p>
            <p className="text-xs uppercase text-gray-500 mb-3">Content Records</p>

            {/* Progress bar */}
            <div className="h-1.5 bg-white rounded-full mb-3 overflow-hidden">
              <div className={`h-full ${p.barColor} rounded-full`} style={{ width: p.pct }} />
            </div>

            {/* Breakdown */}
            <div className="space-y-1.5 mt-auto">
              {p.breakdown.map((b) => (
                <div key={b.label} className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">{b.label}</span>
                  <span className="text-xs font-black">{b.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between text-xs text-gray-400">
        <span>JUL 2025 — MAR 2026</span>
        <span>04 / 20 · CONTENT RECORDS</span>
      </div>
    </div>
  );
}
