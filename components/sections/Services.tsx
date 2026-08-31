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
          <header className="mb-12 text-center md:mb-16">
            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-blue-400 uppercase">
              Services
            </p>
            <h2
              id="services-heading"
              className="font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              What I Do
            </h2>
          </header>
        </Reveal>

        <ul className="mx-auto grid max-w-2xl gap-6">
          {SERVICES.map((service, index) => (
            <li key={service.title}>
              <Reveal delay={index * 80}>
                <article className="card-hover group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-10 text-center sm:p-12">
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <h3 className="relative z-10 font-[family-name:var(--font-syne)] text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl md:text-4xl">
                    {service.title}
                  </h3>
                  <p className="relative z-10 mx-auto mt-4 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">
                    {service.description}
                  </p>
                  <span
                    className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-500 group-hover:w-full"
                    aria-hidden="true"
                  />
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
