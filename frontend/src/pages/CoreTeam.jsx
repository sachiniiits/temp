import SectionHeader from '../components/SectionHeader';
import MediaPlaceholder from '../components/MediaPlaceholder';
import './CoreTeam.css';

const founders = [
  {
    name: 'Puneet Kumar Srivastava',
    role: 'Co-Founder & Director',
    bio: 'Development professional with expertise in WASH, climate resilience, CSR program implementation, and technology-enabled social development.',
  },
  {
    name: 'Jyoti Khare',
    role: 'Co-Founder & Director',
    bio: 'Social development practitioner focusing on community engagement, gender inclusion, child development, and institutional strengthening.',
  },
];

const advisoryBoard = [
  { title: 'Public Health Experts' },
  { title: 'CSR Advisors' },
  { title: 'Environmental Specialists' },
  { title: 'Education & STEM Experts' },
];

export default function CoreTeam() {
  return (
    <main className="core-team" id="core-team-page">
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
            <span className="hero__badge hero__badge--light animate-fade-in">Our People</span>
            <h1 className="page-hero__title animate-fade-in-up">Core Team</h1>
            <p className="page-hero__subtitle animate-fade-in-up delay-1">
              Led by passionate development professionals committed to systemic social change.
            </p>
          </div>
        </div>
      </section>

      {/* Founding Leadership */}
      <section className="section" id="founding-leadership">
        <div className="container">
          <SectionHeader
            tag="Leadership"
            title="Founding Team"
            subtitle="The visionaries behind Janartham Foundation's mission to build resilient communities."
          />
          <div className="founders-grid">
            {founders.map((founder, i) => (
              <div key={founder.name} className={`founder-card animate-fade-in-up delay-${i + 1}`}>
                <div className="founder-card__photo">
                  <MediaPlaceholder label={`Photo of ${founder.name}`} aspectRatio="1/1" />
                </div>
                <div className="founder-card__info">
                  <h3 className="founder-card__name">{founder.name}</h3>
                  <span className="founder-card__role">{founder.role}</span>
                  <div className="decorative-line decorative-line--left"></div>
                  <p className="founder-card__bio">{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="section section--grey" id="advisory-board">
        <div className="container">
          <SectionHeader
            tag="Coming Soon"
            title="Advisory Board"
            subtitle="A diverse panel of experts guiding our strategic direction across key domains."
          />
          <div className="advisory-grid">
            {advisoryBoard.map((item, i) => (
              <div key={item.title} className={`advisory-card animate-fade-in-up delay-${i + 1}`}>
                <h4 className="advisory-card__title">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
