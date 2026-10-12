import { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  FileText,
  Gauge,
  Search,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

import './SeoAudit.css';

const auditDetails = {
  'Technical SEO': {
    icon: Gauge,
    summary: 'Your website foundation',
    description:
      'Technical SEO helps search engines discover, crawl, and understand your website.',
    items: [
      'Check whether important pages can be indexed.',
      'Review mobile usability and page speed.',
      'Look for broken links and technical errors.',
    ],
  },
  'Content Quality': {
    icon: FileText,
    summary: 'Helpful, relevant content',
    description:
      'Useful content answers customer questions clearly and makes your services easy to understand.',
    items: [
      'Make page titles and headings clear.',
      'Answer the questions your customers ask.',
      'Review content accuracy and internal links.',
    ],
  },
  'AI Search Visibility': {
    icon: Sparkles,
    summary: 'Ready for evolving search',
    description:
      'Clear, well-structured information can help AI-powered search tools understand your brand and services.',
    items: [
      'Describe your services consistently.',
      'Create clear answers to common questions.',
      'Use structured information where appropriate.',
    ],
  },
  'Authority Signals': {
    icon: ShieldCheck,
    summary: 'Trust and credibility',
    description:
      'Trust signals help visitors and search systems understand your expertise and reputation.',
    items: [
      'Show genuine customer reviews and testimonials.',
      'Keep business and contact details consistent.',
      'Highlight relevant experience and credentials.',
    ],
  },
};

function SeoAudit() {
  const [website, setWebsite] = useState('');
  const [audit, setAudit] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [expandedCheck, setExpandedCheck] = useState(null);

  const handleAudit = async (event) => {
    event.preventDefault();

    if (!website.trim()) {
      setError('Please enter your website URL.');
      setAudit(null);
      return;
    }

    setLoading(true);
    setError('');
    setAudit(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/audit`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            website: website.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong.');
      }

      setAudit(data.audit);
      setExpandedCheck(null);
    } catch (err) {
      setError(
        err.message || 'Unable to connect to the SEOOnly backend.'
      );
    } finally {
      setLoading(false);
    }
  };

  const checks = audit
    ? [
        { label: 'Technical SEO', status: audit.technicalSeo },
        { label: 'Content Quality', status: audit.contentQuality },
        {
          label: 'AI Search Visibility',
          status: audit.aiSearchVisibility,
        },
        {
          label: 'Authority Signals',
          status: audit.authoritySignals,
        },
      ]
    : [
        { label: 'Technical SEO', status: 'Good' },
        { label: 'Content Quality', status: 'Good' },
        { label: 'AI Search Visibility', status: 'Improve' },
        { label: 'Authority Signals', status: 'Improve' },
      ];

  const scoreValue = Number(audit?.seoHealth ?? 78);
  const score = Number.isFinite(scoreValue)
    ? Math.min(100, Math.max(0, scoreValue))
    : 78;

  const scoreDescription =
    score >= 75
      ? 'Good foundation'
      : score >= 50
        ? 'Room to improve'
        : 'Needs attention';

  return (
    <section className="seo-audit" id="audit">
      <div className="container">
        <div className="audit-layout">
          <div className="audit-content">
            <div className="audit-eyebrow">
              <span className="audit-eyebrow-dot" />
              FREE SEO AUDIT
            </div>

            <h2>
              Find out why your
              <br />
              <span>competitors are winning.</span>
            </h2>

            <p className="audit-description">
              Get a clear snapshot of your website's search performance,
              technical foundation, content quality, and AI search visibility.
            </p>

            <form className="audit-form" onSubmit={handleAudit}>
              <label className="audit-input-wrap">
                <Search size={18} aria-hidden="true" />

                <input
                  type="url"
                  placeholder="https://yourwebsite.com"
                  aria-label="Website URL"
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                  required
                />
              </label>

              <button type="submit" disabled={loading}>
                {loading ? 'Analysing...' : 'Analyse My Website'}
                {!loading && <ArrowUpRight size={18} />}
              </button>
            </form>

            {error && (
              <p className="audit-message audit-error" role="alert">
                {error}
              </p>
            )}

            {audit && !error && (
              <p className="audit-message audit-success" role="status">
                <Check size={16} />
                Audit completed successfully
              </p>
            )}

            <div className="audit-note">
              <ShieldCheck size={17} />
              <span>No credit card required</span>
              <span className="audit-note-separator">·</span>
              <span>Clear insights</span>
            </div>

            <div className="audit-mini-note">
              <span className="audit-mini-sparkle">
                <Sparkles size={16} />
              </span>
              <span>
                <strong>Small steps, stronger visibility.</strong>
                <small>Explore each card to learn more.</small>
              </span>
            </div>
          </div>

          <div className="audit-visual-wrap">
            <div className="audit-float-card audit-float-top">
              <span className="audit-float-icon blue">
                <Sparkles size={17} />
              </span>
              <span>
                <strong>Search insights</strong>
                <small>Know what to review</small>
              </span>
            </div>

            <div className="audit-preview">
              <div className="audit-preview-top">
                <div>
                  <span className="audit-preview-label">
                    AUDIT PREVIEW
                  </span>
                  <span className="audit-preview-subtitle">
                    Your website health
                  </span>
                </div>

                <span className="audit-live">
                  <span />
                  {audit ? 'COMPLETE' : 'DEMO'}
                </span>
              </div>

              <div className="audit-score">
                <div
                  className="score-circle"
                  style={{ '--score': `${score}%` }}
                  role="img"
                  aria-label={`SEO health score: ${score} out of 100`}
                >
                  <div className="score-circle-inner">
                    <strong>{score}</strong>
                    <span>/100</span>
                  </div>
                </div>

                <div className="score-copy">
                  <span className="score-label">SEO Health Score</span>
                  <strong className="score-status">
                    {scoreDescription}
                  </strong>
                  <span className="score-helper">
                    {audit ? 'Your audit result' : 'Example audit result'}
                  </span>
                </div>
              </div>

              <div className="audit-cards-heading">
                <span>Explore the audit</span>
                <span>Click a card to expand</span>
              </div>

              <div className="audit-checks">
                {checks.map((check, index) => {
                  const detail = auditDetails[check.label];
                  const Icon = detail.icon;
                  const isExpanded = expandedCheck === check.label;
                  const isGood = check.status === 'Good';
                  const detailId = `audit-detail-${index}`;

                  return (
                    <div
                      className={`audit-check-card audit-card-${index + 1}${
                        isExpanded ? ' is-expanded' : ''
                      }`}
                      key={check.label}
                    >
                      <button
                        className="audit-check-trigger"
                        type="button"
                        aria-expanded={isExpanded}
                        aria-controls={detailId}
                        onClick={() =>
                          setExpandedCheck(
                            isExpanded ? null : check.label
                          )
                        }
                      >
                        <span className="audit-check-icon">
                          <Icon size={20} />
                        </span>

                        <span className="audit-check-copy">
                          <strong>{check.label}</strong>
                          <small>{detail.summary}</small>
                        </span>

                        <span
                          className={`check-status ${
                            isGood ? 'good' : 'improve'
                          }`}
                        >
                          <span className="check-status-dot" />
                          {check.status}
                        </span>

                        <ChevronDown
                          className={`audit-chevron${
                            isExpanded ? ' rotated' : ''
                          }`}
                          size={18}
                        />
                      </button>

                      {isExpanded && (
                        <div
                          className="audit-check-details"
                          id={detailId}
                        >
                          <p>{detail.description}</p>

                          <span className="audit-details-label">
                            WHAT TO REVIEW
                          </span>

                          <ul>
                            {detail.items.map((item) => (
                              <li key={item}>
                                <Check size={15} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="audit-potential">
                <div className="audit-potential-heading">
                  <span>Search visibility score</span>
                  <strong>{score}%</strong>
                </div>

                <div
                  className="potential-bar"
                  role="progressbar"
                  aria-label="SEO health score"
                  aria-valuenow={score}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span style={{ width: `${score}%` }} />
                </div>
                <small>
                  {audit
                    ? 'Based on the returned audit result.'
                    : 'Illustrative preview — run an audit for your results.'}
                </small>
              </div>
            </div>

            <div className="audit-float-card audit-float-bottom">
              <span className="audit-float-icon green">
                <ShieldCheck size={17} />
              </span>
              <span>
                <strong>Build with confidence</strong>
                <small>One improvement at a time</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeoAudit;