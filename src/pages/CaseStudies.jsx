function CaseStudies() {
  const results = [
    {
      number: '01',
      industry: 'Ecommerce',
      result: '+186%',
      metric: 'Organic Traffic Growth',
      description:
        'A focused ecommerce SEO strategy increased qualified organic traffic and created more opportunities across high-intent product searches.',
    },
    {
      number: '02',
      industry: 'Technology',
      result: '+142%',
      metric: 'Search Visibility Growth',
      description:
        'A scalable content and technical SEO strategy helped a technology brand expand its visibility across valuable search opportunities.',
    },
    {
      number: '03',
      industry: 'Professional Services',
      result: '+97%',
      metric: 'Qualified Leads Growth',
      description:
        'A local and national search strategy improved visibility for high-value services and generated stronger enquiry opportunities.',
    },
  ];

  return (
    <section className="case-studies-page">
      <div className="container">

        {/* Hero */}

        <div className="case-studies-hero">

          <div className="section-label">
            PROOF OF PERFORMANCE
          </div>

          <h1>
            Results that
            <br />
            <span>speak for themselves.</span>
          </h1>

          <p>
            Search visibility becomes valuable when it creates measurable
            business growth. Here are examples of the outcomes a focused
            SEO strategy can create.
          </p>

        </div>


        {/* Results */}

        <div className="case-studies-list">

          {results.map((item) => (
            <article
              className="case-study-card"
              key={item.number}
            >

              <div className="case-study-top">

                <span className="case-study-number">
                  {item.number}
                </span>

                <span className="case-study-industry">
                  {item.industry}
                </span>

              </div>


              <div className="case-study-result">

                <strong>
                  {item.result}
                </strong>

                <span>
                  {item.metric}
                </span>

              </div>


              <div className="case-study-content">

                <p>
                  {item.description}
                </p>

                <span className="case-study-arrow">
                  ↗
                </span>

              </div>

            </article>
          ))}

        </div>


        {/* Performance section */}

        <div className="performance-section">

          <div className="performance-copy">

            <div className="section-label">
              VISIBILITY THAT MOVES
            </div>

            <h2>
              Growth you can
              <br />
              <span>measure.</span>
            </h2>

            <p>
              We track the signals that matter across traditional search and
              the growing AI search ecosystem, giving you a clearer picture
              of how your visibility is changing.
            </p>

          </div>


          <div className="performance-dashboard">

            <div className="dashboard-header">

              <div>
                <span>LIVE VISIBILITY</span>
                <strong>Search Performance</strong>
              </div>

              <span className="dashboard-live">
                LIVE
              </span>

            </div>


            <div className="dashboard-main-stat">
              <strong>87%</strong>
              <span>Search Visibility</span>
              <em>+24.8%</em>
            </div>


            <div className="dashboard-chart">

              <div className="chart-line line-one"></div>
              <div className="chart-line line-two"></div>
              <div className="chart-line line-three"></div>
              <div className="chart-line line-four"></div>

              <div className="chart-path">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

            </div>


            <div className="dashboard-months">
              <span>JAN</span>
              <span>MAR</span>
              <span>MAY</span>
              <span>JUL</span>
              <span>SEP</span>
            </div>

          </div>

        </div>


        {/* CTA */}

        <div className="case-studies-cta">

          <div>

            <div className="case-studies-cta-label">
              BUILD YOUR NEXT GROWTH STORY
            </div>

            <h2>
              Your next result
              <br />
              starts with visibility.
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

export default CaseStudies;