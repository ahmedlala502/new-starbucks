import { presentationData } from '../data/presentationData';

export default function StrengthsSlide() {
  const strengths = [
    { num: '01', title: 'National Reach & Local Execution', desc: `Unmatched ability to deploy campaigns nationwide while maintaining hyper-local relevance across ${presentationData.cities} cities and ${presentationData.totalBranches} branches.` },
    { num: '02', title: 'Creator Network Depth', desc: 'Access to over 3,890 unique, vetted creators providing authentic representation and scalable community engagement.' },
    { num: '03', title: 'Multi-Channel Expertise', desc: 'Proven execution capability across TikTok, Instagram, and Snapchat, optimizing formats for maximum platform impact.' },
    { num: '04', title: 'Data-Driven Optimization', desc: 'Continuous tracking of almost 40,000 content pieces to refine content strategies and improve ROI systematically.' },
    { num: '05', title: 'Speed of Execution', desc: 'Agile operational framework enabling rapid deployment of massive creator volume across multiple concurrent campaigns.' },
    { num: '06', title: 'Brand Safety Compliance', desc: 'Rigorous quality control processes ensuring all content adheres strictly to Starbucks brand guidelines.' },
  ];

  return (
    <div className="size-full bg-white p-10 flex flex-col">
      <div className="mb-5">
        <p className="text-xs uppercase text-gray-400 mb-1">12 · Why It Worked</p>
        <h2 className="text-4xl font-black mb-2">GRAND COMMUNITY STRENGTHS</h2>
        <p className="text-gray-500">Key competitive advantages driving Starbucks campaign success.</p>
      </div>

      <div className="grid grid-cols-3 gap-4 flex-1 min-h-0">
        {strengths.map((strength) => (
          <div key={strength.num} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 transition-colors">
            <div className="text-4xl font-black text-orange-500 mb-3">{strength.num}</div>
            <h3 className="text-lg font-black mb-2 leading-tight">{strength.title}</h3>
            <p className="text-sm text-gray-600 font-medium leading-relaxed">{strength.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between text-xs text-gray-400">
        <span>JUL 2025 — MAR 2026</span>
        <span>12 / 19 · STRENGTHS</span>
      </div>
    </div>
  );
}
