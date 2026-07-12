import { ArrowUpRight } from 'lucide-react'
import Button from '../components/Button'
import { CS2Plate, EnginePlate } from '../components/Plate'
import { Headline, Overline, Reveal } from '../components/Typo'
import { projects } from '../lib/content'

const PLATES = {
  cs2: CS2Plate,
  engine: EnginePlate,
}

/**
 * Work — two projects, each given a full spread. The plate alternates sides
 * so the eye crosses the page rather than running down a column.
 */
export default function Work() {
  return (
    <section id="work" className="relative border-t border-charcoal/15 py-20 md:py-32">
      <div className="mx-auto max-w-[1600px] px-8 md:px-16">
        {/* Section masthead */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <Reveal>
              <Overline>Selected Work</Overline>
              <Headline
                parts={[{ text: 'Two things' }, { text: 'built', italic: false }, { text: 'properly.', italic: true }]}
                className="mt-8 text-4xl md:mt-10 md:text-5xl lg:text-6xl"
              />
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-8 md:self-end">
            <Reveal delay={0.15}>
              <p className="font-sans text-base leading-relaxed text-warmgrey">
                A research pipeline that reports a null result honestly, and a multi-agent system
                that writes and repairs its own code. Both are open source and documented.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Spreads */}
        <div className="mt-20 md:mt-32">
          {projects.map((p, i) => {
            const Plate = PLATES[p.id]
            const flip = i % 2 === 1 // second project mirrors the first

            return (
              <article
                key={p.id}
                className="grid grid-cols-1 gap-12 border-t border-charcoal/15 pt-12 md:grid-cols-12 md:gap-12 md:pt-20 [&:not(:first-child)]:mt-20 md:[&:not(:first-child)]:mt-32"
              >
                {/* Plate */}
                <div
                  className={`md:col-span-5 ${
                    flip ? 'md:order-2 md:col-start-8' : 'md:order-1 md:col-start-1'
                  }`}
                >
                  <Reveal>
                    <Plate />
                  </Reveal>
                </div>

                {/* Copy */}
                <div
                  className={`md:col-span-6 ${
                    flip ? 'md:order-1 md:col-start-1' : 'md:order-2 md:col-start-7'
                  }`}
                >
                  <Reveal delay={0.1}>
                    <div className="flex items-center gap-6">
                      <span className="font-display text-5xl text-charcoal/15 md:text-6xl">
                        {p.index}
                      </span>
                      <span className="h-px w-8 bg-charcoal/30 md:w-12" />
                      <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-warmgrey">
                        {p.kicker}
                      </span>
                    </div>

                    <h3 className="mt-8 font-display text-3xl leading-[1.05] tracking-tight md:text-4xl lg:text-5xl">
                      {p.title} <em className="text-gold italic">{p.titleItalic}</em>
                    </h3>

                    <p className="mt-8 border-l border-gold pl-6 font-display text-lg leading-relaxed text-charcoal italic md:text-xl">
                      {p.thesis}
                    </p>

                    <div className="mt-8 space-y-6">
                      {p.body.map((para, j) => (
                        <p
                          key={j}
                          className="font-sans text-base leading-relaxed text-warmgrey md:text-lg"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </Reveal>

                  {/* Metrics ledger (CS2 only) */}
                  {p.metrics && (
                    <Reveal delay={0.15}>
                      <dl className="mt-12 grid grid-cols-2 gap-px border border-charcoal/15 bg-charcoal/15 md:grid-cols-4">
                        {p.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="group bg-alabaster p-6 transition-colors duration-700 hover:bg-taupe/40"
                          >
                            <dd className="font-display text-3xl transition-colors duration-500 group-hover:text-gold md:text-4xl">
                              {m.value}
                            </dd>
                            <dt className="mt-2 font-sans text-[10px] uppercase tracking-[0.2em] text-warmgrey">
                              {m.label}
                            </dt>
                          </div>
                        ))}
                      </dl>
                    </Reveal>
                  )}

                  {/* Pipeline ledger (engine only) */}
                  {p.pipeline && (
                    <Reveal delay={0.15}>
                      <ol className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-4 border-t border-charcoal/15 pt-8">
                        {p.pipeline.map((stage, k) => (
                          <li key={stage} className="flex items-center gap-3">
                            <span className="group flex items-baseline gap-2">
                              <span className="font-sans text-[10px] text-warmgrey/60">
                                0{k + 1}
                              </span>
                              <span className="font-display text-lg transition-colors duration-500 group-hover:text-gold md:text-xl">
                                {stage}
                              </span>
                            </span>
                            {k < p.pipeline.length - 1 && (
                              <span aria-hidden="true" className="h-px w-6 bg-charcoal/25" />
                            )}
                          </li>
                        ))}
                      </ol>
                    </Reveal>
                  )}

                  <Reveal delay={0.2}>
                    <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="font-sans text-[10px] uppercase tracking-[0.2em] text-warmgrey transition-colors duration-500 hover:text-gold"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="mt-10">
                      <Button as="a" href={p.repo} target="_blank" rel="noreferrer" variant="secondary">
                        View Repository
                        <ArrowUpRight size={14} strokeWidth={1.5} />
                      </Button>
                    </div>
                  </Reveal>
                </div>
              </article>
            )
          })}
        </div>

        {/* Pointer to the rest */}
        <Reveal>
          <div className="mt-20 grid grid-cols-1 items-end gap-8 border-t border-charcoal pt-12 md:mt-32 md:grid-cols-12">
            <div className="md:col-span-6">
              <p className="font-display text-2xl leading-snug md:text-3xl">
                These are two of many. The rest — experiments, engines and things that did not
                work — live <em className="text-gold italic">on GitHub</em>.
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:justify-self-end">
              <Button as="a" href="https://github.com/sachiniiits" target="_blank" rel="noreferrer" variant="primary">
                More on GitHub
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
