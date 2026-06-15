import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <section
      id="work"
      className="relative px-6 py-24 lg:px-8 lg:py-32"
      aria-labelledby="stats-heading"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 text-center md:mb-20">
          <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-blue-400 uppercase">
            Track Record
          </p>
          <h2
            id="stats-heading"
            className="font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Numbers That Speak
          </h2>
        </header>

        <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
          {STATS.map((stat, index) => (
            <article
              key={stat.label}
              className="card-hover group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-8 text-center sm:p-10 lg:p-12"
            >
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />
              <p className="stat-number font-[family-name:var(--font-syne)] text-5xl font-extrabold tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm font-medium tracking-wide text-zinc-400 sm:text-base">
                {stat.label}
              </p>
              <span
                className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
                style={{ transitionDelay: `${index * 50}ms` }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
