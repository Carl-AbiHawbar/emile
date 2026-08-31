export const SITE = {
  name: "Emile Chaanine",
  tagline: "Crafting Digital Excellence. Globally.",
  subheadline:
    "Based in Beirut, Lebanon · Available Worldwide · Remote & Freelance Ready",
  email: "chaanine.emile@gmail.com",
  phone: "+961 71 884 314",
  phoneHref: "tel:+96171884314",
  whatsapp: "https://wa.me/96171884314",
  instagram: "https://instagram.com/emilechaanine",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const STATS = [
  { value: "4+", label: "Years Experience" },
  { value: "100+", label: "Happy Clients" },
  { value: "100+", label: "Instagram Accounts Managed" },
] as const;

export const PROFILE = [
  { label: "Age", value: "23" },
  { label: "Location", value: "Beirut, Lebanon" },
  {
    label: "Availability",
    value: "Open to worldwide remote work & freelance opportunities",
  },
] as const;

export const SERVICES = [
  {
    title: "Instagram Account Management",
    description:
      "Full day-to-day ownership of your account — posting, scheduling, community management and inbox, so you can focus on your craft.",
  },
  {
    title: "Content Strategy & Creation",
    description:
      "Reels, carousels and stories built around a content plan that fits your niche and actually gets watched.",
  },
  {
    title: "Growth & Engagement",
    description:
      "Audience growth that compounds: hashtag and hook research, posting cadence, and engagement routines that reach real people.",
  },
  {
    title: "Brand Positioning",
    description:
      "Bio, highlights, grid aesthetic and tone of voice aligned so a first-time visitor knows exactly who you are in five seconds.",
  },
] as const;

export const NICHES = ["Fitness", "Health", "Wellness", "Food", "Retail"] as const;

export type Niche = (typeof NICHES)[number];

export type Client = {
  name: string;
  handle: string;
  url: string;
  niche?: Niche;
};

export const CLIENTS: readonly Client[] = [
  {
    name: "Michel Maalouf",
    handle: "michelmaalouf_ifbbpro",
    url: "https://www.instagram.com/michelmaalouf_ifbbpro",
    niche: "Fitness",
  },
  {
    name: "Let's Run All",
    handle: "letsrunall",
    url: "https://www.instagram.com/letsrunall",
    niche: "Fitness",
  },
  {
    name: "Muscle Madness Leb",
    handle: "musclemadnessleb",
    url: "https://www.instagram.com/musclemadnessleb",
    niche: "Fitness",
  },
  {
    name: "Fitness by Georgia",
    handle: "fitness.by.georgia",
    url: "https://www.instagram.com/fitness.by.georgia",
    niche: "Fitness",
  },
  {
    name: "Precision Training LB",
    handle: "precision.training.lb",
    url: "https://www.instagram.com/precision.training.lb",
    niche: "Fitness",
  },
  {
    name: "The Moms Trainer",
    handle: "themomstrainer",
    url: "https://www.instagram.com/themomstrainer",
    niche: "Fitness",
  },
  {
    name: "Dr. Madlenn",
    handle: "dr.madlenn_ah",
    url: "https://www.instagram.com/dr.madlenn_ah",
    niche: "Health",
  },
  {
    name: "Dr. Jennifer Akl",
    handle: "drjenniferakl",
    url: "https://www.instagram.com/drjenniferakl",
    niche: "Health",
  },
  {
    name: "Dr. Sandra Abi Akl",
    handle: "dr.sandraabiakl",
    url: "https://www.instagram.com/dr.sandraabiakl",
    niche: "Health",
  },
  {
    name: "Dr. Hiba Tannous",
    handle: "dr.hibatannous",
    url: "https://www.instagram.com/dr.hibatannous",
    niche: "Health",
  },
  {
    name: "Berrylite Health Center",
    handle: "berrylitehealthcenter",
    url: "https://www.instagram.com/berrylitehealthcenter",
    niche: "Health",
  },
  {
    name: "MindCare by Steph",
    handle: "mindcare_bysteph",
    url: "https://www.instagram.com/mindcare_bysteph",
    niche: "Wellness",
  },
  {
    name: "ISTDP Therapist",
    handle: "istdptherapist",
    url: "https://www.instagram.com/istdptherapist",
    niche: "Wellness",
  },
  {
    name: "P'tit Chef LB",
    handle: "ptitcheflb",
    url: "https://www.instagram.com/ptitcheflb",
    niche: "Food",
  },
  {
    name: "Jewelry by D",
    handle: "jewelry_by_d.lb",
    url: "https://www.instagram.com/jewelry_by_d.lb",
    niche: "Retail",
  },
  // Niche not yet confirmed by Emile — intentionally left untagged.
  {
    name: "Raafat Sharaf",
    handle: "raafat_sharaff",
    url: "https://www.instagram.com/raafat_sharaff",
  },
  {
    name: "Sally's Station",
    handle: "sallys_station",
    url: "https://www.instagram.com/sallys_station",
  },
  {
    name: "Coach Joelle",
    handle: "coach.joelle",
    url: "https://www.instagram.com/coach.joelle",
  },
];
