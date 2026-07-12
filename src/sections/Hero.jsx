import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Button from '../components/Button'
import { Overline, VerticalLabel } from '../components/Typo'
import { profile } from '../lib/content'

/**
 * Hero — bottom-left aligned, deliberately empty above. The name is set at
 * the largest scale on the page; the standfirst is held to a narrow measure
 * and pushed to column 8 so the composition never resolves to a 50/50 split.
 */
export default function Hero() {
  const reduced = useReducedMotion()

  const rise = (delay) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] },
        }

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden pt-32 pb-16 md:pb-24"
    >
      <VerticalLabel className="absolute top-1/2 right-8 -translate-y-1/2">
        Portfolio / Vol. 01 — MMXXVI
      </VerticalLabel>

      <div className="relative mx-auto w-full max-w-[1600px] px-8 md:px-16">
        <motion.div {...rise(0.1)}>
          <Overline>{profile.role}</Overline>
        </motion.div>

        <motion.h1
          {...rise(0.25)}
          className="mt-8 max-w-[16ch] font-display text-5xl leading-[0.92] tracking-tight md:mt-10 md:text-7xl lg:text-8xl xl:text-9xl"
        >
          {profile.headline.map((p, i) => (
            <span key={i}>
              {p.italic ? <em className="text-gold italic">{p.text}</em> : p.text}
              {i < profile.headline.length - 1 ? ' ' : ''}
            </span>
          ))}
        </motion.h1>

        {/* Standfirst pushed right and down — the asymmetry is the point. */}
        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-12 md:gap-8">
          <motion.div {...rise(0.45)} className="md:col-span-5 md:col-start-1">
            <div className="flex items-baseline gap-6">
              <span className="font-display text-4xl leading-none md:text-5xl">
                {profile.first}
                <br />
                <span className="text-warmgrey">{profile.last}</span>
              </span>
            </div>
            <p className="mt-6 font-sans text-[10px] uppercase tracking-[0.25em] text-warmgrey">
              {profile.institute}
            </p>
          </motion.div>

          <motion.div {...rise(0.6)} className="md:col-span-5 md:col-start-8">
            <p className="border-t border-charcoal pt-6 font-sans text-base leading-relaxed text-warmgrey md:text-lg">
              {profile.standfirst}
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button as="a" href="#work" variant="primary">
                Selected Work
              </Button>
              <Button as="a" href="#contact" variant="secondary">
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.a
          {...rise(0.9)}
          href="#about"
          aria-label="Scroll to about"
          className="mt-16 inline-flex items-center gap-4 text-warmgrey transition-colors duration-500 hover:text-gold md:mt-24"
        >
          <span className="h-px w-12 bg-current" />
          <ArrowDown size={14} strokeWidth={1} />
          <span className="font-sans text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        </motion.a>
      </div>
    </section>
  )
}
