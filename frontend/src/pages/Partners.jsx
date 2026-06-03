import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import MediaPlaceholder from '../components/MediaPlaceholder';
import './Partners.css';

const highlights = [
  { title: 'Transparency & Compliance', desc: 'Rigorous governance standards and full regulatory compliance as a Section 8 Company.' },
  { title: 'Data-driven Monitoring', desc: 'Real-time impact analytics, dashboards, and evidence-based program evaluation.' },
  { title: 'Community Institution Building', desc: 'Strengthening SHGs, FPOs, VWSCs, and grassroots leadership for lasting impact.' },
  { title: 'Scalable Program Design', desc: 'Replicable frameworks built to scale across diverse geographies and contexts.' },
];

const partnerTypes = [
  { title: 'Corporate CSR Partners', desc: 'Design and implement CSR programs that align with your strategic goals and compliance requirements.' },
  { title: 'Government Agencies', desc: 'Support public programs with ground-level implementation expertise and community mobilization.' },
  { title: 'Development Agencies', desc: 'Collaborate on multi-stakeholder development programs with measurable outcomes.' },
  { title: 'Academic Institutions', desc: 'Partner on research, STEM education programs, and evidence-based policy advocacy.' },
];

export default function Partners() {
  return (
    <main className="partners-page" id="partners-csr-page">
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
            <span className="hero__badge hero__badge--light animate-fade-in">Collaborate With Us</span>
            <h1 className="page-hero__title animate-fade-in-up">Partners & CSR</h1>
            <p className="page-hero__subtitle animate-fade-in-up delay-1">
              Trusted implementation partner for CSR and development programs across India.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section" id="partnership-overview">
        <div className="container">
          <div className="partner-overview-grid">
            <div className="partner-overview-content animate-fade-in-up">
              <SectionHeader
                tag="Partnership"
                title="Designing Scalable Social Impact Programs"
                align="left"
              />
              <p className="partner-overview-text">
                Janartham Foundation collaborates with corporations, government institutions, development agencies, and civil society organizations to design scalable and measurable social impact programs.
              </p>
              <p className="partner-overview-text">
                As a registered Section 8 Company, we bring transparency, accountability, and deep grassroots expertise to every partnership.
              </p>
              <Link to="/contact" className="btn btn--primary">
                Start a Conversation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
            <div className="partner-overview-visual animate-fade-in-up delay-2">
              <MediaPlaceholder label="CSR partnership meeting / stakeholder collaboration" aspectRatio="4/3" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights-section" id="partnership-highlights">
        <div className="highlights-section__video-wrap">
          <video
            className="highlights-section__video"
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
          <div className="highlights-section__overlay" />
        </div>
        <div className="container highlights-section__content">
          <SectionHeader
            tag="Why Partner With Us"
            title="Our Strengths"
            subtitle="What makes Janartham Foundation a reliable implementation partner."
            light
          />
          <div className="highlights-grid">
            {highlights.map((item, i) => (
              <div key={item.title} className={`highlight-card animate-fade-in-up delay-${i + 1}`}>
                <h4 className="highlight-card__title">{item.title}</h4>
                <p className="highlight-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="section" id="partner-types">
        <div className="container">
          <SectionHeader
            tag="Who We Work With"
            title="Partnership Opportunities"
            subtitle="We work across sectors to co-create impact at scale."
          />
          <div className="partner-types-grid">
            {partnerTypes.map((pt, i) => (
              <div key={pt.title} className={`partner-type-card animate-fade-in-up delay-${i + 1}`}>
                <h3 className="partner-type-card__title">{pt.title}</h3>
                <p className="partner-type-card__desc">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos Placeholder */}
      <section className="section section--grey" id="partner-logos">
        <div className="container">
          <SectionHeader
            tag="Our Partners"
            title="Organizations We Work With"
            subtitle="Logo grid — to be populated with partner brand logos."
          />
          <div className="partner-logos-grid">
            {[1,2,3,4,5,6,7,8].map(n => (
              <div key={n} className="partner-logo-slot">
                <span>Partner Logo {n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="partners-cta" id="partner-cta">
        <div className="partners-cta__bg"></div>
        <div className="container">
          <div className="partners-cta__inner">
            <h2 className="partners-cta__title animate-fade-in-up">Become a Partner</h2>
            <p className="partners-cta__text animate-fade-in-up delay-1">
              Let's co-create meaningful, measurable impact. Reach out to explore partnership opportunities.
            </p>
            <Link to="/contact" className="btn btn--white btn--lg animate-fade-in-up delay-2">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
