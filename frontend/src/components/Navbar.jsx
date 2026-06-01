import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/who-we-are', label: 'Who We Are' },
  { to: '/mission-vision', label: 'Mission & Vision' },
  { to: '/thematic-areas', label: 'Thematic Areas' },
  { to: '/core-team', label: 'Core Team' },
  { to: '/advocacy-blogs', label: 'Advocacy & Blogs' },
  { to: '/partners-csr', label: 'Partners & CSR' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} id="main-nav">
        <div className="navbar__inner container">
          <Link to="/" className="navbar__logo" aria-label="Janartham Foundation Home">
            <div className="navbar__logo-icon">
              <svg width="36" height="36" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="30" fill="url(#navLogoGrad)" />
                <text x="32" y="44" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="32" fill="white" textAnchor="middle">J</text>
                <defs>
                  <linearGradient id="navLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#2E7D32' }} />
                    <stop offset="100%" style={{ stopColor: '#1B5E20' }} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">Janartham</span>
              <span className="navbar__logo-sub">Foundation</span>
            </div>
          </Link>

          <ul className="navbar__links" role="navigation">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                  }
                  end={to === '/'}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            className={`navbar__burger ${isOpen ? 'navbar__burger--open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            id="menu-toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        className={`navbar__overlay ${isOpen ? 'navbar__overlay--visible' : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div className={`navbar__drawer ${isOpen ? 'navbar__drawer--open' : ''}`} role="navigation" aria-label="Mobile menu">
        <div className="navbar__drawer-header">
          <Link to="/" className="navbar__logo" onClick={() => setIsOpen(false)}>
            <div className="navbar__logo-icon">
              <svg width="36" height="36" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="30" fill="url(#drawerLogoGrad)" />
                <text x="32" y="44" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="32" fill="white" textAnchor="middle">J</text>
                <defs>
                  <linearGradient id="drawerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#2E7D32' }} />
                    <stop offset="100%" style={{ stopColor: '#1B5E20' }} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">Janartham</span>
              <span className="navbar__logo-sub">Foundation</span>
            </div>
          </Link>
        </div>
        <ul className="navbar__drawer-links">
          {navLinks.map(({ to, label }, i) => (
            <li key={to} style={{ animationDelay: `${i * 0.05}s` }}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `navbar__drawer-link ${isActive ? 'navbar__drawer-link--active' : ''}`
                }
                end={to === '/'}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="navbar__drawer-footer">
          <Link to="/contact" className="btn btn--primary btn--lg" onClick={() => setIsOpen(false)} style={{ width: '100%' }}>
            Get In Touch
          </Link>
        </div>
      </div>
    </>
  );
}
