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
    title: "Video Editing",
    description:
      "Short-form video edits for Reels and social — cut, paced and finished for the feed.",
  },
] as const;

export const NICHES = [
  "Fitness",
  "Health",
  "Nutrition",
  "Wellness",
  "Coaching",
  "Finance",
  "Food",
  "Dance",
  "Retail",
] as const;

export type Niche = (typeof NICHES)[number];

export type Client = {
  name: string;
  handle: string;
  url: string;
  niche: Niche;
};

const client = (name: string, handle: string, niche: Niche): Client => ({
  name,
  handle,
  url: `https://www.instagram.com/${handle}`,
  niche,
});

export const CLIENTS: readonly Client[] = [
  client("Michel Maalouf IFBB Pro", "michelmaalouf_ifbbpro", "Fitness"),
  client("Lets Run All", "letsrunall", "Fitness"),
  client("Muscle Madness", "musclemadnessleb", "Fitness"),
  client("Precision Training LB", "precision.training.lb", "Fitness"),
  client("Rewa Hanna", "themomstrainer", "Fitness"),
  client("Level Up Beirut", "level_up_beirut", "Fitness"),
  client("Kevork Koumashian", "kevorkkoumashian", "Fitness"),
  client("Tia Abou Rjeily", "tiaabourjeily", "Fitness"),
  client("Dalia Zawil", "daliazawil_dxb", "Fitness"),
  client("Rfitness", "raafat_sharaff", "Fitness"),

  client("Dr. Madlenn", "dr.madlenn_ah", "Health"),
  client("Dr. Jennifer Akl", "drjenniferakl", "Health"),
  client("Sandra Abi Akl El-Asmar", "dr.sandraabiakl", "Health"),
  client("Dr. Hiba Tannous", "dr.hibatannous", "Health"),
  client("Berrylite Health Center", "berrylitehealthcenter", "Health"),
  client("Dr. Hoda Zakaria", "drhodazakaria", "Health"),
  client("Sally Zalzali", "sallys_station", "Health"),

  client("Georgia El Jad", "fitness.by.georgia", "Nutrition"),
  client("Tayeb Misbah", "tayibm", "Nutrition"),
  client("Nada Assaf Slaibi", "nadaassafslaibi", "Nutrition"),

  client("Mind Care by Stephanie Juan", "mindcare_bysteph", "Wellness"),
  client("Tatiana Nassar", "istdptherapist", "Wellness"),
  client("Joelle Deaibess", "coach.joelle", "Wellness"),

  client("Sawsan Akil", "sawsan_akil", "Coaching"),
  client("Luciana Habib", "lucianahabibnlp", "Coaching"),

  client("Richard Nasr", "richthesignalyst", "Finance"),
  client("Laila Hankir", "laila.hankir", "Finance"),

  client("Ptit Chef", "ptitcheflb", "Food"),
  client("ProFond", "profond_official", "Food"),

  client("Dance N' Attitude", "dance_n_attitude", "Dance"),

  client("Jewelry Police by D", "jewelry_by_d.lb", "Retail"),
];
