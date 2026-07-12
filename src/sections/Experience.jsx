import { ArrowUpRight } from 'lucide-react'
import Button from '../components/Button'
import { JanarthamPlate } from '../components/Plate'
import { Headline, Overline, Reveal, VerticalLabel } from '../components/Typo'
import { experience } from '../lib/content'

/**
 * Experience — the one dark section on the page. Inverted palette, so the
 * work sits in relief against the alabaster either side of it.
 */
export default function Experience() {
  return (
    <section id="experience" className="relative bg-charcoal py-20 text-alabaster md:py-32">
      <VerticalLabel dark className="absolute top-32 left-6">
        Experience / 2026
      </VerticalLabel>

      {experience.map((job) => (
        <div key={job.id} className="mx-auto max-w-[1600px] px-8 md:px-16">
          {/* Masthead */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5">
              <Reveal>
                <Overline dark>Experience</Overline>
                <Headline
                  dark
                  parts={[{ text: 'Janartham' }, { text: 'Foundation', italic: true }]}
                  className="mt-8 text-4xl md:mt-10 md:text-5xl lg:text-6xl"
                />
                <p className="mt-6 font-sans text-[10px] uppercase tracking-[0.25em] text-taupe/60">
                  {job.orgNote}
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-5 md:col-start-8">
              <Reveal delay={0.15}>
                <dl className="grid grid-cols-2 gap-6">
                  <div className="border-t border-alabaster/20 pt-5">
                    <dt className="font-sans text-[10px] uppercase tracking-[0.25em] text-taupe/50">
                      Role
                    </dt>
                    <dd className="mt-2 font-display text-lg text-alabaster">{job.role}</dd>
                  </div>
                  <div className="border-t border-alabaster/20 pt-5">
                    <dt className="font-sans text-[10px] uppercase tracking-[0.25em] text-taupe/50">
                      Tenure
                    </dt>
                    <dd className="mt-2 font-display text-lg text-alabaster">{job.period}</dd>
                  </div>
                </dl>
                <p className="mt-8 font-sans text-base leading-relaxed text-taupe/80">
                  {job.context}
                </p>
              </Reveal>
            </div>
          </div>

          {/* Plate + narrative */}
          <div className="mt-16 grid grid-cols-1 gap-12 md:mt-24 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <Reveal>
                <JanarthamPlate />
              </Reveal>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <Reveal delay={0.1}>
                <p className="font-display text-2xl leading-snug text-alabaster md:text-3xl">
                  {job.summary}
                </p>
              </Reveal>

              <div className="mt-12 md:mt-16">
                {job.contributions.map((c, i) => (
                  <Reveal key={c.title} delay={0.1 + i * 0.08}>
                    <article className="group border-t border-alabaster/20 py-8 transition-colors duration-700 hover:border-gold md:py-10">
                      <div className="flex items-baseline gap-6">
                        <span className="font-sans text-[10px] tracking-[0.25em] text-taupe/40 transition-colors duration-500 group-hover:text-gold">
                          0{i + 1}
                        </span>
                        <div>
                          <h3 className="font-display text-xl transition-colors duration-500 group-hover:text-gold md:text-2xl">
                            {c.title}
                          </h3>
                          <p className="mt-4 font-sans text-base leading-relaxed text-taupe/70">
                            {c.body}
                          </p>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>

              {/* Stack */}
              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-alabaster/20 pt-8">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="font-sans text-[10px] uppercase tracking-[0.2em] text-taupe/60 transition-colors duration-500 hover:text-gold"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Certificate quote — left rule turns gold and the indent grows on hover */}
          <Reveal delay={0.1}>
            <figure className="group mt-20 border-l border-alabaster/25 pl-6 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-gold hover:pl-10 md:mt-28 md:max-w-3xl md:pl-8">
              <blockquote className="font-display text-xl leading-relaxed text-alabaster italic md:text-2xl">
                “{job.testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 font-sans text-[10px] uppercase tracking-[0.25em] text-taupe/60">
                <span className="transition-colors duration-500 group-hover:text-gold">
                  {job.testimonial.author}
                </span>
                <span className="mx-3 text-taupe/30">/</span>
                {job.testimonial.title}
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center md:mt-16">
              <Button as="a" href={job.site} target="_blank" rel="noreferrer" variant="inverse">
                Visit {job.siteLabel}
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </Button>
              <Button
                as="a"
                href={job.certificate}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
              >
                Certificate of Experience
              </Button>
            </div>
          </Reveal>
        </div>
      ))}
    </section>
  )
}
