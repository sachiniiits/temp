import SectionHeader from '../components/SectionHeader';
import MediaPlaceholder from '../components/MediaPlaceholder';
import './WhoWeAre.css';

const coreValues = [
  { icon: '🤝', title: 'Integrity', desc: 'Upholding the highest standards of honesty and ethical conduct in all our work.' },
  { icon: '🌐', title: 'Inclusion', desc: 'Ensuring no one is left behind — reaching the most marginalized communities.' },
  { icon: '🌿', title: 'Sustainability', desc: 'Building programs and solutions that endure beyond project timelines.' },
  { icon: '💡', title: 'Innovation', desc: 'Embracing technology and creative approaches to solve complex challenges.' },
  { icon: '⚖️', title: 'Equity', desc: 'Promoting fair access to resources, opportunities, and decision-making.' },
  { icon: '📋', title: 'Accountability', desc: 'Being answerable to communities, partners, and stakeholders.' },
  { icon: '🤲', title: 'Collaboration', desc: 'Working with diverse stakeholders to amplify collective impact.' },
];

export default function WhoWeAre() {
  return (
    <main className="who-we-are" id="who-we-are-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg"></div>
        <div className="container">
          <div className="page-hero__content">
            <span className="hero__badge animate-fade-in">About Janartham Foundation</span>
            <h1 className="page-hero__title animate-fade-in-up">Who We Are</h1>
            <p className="page-hero__subtitle animate-fade-in-up delay-1">
              A Section 8 Company committed to building equitable and sustainable communities.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section" id="introduction">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-grid__content animate-fade-in-up">
              <SectionHeader
                tag="Our Story"
                title="Strengthening Communities, Enabling Change"
                align="left"
              />
              <p className="intro-text">
                Janartham Foundation is a Section 8 Company established under the Companies Act, 2013 with the objective of promoting social welfare, environmental sustainability, public health, education, and inclusive development.
              </p>
              <p className="intro-text">
                The Foundation believes in strengthening community institutions and enabling vulnerable populations through participatory and technology-driven solutions.
              </p>
            </div>
            <div className="intro-grid__visual animate-fade-in-up delay-2">
              <MediaPlaceholder label="Foundation team in community engagement" aspectRatio="4/3" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="philosophy section section--grey" id="philosophy">
        <div className="container">
          <div className="philosophy__inner animate-scale-in">
            <div className="philosophy__quote-mark">"</div>
            <blockquote className="philosophy__quote">
              Community-led development powered by innovation, evidence, and inclusion.
            </blockquote>
            <div className="decorative-line decorative-line--center"></div>
            <p className="philosophy__label">Our Organizational Philosophy</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section" id="core-values">
        <div className="container">
          <SectionHeader
            tag="Our Principles"
            title="Core Values"
            subtitle="The guiding principles that shape every decision, program, and partnership."
          />
          <div className="values-grid">
            {coreValues.map((val, i) => (
              <div key={val.title} className={`value-card animate-fade-in-up delay-${(i % 4) + 1}`}>
                <div className="value-card__icon">{val.icon}</div>
                <h3 className="value-card__title">{val.title}</h3>
                <p className="value-card__desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Banner */}
      <section className="visual-banner" id="team-visual">
        <div className="container">
          <MediaPlaceholder label="Foundation team working with community members" aspectRatio="21/9" />
        </div>
      </section>
    </main>
  );
}
