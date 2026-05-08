// Static content layer — sourced from /scraped/content-inventory.json
// In production, the admin can override these via Supabase tables (pages, services, settings).

export const business = {
  name: "Cave Run Muskie Guide Service & The Muskie Lodge",
  short: "KY Muskie",
  tagline: "Trophy muskie & crappie on Kentucky's mountain water.",
  longTagline:
    "Three decades of guiding the largest trophy-muskie reservoir in the South. Crappie and multi-species trips on the side. Seven rooms attached to The Muskie Shack — where every cast ends with a story.",
  phone: "(606) 776-6567",
  lodgePhone: "(606) 768-3911",
  email: "tonygrantoutdoors@gmail.com",
  address: "10752 Highway 1274, Wellington, KY 40387",
  established: 1995, // Tony has been guiding Cave Run for ~30 years
};

export const stats = [
  { value: 30, suffix: "+", label: "Years on Cave Run" },
  { value: 8300, suffix: " ac", label: "of Trophy Muskie Water" },
  { value: 54, suffix: '"', label: "Kentucky State Record" },
  { value: 10, suffix: "", label: "Top-10 Muskie Lake — In-Fisherman" },
];

export const offerings = [
  {
    slug: "muskie",
    name: "Muskie",
    eyebrow: "The King of Freshwater",
    short:
      "The Mighty Muskellunge. Cave Run is the southernmost trophy-muskie reservoir in the U.S. Year-round season, no closed dates.",
    description: `The "King of Freshwater" — also called the "Freshwater Shark" and the "Waterwolf." Different names in different regions, but they all mean one thing: big, mean, and nasty. World records push 70 lbs and 63 inches.

At Cave Run Muskie Guide Service we have put in the pre-fishing hours for you. Our guides are on the water more than 100 hours a week targeting the mighty musky. We've located that big once-in-a-lifetime fish for the veteran muskie nut and many smaller fish for the beginner after their first legal.`,
    highlights: [
      "Year-round season — no closed dates",
      "Top-10 muskie lake — In-Fisherman & Field & Stream",
      "Largest muskie guide staff in North America",
      "Strictly catch-and-release",
      "Average fall fish over 40 inches",
    ],
    image: "/images/hero/bigfishslider-961x440.jpg",
  },
  {
    slug: "crappie",
    name: "Crappie & Multi-Species",
    eyebrow: "When the Slabs Are Running",
    short:
      "When the muskie are sleeping, the crappie are biting. Multi-species guide Tim Newsome runs trips for crappie, bass, and white bass — perfect for families and first-timers.",
    description: `Cave Run isn't just a muskie lake. Spring crappie work the brush piles in pre-spawn, summer white bass slam topwaters at first light, and largemouth bass hold tight to the standing timber that makes Cave Run special.

Our multi-species guide Tim Newsome has spent a lifetime hunting and fishing the Cave Run area — known as one of the best multi-species anglers in the region. He's also a successful turkey guide; he and his clients have taken hundreds of birds from the area.`,
    highlights: [
      "Spring crappie pre-spawn, summer white bass, year-round bass",
      "Half-day or full-day options",
      "Family-friendly — perfect for first-time anglers",
      "Spring turkey hunts on request",
      "Same lodge, same packages, easier fish",
    ],
    image: "/images/hero/kidcatchslider-961x440.jpg",
  },
];

export const lodge = {
  name: "Mountain Muskie Lodge",
  shack: "The Muskie Shack",
  rooms: 7,
  description: `Attached to our lodging facility, find The Muskie Shack — a place where guests hang out and meet anglers from all over the muskie world. Complete cooking facilities in our Wildcat Kitchen, a pool table, a wide variety of musky lures and gear, the two biggest muskies ever taken from Cave Run mounted on the wall, and University of Kentucky Wildcat memorabilia dating to the 1950s.`,
  amenities: [
    { icon: "BedDouble", label: "2 double beds per room" },
    { icon: "Wifi", label: "Wi-Fi & satellite TV" },
    { icon: "Refrigerator", label: "Refrigerator, microwave, coffee maker" },
    { icon: "ChefHat", label: "Wildcat Kitchen — full cooking facility" },
    { icon: "Trophy", label: "Mounts of the two biggest Cave Run muskies" },
    { icon: "GalleryVerticalEnd", label: "UK Wildcat memorabilia (since 1950s)" },
    { icon: "CalendarDays", label: "Daily and weekly rates" },
    { icon: "Users", label: "Whole-facility group rentals + catering" },
  ],
  welcomes: [
    "Anglers & Hunters",
    "Horseback Riders",
    "Sightseers",
    "Motorcycle Riders",
    "Hikers",
    "Four-Wheelers",
    "Muskie Maniacs",
  ],
  images: [
    "/images/lodge/lodge-interior-1.jpeg",
    "/images/lodge/lodge-interior-2.jpeg",
    "/images/lodge/lodge-interior-3.jpeg",
    "/images/lodge/lodge-interior-4.jpeg",
    "/images/lodge/lodge2.jpg",
    "/images/lodge/lodge2-640x445.jpg",
    "/images/lodge/lodge3-640x445.jpg",
  ],
};

