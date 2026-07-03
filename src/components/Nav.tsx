"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { id: "about", frame: "01A" },
  { id: "skills", frame: "02A" },
  { id: "experience", frame: "03A" },
  { id: "projects", frame: "04A" },
  { id: "contact", frame: "05A" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-colors duration-300 ${
        scrolled ? "bg-[var(--bg)]/90 backdrop-blur border-b border-[var(--border)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 h-16">
        <button
          onClick={() => go("top")}
          className="font-display text-sm tracking-[0.2em] text-[var(--text)]"
        >
          VB<span className="text-[var(--accent)]">/</span>DEV
        </button>

        <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] tracking-wider text-[var(--text-muted)]">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="hover:text-[var(--accent)] transition-colors"
            >
              <span className="text-[var(--accent-dim)] mr-1.5">{l.frame}</span>
              {l.id.toUpperCase()}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden font-mono text-[11px] text-[var(--text-muted)] border border-[var(--border)] px-3 py-1.5"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-[var(--border)] bg-[var(--bg)] px-6 py-4 flex flex-col gap-4 font-mono text-xs tracking-wider text-[var(--text-muted)]">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="text-left hover:text-[var(--accent)]"
            >
              <span className="text-[var(--accent-dim)] mr-2">{l.frame}</span>
              {l.id.toUpperCase()}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
