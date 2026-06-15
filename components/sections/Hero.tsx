import { LinkButton } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 pb-16 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <div
        className="pointer-events-none absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
        style={{ animation: "pulse-glow 6s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 -right-32 h-80 w-80 rounded-full bg-blue-600/8 blur-3xl"
        style={{ animation: "pulse-glow 8s ease-in-out infinite 2s" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="opacity-0-start animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-xs font-medium tracking-widest text-zinc-400 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
          Available for projects
        </p>

        <h1
          id="hero-heading"
          className="opacity-0-start animate-fade-up animation-delay-100 font-[family-name:var(--font-syne)] text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          <span className="gradient-text">{SITE.tagline}</span>
        </h1>

        <p className="opacity-0-start animate-fade-up animation-delay-200 mx-auto mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg md:text-xl">
          {SITE.subheadline}
        </p>

        <div className="opacity-0-start animate-fade-up animation-delay-300 mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <LinkButton href="#work" variant="primary">
            View Work
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="transition-transform group-hover:translate-y-0.5"
            >
              <path
                d="M8 3v10M8 13l4-4M8 13L4 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </LinkButton>
          <LinkButton href="#contact" variant="outline">
            Let&apos;s Talk
          </LinkButton>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0-start animate-fade-in animation-delay-500"
        aria-hidden="true"
      >
        <div
          className="flex flex-col items-center gap-2 text-zinc-600"
          style={{ animation: "float 3s ease-in-out infinite" }}
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-zinc-600 to-transparent" />
        </div>
      </div>
    </section>
  );
}
