import './SectionHeader.css';

export default function SectionHeader({ tag, title, subtitle, align = 'center', light = false }) {
  return (
    <div className={`section-header section-header--${align} ${light ? 'section-header--light' : ''}`}>
      {tag && <span className="section-header__tag">{tag}</span>}
      <h2 className="section-header__title">{title}</h2>
      <div className={`decorative-line decorative-line--${align}`}></div>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </div>
  );
}
