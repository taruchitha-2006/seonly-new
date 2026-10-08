import { useState } from 'react';

function SeoAudit() {
  const [website, setWebsite] = useState('');
  const [audit, setAudit] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
        throw new Error(
          data.message || 'Something went wrong.'
        );
      }

      setAudit(data.audit);
    } catch (err) {
      setError(
        err.message ||
          'Unable to connect to the SEOOnly backend.'
      );
    } finally {
      setLoading(false);
    }
  };

  const checks = audit
    ? [
        {
          label: 'Technical SEO',
          status: audit.technicalSeo,
        },
        {
          label: 'Content Quality',
          status: audit.contentQuality,
        },
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
        {
          label: 'Technical SEO',
          status: 'Good',
        },
        {
          label: 'Content Quality',
          status: 'Good',
        },
        {
          label: 'AI Search Visibility',
          status: 'Improve',
        },
        {
          label: 'Authority Signals',
          status: 'Improve',
        },
      ];

  return (
    <section className="seo-audit" id="audit">
      <div className="container">
        <div className="audit-layout">
          <div className="audit-content">
            <div className="section-label">
              FREE SEO AUDIT
            </div>

            <h2>
              Find out why your
              <br />
              competitors are winning.
            </h2>

            <p>
              Get a clear snapshot of your website's search
              performance, technical foundation, content
              quality, and AI search visibility.
            </p>

            <form
              className="audit-form"
              onSubmit={handleAudit}
            >
              <input
                type="url"
                placeholder="Enter your website URL"
                aria-label="Website URL"
                value={website}
                onChange={(event) =>
                  setWebsite(event.target.value)
                }
              />

              <button
                type="submit"
                disabled={loading}
              >
                {loading
                  ? 'Analysing...'
                  : 'Analyse My Website'}

                <span>↗</span>
              </button>
            </form>

            {error && (
              <p className="audit-error">
                {error}
              </p>
            )}

            {audit && !error && (
              <p className="audit-success">
                ✓ Audit completed successfully
              </p>
            )}

            <div className="audit-note">
              <span>✓</span>
              No credit card required
            </div>
          </div>

          <div className="audit-preview">
            <div className="audit-preview-top">
              <div>
                <span className="audit-preview-label">
                  AUDIT PREVIEW
                </span>

                <span className="audit-preview-subtitle">
                  Website health overview
                </span>
              </div>

              <span className="audit-live">
                LIVE
              </span>
            </div>

            <div className="audit-score">
              <div className="score-circle">
                <strong>
                  {audit ? audit.seoHealth : '78'}
                </strong>

                <span>/100</span>
              </div>

              <div>
                <span className="score-label">
                  SEO Health Score
                </span>

                <strong className="score-status">
                  Good foundation
                </strong>
              </div>
            </div>

            <div className="audit-checks">
              {checks.map((check) => (
                <div
                  className="audit-check"
                  key={check.label}
                >
                  <div className="audit-check-name">
                    <span
                      className={
                        check.status === 'Good'
                          ? 'check-icon good'
                          : 'check-icon improve'
                      }
                    >
                      {check.status === 'Good'
                        ? '✓'
                        : '!'}
                    </span>

                    <span>{check.label}</span>
                  </div>

                  <span
                    className={
                      check.status === 'Good'
                        ? 'check-status good'
                        : 'check-status improve'
                    }
                  >
                    {check.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="audit-potential">
              <div>
                <span>
                  Search visibility potential
                </span>

                <strong>
                  {audit
                    ? `${audit.seoHealth}%`
                    : '78%'}
                </strong>
              </div>

              <div className="potential-bar">
                <span
                  style={{
                    width: `${
                      audit ? audit.seoHealth : 78
                    }%`,
                  }}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeoAudit;