
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Code2,
  Heart,
  Search,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import './CaseStudies.css';

const caseStudies = [
  {
    number: '01',
    industry: 'Ecommerce',
    title: 'Turning product searches into opportunities.',
    result: '+186%',
    metric: 'Organic traffic growth',
    description:
      'An example strategy focused on product discovery, category optimisation, and reaching customers with relevant search intent.',
    icon: ShoppingBag,
    theme: 'pink',
    bars: [24, 33, 29, 48, 56, 72, 91],
  },
  {
    number: '02',
    industry: 'Technology',
    title: 'Building visibility in a competitive market.',
    result: '+142%',
    metric: 'Search visibility growth',
    description:
      'An example strategy combining technical SEO, useful content, and authority building to uncover new opportunities.',
    icon: Code2,
    theme: 'purple',
    bars: [20, 35, 40, 36, 60, 71, 89],
  },
  {
    number: '03',
    industry: 'Professional services',
    title: 'Connecting search with real business needs.',
    result: '+97%',
    metric: 'Qualified leads growth',
    description:
      'An example strategy centred on local discovery, service visibility, and connecting with high-intent audiences.',
    icon: Building2,
    theme: 'yellow',
    bars: [18, 28, 39, 46, 43, 68, 86],
  },
];

const approach = [
  {
    number: '01',
    title: 'Find the opportunity',
    text: 'Understand your audience, current visibility, competitors, and the gaps worth addressing.',
    icon: Search,
    theme: 'pink',
  },
  {
    number: '02',
    title: 'Build the strategy',
    text: 'Bring technical improvements, content, and search intent together in one clear plan.',
    icon: Target,
    theme: 'purple',
  },
  {
    number: '03',
    title: 'Measure and improve',
    text: 'Monitor the right signals, learn from performance, and refine the strategy over time.',
    icon: TrendingUp,
    theme: 'green',
  },
];

