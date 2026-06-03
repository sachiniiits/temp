import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import MediaPlaceholder from '../components/MediaPlaceholder';
import './AdvocacyBlogs.css';

const categories = [
  'All',
  'Climate Action',
  'WASH & Public Health',
  'Gender & Inclusion',
  'Child Rights',
  'Rural Livelihoods',
  'CSR & ESG',
  'Digital Development',
];

const blogs = [
  {
    title: 'Why Climate Resilience Must Begin at the Community Level',
    category: 'Climate Action',
    excerpt: 'Exploring how grassroots adaptation strategies can build lasting resilience against climate impacts in vulnerable communities across India.',
    tag: 'green',
  },
  {
    title: 'Bridging India\'s Digital Divide Through Inclusive Education',
    category: 'Digital Development',
    excerpt: 'How technology-enabled learning environments can transform educational outcomes for children in underserved areas.',
    tag: 'blue',
  },
  {
    title: 'Women-led Enterprises as Catalysts of Rural Transformation',
    category: 'Gender & Inclusion',
    excerpt: 'Examining the multiplier effect of women\'s economic empowerment on community development and social progress.',
    tag: 'brown',
  },
  {
    title: 'Urban Micro Forests and the Future of Sustainable Cities',
    category: 'Climate Action',
    excerpt: 'How urban micro forests using the Miyawaki method are creating biodiversity havens and improving air quality in Indian cities.',
    tag: 'green',
  },
  {
    title: 'The Role of Data in Social Impact Programs',
    category: 'CSR & ESG',
    excerpt: 'Why data-driven approaches to program design, monitoring, and evaluation are essential for maximizing social impact and donor confidence.',
    tag: 'yellow',
  },
];

export default function AdvocacyBlogs() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? blogs
    : blogs.filter(b => b.category === activeCategory);

  return (
    <main className="blogs-page" id="advocacy-blogs-page">
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
            <span className="hero__badge hero__badge--light animate-fade-in">Insights & Perspectives</span>
            <h1 className="page-hero__title animate-fade-in-up">Advocacy & Blogs</h1>
            <p className="page-hero__subtitle animate-fade-in-up delay-1">
              Thought leadership on sustainable development, community resilience, and social innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="section" id="blog-listing">
        <div className="container">
          {/* Category Filters */}
          <div className="blog-filters animate-fade-in-up">
            {categories.map(cat => (
              <button
                key={cat}
                className={`blog-filter-btn ${activeCategory === cat ? 'blog-filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="blog-grid">
            {filtered.map((blog, i) => (
              <article key={i} className={`blog-card card animate-fade-in-up delay-${(i % 3) + 1}`}>
                <div className="blog-card__img">
                  <MediaPlaceholder label={`Featured image for: ${blog.title}`} aspectRatio="16/10" />
                </div>
                <div className="blog-card__body">
                  <span className={`tag tag--${blog.tag}`}>{blog.category}</span>
                  <h3 className="blog-card__title">{blog.title}</h3>
                  <p className="blog-card__excerpt">{blog.excerpt}</p>
                  <span className="blog-card__link">
                    Read More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="blog-empty">
              <p>No posts found in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
