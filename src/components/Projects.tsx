import Reveal from "./Reveal";

const PROJECTS = [
  {
    frame: "27A",
    name: "FirstSolve",
    tag: "FEATURED · IN DEVELOPMENT",
    desc: "A platform where companies post real problem statements instead of job listings. Anyone can submit a working solution, and whoever solves it first earns the payout — like a bounty, not a freelance bidding war where only one of many applicants gets picked.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    href: "https://github.com/binkamvivek",
    cta: "View progress on GitHub",
  },
  {
    frame: "28A",
    name: "Your Next Project",
    tag: "PRACTICE",
    desc: "Swap this in for a DSA visualizer, a CLI tool, or any practice project you've pushed to GitHub — a one-line description of the problem it solves works best.",
    stack: ["Python", "C"],
    href: "https://github.com/binkamvivek",
    cta: "See repo",
  },
  {
    frame: "29A",
    name: "Photo & Layout Work",
    tag: "DESIGN",
    desc: "A slot for a design or editorial photography project — link to a Behance/Instagram set or a case study page if you build one.",
    stack: ["Lightroom", "Figma"],
    href: "https://www.linkedin.com/in/vivek-binkam-9a1547418/",
    cta: "View on LinkedIn",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-6 md:px-10 py-28 md:py-36 border-t border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[120px_1fr] gap-8 md:gap-16">
          <Reveal as="div">
            <span className="font-mono text-xs tracking-widest text-[var(--accent-dim)]">
              04A — PROJECTS
            </span>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl leading-tight mb-4 max-w-2xl">
                Contact sheet.
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="font-body text-[var(--text-muted)] max-w-xl mb-12">
                A few frames from the roll — one in active development, the
                rest are yours to fill in.
              </p>
            </Reveal>

            <div className="flex flex-col gap-px bg-[var(--border)]">
              {PROJECTS.map((p, i) => (
                <Reveal key={p.frame} delay={i * 0.1} className="bg-[var(--bg)]">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid sm:grid-cols-[80px_1fr] gap-3 sm:gap-8 items-start p-6 md:p-8 bg-[var(--bg)] hover:bg-[var(--surface)] transition-colors"
                  >
                    <span className="font-mono text-xs text-[var(--accent-dim)]">
                      {p.frame}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-3">
                        <h3 className="font-display text-xl md:text-2xl text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                          {p.name}
                        </h3>
                        <span className="font-mono text-[10px] tracking-widest text-[var(--accent)] border border-[var(--accent-dim)] px-2 py-1">
                          {p.tag}
                        </span>
                      </div>
                      <p className="font-body text-sm md:text-base text-[var(--text-muted)] max-w-2xl leading-relaxed mb-4">
                        {p.desc}
                      </p>
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex flex-wrap gap-2">
                          {p.stack.map((s) => (
                            <span
                              key={s}
                              className="font-mono text-[10px] tracking-wider text-[var(--text-muted)] border border-[var(--border)] px-2 py-1"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                        <span className="font-mono text-[11px] text-[var(--accent)] group-hover:underline underline-offset-4">
                          {p.cta} →
                        </span>
                      </div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
