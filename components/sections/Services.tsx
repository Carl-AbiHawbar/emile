import Reveal from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section
      id="services"
      className="relative px-6 py-24 lg:px-8 lg:py-32"
      aria-labelledby="services-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <header className="mb-16 md:mb-20">
            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-blue-400 uppercase">
              Services
            </p>
            <h2
              id="services-heading"
              className="font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              What I Do
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              End-to-end Instagram partnership — from the content plan to the comments
              section.
            </p>
          </header>
        </Reveal>

        <ol className="grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service, index) => (
            <li key={service.title}>
              <Reveal delay={index * 80} className="h-full">
                <article className="card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-8">
                  <p
                    className="stat-number mb-6 font-[family-name:var(--font-syne)] text-sm font-bold text-zinc-700 transition-colors duration-300 group-hover:text-blue-500/60"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold leading-snug text-zinc-100 sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
