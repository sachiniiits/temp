/**
 * Single source of truth for every word on the site.
 * Sections import from here so copy can be edited without touching layout.
 */

export const profile = {
  name: 'Sachin Kumar',
  first: 'Sachin',
  last: 'Kumar',
  role: 'Software & AI Engineer',
  location: 'Bengaluru, Karnataka · India',
  institute: 'Indian Institute of Information Technology, Sricity',
  degree: 'B.Tech, Computer Science & Engineering',
  years: '2024 — 2028',
  email: 'sachin.k24@iiits.in',
  github: 'https://github.com/sachiniiits',
  githubHandle: 'github.com/sachiniiits',
  linkedin: 'https://linkedin.com/in/sach975',
  linkedinHandle: 'linkedin.com/in/sach975',

  // Hero — split so individual words can be set in italic gold
  headline: [
    { text: 'Systems that', italic: false },
    { text: 'think,', italic: true },
    { text: 'and interfaces', italic: false },
    { text: 'worth', italic: false },
    { text: 'touching.', italic: true },
  ],

  standfirst:
    'Computer Science undergraduate at IIIT Sricity, working at the seam between applied machine learning and production engineering — multi-agent AI pipelines, behavioural analytics, and full-stack platforms shipped end to end.',

  // Used by the About section. Drop cap is applied to the first paragraph.
  about: [
    'I build in two directions at once. On one side, machine learning that has to survive contact with messy, unlabelled, real-world data — parsing professional esports demos into behavioural features, discovering player archetypes with no ground truth, and refusing to report a result the statistics do not support. On the other, software that people actually use: a decoupled React and headless-CMS platform for a non-profit, written so that staff who have never opened a terminal can publish to it.',
    'The two halves inform each other. Research taught me to distrust a number until it survives a permutation test; engineering taught me that a model nobody can run is a model that does not exist. I care about the seam between them — pipelines, interfaces, and the honest reporting of what a system does and does not do.',
  ],

  facts: [
    { label: 'Institute', value: 'IIIT Sricity' },
    { label: 'Programme', value: 'B.Tech CSE' },
    { label: 'Cohort', value: '2024 — 2028' },
    { label: 'Based in', value: 'Bengaluru, IN' },
  ],
}

export const experience = [
  {
    id: 'janartham',
    org: 'Janartham Foundation',
    orgNote: 'A Section 8, not-for-profit organisation · Lucknow, India',
    role: 'Software Engineering Intern',
    focus: 'Frontend & CMS Development',
    period: '20 May — 19 June 2026',
    year: '2026',
    site: 'https://janartham.org',
    siteLabel: 'janartham.org',
    certificate: '/certificate-of-experience-sachin-kumar.pdf',

    // What the organisation is — so the work has a reason to exist.
    context:
      'Janartham Foundation is a Section 8 non-profit building resilient communities through innovation, inclusion and sustainability — working across sustainable livelihoods, climate resilience, public health, child rights, gender equality, and technology-enabled development. Its public platform had to do two jobs at once: earn the trust of CSR partners evaluating the organisation, and stay editable by a team with no engineering staff.',

    summary:
      'I engineered and shipped the foundation’s public platform end to end — a decoupled architecture pairing a React 19 single-page application with a Strapi v5 headless CMS, so that every programme page, publication and blog post could be maintained by non-technical staff without a developer in the loop.',

    contributions: [
      {
        title: 'Decoupled full-stack architecture',
        body: 'Paired a React 19 + Vite SPA with a Strapi v5 headless CMS consuming RESTful content APIs. Nine content types — programmes, projects, publications, partners, team, blog, contact — modelled in the CMS and rendered generically by the frontend, with PostgreSQL for production persistence and SQLite for local dev parity.',
      },
      {
        title: 'A platform the staff can actually run',
        body: 'Built the CMS-driven blog and content pipeline so non-technical staff publish without touching code, with Cloudinary-backed media handling and graceful fallback content — the site degrades to a fully readable state if the CMS is unreachable, rather than showing an empty page.',
      },
      {
        title: 'The public, partner-facing surface',
        body: 'Delivered the CSR partnership, thematic programme and impact-metrics pages with Framer Motion sequences and a scroll-driven hero — motion used to pace the narrative for CSR evaluators, never for decoration. Deployed the SPA and CMS independently across Vercel and Render.',
      },
    ],

    stack: [
      'React 19',
      'Vite',
      'Framer Motion',
      'React Router',
      'Strapi v5',
      'PostgreSQL',
      'REST API',
      'Cloudinary',
      'Vercel / Render',
    ],

    // Quoted from the certificate of experience.
    testimonial: {
      quote:
        'He demonstrated strong technical proficiency, a diligent work ethic, and a willingness to contribute meaningfully to the organisation’s mission. He contributed significantly to development of the website.',
      author: 'Jyoti Khare',
      title: 'Executive Director, Janartham Foundation',
    },
  },
]

