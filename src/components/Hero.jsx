import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="section-label">
            SEARCH VISIBILITY BUILT AROUND GROWTH
          </div>

          <h1>
            Be found.
            <br />
            Be trusted.
            <br />
            Be chosen.
          </h1>

          <p>
            SEOOnly helps ambitious businesses turn search into
            reliable visibility, qualified traffic, and
            long-term growth.
          </p>

          <div className="hero-actions">
            <Link
              to="/"
              className="hero-primary-button"
              onClick={() => {
                setTimeout(() => {
                  document
                    .getElementById('audit')
                    ?.scrollIntoView({
                      behavior: 'smooth',
                    });
                }, 100);
              }}
            >
              Get Your Free SEO Audit
              <span>↗</span>
            </Link>

            <Link
              to="/services"
              className="hero-secondary-button"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;