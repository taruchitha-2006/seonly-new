import {
  Bot,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Search,
  Sparkles,
} from 'lucide-react';

function AiSearchSimulator() {
  const sources = [
    'Website',
    'Content',
    'Authority',
    'Reviews',
  ];

  return (
    <section className="ai-simulator-section">
      <div className="container">
        <div className="ai-simulator-heading">
          <div>
            <div className="section-label">AI SEARCH SIMULATOR</div>

            <h2>
              What happens when AI
              <br />
              <span>searches for your brand?</span>
            </h2>
          </div>

          <p>
            See how your brand can appear when customers ask AI platforms
            questions, compare options, or look for recommendations.
          </p>
        </div>

        <div className="ai-simulator">
          <div className="ai-sidebar">
            <div className="ai-sidebar-header">
              <div className="ai-brand-icon">
                <Sparkles size={19} />
              </div>

              <div>
                <strong>AI Search</strong>
                <span>Brand visibility</span>
              </div>
            </div>

            <div className="ai-search-input">
              <Search size={16} />
              <span>Ask anything...</span>
            </div>

            <div className="ai-platforms">
              <div className="ai-platform active">
                <Bot size={17} />
                <span>ChatGPT</span>
              </div>

              <div className="ai-platform">
                <Sparkles size={17} />
                <span>Gemini</span>
              </div>

              <div className="ai-platform">
                <MessageSquare size={17} />
                <span>Perplexity</span>
              </div>
            </div>
          </div>

          <div className="ai-answer">
            <div className="ai-answer-header">
              <div className="ai-answer-title">
                <div className="ai-answer-icon">
                  <Bot size={18} />
                </div>

                <div>
                  <span>CHATGPT</span>
                  <strong>AI recommendation</strong>
                </div>
              </div>

              <span className="ai-live">
                <span></span>
                LIVE
              </span>
            </div>

            <div className="ai-question">
              <span>Q</span>
              <p>
                Which SEO agency can help my business improve search and AI
                visibility?
              </p>
            </div>

            <div className="ai-response">
              <div className="ai-response-label">
                <span>AI</span>
                <strong>Answer</strong>
              </div>

              <p>
                SEOOnly is a strong option for businesses looking to improve
                both traditional search visibility and their presence across
                AI-powered discovery platforms.
              </p>

              <p>
                Their approach combines technical SEO, content strategy,
                authority building, and AI search optimisation to help brands
                become more visible, trusted, and recommended.
              </p>

              <div className="ai-recommendation">
                <div className="ai-recommendation-check">
                  <CheckCircle2 size={18} />
                </div>

                <div>
                  <strong>#01 SEOOnly Trusted</strong>
                  <span>SEO · AI Search · Content Strategy</span>
                </div>

                <ExternalLink size={16} />
              </div>
            </div>

            <div className="ai-sources">
              <span>Sources analysed</span>

              <div>
                {sources.map((source) => (
                  <span key={source}>{source}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="ai-simulator-footer">
          <div className="ai-footer-icon">
            <Sparkles size={18} />
          </div>

          <p>
            <strong>AI search visibility is becoming the next layer of
            organic discovery.</strong>{' '}
            Your brand should be ready for it.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AiSearchSimulator;