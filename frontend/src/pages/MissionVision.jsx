import SectionHeader from '../components/SectionHeader';
import './MissionVision.css';

const strategicPillars = [
  {
    icon: '💻',
    title: 'Technology Enabled Development',
    desc: 'Leveraging digital systems, impact analytics, and data-driven governance.',
    color: 'blue',
  },
  {
    icon: '🏘️',
    title: 'Community Institution Strengthening',
    desc: 'Supporting SHGs, FPOs, VWSCs, and grassroots leadership structures.',
    color: 'green',
  },
  {
    icon: '📊',
    title: 'Research & Advocacy',
    desc: 'Promoting evidence-based policy dialogue and social innovation.',
    color: 'yellow',
  },
  {
    icon: '🤝',
    title: 'Collaborative Partnerships',
    desc: 'Working with CSR partners, governments, academia, and development agencies.',
    color: 'brown',
  },
];

export default function MissionVision() {
  return (
    <main className="mission-vision" id="mission-vision-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg"></div>
        <div className="container">
          <div className="page-hero__content">
            <span className="hero__badge animate-fade-in">Our Purpose</span>
            <h1 className="page-hero__title animate-fade-in-up">Mission & Vision</h1>
            <p className="page-hero__subtitle animate-fade-in-up delay-1">
              Guided by purpose, driven by impact.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="mv-statement section" id="vision-section">
        <div className="container">
          <div className="mv-statement__card mv-statement__card--vision animate-fade-in-up">
            <div className="mv-statement__icon-wrap">
              <span className="mv-statement__icon">👁️</span>
            </div>
            <div className="mv-statement__label">Our Vision</div>
            <blockquote className="mv-statement__text">
              "To create a resilient, equitable, and sustainable society where every individual—regardless of gender or background—has access to quality education, dignified livelihoods, and a healthy environment."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mv-statement section section--grey" id="mission-section">
        <div className="container">
          <div className="mv-statement__card mv-statement__card--mission animate-fade-in-up">
            <div className="mv-statement__icon-wrap mv-statement__icon-wrap--blue">
              <span className="mv-statement__icon">🎯</span>
            </div>
            <div className="mv-statement__label">Our Mission</div>
            <blockquote className="mv-statement__text">
              "To implement high-impact, data-driven programs in skill development, climate resilience, and public health by fostering partnerships with government, corporate sectors, and community institutions to drive systemic social change."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Strategic Approach */}
      <section className="strategic section" id="strategic-approach">
        <div className="container">
          <SectionHeader
            tag="How We Work"
            title="Strategic Approach"
            subtitle="Our methodology combines technology, community participation, evidence, and partnerships to create lasting social impact."
          />
          <div className="strategic__grid">
            {strategicPillars.map((pillar, i) => (
              <div key={pillar.title} className={`strategic__card strategic__card--${pillar.color} animate-fade-in-up delay-${i + 1}`}>
                <div className="strategic__card-number">0{i + 1}</div>
                <div className="strategic__card-icon">{pillar.icon}</div>
                <h3 className="strategic__card-title">{pillar.title}</h3>
                <p className="strategic__card-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
