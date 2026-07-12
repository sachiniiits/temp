/**
 * Plates — the site's "photography".
 *
 * There are no photographs of this work; it is a pipeline, a statistical
 * result and an architecture. So each plate draws the thing itself. They
 * obey the same rules a photograph would: portrait aspect, inner border,
 * soft shadow that deepens on hover, and grayscale that resolves to colour
 * over 2000ms — colour as the reward for stopping.
 *
 * Every plate is inert SVG. No layout thrash, no images to load.
 */

/** Frame shared by all plates: aspect, borders, shadow, grayscale reveal. */
function PlateFrame({ children, label, caption, className = '' }) {
  return (
    <figure className={`group relative ${className}`}>
      <div
        className="relative aspect-[4/5] overflow-hidden bg-charcoal shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all duration-[2000ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.16)]"
      >
        <div className="no-motion-transform h-full w-full grayscale transition-all duration-[2000ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03] group-hover:grayscale-0">
          {children}
        </div>

        {/* inner border — frames the plate like a mounted print */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
        />

        {label && (
          <span className="vertical-rl absolute top-6 left-6 hidden font-sans text-[10px] uppercase tracking-[0.3em] text-alabaster/40 transition-colors duration-700 group-hover:text-gold lg:block">
            {label}
          </span>
        )}
      </div>

      {caption && (
        <figcaption className="mt-4 font-sans text-[10px] uppercase tracking-[0.25em] text-warmgrey">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

/* Deterministic point cloud — four behavioural clusters, as the SOM would
   separate them. Seeded so the layout never shifts between renders. */
function seeded(seed) {
  let s = seed
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff
    return s / 0x7fffffff
  }
}

const CLUSTERS = [
  { cx: 120, cy: 150, r: 52, n: 46, color: '#D4AF37' }, // Aggressor
  { cx: 275, cy: 115, r: 44, n: 38, color: '#8C7F6B' }, // AWPer
  { cx: 165, cy: 300, r: 58, n: 50, color: '#5F6B72' }, // Support
  { cx: 300, cy: 265, r: 40, n: 32, color: '#B4553C' }, // Lurker
]

const POINTS = CLUSTERS.flatMap((c, ci) => {
  const rand = seeded(ci * 7919 + 13)
  return Array.from({ length: c.n }, () => {
    // Gaussian-ish via averaged uniforms, so clusters fall off at the edges.
    const t = rand() * Math.PI * 2
    const d = ((rand() + rand() + rand()) / 3) * c.r
    return {
      x: c.cx + Math.cos(t) * d,
      y: c.cy + Math.sin(t) * d,
      r: 1.5 + rand() * 1.6,
      color: c.color,
      o: 0.45 + rand() * 0.5,
    }
  })
})

/** CS2 — a Self-Organizing Map lattice with the discovered role clusters. */
export function CS2Plate({ className }) {
  return (
    <PlateFrame label="Plate 01 / SOM" caption="Role clusters — 16,520 player-rounds" className={className}>
      <svg viewBox="0 0 400 500" className="h-full w-full" role="img" aria-label="Scatter plot of behavioural player-round clusters over a Self-Organizing Map lattice">
        <rect width="400" height="500" fill="#1A1A1A" />

        {/* SOM lattice */}
        <g stroke="#F9F8F6" strokeOpacity="0.07" strokeWidth="1">
          {Array.from({ length: 11 }, (_, i) => (
            <line key={`v${i}`} x1={40 + i * 32} y1="60" x2={40 + i * 32} y2="380" />
          ))}
          {Array.from({ length: 11 }, (_, i) => (
            <line key={`h${i}`} x1="40" y1={60 + i * 32} x2="360" y2={60 + i * 32} />
          ))}
        </g>

        {/* cluster halos */}
        {CLUSTERS.map((c, i) => (
          <circle
            key={i}
            cx={c.cx}
            cy={c.cy}
            r={c.r + 12}
            fill={c.color}
            fillOpacity="0.05"
            stroke={c.color}
            strokeOpacity="0.25"
            strokeWidth="1"
            strokeDasharray="2 4"
          />
        ))}

        {/* player-rounds */}
        {POINTS.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={p.r} fill={p.color} fillOpacity={p.o} />
        ))}

        {/* axis rule + legend */}
        <line x1="40" y1="410" x2="360" y2="410" stroke="#F9F8F6" strokeOpacity="0.2" />
        <g fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fill="#F9F8F6" fillOpacity="0.55">
          {['AGGRESSOR', 'AWPER', 'SUPPORT', 'LURKER'].map((t, i) => (
            <g key={t} transform={`translate(40, ${434 + i * 16})`}>
              <rect width="6" height="6" y="-5" fill={CLUSTERS[i].color} />
              <text x="14" y="0">{t}</text>
            </g>
          ))}
        </g>
        <text
          x="360"
          y="450"
          textAnchor="end"
          fontFamily="Inter, sans-serif"
          fontSize="9"
          letterSpacing="2"
          fill="#D4AF37"
          fillOpacity="0.8"
        >
          T-SIDE
        </text>
      </svg>
    </PlateFrame>
  )
}

/** Game engine — the five-stage agent pipeline with its correction loop. */
export function EnginePlate({ className }) {
  const stages = ['RESEARCH', 'SCRIPT', 'LOGIC', 'CODING', 'VALIDATOR']

  return (
    <PlateFrame label="Plate 02 / Pipeline" caption="Five agents, one self-correcting loop" className={className}>
      <svg viewBox="0 0 400 500" className="h-full w-full" role="img" aria-label="Diagram of a five-stage AI agent pipeline with a self-correction loop back to the coding stage">
        <rect width="400" height="500" fill="#1A1A1A" />

        {/* prompt in */}
        <g fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2">
          <text x="52" y="58" fill="#F9F8F6" fillOpacity="0.4">PROMPT</text>
        </g>
        <line x1="52" y1="70" x2="348" y2="70" stroke="#F9F8F6" strokeOpacity="0.15" />

        {stages.map((s, i) => {
          const y = 108 + i * 66
          const isLast = i === stages.length - 1
          return (
            <g key={s}>
              {/* connector */}
              {!isLast && (
                <line
                  x1="76"
                  y1={y + 14}
                  x2="76"
                  y2={y + 52}
                  stroke="#F9F8F6"
                  strokeOpacity="0.25"
                  strokeWidth="1"
                />
              )}
              {/* node */}
              <rect
                x="66"
                y={y - 10}
                width="20"
                height="20"
                fill="none"
                stroke={isLast ? '#D4AF37' : '#F9F8F6'}
                strokeOpacity={isLast ? 0.9 : 0.5}
                strokeWidth="1"
              />
              <rect
                x="71"
                y={y - 5}
                width="10"
                height="10"
                fill={isLast ? '#D4AF37' : '#F9F8F6'}
                fillOpacity={isLast ? 0.9 : 0.25}
              />
              <text
                x="106"
                y={y + 4}
                fontFamily="Playfair Display, serif"
                fontSize="19"
                fill="#F9F8F6"
                fillOpacity={0.9}
              >
                {s.charAt(0) + s.slice(1).toLowerCase()}
              </text>
              <text
                x="348"
                y={y + 3}
                textAnchor="end"
                fontFamily="Inter, sans-serif"
                fontSize="9"
                letterSpacing="2"
                fill="#F9F8F6"
                fillOpacity="0.3"
              >
                0{i + 1}
              </text>
            </g>
          )
        })}

        {/* self-correction loop: validator back to coding, max 3 */}
        <path
          d="M 300 434 L 336 434 L 336 368 L 300 368"
          fill="none"
          stroke="#D4AF37"
          strokeOpacity="0.7"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <path d="M 306 364 L 300 368 L 306 372" fill="none" stroke="#D4AF37" strokeOpacity="0.7" />
        <text
          x="332"
          y="410"
          textAnchor="end"
          fontFamily="Inter, sans-serif"
          fontSize="8"
          letterSpacing="1.5"
          fill="#D4AF37"
          fillOpacity="0.8"
        >
          RETRY ×3
        </text>

        {/* artefact out */}
        <line x1="52" y1="462" x2="348" y2="462" stroke="#F9F8F6" strokeOpacity="0.15" />
        <text
          x="52"
          y="482"
          fontFamily="Inter, sans-serif"
          fontSize="9"
          letterSpacing="2"
          fill="#D4AF37"
          fillOpacity="0.9"
        >
          GAME.HTML
        </text>
      </svg>
    </PlateFrame>
  )
}

/** Janartham — the decoupled architecture, drawn as an exploded elevation. */
export function JanarthamPlate({ className }) {
  const tiers = [
    { y: 92, label: 'React 19 · Vite SPA', sub: 'PUBLIC SITE' },
    { y: 206, label: 'REST Content API', sub: 'CONTRACT' },
    { y: 320, label: 'Strapi v5 CMS', sub: 'EDITED BY STAFF' },
  ]

  return (
    <PlateFrame label="Plate 00 / Architecture" caption="Decoupled platform — Janartham Foundation" className={className}>
      <svg viewBox="0 0 400 500" className="h-full w-full" role="img" aria-label="Architecture diagram: React single-page application, REST content API, Strapi CMS and PostgreSQL">
        <rect width="400" height="500" fill="#1A1A1A" />

        {tiers.map((t, i) => (
          <g key={t.sub}>
            <rect
              x="48"
              y={t.y}
              width="304"
              height="72"
              fill="#F9F8F6"
              fillOpacity={i === 1 ? 0.02 : 0.05}
              stroke="#F9F8F6"
              strokeOpacity={i === 1 ? 0.2 : 0.35}
              strokeWidth="1"
              strokeDasharray={i === 1 ? '4 4' : undefined}
            />
            <text
              x="68"
              y={t.y + 34}
              fontFamily="Playfair Display, serif"
              fontSize="18"
              fill="#F9F8F6"
              fillOpacity="0.92"
            >
              {t.label}
            </text>
            <text
              x="68"
              y={t.y + 54}
              fontFamily="Inter, sans-serif"
              fontSize="8"
              letterSpacing="2"
              fill="#F9F8F6"
              fillOpacity="0.4"
            >
              {t.sub}
            </text>

            {/* flow arrows between tiers */}
            {i < tiers.length - 1 && (
              <g stroke="#D4AF37" strokeOpacity="0.65" strokeWidth="1">
                <line x1="200" y1={t.y + 72} x2="200" y2={t.y + 114} />
                <path d={`M 195 ${t.y + 108} L 200 ${t.y + 114} L 205 ${t.y + 108}`} fill="none" />
              </g>
            )}
          </g>
        ))}

        {/* persistence */}
        <g stroke="#D4AF37" strokeOpacity="0.65" strokeWidth="1">
          <line x1="200" y1="392" x2="200" y2="424" />
          <path d="M 195 418 L 200 424 L 205 418" fill="none" />
        </g>
        <rect x="120" y="424" width="160" height="42" fill="none" stroke="#D4AF37" strokeOpacity="0.75" />
        <text
          x="200"
          y="450"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="10"
          letterSpacing="2.5"
          fill="#D4AF37"
          fillOpacity="0.95"
        >
          POSTGRESQL
        </text>

        <text
          x="48"
          y="62"
          fontFamily="Inter, sans-serif"
          fontSize="9"
          letterSpacing="2"
          fill="#F9F8F6"
          fillOpacity="0.35"
        >
          JANARTHAM.ORG
        </text>
      </svg>
    </PlateFrame>
  )
}
