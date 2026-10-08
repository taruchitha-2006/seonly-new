function Industries() {
  const industries = [
    {
      number: '01',
      title: 'Professional Services',
      description:
        'Build stronger authority, increase local visibility, and attract more qualified leads.',
      points: [
        'More qualified leads',
        'Higher local visibility',
        'Stronger authority',
      ],
    },
    {
      number: '02',
      title: 'Ecommerce',
      description:
        'Turn product searches into qualified traffic and create more opportunities for revenue.',
      points: [
        'Product visibility',
        'Qualified traffic',
        'Revenue growth',
      ],
    },
    {
      number: '03',
      title: 'Technology',
      description:
        'Build scalable search visibility for technology brands competing in crowded markets.',
      points: [
        'Scalable growth',
        'Search authority',
        'Market visibility',
      ],
    },
    {
      number: '04',
      title: 'Healthcare',
      description:
        'Create trusted search visibility around the services and information customers need.',
      points: [
        'Trust signals',
        'Local discovery',
        'Qualified enquiries',
      ],
    },
    {
      number: '05',
      title: 'Education',
      description:
        'Help students and customers discover your organisation at the moments that matter.',
      points: [
        'Greater discovery',
        'Content visibility',
        'Audience growth',
      ],
    },
    {
      number: '06',
      title: 'Real Estate',
      description:
        'Capture high-intent searches and become more visible across your local property market.',
      points: [
        'Local search',
        'High-intent traffic',
        'Market visibility',
      ],
    },
  ];

  return (
    <section className="industries" id="industries">
      <div className="container">
        <div className="industries-header">
          <div>
            <div className="section-label">
              BUILT AROUND YOUR MARKET
            </div>

            <h2>
              SEO that understands
              <br />
              your industry.
            </h2>
          </div>

          <p className="section-description">
            Every market behaves differently. We build search strategies
            around the customers, competition, and opportunities unique
            to your industry.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry) => (
            <article
              className="industry-card"
              key={industry.number}
            >
              <div className="industry-top">
                <span>{industry.number}</span>

                <span className="industry-arrow">
                  ↗
                </span>
              </div>

              <h3>{industry.title}</h3>

              <p>{industry.description}</p>

              <div className="industry-points">
                {industry.points.map((point) => (
                  <span key={point}>
                    {point}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;