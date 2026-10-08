function ProcessPage() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description:
        'We understand your business, market, customers, competitors, and current search visibility to uncover the opportunities that matter most.',
    },
    {
      number: '02',
      title: 'Strategy',
      description:
        'We turn those insights into a clear SEO strategy built around your goals, search demand, and the areas where your business can win.',
    },
    {
      number: '03',
      title: 'Content',
      description:
        'We create useful, authoritative content designed around real customer questions, search intent, and the topics your audience cares about.',
    },
    {
      number: '04',
      title: 'Optimise',
      description:
        'We strengthen your technical foundation, content, authority, and search signals so your website can perform across modern search.',
    },
    {
      number: '05',
      title: 'Grow',
      description:
        'We measure performance, identify what is working, and continuously improve the areas creating the strongest opportunities for growth.',
    },
    {
      number: '06',
      title: 'Scale',
      description:
        'As your visibility grows, we expand the strategy into new markets, search opportunities, content areas, and AI-powered discovery channels.',
    },
  ];

  return (
    <section className="process-page">
      <div className="container">

        <div className="process-hero">
          <div className="section-label">
            HOW WE WORK
          </div>

          <h1>
            From invisible
            <br />
            to <span>impossible to ignore.</span>
          </h1>

          <p>
            A clear, structured approach to building search visibility that
            creates measurable business growth.
          </p>
        </div>


        <div className="process-introduction">

          <div className="process-intro-label">
            OUR PROCESS
          </div>

          <div>
            <h2>
              Strategy first.
              <br />
              Execution that compounds.
            </h2>

            <p>
              Search growth doesn't happen from one optimisation or one
              campaign. We build a connected system where technical SEO,
              content, authority, and modern AI search optimisation work
              together.
            </p>

            <p>
              Each stage builds on the previous one, creating a stronger
              foundation for sustainable visibility and long-term growth.
            </p>
          </div>

        </div>


        <div className="process-steps">

          {steps.map((step) => (
            <article
              className="process-step"
              key={step.number}
            >

              <div className="process-step-number">
                {step.number}
              </div>

              <div className="process-step-main">

                <h2>
                  {step.title}
                </h2>

                <p>
                  {step.description}
                </p>

              </div>

              <div className="process-step-arrow">
                ↗
              </div>

            </article>
          ))}

        </div>


        <div className="process-bottom">

          <div>
            <div className="process-bottom-label">
              BUILT FOR GROWTH
            </div>

            <h2>
              Better visibility.
              <br />
              <span>Better opportunities.</span>
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

export default ProcessPage;