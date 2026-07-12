import { ArrowUpRight } from 'lucide-react'
import Button from '../components/Button'
import { Overline, Reveal, VerticalLabel } from '../components/Typo'
import { profile } from '../lib/content'

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'GitHub', value: profile.githubHandle, href: profile.github },
  { label: 'LinkedIn', value: profile.linkedinHandle, href: profile.linkedin },
]

/**
 * Contact + colophon. Closes the page on charcoal, mirroring the Experience
 * section so the composition ends where its weight is.
 */
export default function Contact() {
  return (
    <footer id="contact" className="relative bg-charcoal pt-20 pb-10 text-alabaster md:pt-32">
      <VerticalLabel dark className="absolute top-32 right-6">
        Fin — Vol. 01
      </VerticalLabel>

      <div className="mx-auto max-w-[1600px] px-8 md:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <Reveal>
              <Overline dark>Contact</Overline>
              <h2 className="mt-8 font-display text-4xl leading-[0.95] tracking-tight md:mt-10 md:text-6xl lg:text-7xl">
                Let’s build
                <br />
                something <em className="text-gold italic">considered.</em>
              </h2>
              <p className="mt-8 max-w-md font-sans text-base leading-relaxed text-taupe/70">
                Open to internships, research collaborations, and work where the engineering has to
                be right rather than merely finished.
              </p>

              <div className="mt-10">
                <Button as="a" href={`mailto:${profile.email}`} variant="inverse">
                  Write to me
                  <ArrowUpRight size={14} strokeWidth={1.5} />
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Channels */}
          <div className="md:col-span-5 md:col-start-8">
            <Reveal delay={0.15}>
              <ul>
                {channels.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noreferrer"
                      className="group flex items-baseline justify-between gap-6 border-t border-alabaster/20 py-6 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-gold md:py-8"
                    >
                      <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-taupe/50">
                        {c.label}
                      </span>
                      <span className="flex items-center gap-3 font-display text-lg break-all transition-colors duration-500 group-hover:text-gold md:text-xl">
                        {c.value}
                        <ArrowUpRight
                          size={16}
                          strokeWidth={1}
                          className="shrink-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Colophon */}
        <div className="mt-20 flex flex-col gap-6 border-t border-alabaster/20 pt-8 md:mt-32 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-[10px] tracking-[0.25em] text-taupe/40 uppercase">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="font-sans text-[10px] tracking-[0.25em] text-taupe/40 uppercase">
            {profile.location}
          </p>
          <p className="font-sans text-[10px] tracking-[0.25em] text-taupe/40 uppercase">
            Set in Playfair Display &amp; Inter
          </p>
        </div>
      </div>
    </footer>
  )
}
