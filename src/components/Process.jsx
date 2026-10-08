function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description:
        'We understand your business, audience, competitors, and the search landscape around your market.',
    },
    {
      number: '02',
      title: 'Strategy',
      description:
        'We build a focused search strategy around your goals, opportunities, and long-term growth potential.',
    },
    {
      number: '03',
      title: 'Content',
      description:
        'We create useful, authoritative content designed for people, search engines, and AI platforms.',
    },
    {
      number: '04',
      title: 'Optimise',
      description:
        'We strengthen your technical foundation, content, authority, and visibility across search channels.',
    },
    {
      number: '05',
      title: 'Grow',
      description:
        'We measure what matters, learn from search behaviour, and continuously improve performance.',
    },
    {
      number: '06',
      title: 'Scale',
      description:
        'We turn proven opportunities into a repeatable growth engine that expands with your business.',
    },
  ];

  return (
    <section className="process" id="process">
      <div className="container">
        <div className="process-header">
          <div>
            <div className="section-label">
              HOW WE WORK
            </div>

            <h2>
              From invisible
              <br />
              to impossible
              <br />
              to ignore.
            </h2>
          </div>

          <p className="section-description">
            Search growth does not happen from one tactic. We follow a
            structured process that turns strategy into measurable,
            compounding visibility.
          </p>
        </div>

        <div className="process-list">
          {steps.map((step, index) => (
            <article className="process-item" key={step.number}>
              <div className="process-number">
                {step.number}
              </div>

              <div className="process-main">
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>

              <div className="process-arrow">
                ↗
              </div>

              {index < steps.length - 1 && (
                <div className="process-line"></div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;