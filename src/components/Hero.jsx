import { Link } from 'react-router-dom';

function Hero() {
  const handleAuditClick = (event) => {
    event.preventDefault();

    const auditSection = document.getElementById('audit');

    if (auditSection) {
      auditSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero hero-premium">
      <div className="container hero-premium-grid">

        <div className="hero-premium-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot"></span>
            SEARCH VISIBILITY BUILT AROUND GROWTH
          </div>

          <h1 className="hero-premium-title">
            Be found.
            <br />
            <span>Be trusted.</span>
            <br />
            Be chosen.
          </h1>

          <p className="hero-premium-description">
            SEOOnly helps ambitious businesses become more visible across
            Google and the AI-powered search platforms shaping how customers
            discover, compare, and choose.
          </p>

          <div className="hero-premium-actions">
            <a
              href="#audit"
              className="hero-primary-button"
              onClick={handleAuditClick}
            >
              Get Your Free SEO Audit
              <span>↗</span>
            </a>

            <Link
              to="/services"
              className="hero-secondary-button"
            >
              Explore Services
            </Link>
          </div>

          <div className="hero-trust-row">
            <div className="hero-trust-item">
              <span className="hero-trust-number">87%</span>
              <span>visibility score</span>
            </div>

            <div className="hero-trust-divider"></div>

            <div className="hero-trust-item">
              <span className="hero-trust-number">64K</span>
              <span>organic traffic</span>
            </div>

            <div className="hero-trust-divider"></div>

            <div className="hero-trust-item">
              <span className="hero-trust-number">2.8K</span>
              <span>AI mentions</span>
            </div>
          </div>
        </div>

        <div className="hero-premium-visual">

          <div className="hero-visual-backdrop"></div>

          <div className="hero-visual-grid"></div>

          <div className="hero-platform platform-google">
            <span className="platform-badge platform-blue">G</span>
            <div>
              <strong>Google</strong>
              <small>Ranking visibility</small>
            </div>
            <span className="platform-value">+24.8%</span>
          </div>

          <div className="hero-platform platform-chatgpt">
            <span className="platform-badge platform-green">✦</span>
            <div>
              <strong>ChatGPT</strong>
              <small>AI mentions</small>
            </div>
            <span className="platform-value">+42.6%</span>
          </div>

          <div className="hero-platform platform-gemini">
            <span className="platform-badge platform-purple">✧</span>
            <div>
              <strong>Gemini</strong>
              <small>Brand discovery</small>
            </div>
            <span className="platform-dot"></span>
          </div>

          <div className="hero-platform platform-perplexity">
            <span className="platform-badge platform-cyan">P</span>
            <div>
              <strong>Perplexity</strong>
              <small>Answer visibility</small>
            </div>
            <span className="platform-dot"></span>
          </div>

          <div className="hero-dashboard-card">

            <div className="hero-dashboard-top">
              <div>
                <span className="hero-dashboard-label">
                  SEARCH VISIBILITY
                </span>

                <strong className="hero-dashboard-score">
                  87%
                </strong>
              </div>

              <span className="hero-dashboard-live">
                <span></span>
                LIVE
              </span>
            </div>

            <div className="hero-chart">
              <div className="hero-chart-line line-one"></div>
              <div className="hero-chart-line line-two"></div>

              <div className="hero-chart-point point-one"></div>
              <div className="hero-chart-point point-two"></div>
              <div className="hero-chart-point point-three"></div>
              <div className="hero-chart-point point-four"></div>
              <div className="hero-chart-point point-five"></div>
              <div className="hero-chart-point point-six"></div>

              <div className="hero-chart-area"></div>
            </div>

            <div className="hero-dashboard-footer">
              <span>Organic search</span>
              <strong>+24.8%</strong>
            </div>

          </div>

          <div className="hero-ai-card">
            <div className="hero-ai-icon">✦</div>

            <div>
              <span>AI SEARCH</span>
              <strong>Brand mentions</strong>
            </div>

            <div className="hero-ai-number">
              2.8K
              <small>+42.6%</small>
            </div>
          </div>

          <div className="hero-mini-card hero-mini-left">
            <span>TOP POSITION</span>
            <strong>#1</strong>
            <small>High-intent keywords</small>
          </div>

          <div className="hero-mini-card hero-mini-right">
            <span>TRAFFIC</span>
            <strong>64K</strong>
            <small>Organic sessions</small>
          </div>

          <div className="hero-visual-orbit orbit-a"></div>
          <div className="hero-visual-orbit orbit-b"></div>

          <div className="hero-spark spark-a">✦</div>
          <div className="hero-spark spark-b">✧</div>
          <div className="hero-spark spark-c">✦</div>

        </div>
      </div>
    </section>
  );
}

export default Hero;