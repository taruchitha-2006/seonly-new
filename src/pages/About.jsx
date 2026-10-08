function About() {
  const principles = [
    {
      number: '01',
      title: 'Clear Strategy',
      description:
        'Built around your goals, market, customers, and the opportunities that can create meaningful growth.',
    },
    {
      number: '02',
      title: 'Measurable Growth',
      description:
        'We focus on the signals that matter and track progress against outcomes that support your business.',
    },
    {
      number: '03',
      title: 'Data-led Decisions',
      description:
        'Every strategy is backed by search insights, performance data, and a clear understanding of your market.',
    },
    {
      number: '04',
      title: 'Modern Thinking',
      description:
        'SEO built for today’s search landscape, including traditional search engines and AI-powered discovery.',
    },
    {
      number: '05',
      title: 'Business Focused',
      description:
        'Visibility is only useful when it helps your business attract attention, trust, enquiries, and growth.',
    },
  ];

  return (
    <section className="about-page">
      <div className="container">
        <div className="about-hero">
          <div className="section-label">ABOUT SEOONLY</div>

          <h1>
            Search visibility
            <br />
            built around
            <br />
            <span>growth.</span>
          </h1>

          <p>
            SEOOnly helps businesses turn search into reliable visibility,
            qualified traffic, and long-term growth.
          </p>
        </div>

        <div className="about-introduction">
          <div className="about-intro-label">OUR APPROACH</div>

          <div>
            <h2>
              Strategy first.
              <br />
              Growth always.
            </h2>

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

        <div className="about-stats">
          <div className="about-stat">
            <strong>87%</strong>
            <span>Search visibility</span>
          </div>

          <div className="about-stat">
            <strong>92%</strong>
            <span>Organic opportunity</span>
          </div>

          <div className="about-stat about-stat-text">
            <strong>SEO + AI</strong>
            <span>Built for modern discovery</span>
          </div>
        </div>

        <div className="about-principles">
          <div className="about-principles-header">
            <div className="section-label">WHAT DRIVES US</div>

            <h2>
              A smarter way
              <br />
              to build visibility.
            </h2>
          </div>

          <div className="principles-list">
            {principles.map((principle) => (
              <article
                className="principle-item"
                key={principle.number}
              >
                <span className="principle-number">
                  {principle.number}
                </span>

                <h3>{principle.title}</h3>

                <p>{principle.description}</p>

                <span className="principle-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>

        <div className="about-bottom">
          <div>
            <div className="about-bottom-label">SEOONLY</div>

            <h2>
              Visibility that supports
              <br />
              <span>real business growth.</span>
            </h2>
          </div>

          <a
            href="/contact"
            className="primary-button"
          >
            Start a Conversation
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;