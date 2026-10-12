import { Link } from 'react-router-dom';
import './Logo.css';

function Logo({ onClick }) {
  return (
    <Link
      to="/"
      className="seoonly-brand"
      aria-label="SEOOnly home"
      onClick={onClick}
    >
      <svg
        className="seoonly-brand-mark"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Growth bars */}
        <rect x="4" y="29" width="9" height="14" rx="2" fill="#F52F82" />
        <rect x="17" y="22" width="9" height="21" rx="2" fill="#FFD447" />
        <rect x="30" y="13" width="9" height="30" rx="2" fill="#F52F82" />

        {/* Upward growth arrow */}
        <path
          d="M5 24L17 16L26 19L41 5"
          stroke="#111A2F"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M29 5H41V17"
          stroke="#111A2F"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Yellow highlight */}
        <path
          d="M38 3L42 7"
          stroke="#FFD447"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <span className="seoonly-brand-text">
        <span className="seoonly-brand-name">
          <span>SEO</span>
          <span className="seoonly-brand-accent">ONLY</span>
        </span>

        <span className="seoonly-brand-tagline">
          MORE VISIBILITY. MORE GROWTH.
        </span>
      </span>
    </Link>
  );
}

export default Logo;