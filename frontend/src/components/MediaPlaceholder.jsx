import './MediaPlaceholder.css';

export default function MediaPlaceholder({ label, aspectRatio = '16/9', type = 'image' }) {
  return (
    <div
      className="media-placeholder"
      style={{ aspectRatio }}
      role="img"
      aria-label={`Placeholder for ${type}: ${label}`}
    >
      <div className="media-placeholder__icon">
        {type === 'video' ? (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="2" />
            <polygon points="20,16 34,24 20,32" fill="currentColor" />
          </svg>
        ) : (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="16" cy="20" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M4 32 L16 24 L24 30 L32 20 L44 30 L44 36 C44 38.2 42.2 40 40 40 L8 40 C5.8 40 4 38.2 4 36 Z" fill="currentColor" opacity="0.2" />
          </svg>
        )}
      </div>
      <span className="media-placeholder__label">{label}</span>
      <span className="media-placeholder__type">{type === 'video' ? '📹 Video' : '📷 Image'} Placeholder</span>
    </div>
  );
}
