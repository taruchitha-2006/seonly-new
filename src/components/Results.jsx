import {
  ArrowUpRight,
  BarChart3,
  ShoppingCart,
  Users,
} from 'lucide-react';

function Results() {
  const results = [
    {
      icon: <ShoppingCart size={21} />,
      category: 'ECOMMERCE',
      value: '+186%',
      metric: 'Organic Traffic Growth',
      description:
        'A search strategy built around commercial intent and product discovery.',
    },
    {
      icon: <BarChart3 size={21} />,
      category: 'TECHNOLOGY',
      value: '+142%',
      metric: 'Search Visibility Growth',
      description:
        'Expanded organic visibility across a competitive technology market.',
    },
    {
      icon: <Users size={21} />,
      category: 'PROFESSIONAL SERVICES',
      value: '+97%',
      metric: 'Qualified Leads Growth',
      description:
        'A focused strategy designed to attract higher-intent potential customers.',
    },
  ];

  return (
    <section className="results-section">
      <div className="container">
        <div className="results-heading">
          <div>
            <div className="section-label">PROOF OF PERFORMANCE</div>

            <h2>
              Results that
              <br />
              <span>speak for themselves.</span>
            </h2>
          </div>

          <p>
            Search performance becomes meaningful when visibility turns into
            measurable business outcomes.
          </p>
        </div>

        <div className="results-grid">
          {results.map((result) => (
            <article className="result-card" key={result.category}>
              <div className="result-card-top">
                <div className="result-icon">
                  {result.icon}
                </div>

                <ArrowUpRight size={18} />
              </div>

              <span className="result-category">
                {result.category}
              </span>

              <strong className="result-value">
                {result.value}
              </strong>

              <h3>{result.metric}</h3>

              <p>{result.description}</p>

              <div className="result-bar">
                <span></span>
              </div>
            </article>
          ))}
        </div>

        <div className="results-note">
          <span>*</span>
          <p>
            Results shown are illustrative examples for this website
            redesign and represent the types of outcomes SEOOnly strategies
            are designed to achieve.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Results;