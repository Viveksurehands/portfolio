import Reveal from "./Reveal";

const ITEMS = [
  {
    frame: "24A",
    period: "2023 — 2027",
    title: "B.E./B.Tech, Computer Science Engineering",
    org: "Your University Name Here",
    desc: "Second-year coursework in data structures, algorithms, and systems fundamentals, alongside independent projects outside class.",
    tag: "IN PROGRESS",
  },
  {
    frame: "25A",
    period: "Ongoing",
    title: "Self-Directed Practice & Open Source",
    org: "Personal / GitHub",
    desc: "Working through DSA problems in Python and C, and building small projects end-to-end to learn how real software ships.",
    tag: "ACTIVE",
  },
  {
    frame: "26A",
    period: "Now",
    title: "Open to Opportunities",
    org: "Internships · Open Source · Design & Photography Collabs",
    desc: "Looking to contribute to open-source codebases, join an early team as an intern, or collaborate on design and photography work.",
    tag: "AVAILABLE",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative px-6 md:px-10 py-28 md:py-36 border-t border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[120px_1fr] gap-8 md:gap-16">
          <Reveal as="div">
            <span className="font-mono text-xs tracking-widest text-[var(--accent-dim)]">
              03A — EXPERIENCE
            </span>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl leading-tight mb-12 max-w-2xl">
                Early roll, still developing.
              </h2>
            </Reveal>

            <div className="flex flex-col">
              {ITEMS.map((item, i) => (
                <Reveal key={item.frame} delay={i * 0.1}>
                  <div className="grid sm:grid-cols-[80px_1fr_auto] gap-3 sm:gap-6 items-start py-6 border-t border-[var(--border)] first:border-t-0">
                    <span className="font-mono text-xs text-[var(--accent-dim)]">
                      {item.frame}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
                        <h3 className="font-display text-lg md:text-xl text-[var(--text)]">
                          {item.title}
                        </h3>
                        <span className="font-mono text-[11px] text-[var(--text-muted)]">
                          {item.org}
                        </span>
                      </div>
                      <p className="font-body text-sm md:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex sm:flex-col items-start sm:items-end gap-2 sm:gap-1">
                      <span className="font-mono text-[10px] tracking-widest text-[var(--accent)] border border-[var(--accent-dim)] px-2 py-1">
                        {item.tag}
                      </span>
                      <span className="font-mono text-[11px] text-[var(--text-muted)]">
                        {item.period}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
