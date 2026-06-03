import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import ThemeCard from '../components/ThemeCard';
import MediaPlaceholder from '../components/MediaPlaceholder';
import ScrollExpandMedia from '../components/ui/scroll-expansion-hero';
import './Home.css';

const impactThemes = [
  { title: 'Sustainable Livelihoods', description: 'Empowering communities through skill development, entrepreneurship, and financial inclusion.', color: 'green' },
  { title: 'Climate Resilience', description: 'Building adaptive capacity through WASH, conservation, and nature-based solutions.', color: 'blue' },
  { title: 'Child Rights & Education', description: 'Ensuring access to quality education, digital learning, and child-safe environments.', color: 'yellow' },
  { title: 'Public Health & Hygiene', description: 'Strengthening community health systems through preventive care, nutrition, and wellness.', color: 'brown' },
  { title: 'Women Empowerment', description: 'Advancing gender equality through leadership, literacy, and economic participation.', color: 'green' },
  { title: 'Research & Innovation', description: 'Driving evidence-based development through data analytics and social innovation.', color: 'blue' },
];

const csrHighlights = [
  { title: 'Transparency & Compliance', desc: 'Rigorous governance standards and full regulatory compliance.' },
  { title: 'Data-driven Monitoring', desc: 'Real-time impact analytics and evidence-based program tracking.' },
  { title: 'Community Institution Building', desc: 'Strengthening grassroots structures like SHGs, FPOs, and VWSCs.' },
  { title: 'Scalable Program Design', desc: 'Replicable frameworks built for scale across diverse geographies.' },
];

const blogPreviews = [
  { title: 'Why Climate Resilience Must Begin at the Community Level', category: 'Climate Action', tag: 'green' },
  { title: 'Bridging India\'s Digital Divide Through Inclusive Education', category: 'Digital Development', tag: 'blue' },
  { title: 'Women-led Enterprises as Catalysts of Rural Transformation', category: 'Gender & Inclusion', tag: 'brown' },
];

