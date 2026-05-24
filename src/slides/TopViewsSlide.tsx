// @ts-nocheck
export default function TopViewsSlide() {
  const topPosts = [
    { creator: 'mamammamia', handle: '@mamammamia', views: '919K' },
    { creator: 'Hessa Abdul Aziz', handle: '@hasoo12341', views: '649K' },
    { creator: 'Mohammed', handle: '@meemformoh', views: '290K' },
    { creator: 'Rana', handle: '@raaaanosh3', views: '263K' },
    { creator: 'Salma', handle: '@slm.l01', views: '237K' },
    { creator: 'Abdullah bin Odeh', handle: '@binoudaah', views: '227K' },
    { creator: 'Dr Ola Aldammad', handle: '@droladama', views: '224K' },
    { creator: 'Samia Fakih', handle: '@mvvi67', views: '223K' },
    { creator: 'lamiaa abdelaziz', handle: '@lamia.eid', views: '222K' },
    { creator: 'Alwaleed Alotaibi', handle: '@.qb4', views: '211K' },
    { creator: 'Basma', handle: '@basmask0', views: '198K' },
    { creator: 'TALAL', handle: '@t9.xxq', views: '194K' },
    { creator: 'SaharNasser', handle: '@sahar_nn15', views: '189K' },
    { creator: 'mrii.v2', handle: '@mrii.v2', views: '180K' },
    { creator: 'khadija ahmed', handle: '@1khadej', views: '176K' },
  ];

  return (
    <div className="size-full bg-gradient-to-br from-orange-50 to-white p-16">
      <div className="mb-12">
        <p className="text-xs uppercase text-gray-500 mb-2">Best-performing creator posts - bold photo showcase ranked by single-post views.</p>
        <h2 className="text-5xl font-black mb-4">
          <span className="text-black">TOP </span>
          <span className="text-orange-500">VIEWS</span>
        </h2>
        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-lg">15 BEST-PERFORMING POSTS · RANKED BY SINGLE-POST VIEWS</p>
          <div className="bg-orange-500 text-white text-xs uppercase px-4 py-2 rounded-full">
            Photo Showcase · Top 15 Posts
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-6">
        {topPosts.map((post, idx) => (
          <div key={post.handle} className="bg-white border-2 border-orange-200 rounded-xl p-6 hover:border-orange-600 transition-all hover:shadow-xl">
            <div className="flex items-center justify-center mb-4">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-600 to-orange-400 flex items-center justify-center">
                <span className="text-white text-2xl font-black">{post.creator.substring(0, 2)}</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-black text-lg mb-1">{post.creator}</h3>
              <p className="text-xs text-gray-500 mb-3">{post.handle}</p>
              <div className="border-t border-gray-200 pt-3">
                <p className="text-xs uppercase text-gray-500 mb-1">Views</p>
                <p className="text-3xl font-black text-orange-600">{post.views}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-16 text-sm text-gray-400">
        SOURCE: PPTX TEMPLATE PHOTO PAGES - JUL 2025 - MAR 2026
      </div>
      <div className="absolute bottom-8 right-16 text-sm text-gray-400">17 / 21</div>
    </div>
  );
}
