export default function TopLikesSlide() {
  const topLikes = [
    { creator: 'saud.blog1', handle: '@saud.blog1', likes: '64.2K' },
    { creator: 'ترف', handle: '@mamammamia', likes: '33.4K' },
    { creator: 'Noura Saleh', handle: '@1khadej', likes: '20.7K' },
    { creator: 'Rana', handle: '@hammss20', likes: '15.0K' },
    { creator: 'Ree', handle: '@rana.musaad', likes: '12.3K' },
    { creator: 'Mammamìa', handle: '@hasoo12341', likes: '11.2K' },
    { creator: 'khada ahmed', handle: '@it.afaf', likes: '11.2K' },
    { creator: 'أم ِغنى', handle: '@Lnurah.3', likes: '11.0K' },
    { creator: 'حصه العرفج', handle: '@ttrrff88', likes: '11.0K' },
    { creator: 'Dr Ola Aldammad', handle: '@droladama', likes: '10.3K' },
    { creator: 'AFAF', handle: '@ree.110', likes: '9.0K' },
    { creator: 'Rana Almarshad', handle: '@rana.musaad', likes: '7.5K' },
    { creator: 'َسـنـد اليامي', handle: '@raaaanosh3', likes: '6.2K' },
    { creator: 'TALAL', handle: '@t9.xxq', likes: '6.1K' },
    { creator: 'خط جده', handle: '@salem3703', likes: '5.3K' },
  ];

  return (
    <div className="size-full bg-white p-16">
      <div className="mb-12">
        <p className="text-xs uppercase text-gray-500 mb-2">18 · Top Likes</p>
        <h2 className="text-5xl font-black mb-4">TOP LIKES — BEST-PERFORMING POSTS</h2>
        <p className="text-gray-600 text-lg">
          Creators ranked by single-post like performance during the campaign window.
        </p>
      </div>

      <div className="grid grid-cols-5 gap-6">
        {topLikes.map((creator, idx) => (
          <div key={creator.handle} className="bg-gray-50 rounded-lg p-6 hover:bg-purple-50 transition-colors border-2 border-transparent hover:border-purple-600">
            <div className="flex items-center gap-3 mb-3">
              <div className={`text-3xl font-black ${idx < 5 ? 'text-orange-500' : 'text-purple-600'}`}>
                {String(idx + 1).padStart(2, '0')}
              </div>
            </div>
            <h3 className="font-bold mb-1">{creator.creator}</h3>
            <p className="text-xs text-gray-500 mb-4">{creator.handle}</p>
            <div className="text-right">
              <p className="text-4xl font-black text-purple-600">{creator.likes}</p>
              <p className="text-xs uppercase text-gray-500 mt-1">Likes</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 right-16 text-sm text-gray-400">18 / 21 · TOP 15 POSTS BY LIKES</div>
    </div>
  );
}
