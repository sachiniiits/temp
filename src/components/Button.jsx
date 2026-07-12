/**
 * Button — rectangular, uppercase, wide-tracked.
 *
 * `primary` carries the signature move: a gold layer that slides in from
 * the left on hover while the label stays above it on z-10. That requires
 * the two-span structure below, so it lives in one component rather than
 * being re-typed at every call site.
 */

const base =
  'group/btn relative inline-flex items-center justify-center overflow-hidden ' +
  'font-sans text-xs font-medium uppercase tracking-[0.2em] ' +
  'transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ' +
  'disabled:pointer-events-none disabled:opacity-50'

const sizes = {
  sm: 'h-10 px-6',
  md: 'h-12 px-8',
  lg: 'h-14 px-10',
}

export default function Button({
  as = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const Tag = as

  if (variant === 'primary') {
    return (
      <Tag
        className={`${base} ${sizes[size]} bg-charcoal text-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] ${className}`}
        {...props}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 translate-x-[-100%] bg-gold transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover/btn:translate-x-0"
        />
        <span className="relative z-10 flex items-center gap-3">{children}</span>
      </Tag>
    )
  }

  // Primary, inverted for dark sections — charcoal-on-charcoal would vanish.
  if (variant === 'inverse') {
    return (
      <Tag
        className={`${base} ${sizes[size]} bg-alabaster text-charcoal shadow-[0_4px_16px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:text-white ${className}`}
        {...props}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 translate-x-[-100%] bg-gold transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover/btn:translate-x-0"
        />
        <span className="relative z-10 flex items-center gap-3">{children}</span>
      </Tag>
    )
  }

  if (variant === 'secondary') {
    return (
      <Tag
        className={`${base} ${sizes[size]} border border-charcoal bg-transparent text-charcoal hover:bg-charcoal hover:text-alabaster ${className}`}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-3">{children}</span>
      </Tag>
    )
  }

  // Inverted secondary, for use on dark sections.
  if (variant === 'ghost') {
    return (
      <Tag
        className={`${base} ${sizes[size]} border border-alabaster/40 bg-transparent text-alabaster hover:border-gold hover:text-gold ${className}`}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-3">{children}</span>
      </Tag>
    )
  }

  // link
  return (
    <Tag
      className={`group/btn inline-flex items-center gap-3 font-sans text-xs font-medium uppercase tracking-[0.2em] text-charcoal transition-colors duration-500 hover:text-gold ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
