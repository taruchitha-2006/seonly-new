import {
  ArrowUpRight,
  Check,
  MessageCircle,
  Sparkles,
} from 'lucide-react';

function FinalCta() {
  const growthPlan = [
    'Custom SEO strategy',
    'AI search visibility',
    'Technical SEO optimisation',
    'Ongoing growth insights',
  ];

  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="final-cta">
          <div className="final-cta-content">
            <div className="section-label">YOUR NEXT MOVE</div>

            <h2>
              Your next customer
              <br />
              is already <span>searching.</span>
            </h2>

            <p>
              Don't just compete for rankings. Build a brand that search
              engines, AI platforms, and your customers can discover, trust,
              and recommend.
            </p>

            <div className="final-cta-actions">
              <a href="#audit" className="button-primary">
                Get Your Free SEO Audit
                <ArrowUpRight size={17} />
              </a>

              <a href="#contact" className="button-secondary">
                <MessageCircle size={17} />
                Talk to an SEO Expert
              </a>
            </div>
          </div>

          <div className="growth-plan-card">
            <div className="growth-plan-header">
              <div className="growth-plan-icon">
                <Sparkles size={19} />
              </div>

              <div>
                <span>YOUR GROWTH PLAN</span>
                <strong>Built around your business</strong>
              </div>
            </div>

            <div className="growth-plan-list">
              {growthPlan.map((item) => (
                <div className="growth-plan-item" key={item}>
                  <span>
                    <Check size={14} />
                  </span>

                  <strong>{item}</strong>
                </div>
              ))}
            </div>

            <div className="growth-plan-footer">
              <span>Ready to build your search advantage?</span>

              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCta;