import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Building2,
  Check,
  Code2,
  Globe2,
  GraduationCap,
  HeartPulse,
  MapPin,
  Search,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SeoAudit from './components/SeoAudit';

import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import CaseStudies from './pages/CaseStudies';
import ProcessPage from './pages/ProcessPage';
import Contact from './pages/Contact';
import Audits from './pages/Audits';
import Contacts from './pages/Contacts';

import './HomePage.css';

function Home() {
  const industries = [
    {
      icon: Building2,
      number: '01',
      title: 'Professional Services',
      text: 'Build stronger authority, increase local visibility, and attract more qualified leads.',
      tags: ['Qualified leads', 'Local visibility', 'Authority'],
    },
    {
      icon: ShoppingBag,
      number: '02',
      title: 'Ecommerce',
      text: 'Turn product searches into qualified traffic and create more opportunities for revenue.',
      tags: ['Product visibility', 'Qualified traffic', 'Revenue growth'],
    },
    {
      icon: Code2,
      number: '03',
      title: 'Technology',
      text: 'Build scalable search visibility for technology brands competing in crowded markets.',
      tags: ['Scalable growth', 'Search authority', 'Market visibility'],
    },
    {
      icon: HeartPulse,
      number: '04',
      title: 'Healthcare',
      text: 'Create trusted search visibility around the services and information customers need.',
      tags: ['Trust signals', 'Local discovery', 'Enquiries'],
    },
    {
      icon: GraduationCap,
      number: '05',
      title: 'Education',
      text: 'Help students and customers discover your organisation at the moments that matter.',
      tags: ['Discovery', 'Content visibility', 'Audience growth'],
    },
    {
      icon: MapPin,
      number: '06',
      title: 'Real Estate',
      text: 'Capture high-intent searches and become more visible across your local property market.',
      tags: ['Local search', 'High-intent traffic', 'Market visibility'],
    },
  ];

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="new-hero">
        <div className="new-hero-noise"></div>

        <div className="container new-hero-grid">
          <div className="new-hero-copy">
            <div className="new-kicker">
              <span></span>
              SEARCH VISIBILITY BUILT AROUND GROWTH
            </div>

            <h1>
              Be found.
              <br />
              <em>Be trusted.</em>
              <br />
              Be chosen.
            </h1>

            <p>
              SEOOnly helps ambitious businesses build measurable visibility
              across Google and the AI-powered search platforms shaping how
              customers discover and choose brands.
            </p>

            <div className="new-hero-actions">
              <a href="#audit" className="new-primary-button">
                Get Your Free SEO Audit
                <ArrowUpRight size={17} />
              </a>

              <Link to="/services" className="new-secondary-button">
                Explore services
              </Link>
            </div>

            <div className="new-proof-row">
              <div>
                <strong>87%</strong>
                <span>Visibility</span>
              </div>

              <i></i>

              <div>
                <strong>64K</strong>
                <span>Organic traffic</span>
              </div>

              <i></i>

              <div>
                <strong>2.8K</strong>
                <span>AI mentions</span>
              </div>
            </div>
          </div>

          <div className="new-hero-stage">
            <div className="stage-ambient"></div>
            <div className="stage-grid"></div>

            <div className="stage-orbit orbit-outer"></div>
            <div className="stage-orbit orbit-inner"></div>

            <div className="stage-dashboard">
              <div className="stage-dashboard-header">
                <div>
                  <span>LIVE VISIBILITY</span>
                  <strong>87%</strong>
                </div>

                <div className="stage-live">
                  <span></span>
                  LIVE
                </div>
              </div>

              <div className="stage-chart">
                <div className="chart-grid-line one"></div>
                <div className="chart-grid-line two"></div>
                <div className="chart-grid-line three"></div>

                <svg viewBox="0 0 500 190" preserveAspectRatio="none">
                  <defs>
                    <linearGradient
                      id="heroChartFill"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#765cff"
                        stopOpacity="0.30"
                      />
                      <stop
                        offset="100%"
                        stopColor="#765cff"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0 157 C45 150 65 145 100 152 C136 160 150 131 190 136 C225 140 240 101 278 109 C319 118 335 80 370 90 C408 99 429 48 470 60 C484 64 492 42 500 38 L500 190 L0 190 Z"
                    fill="url(#heroChartFill)"
                  />

                  <path
                    d="M0 157 C45 150 65 145 100 152 C136 160 150 131 190 136 C225 140 240 101 278 109 C319 118 335 80 370 90 C408 99 429 48 470 60 C484 64 492 42 500 38"
                    fill="none"
                    stroke="#715cff"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="stage-dashboard-footer">
                <span>Last 12 months</span>
                <strong>
                  <TrendingUp size={13} />
                  +24.8%
                </strong>
              </div>
            </div>

            <div className="stage-platform google">
              <div className="platform-icon blue">G</div>
              <div>
                <strong>Google</strong>
                <span>Search ranking</span>
              </div>
              <b>+24.8%</b>
            </div>

            <div className="stage-platform chatgpt">
              <div className="platform-icon green">✦</div>
              <div>
                <strong>ChatGPT</strong>
                <span>AI mentions</span>
              </div>
              <b>+42.6%</b>
            </div>

            <div className="stage-platform gemini">
              <div className="platform-icon purple">✧</div>
              <div>
                <strong>Gemini</strong>
                <span>Brand discovery</span>
              </div>
              <small>ACTIVE</small>
            </div>

            <div className="stage-platform perplexity">
              <div className="platform-icon cyan">P</div>
              <div>
                <strong>Perplexity</strong>
                <span>Answer visibility</span>
              </div>
              <small>ACTIVE</small>
            </div>

            <div className="stage-mini top">
              <span>TOP POSITION</span>
              <strong>#1</strong>
              <small>High-intent keywords</small>
            </div>

            <div className="stage-mini bottom">
              <span>AI MENTIONS</span>
              <strong>2.8K</strong>
              <small>+42.6% growth</small>
            </div>

            <div className="stage-spark spark-one">✦</div>
            <div className="stage-spark spark-two">✧</div>
            <div className="stage-spark spark-three">✦</div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SEARCH ECOSYSTEM
      ===================================================== */}
      <section className="ecosystem-section">
        <div className="container">
          <div className="section-intro split">
            <div>
              <span className="new-section-label">
                SEARCH IS EVERYWHERE
              </span>

              <h2>
                Your customers are
                <br />
                searching everywhere.
              </h2>
            </div>

            <p>
              Search has moved beyond blue links. Your customers discover
              businesses through search engines, AI assistants, and answer
              platforms — and your brand needs to be visible across all of
              them.
            </p>
          </div>

          <div className="ecosystem-cards">
            <article className="ecosystem-card ecosystem-google">
              <div className="ecosystem-card-top">
                <div className="ecosystem-card-icon blue">
                  G
                </div>
                <ArrowUpRight size={18} />
              </div>

              <div>
                <span>01</span>
                <h3>Google</h3>
                <p>
                  Own the moments when customers actively search.
                </p>
              </div>

              <div className="ecosystem-card-line"></div>
            </article>

            <article className="ecosystem-card ecosystem-chatgpt">
              <div className="ecosystem-card-top">
                <div className="ecosystem-card-icon green">
                  ✦
                </div>
                <ArrowUpRight size={18} />
              </div>

              <div>
                <span>02</span>
                <h3>ChatGPT</h3>
                <p>
                  Become part of answers people trust and act on.
                </p>
              </div>

              <div className="ecosystem-card-line"></div>
            </article>

            <article className="ecosystem-card ecosystem-gemini">
              <div className="ecosystem-card-top">
                <div className="ecosystem-card-icon purple">
                  ✧
                </div>
                <ArrowUpRight size={18} />
              </div>

              <div>
                <span>03</span>
                <h3>Gemini</h3>
                <p>
                  Build signals that help AI understand your brand.
                </p>
              </div>

              <div className="ecosystem-card-line"></div>
            </article>

            <article className="ecosystem-card ecosystem-perplexity">
              <div className="ecosystem-card-top">
                <div className="ecosystem-card-icon cyan">
                  P
                </div>
                <ArrowUpRight size={18} />
              </div>

              <div>
                <span>04</span>
                <h3>Perplexity</h3>
                <p>
                  Show up when customers ask for recommendations.
                </p>
              </div>

              <div className="ecosystem-card-line"></div>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          VISIBILITY DASHBOARD
      ===================================================== */}
      <section className="visibility-section">
        <div className="container">
          <div className="section-intro split">
            <div>
              <span className="new-section-label">
                VISIBILITY THAT MOVES
              </span>

              <h2>
                Turn search visibility
                <br />
                into business growth.
              </h2>
            </div>

            <p>
              We track the signals that matter across traditional search and
              the growing AI ecosystem, giving you a clearer picture of how
              your brand is being discovered.
            </p>
          </div>

          <div className="visibility-shell">
            <div className="visibility-topbar">
              <div>
                <span>SEOONLY / VISIBILITY OVERVIEW</span>
                <strong>Search performance</strong>
              </div>

              <div className="visibility-status">
                <span></span>
                LIVE
              </div>
            </div>

            <div className="visibility-metrics">
              <div className="visibility-metric">
                <span>Search visibility</span>
                <strong>87%</strong>
                <small>+24.8%</small>
              </div>

              <div className="visibility-metric">
                <span>Organic traffic</span>
                <strong>64K</strong>
                <small>+31.4%</small>
              </div>

              <div className="visibility-metric">
                <span>AI mentions</span>
                <strong>2.8K</strong>
                <small>+42.6%</small>
              </div>
            </div>

            <div className="big-chart">
              <div className="big-chart-heading">
                <div>
                  <span>SEARCH VISIBILITY GROWTH</span>
                  <strong>Last 12 months</strong>
                </div>

                <BarChart3 size={20} />
              </div>

              <div className="big-chart-grid">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <svg
                className="big-chart-svg"
                viewBox="0 0 1000 260"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="bigChartFill"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#6757f5"
                      stopOpacity="0.20"
                    />
                    <stop
                      offset="100%"
                      stopColor="#6757f5"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <path
                  d="M0 224 C75 211 92 221 148 212 C203 204 235 220 290 190 C351 158 379 188 428 166 C486 140 505 148 553 123 C609 94 632 119 684 96 C740 74 763 92 814 62 C861 34 920 50 1000 18 L1000 260 L0 260 Z"
                  fill="url(#bigChartFill)"
                />

                <path
                  d="M0 224 C75 211 92 221 148 212 C203 204 235 220 290 190 C351 158 379 188 428 166 C486 140 505 148 553 123 C609 94 632 119 684 96 C740 74 763 92 814 62 C861 34 920 50 1000 18"
                  fill="none"
                  stroke="#6757f5"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>

              <div className="big-chart-labels">
                <span>JAN</span>
                <span>MAR</span>
                <span>MAY</span>
                <span>JUL</span>
                <span>SEP</span>
                <span>NOW</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FUTURE OF SEARCH
      ===================================================== */}
      <section className="future-section">
        <div className="container">
          <div className="future-heading">
            <span className="new-section-label light">
              THE FUTURE OF SEARCH
            </span>

            <h2>
              SEO is changing.
              <br />
              Your strategy should too.
            </h2>

            <p>
              Search is expanding beyond traditional rankings. The brands that
              win tomorrow are building visibility across both search engines
              and AI-powered discovery today.
            </p>
          </div>

          <div className="future-cards">
            <article className="future-panel">
              <div className="future-panel-number">01</div>

              <div className="future-panel-top">
                <span>TRADITIONAL SEO</span>
                <Search size={18} />
              </div>

              <h3>Win the search results.</h3>

              <div className="future-list">
                <div>
                  <Check size={15} />
                  Google rankings
                </div>
                <div>
                  <Check size={15} />
                  Keyword optimisation
                </div>
                <div>
                  <Check size={15} />
                  Organic traffic
                </div>
                <div>
                  <Check size={15} />
                  Technical SEO
                </div>
              </div>
            </article>

            <article className="future-panel featured">
              <div className="future-panel-number">02</div>

              <div className="future-panel-top">
                <span>AI SEARCH</span>
                <Sparkles size={18} />
              </div>

              <h3>Become the answer.</h3>

              <div className="future-list">
                <div>
                  <Check size={15} />
                  AI recommendations
                </div>
                <div>
                  <Check size={15} />
                  Brand mentions
                </div>
                <div>
                  <Check size={15} />
                  Answer engine visibility
                </div>
                <div>
                  <Check size={15} />
                  Authority & trust
                </div>
              </div>
            </article>
          </div>

          <div className="future-bottom">
            <Sparkles size={17} />
            <span>
              SEO + AI SEARCH
            </span>

            <p>
              The brands that win tomorrow's search are preparing today.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRIES
      ===================================================== */}
      <section className="industries-section">
        <div className="container">
          <div className="section-intro">
            <span className="new-section-label">
              BUILT AROUND YOUR MARKET
            </span>

            <h2>
              SEO that understands
              <br />
              your industry.
            </h2>

            <p>
              Every market behaves differently. We build search strategies
              around the customers, competition, and opportunities unique to
              your industry.
            </p>
          </div>

          <div className="industry-new-grid">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  className="industry-new-card"
                  key={industry.title}
                >
                  <div className="industry-card-head">
                    <div className="industry-icon">
                      <Icon size={19} />
                    </div>

                    <span>{industry.number}</span>
                  </div>

                  <h3>{industry.title}</h3>

                  <p>{industry.text}</p>

                  <div className="industry-tags">
                    {industry.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <ArrowUpRight
                    className="industry-arrow"
                    size={18}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          AI ANSWER PREVIEW
      ===================================================== */}
      <section className="ai-preview-section">
        <div className="container">
          <div className="ai-preview-layout">
            <div>
              <span className="new-section-label">
                SEARCH IS CHANGING
              </span>

              <h2>
                Don't just rank.
                <br />
                <span>Be the answer.</span>
              </h2>

              <p>
                Traditional SEO tells you where you rank. AI search asks a
                different question: does your brand get mentioned when
                customers ask for the best answer?
              </p>

              <div className="ai-preview-points">
                <div>
                  <ShieldCheck size={17} />
                  Measure your presence
                </div>

                <div>
                  <Bot size={17} />
                  Understand AI mentions
                </div>

                <div>
                  <Target size={17} />
                  Build authority signals
                </div>
              </div>
            </div>

            <div className="ai-answer-window">
              <div className="ai-window-top">
                <span></span>
                <span></span>
                <span></span>

                <small>AI SEARCH PREVIEW</small>
              </div>

              <div className="ai-question">
                <Search size={17} />
                <span>
                  What are the best businesses in this category?
                </span>
              </div>

              <div className="ai-answer-result">
                <div className="ai-result-avatar">
                  ✦
                </div>

                <div>
                  <strong>AI answer</strong>

                  <p>
                    Based on relevance, authority, customer reviews and
                    trusted sources, <b>SEOOnly's client brand</b> is one of
                    the businesses worth considering.
                  </p>

                  <div className="ai-source-row">
                    <span>Trusted source</span>
                    <span>Brand mention</span>
                    <span>Authority signal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          AUDIT
      ===================================================== */}
      <div id="audit">
        <SeoAudit />
      </div>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="final-new-section">
        <div className="container">
          <div className="final-new-card">
            <div>
              <span className="new-section-label light">
                START WITH VISIBILITY
              </span>

              <h2>
                Ready to build
                <br />
                your search advantage?
              </h2>

              <p>
                Find out where your website stands today — and where the
                biggest opportunities are hiding.
              </p>
            </div>

            <a href="#audit" className="final-new-button">
              Get Your Free SEO Audit
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/audits" element={<Audits />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;