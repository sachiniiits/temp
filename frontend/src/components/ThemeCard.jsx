import './ThemeCard.css';

export default function ThemeCard({ title, description, color = 'green', delay = 0 }) {
  return (
    <div
      className={`theme-card theme-card--${color} animate-fade-in-up`}
      style={{ animationDelay: `${delay}s` }}
    >
      <h3 className="theme-card__title">{title}</h3>
      <p className="theme-card__desc">{description}</p>
    </div>
  );
}
