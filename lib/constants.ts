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
