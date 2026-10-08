import {
  ArrowUpRight,
  Bot,
  Check,
  ChevronRight,
  FileText,
  Globe2,
  LineChart,
  Search,
  Sparkles,
  Target,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import './AboutPage.css';

function About() {
  const principles = [
    {
      number: '01',
      title: 'Specialist thinking',
      text: 'Search is our discipline. Every strategy begins with understanding how people search, compare and choose.',
      icon: Target,
    },
    {
      number: '02',
      title: 'Measurable growth',
      text: 'Visibility matters when it creates meaningful traffic, stronger enquiries and better business outcomes.',
      icon: LineChart,
    },
    {
      number: '03',
      title: 'Modern search',
      text: 'Google is only part of the picture. We build for AI assistants, answer engines and the next generation of discovery.',
      icon: Bot,
    },
  ];

  const capabilities = [
    {
      number: '01',
      title: 'Technical SEO',
      icon: Search,
    },
    {
      number: '02',
      title: 'Content Strategy',
      icon: FileText,
    },
    {
      number: '03',
      title: 'AI Search',
      icon: Bot,
    },
    {
      number: '04',
      title: 'Authority Building',
      icon: Globe2,
    },
    {
      number: '05',
      title: 'Local Search',
      icon: Target,
    },
    {
      number: '06',
      title: 'Search Analytics',
      icon: LineChart,
    },
  ];

  return (
    <div className="about-page">

      {/* HERO */}

      <section className="about-hero">
        <div className="about-hero-bg"></div>

        <div className="container about-hero-grid">
          <div className="about-hero-copy">

            <div className="about-eyebrow">
              <span></span>
              ABOUT SEOONLY
            </div>

            <h1>
              Search visibility
              <br />
              built for the way
              <br />
              <em>people discover.</em>
            </h1>

            <p>
              SEOOnly helps ambitious businesses become easier to find,
              understand and choose across Google, AI search and the
              platforms shaping modern discovery.
            </p>

            <div className="about-hero-actions">
              <Link to="/contact" className="about-primary-button">
                Start a Conversation
                <ArrowUpRight size={17} />
              </Link>

              <Link to="/services" className="about-secondary-button">
                Explore Services
              </Link>
            </div>

          </div>

          <div className="about-hero-art">

            <div className="about-art-glow"></div>

            <div className="about-art-ring ring-one"></div>
            <div className="about-art-ring ring-two"></div>
            <div className="about-art-ring ring-three"></div>

            <div className="about-art-core">
              <div className="about-art-core-icon">
                <Search size={26} />
              </div>

              <span>SEOONLY</span>

              <strong>SEARCH</strong>
            </div>

            <div className="about-art-node google-node">
              <span className="about-node-icon blue">G</span>
              <div>
                <strong>Google</strong>
                <small>Search visibility</small>
              </div>
            </div>

            <div className="about-art-node ai-node">
              <span className="about-node-icon green">✦</span>
              <div>
                <strong>AI Search</strong>
                <small>Recommendations</small>
              </div>
            </div>

            <div className="about-art-node answer-node">
              <span className="about-node-icon purple">P</span>
              <div>
                <strong>Answer Engines</strong>
                <small>Discovery</small>
              </div>
            </div>

            <div className="about-art-tag">
              <Sparkles size={13} />
              SEARCH IS CHANGING
            </div>

          </div>
        </div>
      </section>

      {/* STORY */}

      <section className="about-story-section">
        <div className="container about-story-grid">

          <div className="about-side-label">
            <span>01</span>
            THE SEOONLY STORY
          </div>

          <div className="about-story-content">

            <span className="about-small-label">
              ONE SPECIALISATION
            </span>

            <h2>
              Search has become too important to be
              <em> just another service.</em>
            </h2>

            <div className="about-story-columns">
              <p>
                SEO has evolved far beyond keywords and rankings.
                Technical foundations, content, authority, local search
                and AI-powered discovery now work together to determine
                which businesses get found and trusted.
              </p>

              <p>
                SEOOnly was built around a simple belief: businesses
                deserve specialist search expertise focused on creating
                measurable commercial value.
              </p>
            </div>

            <div className="about-story-highlight">

              <div className="about-highlight-number">
                01
              </div>

              <div>
                <span>OUR FOCUS</span>

                <strong>
                  Find. Understand. Trust. Choose.
                </strong>
              </div>

              <ArrowUpRight size={20} />

            </div>

          </div>
        </div>
      </section>

      {/* SEARCH LANDSCAPE */}

      <section className="about-landscape-section">

        <div className="container">

          <div className="about-landscape-heading">

            <div>
              <span className="about-section-label light">
                THE SEARCH LANDSCAPE
              </span>

              <h2>
                Discovery no longer
                <br />
                happens in <em>one place.</em>
              </h2>
            </div>

            <p>
              People still search Google. But increasingly they also ask
              AI assistants, explore recommendations and expect answers
              instead of lists of links.
            </p>

          </div>

          <div className="about-landscape-visual">

            <div className="landscape-line line-one"></div>
            <div className="landscape-line line-two"></div>

            <div className="landscape-center">
              <Search size={22} />
              <span>YOUR BRAND</span>
              <strong>VISIBLE</strong>
            </div>

            <div className="landscape-card landscape-google">
              <span className="landscape-number">01</span>
              <div>
                <strong>Google</strong>
                <small>Traditional search</small>
              </div>
            </div>

            <div className="landscape-card landscape-chatgpt">
              <span className="landscape-number">02</span>
              <div>
                <strong>AI Assistants</strong>
                <small>Recommendations</small>
              </div>
            </div>

            <div className="landscape-card landscape-answer">
              <span className="landscape-number">03</span>
              <div>
                <strong>Answer Engines</strong>
                <small>Direct answers</small>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* WHY SEOONLY */}

      <section className="about-principles-section">

        <div className="container">

          <div className="about-principles-heading">

            <div>
              <span className="about-section-label">
                WHY SEOONLY
              </span>

              <h2>
                A smarter way
                <br />
                to build <em>visibility.</em>
              </h2>
            </div>

            <p>
              We keep search at the centre of the strategy and connect
              technical performance, content, authority and AI discovery
              around one commercial objective.
            </p>

          </div>

          <div className="about-principles-grid">

            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  className="about-principle-card"
                  key={principle.number}
                >

                  <div className="about-principle-top">
                    <span>{principle.number}</span>

                    <div>
                      <Icon size={18} />
                    </div>
                  </div>

                  <div className="about-principle-body">
                    <h3>{principle.title}</h3>

                    <p>{principle.text}</p>
                  </div>

                  <ChevronRight
                    size={18}
                    className="about-principle-arrow"
                  />

                </article>
              );
            })}

          </div>

        </div>

      </section>

      {/* CAPABILITIES */}

      <section className="about-capabilities-section">

        <div className="container">

          <div className="about-capabilities-heading">

            <span className="about-section-label">
              WHAT WE SPECIALISE IN
            </span>

            <h2>
              Deep expertise across
              <br />
              the modern <em>search stack.</em>
            </h2>

          </div>

          <div className="about-capabilities-list">

            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <div
                  className="about-capability"
                  key={capability.number}
                >

                  <span>{capability.number}</span>

                  <Icon size={18} />

                  <strong>{capability.title}</strong>

                  <ArrowUpRight size={16} />

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* MISSION */}

      <section className="about-mission-section">

        <div className="container">

          <div className="about-mission-intro">

            <span className="about-section-label">
              MISSION & VISION
            </span>

            <h2>
              Build search visibility
              <br />
              that creates <em>real growth.</em>
            </h2>

          </div>

          <div className="about-mission-grid">

            <article className="about-mission-card mission-card">

              <span>OUR MISSION</span>

              <h3>
                Make search a stronger commercial growth channel.
              </h3>

              <p>
                Help ambitious businesses become more visible,
                more trusted and more discoverable through the
                search experiences their customers actually use.
              </p>

              <div className="mission-icon">
                <Target size={21} />
              </div>

            </article>

            <article className="about-mission-card vision-card">

              <span>OUR VISION</span>

              <h3>
                Stay visible wherever search goes next.
              </h3>

              <p>
                Search will continue to evolve. Our goal is to help
                businesses build the foundations and authority needed
                to adapt with it.
              </p>

              <div className="mission-icon">
                <Globe2 size={21} />
              </div>

            </article>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="about-final-section">

        <div className="container">

          <div className="about-final-card">

            <div className="about-final-orbit"></div>
            <div className="about-final-orbit orbit-small"></div>

            <div className="about-final-copy">

              <span>
                READY TO BE FOUND?
              </span>

              <h2>
                Build a search presence
                <br />
                people <em>remember.</em>
              </h2>

              <p>
                Bring your business, your goals and your search
                challenges. We'll bring the strategy.
              </p>

            </div>

            <Link
              to="/contact"
              className="about-final-button"
            >
              Start a Conversation
              <ArrowUpRight size={17} />
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;