function Services() {
  const services = [
    {
      number: '01',
      title: 'Local SEO',
      description:
        'Dominate local search and become the business customers choose in your market.',
      tag: 'LOCAL',
    },
    {
      number: '02',
      title: 'National SEO',
      description:
        'Build nationwide visibility with a scalable strategy designed around sustainable organic growth.',
      tag: 'NATIONAL',
    },
    {
      number: '03',
      title: 'Ecommerce SEO',
      description:
        'Turn product searches into qualified traffic, stronger discovery, and more revenue.',
      tag: 'ECOMMERCE',
    },
    {
      number: '04',
      title: 'SaaS SEO',
      description:
        'Create scalable organic growth that attracts the right users throughout the buying journey.',
      tag: 'SAAS',
    },
    {
      number: '05',
      title: 'Enterprise SEO',
      description:
        'Build powerful search visibility across large websites, teams, markets, and content ecosystems.',
      tag: 'ENTERPRISE',
    },
    {
      number: '06',
      title: 'Competitor Analysis',
      description:
        'Understand where competitors win, uncover missed opportunities, and turn search gaps into growth.',
      tag: 'INTELLIGENCE',
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header services-header">
          <div className="section-label">
            WHAT WE DO
          </div>

          <h2>
            SEO built for
            <br />
            serious growth.
          </h2>

          <p className="section-description">
            From local businesses to enterprise brands, we build search
            strategies around where you are today and where you want to go next.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article
              className="service-card"
              key={service.number}
            >
              <div className="service-top">
                <span className="service-number">
                  {service.number}
                </span>

                <span className="service-tag">
                  {service.tag}
                </span>
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <div className="service-arrow">
                <span>Explore service</span>
                <span>↗</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;