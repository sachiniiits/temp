import { Link } from 'react-router-dom';
import './Footer.css';

const quickLinks = [
  { to: '/who-we-are', label: 'About Us' },
  { to: '/thematic-areas', label: 'Thematic Areas' },
  { to: '/advocacy-blogs', label: 'Blogs' },
  { to: '/partners-csr', label: 'CSR Partnerships' },
  { to: '/contact', label: 'Contact' },
];

const thematicLinks = [
  { to: '/thematic-areas', label: 'Sustainable Livelihoods' },
  { to: '/thematic-areas', label: 'Climate Resilience' },
  { to: '/thematic-areas', label: 'Child Rights & Education' },
  { to: '/thematic-areas', label: 'Public Health' },
  { to: '/thematic-areas', label: 'Women Empowerment' },
];

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <div className="footer__logo-icon">
                  <svg width="40" height="40" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="30" fill="url(#footerLogoGrad)" />
                    <text x="32" y="44" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="32" fill="white" textAnchor="middle">J</text>
                    <defs>
                      <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#4CAF50' }} />
                        <stop offset="100%" style={{ stopColor: '#2E7D32' }} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div>
                  <span className="footer__logo-name">Janartham</span>
                  <span className="footer__logo-sub">Foundation</span>
                </div>
              </Link>
              <p className="footer__brand-desc">
                Building resilient communities through innovation, inclusion, and sustainable development.
              </p>
              <div className="footer__social">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer__social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer__social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h4 className="footer__col-title">Quick Links</h4>
              <ul className="footer__col-links">
                {quickLinks.map(({ to, label }) => (
                  <li key={label}>
                    <Link to={to} className="footer__link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Thematic Areas */}
            <div className="footer__col">
              <h4 className="footer__col-title">Thematic Areas</h4>
              <ul className="footer__col-links">
                {thematicLinks.map(({ to, label }) => (
                  <li key={label}>
                    <Link to={to} className="footer__link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h4 className="footer__col-title">Contact</h4>
              <ul className="footer__col-links footer__contact-list">
                <li>
                  <span className="footer__contact-icon">📍</span>
                  Lucknow, Uttar Pradesh, India
                </li>
                <li>
                  <span className="footer__contact-icon">✉️</span>
                  <a href="mailto:info@janarthamfoundation.org">info@janarthamfoundation.org</a>
                </li>
                <li>
                  <span className="footer__contact-icon">📞</span>
                  <a href="tel:+91XXXXXXXXXX">+91-XXXXXXXXXX</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p className="footer__copyright">
              © {new Date().getFullYear()} Janartham Foundation. All Rights Reserved.
            </p>
            <p className="footer__compliance">
              Registered as a Section 8 Company under the Companies Act, 2013.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
