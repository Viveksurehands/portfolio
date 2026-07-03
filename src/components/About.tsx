import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[120px_1fr] gap-8 md:gap-16">
          <Reveal as="div">
            <span className="font-mono text-xs tracking-widest text-[var(--accent-dim)]">
              01A — ABOUT
            </span>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl leading-tight mb-8 max-w-2xl">
                Code and composition, same eye for detail.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="font-body text-lg md:text-xl text-[var(--text-muted)] max-w-2xl leading-relaxed mb-4">
                I spend my time solving data structure problems in Python and
                C, and shipping practice projects to GitHub — alongside
                shooting editorial photography and designing digital layouts.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="font-body text-lg md:text-xl text-[var(--text-muted)] max-w-2xl leading-relaxed">
                Merging technical logic with a creative eye helps me catch the
                small details, understand how a project feels to use, and
                solve problems differently. Always open to connecting on
                open-source work, design concepts, or photography.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