function HeroChildContent() {
  return (
    <div className="hero-child-content">
      <div className="hero-child-grid">
        <div className="hero-child-left">
          <span className="hero__badge animate-fade-in">Section 8 Non-Profit Organization</span>
          <h1 className="hero-child-title animate-fade-in-up">
            Building Resilient Communities Through{' '}
            <span className="hero__title-highlight">Innovation, Inclusion</span> &{' '}
            <span className="hero__title-highlight">Sustainability</span>
          </h1>
          <p className="hero-child-subtitle animate-fade-in-up delay-1">
            Janartham Foundation is a Section 8 not-for-profit organization committed to advancing sustainable livelihoods, climate resilience, child rights, public health, and technology-enabled social development.
          </p>
          <div className="hero__actions animate-fade-in-up delay-2">
            <Link to="/thematic-areas" className="btn btn--primary btn--lg">
              Explore Our Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link to="/partners-csr" className="btn btn--white btn--lg">
              Partner With Us
            </Link>
          </div>
        </div>
        <div className="hero-child-right">
          <div className="hero-child-stats">
            <div className="hero-child-stat-card">
              <span className="hero-child-stat-num">6+</span>
              <span className="hero-child-stat-label">Focus Areas</span>
            </div>
            <div className="hero-child-stat-card">
              <span className="hero-child-stat-num">SDG</span>
              <span className="hero-child-stat-label">Aligned</span>
            </div>
            <div className="hero-child-stat-card">
              <span className="hero-child-stat-num">17</span>
              <span className="hero-child-stat-label">SDG Goals</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="home" id="home-page">
      {/* ===== SCROLL EXPANSION HERO ===== */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/video3.mp4"
        bgVideoSrc="/video.mp4"
        title="Building Resilient Communities"
        date="Janartham Foundation"
        scrollToExpand="↓ Scroll to Explore"
        textBlend
      >
        <HeroChildContent />
      </ScrollExpandMedia>

      {/* ===== ABOUT SNAPSHOT ===== */}
      <section className="about-snap section" id="about-snapshot">
        <div className="container">
          <div className="about-snap__grid">
            <div className="about-snap__content animate-fade-in-up">
              <SectionHeader
                tag="About Us"
                title="Creating Equitable & Sustainable Communities"
                align="left"
              />
              <p className="about-snap__text">
                Janartham Foundation is headquartered in Lucknow, Uttar Pradesh and works toward creating equitable and sustainable communities through evidence-based development programs, technology-enabled interventions, and grassroots partnerships.
              </p>
              <p className="about-snap__text">
                Our work aligns with Sustainable Development Goals (SDGs) and focuses on empowering vulnerable communities through innovation, institutional strengthening, and inclusive growth.
              </p>
              <Link to="/who-we-are" className="btn btn--secondary">
                Learn More About Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
            <div className="about-snap__visual animate-fade-in-up delay-2">
              <MediaPlaceholder label="Community empowerment — Foundation field work" aspectRatio="1/1" />
              {/* Floating stat cards */}
              <div className="about-snap__stat about-snap__stat--1">
                <span className="about-snap__stat-num">6+</span>
                <span className="about-snap__stat-label">Focus Areas</span>
              </div>
              <div className="about-snap__stat about-snap__stat--2">
                <span className="about-snap__stat-num">SDG</span>
                <span className="about-snap__stat-label">Aligned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KEY IMPACT THEMES ===== */}
      <section className="themes section section--grey" id="impact-themes">
        <div className="container">
          <SectionHeader
            tag="What We Do"
            title="Key Impact Themes"
            subtitle="Our programs span across six critical areas of social development, all aligned with the UN Sustainable Development Goals."
          />
          <div className="themes__grid">
            {impactThemes.map((theme, i) => (
              <ThemeCard key={theme.title} {...theme} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CSR PARTNERSHIP ===== */}
      <section className="csr-section" id="csr-partnership">
        <div className="csr-section__video-wrap">
          <video
            className="csr-section__video"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.pexels.com/videos/3571264/free-video-3571264.jpg?auto=compress&cs=tinysrgb&w=1920"
          >
            <source
              src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="csr-section__overlay" />
        </div>
        <div className="container csr-section__content">
          <SectionHeader
            tag="Partnerships"
            title="Trusted Implementation Partner for CSR & Development Programs"
            subtitle="Janartham Foundation collaborates with corporations, government institutions, development agencies, and civil society organizations to design scalable and measurable social impact programs."
            light
          />
          <div className="csr__grid">
            {csrHighlights.map((item, i) => (
              <div key={item.title} className={`csr__card animate-fade-in-up delay-${i + 1}`}>
                <h4 className="csr__card-title">{item.title}</h4>
                <p className="csr__card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="csr__cta animate-fade-in-up delay-5">
            <Link to="/partners-csr" className="btn btn--white btn--lg">
              Become a Partner
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BLOG PREVIEW ===== */}
      <section className="blog-preview section" id="blog-preview">
        <div className="container">
          <SectionHeader
            tag="Insights"
            title="From Our Blog"
            subtitle="Explore our latest insights on sustainable development, community resilience, and social innovation."
          />
          <div className="blog-preview__grid">
            {blogPreviews.map((blog, i) => (
              <article key={i} className={`blog-preview__card card animate-fade-in-up delay-${i + 1}`}>
                <div className="blog-preview__img">
                  <MediaPlaceholder label={`Blog: ${blog.title}`} aspectRatio="16/10" />
                </div>
                <div className="blog-preview__body">
                  <span className={`tag tag--${blog.tag}`}>{blog.category}</span>
                  <h3 className="blog-preview__title">{blog.title}</h3>
                  <Link to="/advocacy-blogs" className="blog-preview__link">
                    Read More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section className="contact-cta" id="contact-cta">
        <div className="contact-cta__bg"></div>
        <div className="container">
          <div className="contact-cta__inner">
            <h2 className="contact-cta__title animate-fade-in-up">Ready to Make a Difference?</h2>
            <p className="contact-cta__text animate-fade-in-up delay-1">
              Join us in building resilient communities. Whether you're a CSR partner, development agency, or an individual who cares — there's a place for you.
            </p>
            <div className="contact-cta__actions animate-fade-in-up delay-2">
              <Link to="/contact" className="btn btn--white btn--lg">Get In Touch</Link>
              <Link to="/who-we-are" className="btn btn--secondary btn--lg" style={{ borderColor: 'white', color: 'white' }}>Learn More</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
