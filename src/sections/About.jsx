import { Headline, Overline, Reveal } from '../components/Typo'
import { profile } from '../lib/content'

/**
 * About — drop-capped editorial intro at column 6, facts held in a
 * lined ledger on the left. Content starts below its own label, never beside it.
 */
export default function About() {
  return (
    <section id="about" className="relative border-t border-charcoal/15 py-20 md:py-32">
      <div className="mx-auto max-w-[1600px] px-8 md:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* Ledger */}
          <div className="md:col-span-4">
            <Reveal>
              <Overline>The Profile</Overline>

              <dl className="mt-10 md:mt-16">
                {profile.facts.map((f) => (
                  <div
                    key={f.label}
                    className="group flex items-baseline justify-between gap-6 border-t border-charcoal/15 py-5 transition-colors duration-700 hover:border-gold"
                  >
                    <dt className="font-sans text-[10px] uppercase tracking-[0.25em] text-warmgrey">
                      {f.label}
                    </dt>
                    <dd className="font-display text-lg transition-colors duration-500 group-hover:text-gold md:text-xl">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Essay */}
          <div className="md:col-span-7 md:col-start-6">
            <Reveal delay={0.15}>
              <Headline
                parts={[
                  { text: 'Two disciplines,' },
                  { text: 'one', italic: false },
                  { text: 'craft.', italic: true },
                ]}
                className="text-4xl md:text-5xl lg:text-6xl"
              />
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-10 space-y-8 md:mt-12">
                {profile.about.map((para, i) => (
                  <p
                    key={i}
                    className={`font-sans text-base leading-relaxed text-warmgrey md:text-lg ${
                      i === 0 ? 'dropcap' : ''
                    }`}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
