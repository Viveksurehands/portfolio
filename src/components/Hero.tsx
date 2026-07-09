"use client";

import SplitFlap from "./SplitFlap";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 overflow-hidden"
    >
      {/* faint frame corners, like a viewfinder */}
      <div className="pointer-events-none absolute inset-6 md:inset-10 border border-[var(--border)]" />
      <div className="pointer-events-none absolute top-6 left-6 md:top-10 md:left-10 w-4 h-4 border-t border-l border-[var(--accent-dim)]" />
      <div className="pointer-events-none absolute top-6 right-6 md:top-10 md:right-10 w-4 h-4 border-t border-r border-[var(--accent-dim)]" />
      <div className="pointer-events-none absolute bottom-6 left-6 md:bottom-10 md:left-10 w-4 h-4 border-b border-l border-[var(--accent-dim)]" />
      <div className="pointer-events-none absolute bottom-6 right-6 md:bottom-10 md:right-10 w-4 h-4 border-b border-r border-[var(--accent-dim)]" />

      <div className="max-w-6xl mx-auto w-full">
        <p className="font-mono text-[11px] md:text-xs tracking-[0.3em] text-[var(--accent)] mb-6">
          {"// CSE'29 · DEVELOPER · VISUAL DESIGNER"}
        </p>

        <h1 className="font-display leading-[0.95] text-[15vw] md:text-[8.5vw] lg:text-[7.5rem] tracking-tight text-[var(--text)]">
          <SplitFlap text="VIVEK" delay={150} />
          <br />
          <span className="text-[var(--text-muted)]">
            <SplitFlap text="BINKAM" delay={450} />
          </span>
        </h1>

        <div className="mt-8 md:mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-t border-[var(--border)] pt-6">
          <p className="font-body text-base md:text-lg text-[var(--text-muted)] max-w-md">
            Second-year Computer Science student building practical software,
            with a photographer&apos;s eye for detail.
          </p>
          <div className="font-mono text-[11px] tracking-widest text-[var(--text-muted)] flex gap-6">
            <span>ISO&nbsp;— PYTHON</span>
            <span>ƒ/— C</span>
            <span>SHUTTER&nbsp;— WEB</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] text-[var(--text-muted)] animate-pulse">
        SCROLL
      </div>
    </section>
  );
}
