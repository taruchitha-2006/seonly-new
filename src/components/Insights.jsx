import {
  ArrowUpRight,
  Clock3,
  Sparkles,
} from 'lucide-react';

function Insights() {
  const insights = [
    {
      category: 'AI SEARCH',
      title: 'How AI is changing the way people discover brands',
      time: '6 min read',
      featured: true,
    },
    {
      category: 'SEO STRATEGY',
      title: 'The SEO strategy every growing business needs',
      time: '8 min read',
      featured: false,
    },
    {
      category: 'TECHNICAL SEO',
      title: 'Technical SEO: The foundation behind search visibility',
      time: '5 min read',
      featured: false,
    },
  ];

  return (
    <section className="insights-section" id="insights">
      <div className="container">
        <div className="insights-heading">
          <div>
            <div className="section-label">INSIGHTS & IDEAS</div>

            <h2>
              Stay ahead
              <br />
              <span>of search.</span>
            </h2>
          </div>

          <a href="#insights" className="text-link">
            More ideas
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="insights-grid">
          {insights.map((insight) => (
            <article
              className={`insight-card ${
                insight.featured ? 'featured' : ''
              }`}
              key={insight.title}
            >
              <div className="insight-top">
                <span className="insight-category">
                  {insight.category}
                </span>

                <div className="insight-icon">
                  {insight.featured ? (
                    <Sparkles size={18} />
                  ) : (
                    <ArrowUpRight size={18} />
                  )}
                </div>
              </div>

              <div className="insight-content">
                <h3>{insight.title}</h3>

                <div className="insight-meta">
                  <Clock3 size={15} />
                  <span>{insight.time}</span>
                </div>
              </div>

              <div className="insight-arrow">
                <ArrowUpRight size={18} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Insights;