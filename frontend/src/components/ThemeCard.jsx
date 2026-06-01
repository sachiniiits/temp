import './ThemeCard.css';

export default function ThemeCard({ icon, title, description, color = 'green', delay = 0 }) {
  return (
    <div
      className={`theme-card theme-card--${color} animate-fade-in-up`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="theme-card__icon-wrap">
        <span className="theme-card__icon" aria-hidden="true">{icon}</span>
      </div>
      <h3 className="theme-card__title">{title}</h3>
      <p className="theme-card__desc">{description}</p>
    </div>
  );
}
