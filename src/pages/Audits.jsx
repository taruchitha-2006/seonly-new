import { useEffect, useState } from 'react';

function Audits() {
  const [audits, setAudits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAudits = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/audits`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || 'Unable to load audits.'
          );
        }

        setAudits(data.audits);
      } catch (err) {
        setError(
          err.message ||
            'Unable to connect to the SEOOnly backend.'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAudits();
  }, []);

  return (
    <section className="audits-page">
      <div className="container">
        <div className="audits-header">
          <div>
            <span className="section-label">
              SEO AUDITS
            </span>

            <h1>Saved SEO Audit Requests</h1>

            <p>
              View website audit requests submitted through
              the SEOOnly website.
            </p>
          </div>

          <div className="audits-count">
            <strong>{audits.length}</strong>
            <span>Total Audits</span>
          </div>
        </div>

        {loading && (
          <div className="audits-message">
            Loading audit records...
          </div>
        )}

        {error && (
          <div className="audits-message audits-error">
            {error}
          </div>
        )}

        {!loading && !error && audits.length === 0 && (
          <div className="audits-message">
            No audit requests have been submitted yet.
          </div>
        )}

        {!loading && !error && audits.length > 0 && (
          <div className="audits-table-wrapper">
            <table className="audits-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Website</th>
                  <th>SEO Health</th>
                  <th>Technical SEO</th>
                  <th>Content</th>
                  <th>AI Visibility</th>
                  <th>Authority</th>
                  <th>Created</th>
                </tr>
              </thead>

              <tbody>
                {audits.map((audit) => (
                  <tr key={audit.id}>
                    <td>#{audit.id}</td>

                    <td>
                      <span className="audit-website">
                        {audit.website}
                      </span>
                    </td>

                    <td>
                      <strong>
                        {audit.seo_health}/100
                      </strong>
                    </td>

                    <td>
                      <span
                        className={
                          audit.technical_seo === 'Good'
                            ? 'audit-status good'
                            : 'audit-status improve'
                        }
                      >
                        {audit.technical_seo}
                      </span>
                    </td>

                    <td>
                      <span
                        className={
                          audit.content_quality === 'Good'
                            ? 'audit-status good'
                            : 'audit-status improve'
                        }
                      >
                        {audit.content_quality}
                      </span>
                    </td>

                    <td>
                      <span
                        className={
                          audit.ai_search_visibility === 'Good'
                            ? 'audit-status good'
                            : 'audit-status improve'
                        }
                      >
                        {audit.ai_search_visibility}
                      </span>
                    </td>

                    <td>
                      <span
                        className={
                          audit.authority_signals === 'Good'
                            ? 'audit-status good'
                            : 'audit-status improve'
                        }
                      >
                        {audit.authority_signals}
                      </span>
                    </td>

                    <td>
                      {new Date(
                        audit.created_at
                      ).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

export default Audits;