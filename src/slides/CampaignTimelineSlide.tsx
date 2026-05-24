export default function CampaignTimelineSlide() {
  const months = [
    {
      month: 'Jul',
      year: '2025',
      campaigns: [
        { name: 'Highest Platform', activations: '541' },
        { name: 'Sec — Bundles', activations: '547' },
        { name: 'Third — Bundles', activations: '362' },
      ],
    },
    {
      month: 'Aug',
      year: '2025',
      campaigns: [
        { name: 'Drive Thru — 4th', activations: '477' },
        { name: 'Drive Thru — Third', activations: '155' },
        { name: 'Drive Thru — Aug', activations: '450' },
        { name: 'High Platform', activations: '144' },
      ],
    },
    {
      month: 'Sep',
      year: '2025',
      featured: true,
      campaigns: [
        { name: '25 Years Visit', activations: '388' },
        { name: 'National Day', activations: '671' },
        { name: 'Repost — KSA', activations: '665' },
        { name: 'Season Push', activations: '402' },
        { name: 'Brand Visit', activations: '287' },
        { name: 'Store Moment', activations: '254' },
      ],
    },
    {
      month: 'Oct',
      year: '2025',
      campaigns: [
        { name: '25% OFF', activations: '644' },
        { name: 'Americano', activations: '621' },
      ],
    },
    {
      month: 'Nov',
      year: '2025',
      campaigns: [
        { name: 'Warm Cups', activations: '658' },
      ],
    },
    {
      month: 'Dec',
      year: '2025',
      featured: true,
      campaigns: [
        { name: 'Visit — Dec', activations: '1,106' },
        { name: 'Mr Beast & Cardamom', activations: '573' },
      ],
    },
    {
      month: 'Jan',
      year: '2026',
      campaigns: [
        { name: 'New Year Visit', activations: '255' },
      ],
    },
    {
      month: 'Feb',
      year: '2026',
      campaigns: [
        { name: 'Winter Moment', activations: '429' },
        { name: 'Branch Push', activations: '417' },
      ],
    },
    {
      month: 'Mar',
      year: '2026',
      campaigns: [
        { name: 'Ramadan Prep', activations: '491' },
      ],
    },
  ];

  return (
    <div className="size-full bg-white p-8 flex flex-col">
      <div className="mb-4">
        <p className="text-xs uppercase text-gray-400 mb-1">07 · Campaign Timeline</p>
        <h2 className="text-4xl font-black mb-1">CAMPAIGNS DELIVERED SO FAR</h2>
        <p className="text-gray-500">Calendar view · 9 active months · 22 campaign boxes.</p>
      </div>

      <div className="grid grid-cols-4 gap-3 mb-4">
        <div className="rounded-lg border border-purple-200 bg-purple-50 p-3">
          <p className="text-3xl leading-none font-black text-purple-600">22</p>
          <p className="text-xs uppercase font-black text-gray-600 mt-1">Total Campaigns</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-3">
          <p className="text-3xl leading-none font-black">9</p>
          <p className="text-xs uppercase font-black text-gray-600 mt-1">Active Months</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-3">
          <p className="text-3xl leading-none font-black">2.4</p>
          <p className="text-xs uppercase font-black text-gray-600 mt-1">Avg / Month</p>
        </div>
        <div className="rounded-lg border border-orange-200 bg-orange-50 p-3">
          <p className="text-3xl leading-none font-black text-orange-500">Sep</p>
          <p className="text-xs uppercase font-black text-gray-600 mt-1">Peak Month · 6</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 flex-1 min-h-0">
        {months.map((month) => (
          <div
            key={`${month.month}-${month.year}`}
            className={`rounded-lg border p-3 flex flex-col min-h-0 ${
              month.featured
                ? 'border-purple-200 bg-purple-50/80 shadow-[0_12px_28px_rgba(126,34,206,0.12)]'
                : 'border-gray-200 bg-gray-50/80'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className={`text-xl leading-none font-black ${month.featured ? 'text-purple-700' : 'text-gray-950'}`}>
                  {month.month}
                </p>
                <p className="text-[0.65rem] uppercase font-black tracking-wide text-gray-500 mt-1">{month.year}</p>
              </div>
              <div className={`rounded-md px-2.5 py-1 text-center ${month.featured ? 'bg-purple-600 text-white' : 'bg-white text-gray-950 border border-gray-200'}`}>
                <p className="text-lg leading-none font-black">{month.campaigns.length}</p>
                <p className="text-[0.55rem] uppercase font-black">Campaigns</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1.5 auto-rows-fr flex-1 min-h-0">
              {month.campaigns.map((campaign, index) => (
                <div
                  key={`${month.month}-${campaign.name}`}
                  className={`rounded-md border p-2 flex flex-col justify-between min-h-0 ${
                    month.featured ? 'bg-white border-purple-100' : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className={`text-[0.62rem] font-black ${month.featured ? 'text-purple-600' : 'text-orange-500'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[0.6rem] font-black text-gray-400">{campaign.activations}</span>
                  </div>
                  <p className="text-[0.64rem] leading-tight font-black text-gray-800 line-clamp-2">{campaign.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between text-xs text-gray-400">
        <span>JUL 2025 — MAR 2026</span>
        <span>07 / 19 · 22 CAMPAIGNS</span>
      </div>
    </div>
  );
}