export const projects = [
  {
    id: 'cs2',
    index: '01',
    title: 'CS2 Role Consistency',
    titleItalic: '& Round Outcomes',
    kicker: 'Machine Learning · Research',
    role: 'Author & ML Engineer',
    repo: 'https://github.com/sachiniiits/btp_cs2',
    repoLabel: 'sachiniiits/btp_cs2',

    // The repository's own headline.
    thesis:
      'Measuring behavioural player roles in Counter-Strike 2 with Self-Organizing Maps — and testing whether staying “in role” actually helps you win the round.',

    body: [
      'An end-to-end behavioural analytics pipeline that ingests raw professional Counter-Strike 2 demo files, reconstructs what every player did in every round, and discovers role archetypes without a single labelled example. Nineteen behavioural features per player-round — teammate isolation, engagement timing, opening-duel outcomes, trade kills — feed a per-side Self-Organizing Map that surfaces the roles the game already had but nobody had written down: Aggressor, AWPer, Support Rifler and Lurker on the T side; Site Anchor, Rotating Rifler, Eco and Aggressor on the CT side.',
      'The interesting part is the answer. Consistency and winning do travel together within a half — but once the design is made leakage-free, a team’s prior consistency has no predictive power over the next round at all. The null survives eco-exclusion, taxonomy variation, per-map splits and 100-replicate permutation tests. The causation most likely runs the other way: winning buys you the economy to keep playing your role.',
    ],

    metrics: [
      { value: '76', label: 'Pro maps' },
      { value: '1,652', label: 'Rounds' },
      { value: '16,520', label: 'Player-rounds' },
      { value: '19', label: 'Features' },
    ],

    stack: [
      'Python',
      'demoparser2',
      'MiniSom',
      'scikit-learn',
      'pandas',
      'SciPy',
      'statsmodels',
      'Parquet',
    ],
  },
  {
    id: 'engine',
    index: '02',
    title: 'Autonomous Multi-Agent',
    titleItalic: 'Game Engine',
    kicker: 'Generative AI · Systems',
    role: 'Author & AI / Backend Engineer',
    repo: 'https://github.com/sachiniiits/AI_Game_Engine',
    repoLabel: 'sachiniiits/AI_Game_Engine',

    thesis:
      'A multi-agent AI system that autonomously researches, designs, codes and validates a playable Phaser.js game from a single line of text.',

    body: [
      'Five specialist agents run in sequence, each receiving the full upstream context so no stage has to guess at what the last one meant. Research establishes the mechanics and conventions of the genre. Script turns them into a design blueprint. Logic does the part that language models are worst at — spatial reasoning and game math — and emits typed pseudocode plus a draw manifest, so the Coding agent is never asked to invent geometry and generate JavaScript syntax in the same breath.',
      'The Validator closes the loop: it statically analyses the generated code for syntax errors, missing assets and framework API violations, and re-drives the pipeline up to three times until the artefact is correct. What comes out is a single zero-dependency game.html that opens in a browser with no server, no build step and nothing to install.',
    ],

    pipeline: ['Research', 'Script', 'Logic', 'Coding', 'Validator'],

    stack: ['Python', 'google-genai', 'Gemini 2.5 Pro / Flash', 'Phaser.js', 'HTML5'],
  },
]

export const skills = [
  {
    n: '01',
    group: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript (ES2024)', 'Go', 'Rust', 'Dart', 'SQL'],
  },
  {
    n: '02',
    group: 'AI & Machine Learning',
    items: [
      'PyTorch',
      'scikit-learn',
      'NumPy · pandas · SciPy',
      'Multi-agent orchestration',
      'LLM APIs (Gemini, Claude)',
      'Transformers',
      'LoRA / QLoRA fine-tuning',
      'RAG',
      'Self-Organizing Maps',
      'Clustering (KMeans, GMM, HDBSCAN)',
      'Diffusion models · GANs · VAEs',
      'Reinforcement learning (DQN, PPO)',
      'Model evaluation',
    ],
  },
  {
    n: '03',
    group: 'Frontend',
    items: [
      'React 19',
      'Next.js',
      'Vite',
      'Tailwind CSS',
      'Framer Motion',
      'React Native',
      'Flutter',
      'Redux Toolkit',
      'React Query',
    ],
  },
  {
    n: '04',
    group: 'Backend & APIs',
    items: [
      'Node.js',
      'Express',
      'Fastify',
      'FastAPI',
      'GraphQL',
      'REST',
      'WebSockets',
      'Strapi v5 (headless CMS)',
      'Kafka',
      'BullMQ · RabbitMQ',
    ],
  },
  {
    n: '05',
    group: 'Data & Storage',
    items: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'ClickHouse',
      'SQLite',
      'Prisma',
      'Parquet',
      'pgvector',
    ],
  },
  {
    n: '06',
    group: 'Infrastructure',
    items: [
      'Docker',
      'Kubernetes',
      'GitHub Actions (CI/CD)',
      'AWS (EC2, S3, Lambda, CloudFront)',
      'NGINX',
      'Vercel · Render',
      'Linux',
    ],
  },
  {
    n: '07',
    group: 'Practice',
    items: [
      'System design',
      'Microservices',
      'Event-driven architecture',
      'API design',
      'Testing (Jest, Vitest, Playwright)',
      'Agile / Scrum',
    ],
  },
]

export const nav = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]
