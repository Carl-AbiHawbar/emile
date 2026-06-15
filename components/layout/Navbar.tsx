"use client";

import { useEffect, useState } from "react";
import { LinkButton } from "@/components/ui/Button";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="font-[family-name:var(--font-syne)] text-lg font-bold tracking-tight text-zinc-50 transition-opacity hover:opacity-80"
        >
          {SITE.name}
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link text-sm text-zinc-400 transition-colors hover:text-zinc-50">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <LinkButton href="#contact" variant="primary" className="!px-5 !py-2.5 !text-xs">
              Hire Me
            </LinkButton>
          </li>
        </ul>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-0.5 w-6 bg-zinc-50 transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-zinc-50 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-zinc-50 transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-zinc-950/98 backdrop-blur-xl transition-all duration-500 md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="font-[family-name:var(--font-syne)] text-3xl font-bold text-zinc-50 transition-colors hover:text-blue-400"
          >
            {link.label}
          </a>
        ))}
        <LinkButton href="#contact" variant="primary" onClick={closeMenu}>
          Hire Me
        </LinkButton>
      </div>
    </header>
  );
}