export const packages = [
  {
    name: "Cabin Day",
    price: 525,
    duration: "1 Day Guided + 1 Night Lodging",
    note: "Up to 2 anglers",
    bestFor: "First-time visitors who want a real Cave Run morning",
    featured: false,
  },
  {
    name: "Long Weekend",
    price: 895,
    duration: "2 Days Guided + 3 Nights Lodging",
    note: "Up to 2 anglers — most popular",
    bestFor: "The package that catches the most fish per dollar",
    featured: true,
  },
  {
    name: "The Whole Hunt",
    price: 1345,
    duration: "3 Days Guided + 4 Nights Lodging",
    note: "Up to 2 anglers",
    bestFor: "Going for the wall fish — give yourself the days",
    featured: false,
  },
  {
    name: "Half Day",
    price: 325,
    duration: "Half-Day Guided Trip",
    note: "Up to 2 anglers — fishing only",
    bestFor: "Quick taste before lunch",
    featured: false,
  },
  {
    name: "Day Charter",
    price: 450,
    duration: "Full-Day Guided Trip",
    note: "Up to 2 anglers — fishing only",
    bestFor: "Day-tripping from Lexington",
    featured: false,
  },
];

export const guides = [
  { name: "Tony Grant", role: "Owner & Head Guide", bio: "Operates Cave Run Muskie Guide Service and Mountain Muskie Lodge. Caught a 44.75 lb Kentucky State Record muskie. Manufacturer of muskie lures including the Producer Series Rattlin' Shad.", image: "/images/guides/tonygrant1.jpg" },
  { name: "Scott Salchli", role: "Mountain Muskie Guide", bio: "Guided his step-daughter Sara Terry to the current Kentucky State Record (54\" / 47 lbs). 100+ days/year on the water, multiple PMTT top-tens, KSMC Largest Release winner three times. Only PMTT team in trail history to land legal fish in every qualifying event of a season.", image: "/images/guides/scott-225x300.jpg" },
  { name: "Charlie Thompson", role: "Senior Guide", bio: "Eastern Kentucky native, taught muskie fishing by his grandfather. Casting Cave Run for 20+ years. PMTT top-ten finisher and the lodge's unofficial 'pickin' and grinnin'' voice.", image: "/images/guides/charile1.jpg" },
  { name: "Darrell Seasor", role: "Father in the Father-Son Duo", bio: "Fifteen years on Cave Run. Discovered muskie fishing through a turkey-hunting trade and has been hooked since day one.", image: "/images/guides/daryl1.jpg" },
  { name: "Lance Seasor", role: "Son in the Father-Son Duo", bio: "Started chasing muskies at 14. Six years guiding all experience levels. PMTT regular since 2004; 3rd at the 2008 Trinity Championship.", image: "/images/guides/lance1-300x190.jpg" },
  { name: "Jason Ritchie", role: "Guide", bio: "Grew up fishing the lakes, creeks and streams in the Cave Run area. 20+ years pursuing muskies, 10+ years guiding. Specializes in casting, trolling, and live-bait fall fishing.", image: "/images/guides/jason_bio.jpg" },
  { name: "Mike Lopresti", role: "Guide ('Two Scoops')", bio: "Cut his teeth on Northern Wisconsin muskies. The past six years targeting Cave Run. Outstanding personality makes a day on the water entertaining and educational.", image: "/images/guides/mike-300x199.png" },
  { name: "Frank Veeche", role: "Guide", bio: "Plainly put, loves muskie fishing. 4+ years on staff with a special enthusiasm for taking kids fishing. Both trolling and casting; laid-back teacher.", image: "/images/guides/frank-300x225.jpg" },
  { name: "Justin Diller", role: "Guide", bio: "Muskie crazy since age 11. Landed his first 50-incher young. Has chased giants from Minnesota to Canada and now puts clients on Cave Run fish year-round.", image: "/images/guides/justin.jpg" },
  { name: "Billy Strange", role: "Guide", bio: "Lifelong Cave Run angler. Slow, methodical, thorough. Many of his clients catch their first or biggest muskie sharing his boat.", image: "/images/guides/billy-300x225.jpg" },
  { name: "Jimmy Barnes", role: "Guide", bio: "Started on Dale Hollow smallmouth, converted to a Cave Run muskie fanatic. PMTT Runner-Up at the Cave Run event.", image: "/images/guides/jimmy1.jpg" },
  { name: "Joey White", role: "Guide", bio: "Born with muskie fishing in his blood. Cave Run is his second home — childhood weekends camping out, surviving on bologna and peanut butter, fishing daylight to dark.", image: "/images/guides/joey.jpg" },
  { name: "Tim Newsome", role: "Multi-Species Guide — Crappie / Bass / Turkey", bio: "Lifetime hunter and angler in the Cave Run area. Known as one of the best multi-species anglers in the region. Successful turkey guide — he and his clients have taken hundreds of birds." },
];

