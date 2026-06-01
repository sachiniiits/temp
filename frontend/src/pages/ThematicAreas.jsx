import SectionHeader from '../components/SectionHeader';
import MediaPlaceholder from '../components/MediaPlaceholder';
import './ThematicAreas.css';

const areas = [
  {
    id: 'sustainable-livelihoods',
    letter: 'A',
    title: 'Sustainable Livelihoods & Economic Development',
    icon: '🌾',
    color: 'green',
    description: 'Empowering communities through skill development, entrepreneurship, and financial inclusion to build self-sustaining economic ecosystems.',
    focusAreas: ['Skill Development', 'Entrepreneurship', 'Women-led Enterprises', 'Financial Literacy', 'SHGs & FPOs', 'Rural Enterprise Promotion'],
    infographic: {
      title: 'Circular Ecosystem',
      steps: ['Skills', 'Enterprise', 'Financial Inclusion', 'Sustainable Income'],
    },
    visuals: ['Women entrepreneurs', 'Rural producer collectives', 'Skill training centers'],
  },
  {
    id: 'climate-resilience',
    letter: 'B',
    title: 'Climate Resilience & Environmental Sustainability',
    icon: '🌍',
    color: 'blue',
    description: 'Building adaptive capacity through water conservation, waste management, and nature-based climate solutions.',
    focusAreas: ['WASH Programs', 'Groundwater Recharge', 'Waste Management', 'Urban Micro Forests', 'Renewable Practices', 'Biodiversity Conservation'],
    infographic: {
      title: 'Climate Action Pyramid',
      steps: ['Water', 'Soil', 'Air', 'Biodiversity', 'Communities'],
    },
    visuals: ['Water conservation', 'Tree plantation drives', 'Nature-based climate solutions'],
  },
  {
    id: 'child-rights',
    letter: 'C',
    title: 'Child Rights, Education & Digital Inclusion',
    icon: '📚',
    color: 'yellow',
    description: 'Ensuring access to quality education, digital learning, and child-safe environments for every child.',
    focusAreas: ['Foundational Literacy', 'STEM Education', 'Smart Classrooms', 'Digital Inclusion', 'Child Protection', 'Child-Friendly Environments'],
    infographic: {
      title: 'Digital Inclusion Pathway',
      steps: ['Access', 'Learning', 'Skills', 'Opportunity'],
    },
    visuals: ['Digital learning classrooms', 'Children using tablets', 'STEM labs'],
  },
  {
    id: 'public-health',
    letter: 'D',
    title: 'Public Health, Hygiene & Wellness',
    icon: '🏥',
    color: 'brown',
    description: 'Strengthening community health systems through preventive care, nutrition, and wellness programs.',
    focusAreas: ['Preventive Healthcare', 'Nutrition', 'Menstrual Hygiene', 'Telemedicine Facilitation', 'Mental Well-being', 'Community Health Systems'],
    infographic: {
      title: 'Community Health Wheel',
      steps: ['Nutrition', 'Hygiene', 'Awareness', 'Prevention', 'Wellness'],
    },
    visuals: ['Community health camps', 'Hygiene awareness drives', 'Maternal-child health sessions'],
  },
  {
    id: 'gender-equality',
    letter: 'E',
    title: 'Gender Equality & Women Empowerment',
    icon: '👩',
    color: 'green',
    description: 'Advancing gender justice through leadership development, digital literacy, and economic participation.',
    focusAreas: ['Leadership Development', 'Digital Literacy', 'Financial Inclusion', 'Gender Justice', 'Safety & Well-being', 'Institutional Strengthening'],
    infographic: {
      title: 'Empowerment Ladder',
      steps: ['Education', 'Leadership', 'Economic Participation', 'Decision Making'],
    },
    visuals: ['Women leadership workshops', 'Financial literacy sessions', 'Community mobilization'],
  },
];

const colorMap = {
  green: 'var(--green-primary)',
  blue: 'var(--blue-primary)',
  yellow: '#F57F17',
  brown: 'var(--brown-primary)',
};

export default function ThematicAreas() {
  return (
    <main className="thematic" id="thematic-areas-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg"></div>
        <div className="container">
          <div className="page-hero__content">
            <span className="hero__badge animate-fade-in">Our Focus</span>
            <h1 className="page-hero__title animate-fade-in-up">Thematic Areas</h1>
            <p className="page-hero__subtitle animate-fade-in-up delay-1">
              Driving transformative change across five critical domains of social development.
            </p>
          </div>
        </div>
      </section>

      {/* Thematic Areas */}
      {areas.map((area, idx) => (
        <section
          key={area.id}
          className={`thematic-area section ${idx % 2 === 1 ? 'section--grey' : ''}`}
          id={area.id}
        >
          <div className="container">
            <div className={`thematic-area__grid ${idx % 2 === 1 ? 'thematic-area__grid--reverse' : ''}`}>
              {/* Content */}
              <div className="thematic-area__content animate-fade-in-up">
                <div className="thematic-area__header">
                  <span className="thematic-area__letter" style={{ color: colorMap[area.color] }}>{area.letter}</span>
                  <div>
                    <span className="thematic-area__icon">{area.icon}</span>
                    <h2 className="thematic-area__title">{area.title}</h2>
                  </div>
                </div>
                <p className="thematic-area__desc">{area.description}</p>

                {/* Focus Areas */}
                <div className="thematic-area__focus">
                  <h4 className="thematic-area__focus-label">Focus Areas</h4>
                  <div className="thematic-area__tags">
                    {area.focusAreas.map(fa => (
                      <span key={fa} className={`tag tag--${area.color}`}>{fa}</span>
                    ))}
                  </div>
                </div>

                {/* Infographic Pathway */}
                <div className="thematic-area__pathway">
                  <h4 className="thematic-area__focus-label">{area.infographic.title}</h4>
                  <div className="pathway">
                    {area.infographic.steps.map((step, i) => (
                      <div key={step} className="pathway__step">
                        <div className={`pathway__node pathway__node--${area.color}`}>
                          {step}
                        </div>
                        {i < area.infographic.steps.length - 1 && (
                          <div className="pathway__arrow">→</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visuals */}
              <div className="thematic-area__visuals animate-fade-in-up delay-2">
                {area.visuals.map((v, i) => (
                  <MediaPlaceholder key={i} label={v} aspectRatio={i === 0 ? '16/10' : '16/9'} />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
