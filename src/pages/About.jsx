import { ArrowUpRight, BarChart3, Brain, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

function About() {
  const principles = [
    {
      number: '01',
      icon: Target,
      title: 'Clear Strategy',
      description:
        'Built around your goals, market, customers, and the opportunities that can create meaningful growth.',
    },
    {
      number: '02',
      icon: TrendingUp,
      title: 'Measurable Growth',
      description:
        'We focus on the signals that matter and track progress against outcomes that support your business.',
    },
    {
      number: '03',
      icon: BarChart3,
      title: 'Data-led Decisions',
      description:
        'Every strategy is backed by search insights, performance data, and a clear understanding of your market.',
    },
    {
      number: '04',
      icon: Brain,
      title: 'Modern Thinking',
      description:
        'SEO built for today’s search landscape, including traditional search engines and AI-powered discovery.',
    },
    {
      number: '05',
      icon: Target,
      title: 'Business Focused',
      description:
        'Visibility is only useful when it helps your business attract attention, trust, enquiries, and growth.',
    },
  ];

  return (
    <section className="about2-page">
      <div className="container">
        {/* HERO */}
        <div className="about2-hero">
          <div className="about2-hero-copy">
            <div className="about2-eyebrow">
              <span></span>
              ABOUT SEOONLY
            </div>

            <h1>
              Search visibility
              <br />
              built around
              <br />
              <em>growth.</em>
            </h1>

            <p>
              SEOOnly helps businesses turn search into reliable visibility,
              qualified traffic, and long-term growth.
            </p>

            <div className="about2-hero-actions">
              <Link to="/contact" className="about2-primary-button">
                Start a Conversation
                <ArrowUpRight size={17} />
              </Link>

              <Link to="/services" className="about2-secondary-button">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="about2-hero-visual">
            <div className="about2-orbit orbit-one"></div>
            <div className="about2-orbit orbit-two"></div>
            <div className="about2-glow"></div>

            <div className="about2-visual-card main">
              <span className="about2-visual-label">SEARCH VISIBILITY</span>

              <div className="about2-visual-score">
                <strong>87%</strong>
                <span>+24.8%</span>
              </div>

              <div className="about2-mini-chart">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div className="about2-visual-footer">
                <span>Organic performance</span>
                <strong>Growing</strong>
              </div>
            </div>

            <div className="about2-float-card top">
              <span>AI SEARCH</span>
              <strong>2.8K</strong>
              <small>mentions tracked</small>
            </div>

            <div className="about2-float-card bottom">
              <span>ORGANIC TRAFFIC</span>
              <strong>64K</strong>
              <small>qualified visits</small>
            </div>
          </div>
        </div>

        {/* APPROACH */}
        <div className="about2-approach">
          <div className="about2-approach-label">
            <span>01</span>
            OUR APPROACH
          </div>

          <div className="about2-approach-content">
            <div className="about2-approach-heading">
              <span className="about2-section-label">
                STRATEGY FIRST
              </span>

              <h2>
                Strategy first.
                <br />
                <em>Growth always.</em>
              </h2>
            </div>

            <div className="about2-approach-copy">
              <p>
                We combine technical SEO, content strategy, digital authority,
                and modern AI search optimisation around your business goals —
                not just rankings.
              </p>

              <p>
                The search landscape is changing quickly. Customers now
                discover businesses through Google, AI assistants, answer
                platforms, and recommendations. Your strategy needs to account
                for all of them.
              </p>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="about2-stats">
          <article className="about2-stat-card purple">
            <span>01 / VISIBILITY</span>
            <strong>87%</strong>
            <p>Search visibility tracked across the modern search ecosystem.</p>
          </article>

          <article className="about2-stat-card blue">
            <span>02 / OPPORTUNITY</span>
            <strong>92%</strong>
            <p>Organic opportunity identified through strategic search analysis.</p>
          </article>

          <article className="about2-stat-card dark">
            <span>03 / DISCOVERY</span>
            <strong>SEO + AI</strong>
            <p>Built for the way customers discover brands today.</p>
          </article>
        </div>

        {/* PRINCIPLES */}
        <div className="about2-principles">
          <div className="about2-principles-heading">
            <div>
              <span className="about2-section-label">
                WHAT DRIVES US
              </span>

              <h2>
                A smarter way
                <br />
                to build <em>visibility.</em>
              </h2>
            </div>

            <p>
              Every engagement is built around the same principle:
              better visibility should create better business outcomes.
            </p>
          </div>

          <div className="about2-principles-list">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  className="about2-principle"
                  key={principle.number}
                >
                  <div className="about2-principle-top">
                    <span className="about2-principle-number">
                      {principle.number}
                    </span>

                    <span className="about2-principle-icon">
                      <Icon size={18} />
                    </span>
                  </div>

                  <div className="about2-principle-body">
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </div>

                  <ArrowUpRight
                    className="about2-principle-arrow"
                    size={19}
                  />
                </article>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="about2-bottom">
          <div className="about2-bottom-copy">
            <span>SEOONLY</span>

            <h2>
              Visibility that supports
              <br />
              <em>real business growth.</em>
            </h2>

            <p>
              Build a stronger search presence across traditional search
              engines and the AI platforms shaping discovery.
            </p>
          </div>

          <Link to="/contact" className="about2-bottom-button">
            Start a Conversation
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;