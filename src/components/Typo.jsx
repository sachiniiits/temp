import { motion, useReducedMotion } from 'framer-motion'

/**
 * Shared typographic and motion atoms.
 */

/** The tiny uppercase overline, optionally preceded by a decorative rule. */
export function Overline({ children, rule = true, dark = false, className = '' }) {
  return (
    <div className={`flex items-center gap-4 md:gap-6 ${className}`}>
      {rule && (
        <span
          aria-hidden="true"
          className={`h-px w-8 md:w-12 ${dark ? 'bg-alabaster/40' : 'bg-charcoal'}`}
        />
      )}
      <span
        className={`font-sans text-[10px] font-medium uppercase tracking-[0.3em] md:text-xs ${
          dark ? 'text-taupe/70' : 'text-warmgrey'
        }`}
      >
        {children}
      </span>
    </div>
  )
}

/** The vertical spine label pinned to the edge of a section. */
export function VerticalLabel({ children, dark = false, className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`vertical-rl hidden font-sans text-[10px] uppercase tracking-[0.3em] lg:block ${
        dark ? 'text-taupe/40' : 'text-warmgrey/60'
      } ${className}`}
    >
      {children}
    </span>
  )
}

/**
 * Section headline. Words flagged `italic` render in Playfair italic gold —
 * the "spoken cadence" the design system asks for.
 */
export function Headline({ parts, className = '', dark = false }) {
  return (
    <h2
      className={`font-display leading-[0.95] tracking-tight ${
        dark ? 'text-alabaster' : 'text-charcoal'
      } ${className}`}
    >
      {parts.map((p, i) => (
        <span key={i}>
          {p.italic ? <em className="not-italic text-gold italic">{p.text}</em> : p.text}
          {i < parts.length - 1 ? ' ' : ''}
        </span>
      ))}
    </h2>
  )
}

/**
 * Scroll reveal. Slow, upward, once. Collapses to a plain div when the
 * user has asked for reduced motion.
 */
export function Reveal({ children, delay = 0, y = 32, className = '' }) {
  const reduced = useReducedMotion()

  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
