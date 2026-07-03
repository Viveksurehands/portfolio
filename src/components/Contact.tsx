import Reveal from "./Reveal";

const LINKS = [
  {
    label: "EMAIL",
    value: "binkamvivek@gmail.com",
    href: "mailto:binkamvivek@gmail.com",
  },
  {
    label: "GITHUB",
    value: "github.com/binkamvivek",
    href: "https://github.com/binkamvivek",
  },
  {
    label: "LINKEDIN",
    value: "in/vivek-binkam",
    href: "https://www.linkedin.com/in/vivek-binkam-9a1547418/",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-10 py-28 md:py-40 border-t border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[120px_1fr] gap-8 md:gap-16">
          <Reveal as="div">
            <span className="font-mono text-xs tracking-widest text-[var(--accent-dim)]">
              05A — CONTACT
            </span>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-display text-3xl md:text-6xl leading-[1.05] mb-10 max-w-2xl">
                Let&apos;s build, design, or shoot something.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col">
                {LINKS.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline justify-between py-5 border-t border-[var(--border)] last:border-b"
                  >
                    <span className="font-mono text-[11px] tracking-widest text-[var(--accent-dim)]">
                      {l.label}
                    </span>
                    <span className="font-display text-lg md:text-2xl text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                      {l.value}
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <Reveal delay={0.2}>
        <div className="max-w-6xl mx-auto mt-20 flex flex-col sm:flex-row justify-between gap-4 font-mono text-[11px] tracking-widest text-[var(--text-muted)]">
          <span>© {new Date().getFullYear()} VIVEK BINKAM</span>
          <span>DEVELOPED IN NEXT.JS — SHOT ON AVAILABLE LIGHT</span>
        </div>
      </Reveal>
    </section>
  );
}
