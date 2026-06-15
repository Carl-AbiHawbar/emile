import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Emile Chaanine — Digital Excellence",
  description:
    "Emile Chaanine — Based in Beirut, Lebanon. Crafting digital excellence for clients worldwide. 4+ years experience, 100+ happy clients.",
  keywords: [
    "Emile Chaanine",
    "digital marketing",
    "Instagram",
    "freelance",
    "Beirut",
    "Lebanon",
  ],
  openGraph: {
    title: "Emile Chaanine — Crafting Digital Excellence",
    description:
      "Transforming ideas into digital experiences. Available worldwide for remote work & freelance opportunities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} h-full`}>
      <body className="min-h-full antialiased bg-zinc-950 text-zinc-50">
        {children}
      </body>
    </html>
  );
}
