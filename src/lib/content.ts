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
