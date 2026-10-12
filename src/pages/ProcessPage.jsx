
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  CheckCircle2,
  FileText,
  Globe2,
  Lightbulb,
  Search,
  Settings2,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import './ProcessPage.css';

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We learn about your business, audience, competitors, and current search visibility.',
    outcome: 'Understand the opportunity',
    icon: Search,
    tags: ['Research', 'SEO audit'],
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'We turn our findings into a clear SEO roadmap focused on the right opportunities.',
    outcome: 'A plan with purpose',
    icon: Target,
    tags: ['Planning', 'Keywords'],
  },
  {
    number: '03',
    title: 'Content',
    description:
      'We create useful, relevant content that answers questions and builds brand authority.',
    outcome: 'Content that connects',
    icon: FileText,
    tags: ['Content', 'Search intent'],
  },
  {
    number: '04',
    title: 'Optimise',
    description:
      'We improve technical performance, website structure, and on-page search signals.',
    outcome: 'A stronger foundation',
    icon: Settings2,
    tags: ['Technical SEO', 'Experience'],
  },
  {
    number: '05',
    title: 'Grow',
    description:
      'We track performance, learn from the data, and refine what delivers results.',
    outcome: 'Progress you can measure',
    icon: TrendingUp,
    tags: ['Analytics', 'Insights'],
  },
  {
    number: '06',
    title: 'Scale',
    description:
      'We build on what works to expand organic visibility and reach more customers.',
    outcome: 'Growth that compounds',
    icon: Sparkles,
    tags: ['Authority', 'Expansion'],
  },
];

function ProcessPage() {
  return (
    <main className="process-page">
      <section className="process-hero">
        <div className="process-container process-hero-grid">
          <div className="process-hero-copy">
            <div className="process-eyebrow">
              <span className="process-eyebrow-dot" />
              OUR PROCESS
              <Sparkles size={15} />
            </div>

            <h1>
              Strategy first.
              <br />
              <span>Execution that compounds.</span>
            </h1>

            <p className="process-hero-description">
              Search growth doesn't happen from one optimisation or one
              campaign. We build a connected system where technical SEO,
              content, authority, and modern AI search optimisation work
              together.
            </p>

            <p className="process-hero-secondary">
              Each stage builds on the previous one, creating a stronger
              foundation for sustainable visibility and long-term growth.
            </p>

            <div className="process-hero-actions">
              <Link to="/contact" className="process-primary-button">
                Let's grow together
                <ArrowUpRight size={18} />
              </Link>

              <a href="#process-stages" className="process-text-link">
                Explore our process
                <ArrowDown size={17} />
              </a>
            </div>

            <div className="process-trust-note">
              <CheckCircle2 size={18} />
              <span>A clear process. Meaningful progress.</span>
            </div>
          </div>

          <div className="process-hero-art">
            <div className="process-art-halo halo-one" />
            <div className="process-art-halo halo-two" />

            <div className="process-art-orbit orbit-one" />
            <div className="process-art-orbit orbit-two" />

            <div className="process-floating-card process-search-card">
              <div className="process-mini-icon mini-pink">
                <Search size={19} />
              </div>
              <div>
                <strong>Search discovery</strong>
                <span>Finding opportunities</span>
              </div>
              <Sparkles className="process-card-sparkle" size={17} />
            </div>

            <div className="process-mascot">
              <div className="process-mascot-antenna">
                <span />
              </div>
              <div className="process-mascot-face">
                <div className="process-mascot-eyes">
                  <span />
                  <span />
                </div>
                <div className="process-mascot-smile" />
                <div className="process-mascot-cheek cheek-left" />
                <div className="process-mascot-cheek cheek-right" />
              </div>
              <div className="process-mascot-body">
                <Bot size={37} strokeWidth={1.7} />
                <span>SEO</span>
              </div>
              <div className="process-mascot-shadow" />
            </div>

            <div className="process-floating-card process-growth-card">
              <div className="process-growth-heading">
                <div className="process-mini-icon mini-green">
                  <TrendingUp size={19} />
                </div>
                <span>Organic growth</span>
              </div>
              <div className="process-growth-chart">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="process-growth-caption">
                <span>Built step by step</span>
                <BarChart3 size={16} />
              </div>
            </div>

            <div className="process-floating-bubble bubble-star">
              <Sparkles size={23} />
            </div>

            <div className="process-floating-bubble bubble-bulb">
              <Lightbulb size={22} />
            </div>

            <div className="process-floating-bubble bubble-globe">
              <Globe2 size={21} />
            </div>

            <div className="process-art-caption">
              <span className="process-caption-dot" />
              Your growth, thoughtfully engineered
            </div>
          </div>
        </div>
      </section>

      <section className="process-stages-section" id="process-stages">
        <div className="process-container">
          <div className="process-section-heading">
            <div>
              <div className="process-eyebrow">
                <span className="process-eyebrow-dot" />
                THE SIX STAGES
              </div>

              <h2>
                Small steps.
                <br />
                <span>Big momentum.</span>
              </h2>
            </div>

            <p>
              Every stage has a purpose. Together, they turn search
              opportunities into a repeatable growth system.
            </p>
          </div>

          <div className="process-stage-grid">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  className="process-stage-card"
                  key={step.number}
                >
                  <div className="process-stage-top">
                    <span className="process-stage-number">
                      {step.number}
                    </span>

                    <div className="process-stage-icon">
                      <Icon size={25} strokeWidth={1.8} />
                    </div>
                  </div>

                  <h3>{step.title}</h3>

                  <p className="process-stage-description">
                    {step.description}
                  </p>

                  <div className="process-stage-tags">
                    {step.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="process-stage-outcome">
                    <CheckCircle2 size={16} />
                    <span>{step.outcome}</span>
                    <ArrowRight className="process-stage-arrow" size={17} />
                  </div>
                </article>
              );
            })}
          </div>

          <div className="process-connection-note">
            <div className="process-connection-icon">
              <Target size={23} />
            </div>
            <div>
              <strong>One connected strategy.</strong>
              <p>
                Each stage informs the next, helping your business
                build sustainable visibility rather than chasing quick wins.
              </p>
            </div>
            <Sparkles className="process-note-sparkle" size={25} />
          </div>
        </div>
      </section>

      <section className="process-cta-section">
        <div className="process-container">
          <div className="process-cta-card">
            <div className="process-cta-decoration cta-decoration-one" />
            <div className="process-cta-decoration cta-decoration-two" />

            <div className="process-cta-copy">
              <div className="process-cta-label">
                <Sparkles size={15} />
                YOUR NEXT CHAPTER STARTS HERE
              </div>

              <h2>
                Ready to grow
                <br />
                <span>with a clear plan?</span>
              </h2>

              <p>
                Let's find your opportunities and build a search strategy
                designed around your business.
              </p>
            </div>

            <Link to="/contact" className="process-cta-button">
              Start a conversation
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProcessPage;
