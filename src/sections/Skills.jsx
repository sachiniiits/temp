import { Headline, Overline, Reveal } from '../components/Typo'
import { skills } from '../lib/content'

/**
 * Skills — set as an index, not a badge cloud. Numbered rows, hairline rules,
 * the group name in Playfair and the items as wide-tracked sans. The whole row
 * warms to gold on hover, which is the only decoration it gets.
 */
export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-charcoal/15 py-20 md:py-32">
      <div className="mx-auto max-w-[1600px] px-8 md:px-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <Overline>Capabilities</Overline>
              <Headline
                parts={[{ text: 'The' }, { text: 'toolkit,', italic: true }, { text: 'indexed.' }]}
                className="mt-8 text-4xl md:mt-10 md:text-5xl lg:text-6xl"
              />
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-8 md:self-end">
            <Reveal delay={0.15}>
              <p className="font-sans text-base leading-relaxed text-warmgrey">
                Drawn from what has actually been shipped — the platform, the pipelines, and the
                coursework underneath both. Ordered by how often it is reached for.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.05}>
              <div className="group grid grid-cols-1 gap-6 border-t border-charcoal/15 py-8 transition-colors duration-700 hover:border-gold md:grid-cols-12 md:gap-8 md:py-10">
                <div className="flex items-baseline gap-5 md:col-span-4">
                  <span className="font-sans text-[10px] tracking-[0.25em] text-warmgrey/50 transition-colors duration-500 group-hover:text-gold">
                    {group.n}
                  </span>
                  <h3 className="font-display text-2xl transition-colors duration-500 group-hover:text-gold md:text-3xl">
                    {group.group}
                  </h3>
                </div>

                <ul className="flex flex-wrap gap-x-6 gap-y-3 md:col-span-7 md:col-start-6 md:items-baseline">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="font-sans text-xs uppercase tracking-[0.2em] text-warmgrey transition-colors duration-500 hover:text-charcoal"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-charcoal/15" />
        </div>
      </div>
    </section>
  )
}
