"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger in milliseconds, applied once the element enters the viewport. */
  delay?: number;
  className?: string;
};

const VISIBLE = "reveal-visible";

export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // The visible class is applied straight to the node rather than through
    // component state: revealing is a purely visual concern, so it should not
    // cost a re-render per card, nor sit behind React's scheduler.
    const show = () => node.classList.add(VISIBLE);

    // `prefers-reduced-motion` is handled in globals.css, which pins .reveal to
    // its visible state — no JS branch needed for it here.
    if (typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
          clearTimeout(fallback);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    // Fail-safe: content must never depend on the animation succeeding. If the
    // observer never delivers (backgrounded or throttled tabs freeze the frame
    // lifecycle that drives it), reveal anyway rather than leave a blank page.
    const fallback = setTimeout(() => {
      show();
      observer.disconnect();
    }, 1500);

    observer.observe(node);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