export const testimonials = [
  {
    author: "Chris",
    quote:
      "Your guide service is so much better than the other one I used last year. It's really nice to know there is a guide that cares about letting the client use the front of the boat. Thanks for the memories.",
  },
  {
    author: "Jerry",
    quote:
      "Just wanted to tell you how much I enjoyed my most recent fishing trip with you at Cave Run Lake. Although my previous trip with you was great, this one was even better.",
  },
  {
    author: "Andy",
    quote:
      "Having fished in Canada before I truly appreciate that you were able to bring not only one but two muskies into the boat yesterday. If not for your guiding experience, persistence and hard work, I know we would have come up empty. Thanks for my first muskellunge.",
  },
];

export const faqs = [
  { q: "What's the minimum and maximum group size?", a: "We can accommodate up to 16 anglers across our guide staff." },
  { q: "What boats do your guides run?", a: "Newer 19–21 ft Deep V boats — Rangers, Tuffys, and Lunds. Quality rods, reels, nets and proven lures provided." },
  { q: "What time do trips start and end?", a: "Times shift with the season and what the fish are doing. Minimum 8 hours on the water, often 10." },
  { q: "What's the catch limit?", a: "Catch as many as you can — strictly catch and release." },
  { q: "How much is a Kentucky fishing license?", a: "No more than $10/day. Multi-day discounts available from KY Fish & Wildlife." },
  { q: "Do you offer gift certificates?", a: "Yes — open-ended dates. Call or email and we'll send printable certificates." },
  { q: "Where do guests stay?", a: "Our packages include lodging at Mountain Muskie Lodge, attached to The Muskie Shack." },
  { q: "What about restaurants nearby?", a: "The Bull is a quarter mile away (pizza, burgers, breakfast, deli). The lodge has a complete cooking facility. Morehead, 30 minutes away, has full dining." },
  { q: "What should I bring?", a: "Rain gear, polarized sunglasses, food, drink, and a Kentucky fishing license. We provide everything else." },
  { q: "Do you target species other than muskie?", a: "Yes — Tim Newsome guides bass, crappie, and white bass on request, plus spring turkey hunts." },
  { q: "Can I bring my own rod and reel?", a: "Absolutely. We have setups dialed for what we're doing, but you're welcome to bring yours." },
];

export const lakeFacts = {
  size: 8300,
  river: "Licking River",
  forest: "Daniel Boone National Forest",
  hatchery: "Minor E. Clark Fish Hatchery — largest freshwater hatchery in the southeast",
  distanceFromLexington: "50 miles east of Lexington",
  ranking: "Top 10 muskie lake — In-Fisherman & Field & Stream",
  season: "Year-round, no closed season",
};

export const heroImages = [
  "/images/hero/bigfishslider-961x440.jpg",
  "/images/hero/prettyslider-961x440.jpg",
  "/images/hero/fallslider-961x440.jpg",
  "/images/hero/slide5-964x441.jpg",
  "/images/hero/springslider-961x440.jpg",
  "/images/hero/kidcatchslider-961x440.jpg",
];
