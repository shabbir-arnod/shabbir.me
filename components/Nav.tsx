"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-lg italic tracking-tight text-foreground">
          Shabbir Arnod Wala
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-foreground transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full border border-border px-4 py-1.5 text-sm text-foreground hover:border-accent hover:text-accent transition-colors"
        >
          Get in touch
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className="block h-px w-6 bg-foreground" />
          <span className="block h-px w-6 bg-foreground" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
