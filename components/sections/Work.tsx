"use client";

import { useMemo, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { CLIENTS, NICHES } from "@/lib/constants";

const FILTERS = ["All", ...NICHES] as const;
type Filter = (typeof FILTERS)[number];

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M5 11L11 5M11 5H6M11 5v5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Work() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(
    () => (filter === "All" ? CLIENTS : CLIENTS.filter((c) => c.niche === filter)),
    [filter]
  );

  return (
    <section
      id="work"
      className="relative px-6 py-24 lg:px-8 lg:py-32"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <header className="mb-12 text-center md:mb-16">
            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-blue-400 uppercase">
              Portfolio
            </p>
            <h2
              id="work-heading"
              className="font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              Selected Work
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              A selection of the accounts I&apos;ve grown and managed — coaches, clinicians,
              kitchens and brands across Lebanon and beyond.
            </p>
          </header>
        </Reveal>

        <Reveal delay={100}>
          <div
            className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            role="group"
            aria-label="Filter work by niche"
          >
            {FILTERS.map((option) => {
              const active = filter === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFilter(option)}
                  aria-pressed={active}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 sm:text-sm ${
                    active
                      ? "border-blue-500/40 bg-blue-500/15 text-blue-300"
                      : "border-zinc-800 bg-zinc-900/40 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((client, index) => (
            <li key={client.handle}>
              <Reveal delay={Math.min(index, 5) * 60} className="h-full">
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-7"
                >
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <div className="relative z-10 mb-8 flex items-start justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-800/50 px-3 py-1 text-[10px] font-semibold tracking-[0.15em] text-zinc-400 uppercase">
                      <span
                        className="h-1 w-1 rounded-full bg-blue-400"
                        aria-hidden="true"
                      />
                      {client.niche}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-800 text-zinc-600 transition-all duration-300 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 group-hover:text-blue-400">
                      <ArrowIcon />
                    </span>
                  </div>

                  <div className="relative z-10 mt-auto">
                    <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold leading-snug text-zinc-50 sm:text-xl">
                      {client.name}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-500 transition-colors duration-300 group-hover:text-blue-400">
                      @{client.handle}
                    </p>
                  </div>

                  <span
                    className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-500 group-hover:w-full"
                    aria-hidden="true"
                  />
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <p className="mt-12 text-center text-sm text-zinc-600">
            Showing {CLIENTS.length} of 100+ accounts managed to date.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
