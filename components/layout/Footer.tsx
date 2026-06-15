import { SITE } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/60 px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-[family-name:var(--font-syne)] text-sm font-semibold text-zinc-400">
          {SITE.name}
        </p>
        <p className="text-xs text-zinc-600">
          &copy; {year} {SITE.name}. All rights reserved.
        </p>
        <p className="text-xs text-zinc-600">Beirut, Lebanon · Worldwide</p>
      </div>
    </footer>
  );
}
