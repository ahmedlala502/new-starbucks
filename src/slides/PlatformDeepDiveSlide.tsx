import { presentationData } from '../data/presentationData';
import { SocialIcon } from '../components/SocialIcon';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];

const platformTrends = {
  instagram: {
    content: [420, 610, 940, 1180, 1260, 1570, 1320, 1810, 1966],
    views: [1.7, 2.1, 3.4, 3.9, 4.2, 5.1, 4.7, 5.8, 6.6],
  },
  tiktok: {
    content: [260, 410, 720, 880, 970, 1160, 1240, 1530, 1810],
    views: [1.2, 1.8, 2.9, 3.6, 4.1, 4.8, 5.4, 6.1, 7.3],
  },
  snapchat: {
    content: [760, 1040, 1370, 1760, 2110, 2420, 2710, 3150, 3537],
    views: [2.4, 3.1, 4.2, 5.3, 6.2, 7.0, 7.9, 8.8, 10.2],
  },
};

const toChartData = (content: number[], views: number[]) =>
  months.map((month, index) => ({
    month,
    content: content[index],
    views: views[index],
  }));

export default function PlatformDeepDiveSlide() {
  const { instagram, tiktok, snapchat } = presentationData.platforms;
  const platformCards = [
    {
      key: 'instagram' as const,
      label: 'Instagram',
      role: 'Brand Polish',
      accent: '#f97316',
      softClass: 'bg-orange-50 border-orange-200',
      badgeClass: 'bg-orange-200 text-orange-700',
      metricClass: 'text-orange-500',
      content: instagram.totalContent,
      creators: instagram.uniqueInfluencers,
      mix: '28%',
      data: toChartData(platformTrends.instagram.content, platformTrends.instagram.views),
      insight: 'Reels and stories lift steadily after September, with March closing as the strongest visibility month.',
    },
    {
      key: 'tiktok' as const,
      label: 'TikTok',
      role: 'Discovery',
      accent: '#111827',
      softClass: 'bg-gray-50 border-gray-300',
      badgeClass: 'bg-gray-200 text-gray-700',
      metricClass: 'text-gray-800',
      content: tiktok.totalContent,
      creators: tiktok.uniqueInfluencers,
      mix: '23%',
      data: toChartData(platformTrends.tiktok.content, platformTrends.tiktok.views),
      insight: 'Creator breadth compounds into the sharpest views curve, especially from January through March.',
    },
    {
      key: 'snapchat' as const,
      label: 'Snapchat',
      role: 'Local Reach',
      accent: '#7c3aed',
      softClass: 'bg-purple-50 border-purple-200',
      badgeClass: 'bg-purple-200 text-purple-700',
      metricClass: 'text-purple-600',
      content: snapchat.totalContent,
      creators: snapchat.uniqueInfluencers,
      mix: '48%',
      data: toChartData(platformTrends.snapchat.content, platformTrends.snapchat.views),
      insight: 'Highest content volume across the period; local story coverage drives the biggest monthly scale.',
    },
  ];

  return (
    <div className="size-full bg-white p-8 flex flex-col">
      <div className="mb-4">
        <p className="text-xs uppercase text-gray-400 mb-1">10 · Platform Deep Dive</p>
        <h2 className="text-4xl font-black mb-2">MONTHLY CONTENT & VIEWS — PER PLATFORM</h2>
        <p className="text-gray-500">
          Three platform graphs showing monthly content volume and view growth from Jul 2025 to Mar 2026.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 flex-1 min-h-0">
        {platformCards.map((platform) => (
          <div key={platform.key} className={`${platform.softClass} border rounded-xl p-4 flex flex-col min-h-0`}>
            <div className="flex items-center gap-2 mb-3">
              <SocialIcon platform={platform.key} size={18} />
              <h3 className="text-xl font-black">{platform.label}</h3>
              <span className={`ml-auto text-[0.65rem] uppercase px-2 py-0.5 rounded font-black ${platform.badgeClass}`}>
                {platform.role}
              </span>
            </div>

            <div className="bg-white rounded-lg border border-black/5 p-3 flex-1 min-h-0">
              <p className="text-[0.65rem] uppercase font-black text-gray-500 mb-1">Content records</p>
              <ResponsiveContainer width="100%" height="43%">
                <BarChart data={platform.data} margin={{ top: 5, right: 0, bottom: 0, left: -22 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis dataKey="month" stroke="#6b7280" fontSize={9} tickLine={false} axisLine={false} />
                  <YAxis stroke="#9ca3af" fontSize={9} tickLine={false} axisLine={false} />
                  <Tooltip cursor={{ fill: 'rgba(15,23,42,0.05)' }} />
                  <Bar dataKey="content" fill={platform.accent} radius={[4, 4, 0, 0]} isAnimationActive={false} />
                </BarChart>
              </ResponsiveContainer>

              <p className="text-[0.65rem] uppercase font-black text-gray-500 mt-2 mb-1">Views in millions</p>
              <ResponsiveContainer width="100%" height="43%">
                <LineChart data={platform.data} margin={{ top: 6, right: 4, bottom: 0, left: -22 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis dataKey="month" stroke="#6b7280" fontSize={9} tickLine={false} axisLine={false} />
                  <YAxis stroke="#9ca3af" fontSize={9} tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="views"
                    stroke={platform.accent}
                    strokeWidth={3}
                    dot={{ r: 3, fill: platform.accent }}
                    isAnimationActive={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center mt-3">
              <div className="bg-white rounded-lg p-2 border border-black/5">
                <p className="text-[0.62rem] uppercase text-gray-500">Content</p>
                <p className={`text-xl font-black ${platform.metricClass}`}>{platform.content.toLocaleString()}</p>
              </div>
              <div className="bg-white rounded-lg p-2 border border-black/5">
                <p className="text-[0.62rem] uppercase text-gray-500">Creators</p>
                <p className="text-xl font-black">{platform.creators.toLocaleString()}</p>
              </div>
              <div className="bg-white rounded-lg p-2 border border-black/5">
                <p className="text-[0.62rem] uppercase text-gray-500">Mix</p>
                <p className="text-xl font-black">{platform.mix}</p>
              </div>
            </div>

            <div className="mt-3 bg-white rounded-lg border border-black/5 p-3">
              <p className={`text-[0.65rem] font-black uppercase mb-1 ${platform.metricClass}`}>Insight</p>
              <p className="text-xs leading-snug font-semibold text-gray-700">{platform.insight}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between text-xs text-gray-400">
        <span>JUL 2025 — MAR 2026</span>
        <span>10 / 19 · PLATFORM DEEP DIVE</span>
      </div>
    </div>
  );
}
