function ServicesPage() {
  const services = [
    {
      number: '01',
      title: 'Local SEO',
      description:
        'Dominate local search and become the business customers discover, trust, and choose in your market.',
      points: [
        'Google Business Profile optimisation',
        'Local search visibility',
        'Location-based keyword strategy',
        'Reviews and reputation signals',
      ],
    },
    {
      number: '02',
      title: 'National SEO',
      description:
        'Build nationwide search visibility with a scalable strategy designed to reach customers across your target markets.',
      points: [
        'National keyword strategy',
        'Content-led organic growth',
        'Technical SEO optimisation',
        'Authority and link strategy',
      ],
    },
    {
      number: '03',
      title: 'Ecommerce SEO',
      description:
        'Turn product searches into qualified traffic with search strategies designed around discovery, consideration, and purchase.',
      points: [
        'Product and category optimisation',
        'Ecommerce technical SEO',
        'Search intent mapping',
        'Organic revenue opportunities',
      ],
    },
    {
      number: '04',
      title: 'SaaS SEO',
      description:
        'Create scalable organic growth for software businesses by connecting search demand with the problems your product solves.',
      points: [
        'Product-led content strategy',
        'Commercial keyword opportunities',
        'Organic acquisition',
        'Scalable content systems',
      ],
    },
    {
      number: '05',
      title: 'Enterprise SEO',
      description:
        'Build powerful search visibility across large websites with structured strategies that work at scale.',
      points: [
        'Large-site technical SEO',
        'Scalable optimisation',
        'Content architecture',
        'Search performance insights',
      ],
    },
    {
      number: '06',
      title: 'Competitor Analysis',
      description:
        'Understand what your competitors are doing, where they are winning, and which opportunities they are missing.',
      points: [
        'Competitor visibility analysis',
        'Keyword opportunity discovery',
        'Content gap analysis',
        'Market opportunity mapping',
      ],
    },
  ];

  return (
    <section className="services-page">
      <div className="container">

        {/* Hero */}

        <div className="services-hero">

          <div className="section-label">
            WHAT WE DO
          </div>

          <h1>
            SEO built for
            <br />
            <span>serious growth.</span>
          </h1>

          <p>
            Search visibility is no longer just about ranking for keywords.
            We build strategies that help ambitious businesses get found,
            trusted, recommended, and chosen.
          </p>

        </div>


        {/* Services list */}

        <div className="services-list">

          {services.map((service) => (
            <article
              className="service-page-card"
              key={service.number}
            >

              <div className="service-page-number">
                {service.number}
              </div>

              <div className="service-page-main">

                <h2>
                  {service.title}
                </h2>

                <p className="service-page-description">
                  {service.description}
                </p>

                <div className="service-page-points">

                  {service.points.map((point) => (
                    <div
                      className="service-page-point"
                      key={point}
                    >
                      <span>+</span>
                      {point}
                    </div>
                  ))}

                </div>

              </div>

              <div className="service-page-arrow">
                ↗
              </div>

            </article>
          ))}

        </div>


        {/* AI SEO section */}

        <div className="ai-seo-section">

          <div className="ai-seo-content">

            <div className="section-label">
              THE NEXT LAYER OF SEARCH
            </div>

            <h2>
              Be found where
              <br />
              <span>AI recommends.</span>
            </h2>

            <p>
              Ranking on Google is no longer enough. Customers are also
              discovering businesses through AI assistants and answer
              platforms.
            </p>

            <p>
              We combine proven SEO with AI search optimisation so your
              business can become part of the answers people trust and act on.
            </p>

          </div>


          <div className="ai-search-visual">

            <div className="ai-search-center">
              <span className="ai-search-dot"></span>
              SEOONLY
            </div>

            <div className="ai-search-node node-google">
              Google
            </div>

            <div className="ai-search-node node-chatgpt">
              ChatGPT
            </div>

            <div className="ai-search-node node-gemini">
              Gemini
            </div>

            <div className="ai-search-node node-perplexity">
              Perplexity
            </div>

            <div className="ai-search-ring ring-one"></div>
            <div className="ai-search-ring ring-two"></div>

          </div>

        </div>


        {/* CTA */}

        <div className="services-bottom">

          <div>

            <div className="services-bottom-label">
              READY TO GROW?
            </div>

            <h2>
              Your next customer
              <br />
              is already searching.
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

export default ServicesPage;