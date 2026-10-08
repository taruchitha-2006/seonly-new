import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Target,
} from 'lucide-react';

function About() {
  const approachPoints = [
    {
      icon: <Target size={19} />,
      title: 'Clear Strategy',
      description: 'Built around your goals.',
    },
    {
      icon: <BarChart3 size={19} />,
      title: 'Measurable Growth',
      description: 'Track what matters.',
    },
    {
      icon: <CheckCircle2 size={19} />,
      title: 'Data-led Decisions',
      description: 'Strategy backed by search insights.',
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-intro">
            <div className="section-label">ABOUT SEOONLY</div>

            <h2>
              Search visibility
              <br />
              <span>built around growth.</span>
            </h2>

            <p>
              SEOOnly helps businesses turn search into reliable visibility,
              qualified traffic, and long-term growth.
            </p>

            <p>
              We combine technical SEO, content strategy, digital authority,
              and modern AI search optimisation around your business goals —
              not just rankings.
            </p>

            <a href="#services" className="text-link">
              Explore Our Services
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="about-performance">
            <div className="performance-card">
              <div className="performance-top">
                <div>
                  <span>SEARCH VISIBILITY</span>
                  <strong>87%</strong>
                </div>

                <div className="performance-badge">
                  +24.8%
                </div>
              </div>

              <div className="performance-chart">
                <div className="chart-line"></div>

                <div className="chart-point point-one"></div>
                <div className="chart-point point-two"></div>
                <div className="chart-point point-three"></div>
                <div className="chart-point point-four"></div>
                <div className="chart-point point-five"></div>
              </div>

              <div className="performance-footer">
                <span>Organic opportunity</span>
                <strong>92%</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="about-approach">
          <div className="approach-heading">
            <span className="section-label">OUR APPROACH</span>
            <h3>
              Strategy first.
              <br />
              Growth always.
            </h3>
          </div>

          <div className="approach-list">
            {approachPoints.map((item) => (
              <div className="approach-item" key={item.title}>
                <div className="approach-icon">{item.icon}</div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;