function CaseStudies() {
  return (
    <main className="case-studies-page">
      {/* HERO */}

      <section className="cs-pro-hero">
        <div className="cs-pro-container cs-pro-hero-grid">
          <div className="cs-pro-hero-copy">
            <div className="cs-pro-eyebrow">
              <span className="cs-pro-eyebrow-dot" />
              SEOONLY / CASE STUDIES
              <Sparkles size={15} />
            </div>

            <h1>
              Good strategy.
              <br />
              <span>Meaningful growth.</span>
            </h1>

            <p>
              Search performance is about more than rankings. It is about
              helping the right people discover your business and creating
              opportunities that matter.
            </p>

            <div className="cs-pro-hero-actions">
              <a href="#cs-pro-results" className="cs-pro-primary">
                Explore the results
                <ArrowUpRight size={18} />
              </a>

              <Link to="/contact" className="cs-pro-secondary">
                Let's talk
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="cs-pro-trust">
              <CheckCircle2 size={17} />
              <span>Thoughtful strategy. Measurable objectives.</span>
            </div>
          </div>

          {/* Editorial search-performance visual */}

          <div className="cs-pro-feature-visual">
            <span className="cs-pro-heart cs-pro-heart-one">♡</span>
            <span className="cs-pro-heart cs-pro-heart-two">♥</span>
            <span className="cs-pro-spark cs-pro-spark-one">✦</span>
            <span className="cs-pro-spark cs-pro-spark-two">✧</span>

            <div className="cs-pro-feature-card">
              <div className="cs-pro-feature-top">
                <div>
                  <span>SEARCH PERFORMANCE</span>
                  <h2>Growth, over time.</h2>
                </div>

                <div className="cs-pro-feature-icon">
                  <TrendingUp size={21} />
                </div>
              </div>

              <div className="cs-pro-feature-stat">
                <strong>Visibility</strong>
                <span>
                  <TrendingUp size={15} />
                  Progress tracked
                </span>
              </div>

              <div className="cs-pro-feature-chart">
                <div className="cs-pro-chart-line" />
                <div className="cs-pro-chart-line" />
                <div className="cs-pro-chart-line" />

                <svg
                  viewBox="0 0 480 170"
                  preserveAspectRatio="none"
                  aria-label="Illustrative upward search performance chart"
                  role="img"
                >
                  <defs>
                    <linearGradient
                      id="caseStudyArea"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#d38caf"
                        stopOpacity=".32"
                      />
                      <stop
                        offset="100%"
                        stopColor="#d38caf"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0 145 C42 140 48 116 91 125 S148 133 180 95 S238 111 274 78 S330 91 365 47 S431 59 480 15 L480 170 L0 170 Z"
                    fill="url(#caseStudyArea)"
                  />

                  <path
                    d="M0 145 C42 140 48 116 91 125 S148 133 180 95 S238 111 274 78 S330 91 365 47 S431 59 480 15"
                    fill="none"
                    stroke="#bd6c96"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="cs-pro-chart-path"
                  />

                  <circle cx="365" cy="47" r="6" fill="#bd6c96" />
                  <circle cx="365" cy="47" r="12" fill="#bd6c9625" />
                </svg>
              </div>

              <div className="cs-pro-chart-labels">
                <span>RESEARCH</span>
                <span>OPTIMISE</span>
                <span>GROW</span>
              </div>

              <div className="cs-pro-feature-footer">
                <span className="cs-pro-live-dot" />
                A strategy built around your goals
                <Heart size={16} />
              </div>
            </div>

            <div className="cs-pro-float-chip cs-pro-chip-top">
              <span><Search size={17} /></span>
              <div>
                <strong>Discover</strong>
                <small>Find opportunities</small>
              </div>
            </div>

            <div className="cs-pro-float-chip cs-pro-chip-bottom">
              <span><BarChart3 size={17} /></span>
              <div>
                <strong>Keep improving</strong>
                <small>Measure progress</small>
              </div>
            </div>

            <div className="cs-pro-visual-caption">
              Search insights <span>•</span> Stronger decisions
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}

      <section className="cs-pro-results" id="cs-pro-results">
        <div className="cs-pro-container">
          <div className="cs-pro-section-heading">
            <div>
              <div className="cs-pro-eyebrow">
                <span className="cs-pro-eyebrow-dot" />
                EXAMPLES OF GROWTH
              </div>

              <h2>
                Different challenges.
                <br />
                <span>Clear direction.</span>
              </h2>
            </div>

            <p>
              Every business has different goals. Explore these illustrative
              examples of how focused SEO strategies can address different
              growth objectives.
            </p>
          </div>

          <div className="cs-pro-card-grid">
            {caseStudies.map((study) => {
              const Icon = study.icon;

              return (
                <article
                  className={`cs-pro-result-card cs-pro-${study.theme}`}
                  key={study.number}
                >
                  <div className="cs-pro-card-top">
                    <span className="cs-pro-card-number">
                      {study.number}
                    </span>

                    <span className="cs-pro-industry">
                      {study.industry}
                    </span>
                  </div>

                  <div className="cs-pro-card-visual">
                    <div className="cs-pro-card-orbit" />

                    <div className="cs-pro-card-main-icon">
                      <Icon size={30} strokeWidth={1.8} />
                    </div>

                    <span className="cs-pro-card-heart">♡</span>
                    <span className="cs-pro-card-star">✦</span>

                    <div className="cs-pro-mini-bars">
                      {study.bars.map((height, index) => (
                        <i
                          key={index}
                          style={{
                            '--bar-height': `${height}%`,
                            animationDelay: `${index * 0.1}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="cs-pro-result-metric">
                    <strong>{study.result}</strong>
                    <span>{study.metric}</span>
                  </div>

                  <h3>{study.title}</h3>

                  <p className="cs-pro-card-description">
                    {study.description}
                  </p>

                  <div className="cs-pro-card-footer">
                    <span>
                      <CheckCircle2 size={16} />
                      Strategy-led approach
                    </span>

                    <Link
                      to="/contact"
                      className="cs-pro-card-link"
                      aria-label={`Discuss ${study.industry} SEO`}
                    >
                      <ArrowUpRight size={19} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="cs-pro-disclaimer">
            Illustrative figures for the website redesign only. Replace them
            with verified client results before presenting them as actual
            achievements.
          </p>
        </div>
      </section>

      {/* APPROACH */}

      <section className="cs-pro-approach">
        <div className="cs-pro-container">
          <div className="cs-pro-approach-heading">
            <div>
              <div className="cs-pro-eyebrow">
                <span className="cs-pro-eyebrow-dot" />
                THE METHOD BEHIND THE METRICS
              </div>

              <h2>
                Growth isn't guesswork.
                <br />
                <span>It's a process.</span>
              </h2>
            </div>

            <p>
              Behind every meaningful improvement is a sequence of informed
              decisions, consistent work, and learning.
            </p>
          </div>

          <div className="cs-pro-approach-grid">
            {approach.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  className={`cs-pro-approach-card cs-pro-approach-${step.theme}`}
                  key={step.number}
                >
                  <div className="cs-pro-approach-card-top">
                    <span>{step.number}</span>

                    <div>
                      <Icon size={23} />
                    </div>
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.text}</p>

                  <div className="cs-pro-approach-footer">
                    <Sparkles size={16} />
                    <span>Built around your goals</span>
                    <span className="cs-pro-small-heart">♡</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="cs-pro-cta-section">
        <div className="cs-pro-container">
          <div className="cs-pro-cta">
            <span className="cs-pro-cta-heart">♡</span>
            <span className="cs-pro-cta-spark">✧</span>

            <div className="cs-pro-cta-copy">
              <div className="cs-pro-cta-label">
                <Sparkles size={15} />
                YOUR NEXT GROWTH CHAPTER
              </div>

              <h2>
                Let's find your
                <br />
                <span>next opportunity.</span>
              </h2>

              <p>
                Start with a clear view of your website and the search
                opportunities your business could explore.
              </p>
            </div>

            <Link to="/contact" className="cs-pro-cta-button">
              Let's talk strategy
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CaseStudies;
