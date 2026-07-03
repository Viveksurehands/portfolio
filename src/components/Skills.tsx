import Reveal from "./Reveal";

const GROUPS = [
  {
    label: "LANGUAGES",
    items: ["Python", "C", "JavaScript", "TypeScript", "SQL"],
  },
  {
    label: "WEB & TOOLS",
    items: ["React", "Next.js", "HTML/CSS", "Git & GitHub", "Linux"],
  },
  {
    label: "VISUAL DESIGN",
    items: ["Photography (Editorial)", "Lightroom", "Photoshop", "Figma"],
  },
  {
    label: "FOUNDATIONS",
    items: ["Data Structures", "Algorithms", "OOP", "DBMS"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative px-6 md:px-10 py-28 md:py-36 border-t border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[120px_1fr] gap-8 md:gap-16">
          <Reveal as="div">
            <span className="font-mono text-xs tracking-widest text-[var(--accent-dim)]">
              02A — SKILLS
            </span>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl leading-tight mb-12 max-w-2xl">
                Tools of the craft.
              </h2>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
              {GROUPS.map((group, gi) => (
                <Reveal key={group.label} delay={gi * 0.08}>
                  <h3 className="font-mono text-[11px] tracking-[0.25em] text-[var(--accent)] mb-4">
                    {group.label}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="font-body text-sm border border-[var(--border)] px-3 py-1.5 text-[var(--text)] hover:border-[var(--accent-dim)] transition-colors"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
