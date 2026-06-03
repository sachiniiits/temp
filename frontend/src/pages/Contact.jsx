import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Front-end only — no backend wired yet
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', organization: '', email: '', phone: '', message: '' });
  };

  return (
    <main className="contact-page" id="contact-page">
      {/* Page Hero */}
      <section className="page-hero page-hero--video">
        <div className="page-hero__video-wrap">
          <video className="page-hero__video" autoPlay loop muted playsInline>
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <div className="page-hero__video-overlay" />
        </div>
        <div className="container">
          <div className="page-hero__content">
            <span className="hero__badge hero__badge--light animate-fade-in">Reach Out</span>
            <h1 className="page-hero__title animate-fade-in-up">Contact Us</h1>
            <p className="page-hero__subtitle animate-fade-in-up delay-1">
              We'd love to hear from you. Let's build impact together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section" id="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info animate-fade-in-up">
              <SectionHeader
                tag="Get In Touch"
                title="Let's Connect"
                align="left"
              />
              <p className="contact-info__text">
                Whether you're interested in partnerships, CSR collaborations, or simply want to learn more about our work — reach out and we'll get back to you promptly.
              </p>

              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-detail__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                  <div>
                    <h4 className="contact-detail__label">Address</h4>
                    <p className="contact-detail__value">
                      Janartham Foundation<br />
                      Lucknow, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
                  <div>
                    <h4 className="contact-detail__label">Email</h4>
                    <p className="contact-detail__value">
                      <a href="mailto:info@janarthamfoundation.org">info@janarthamfoundation.org</a>
                    </p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg></div>
                  <div>
                    <h4 className="contact-detail__label">Phone</h4>
                    <p className="contact-detail__value">
                      <a href="tel:+91XXXXXXXXXX">+91-XXXXXXXXXX</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="contact-social">
                <h4 className="contact-social__title">Follow Us</h4>
                <div className="contact-social__links">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-social__link" aria-label="LinkedIn">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="contact-social__link" aria-label="Facebook">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-social__link" aria-label="Instagram">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="contact-social__link" aria-label="YouTube">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrap animate-fade-in-up delay-2">
              <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                <h3 className="contact-form__title">Send Us a Message</h3>

                {submitted && (
                  <div className="contact-form__success animate-scale-in">
                    Thank you! Your message has been received. We'll get back to you soon.
                  </div>
                )}

                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="contact-name" className="contact-form__label">Name *</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="contact-form__input"
                    />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="contact-org" className="contact-form__label">Organization</label>
                    <input
                      type="text"
                      id="contact-org"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Your organization"
                      className="contact-form__input"
                    />
                  </div>
                </div>

                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="contact-email" className="contact-form__label">Email *</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="contact-form__input"
                    />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="contact-phone" className="contact-form__label">Phone</label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="contact-form__input"
                    />
                  </div>
                </div>

                <div className="contact-form__field">
                  <label htmlFor="contact-message" className="contact-form__label">Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your interest, inquiry, or partnership idea..."
                    className="contact-form__input contact-form__textarea"
                    rows="5"
                  />
                </div>

                <button type="submit" className="btn btn--primary btn--lg contact-form__submit" id="contact-submit">
                  Send Message
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="map-section" id="map-section">
        <div className="container">
          <div className="map-placeholder">
            <div className="map-placeholder__inner">
              <span className="map-placeholder__icon"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg></span>
              <h4 className="map-placeholder__title">Google Maps Integration</h4>
              <p className="map-placeholder__text">
                Embed your Google Maps location here.<br />
                Replace this placeholder with a Google Maps iframe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
