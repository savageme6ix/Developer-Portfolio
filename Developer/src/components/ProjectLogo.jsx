const logos = {
  perfume: (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="24" y="8" width="16" height="10" rx="3" fill="currentColor" opacity="0.35" />
      <path d="M28 18 L32 28 L36 18 Z" fill="currentColor" opacity="0.5" />
      <rect x="22" y="28" width="20" height="28" rx="8" fill="currentColor" />
      <ellipse cx="32" cy="48" rx="6" ry="4" fill="white" opacity="0.25" />
      <circle cx="38" cy="14" r="3" fill="currentColor" opacity="0.6" />
    </svg>
  ),
  resume: (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="16" y="10" width="32" height="44" rx="5" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
      <line x1="22" y1="22" x2="42" y2="22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="22" y1="30" x2="38" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <line x1="22" y1="38" x2="40" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <path d="M40 44 L46 50 L54 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="48" cy="16" r="6" fill="currentColor" opacity="0.35" />
      <path d="M46 16 L48 18 L52 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  movie: (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="10" y="18" width="44" height="32" rx="4" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
      <polygon points="28,28 28,40 40,34" fill="currentColor" />
      <rect x="6" y="22" width="6" height="24" rx="2" fill="currentColor" />
      <rect x="52" y="22" width="6" height="24" rx="2" fill="currentColor" />
      <circle cx="9" cy="26" r="2" fill="white" opacity="0.5" />
      <circle cx="9" cy="34" r="2" fill="white" opacity="0.5" />
      <circle cx="9" cy="42" r="2" fill="white" opacity="0.5" />
      <circle cx="55" cy="26" r="2" fill="white" opacity="0.5" />
      <circle cx="55" cy="34" r="2" fill="white" opacity="0.5" />
      <circle cx="55" cy="42" r="2" fill="white" opacity="0.5" />
    </svg>
  ),
  amazon: (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M14 22 H50 L46 46 H18 Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M22 22 L32 14 L42 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 50 Q32 58 46 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <line x1="46" y1="50" x2="50" y2="48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  recipe: (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <ellipse cx="32" cy="40" rx="20" ry="10" fill="currentColor" opacity="0.25" />
      <path d="M16 40 Q32 52 48 40" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="32" y1="40" x2="32" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 18 Q32 10 40 18" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="44" cy="24" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="20" cy="30" r="3" fill="currentColor" opacity="0.4" />
    </svg>
  ),
  job: (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="12" y="22" width="40" height="30" rx="4" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
      <path d="M22 22 V18 Q22 12 32 12 Q42 12 42 18 V22" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="20" y1="34" x2="44" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <line x1="20" y1="42" x2="36" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <circle cx="46" cy="16" r="8" fill="currentColor" opacity="0.35" />
      <path d="M43 16 L45 18 L49 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function ProjectLogo({ type }) {
  return logos[type] ?? logos.job;
}
