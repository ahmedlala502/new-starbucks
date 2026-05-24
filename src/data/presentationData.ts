export const presentationData = {
  // Core metrics
  totalInfluencers: 10536,
  uniqueInfluencers: 3890,
  totalContent: 39419,
  totalBranches: 104,
  cities: 58,
  governorates: 13,
  activeMonths: 9,
  campaigns: 22,

  // Platform breakdown
  platforms: {
    instagram: {
      uniqueInfluencers: 4123,
      totalContent: 11076,
      breakdown: {
        story: 8372,
        reel: 1187,
        post: 1204,
        highlight: 313,
      },
    },
    tiktok: {
      uniqueInfluencers: 6806,
      totalContent: 8980,
      breakdown: {
        story: 1224,
        reel: 6643,
        post: 1113,
      },
    },
    snapchat: {
      uniqueInfluencers: 3726,
      totalContent: 18857,
      breakdown: {
        story: 18361,
        spotlight: 496,
      },
    },
    threads: {
      uniqueInfluencers: 163,
      totalContent: 344,
    },
    facebook: {
      uniqueInfluencers: 81,
      totalContent: 138,
    },
    youtube: {
      totalContent: 7,
    },
    twitter: {
      uniqueInfluencers: 9,
      totalContent: 17,
    },
  },

  // Monthly data - Sep 2025 peak
  monthlyActivations: [
    { month: 'JUL', activations: 1449 },
    { month: 'AUG', activations: 1226 },
    { month: 'SEP', activations: 2667 },
    { month: 'OCT', activations: 1265 },
    { month: 'NOV', activations: 658 },
    { month: 'DEC', activations: 1679 },
    { month: 'JAN', activations: 255 },
    { month: 'FEB', activations: 846 },
    { month: 'MAR', activations: 491 },
  ],

  // Geographic data
  topStates: [
    { name: 'Riyadh', activations: 3531 },
    { name: 'Mecca', activations: 2358 },
    { name: 'Eastern Province', activations: 1208 },
    { name: 'Asir', activations: 703 },
    { name: 'Al-Qassim', activations: 159 },
  ],

  topCities: [
    { name: 'Riyadh', activations: 3444 },
    { name: 'Jeddah', activations: 1563 },
    { name: 'Dammam', activations: 590 },
    { name: 'Ta\'if', activations: 485 },
    { name: 'Khobar', activations: 471 },
    { name: 'Abha', activations: 356 },
    { name: 'Khamis Mushait', activations: 347 },
    { name: 'Mecca', activations: 310 },
    { name: 'Tabuk', activations: 284 },
    { name: 'Medina', activations: 245 },
  ],

  topBranches: [
    { name: 'Tal Plaza DT Al Malqa - Riyadh', city: 'Riyadh', activations: 910 },
    { name: 'King Abdullah ERR. DT 37', city: 'Riyadh', activations: 605 },
    { name: 'City Walk DT', city: 'Ta\'if', activations: 482 },
    { name: 'Rehab Zengabar DT', city: 'Jeddah', activations: 403 },
    { name: 'Trio boulevard - Jeddah', city: 'Jeddah', activations: 370 },
    { name: 'ARC Avenue DT - Khamis Mushait', city: 'Khamis Mushait', activations: 346 },
    { name: 'Riyadh Park - Riyadh', city: 'Riyadh', activations: 337 },
    { name: 'King Road Abhur DT - Jeddah', city: 'Jeddah', activations: 306 },
    { name: 'Nakhlah Plaza - Riyadh', city: 'Riyadh', activations: 264 },
    { name: 'Nakheel Mall - Riyadh', city: 'Riyadh', activations: 255 },
  ],

  // Performance metrics
  totalViews: '43.53M',
  totalSaves: '3.18M',
  totalLikes: '874K',
  totalComments: '65K',
  totalFollowers: '1.49B',
};
