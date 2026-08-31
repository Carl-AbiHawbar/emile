import Reveal from "@/components/ui/Reveal";
import { PROFILE } from "@/lib/constants";

const icons: Record<string, React.ReactNode> = {
  Age: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Location: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  Availability: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function Profile() {
  return (
    <section
      id="about"
      className="relative px-6 py-24 lg:px-8 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
        <header className="mb-16 md:mb-20">
          <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-blue-400 uppercase">
            Profile
          </p>
          <h2
            id="about-heading"
            className="font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Who I Am
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            A driven digital professional based in the heart of Beirut, delivering
            premium results to clients across the globe.
          </p>
        </header>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {PROFILE.map((item, index) => (
            <Reveal key={item.label} delay={index * 90} className="h-full">
            <article
              className="card-hover group flex h-full flex-col rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-8"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-700/50 bg-zinc-800/50 text-blue-400 transition-colors duration-300 group-hover:border-blue-500/30 group-hover:bg-blue-500/10">
                {icons[item.label]}
              </div>
              <h3 className="mb-2 text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">
                {item.label}
              </h3>
              <p className="font-[family-name:var(--font-syne)] text-xl font-semibold leading-snug text-zinc-100 sm:text-2xl">
                {item.value}
              </p>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
