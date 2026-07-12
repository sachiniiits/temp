/**
 * Page chrome: the paper grain and the visible editorial gridlines.
 * Both are fixed, pointer-events-none, and purely atmospheric.
 */

/** 2% SVG fractal noise — invisible at a glance, tactile in aggregate. */
export function NoiseOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.025] mix-blend-multiply"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
      }}
    />
  )
}

/**
 * Four vertical gridlines at 12-column boundaries. Desktop only —
 * on mobile they would crowd the content rather than structure it.
 */
export function GridLines() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 hidden lg:block">
      <div className="mx-auto flex h-full max-w-[1600px] justify-between px-16">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-full w-px bg-charcoal/10" />
        ))}
      </div>
    </div>
  )
}
