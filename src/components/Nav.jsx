import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, profile } from '../lib/content'

/**
 * Fixed masthead. Transparent over the hero, then settles onto a hairline
 * rule and a translucent alabaster ground once the page has moved.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Don't leave the page scrollable behind the mobile sheet.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
        scrolled ? 'border-b border-charcoal/10 bg-alabaster/85 backdrop-blur-sm' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-6 md:px-16">
        <a
          href="#top"
          className="font-display text-lg tracking-tight transition-colors duration-500 hover:text-gold"
        >
          {profile.first}
          <span className="text-warmgrey"> {profile.last}</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-charcoal transition-colors duration-500 hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="md:hidden"
        >
          {open ? <X strokeWidth={1} size={22} /> : <Menu strokeWidth={1} size={22} />}
        </button>
      </div>

      {/* Mobile sheet — full-bleed, serif, generously spaced. */}
      {open && (
        <div className="animate-fade-in-up border-t border-charcoal/10 bg-alabaster md:hidden">
          <nav className="flex flex-col px-8 py-6" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-charcoal/10 py-5 font-display text-2xl transition-colors duration-500 hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
