function SearchEcosystem() {
  const platforms = [
    {
      name: 'Google',
      description: 'Own the moments when customers actively search.',
      position: 'node-google',
      icon: 'G',
    },
    {
      name: 'ChatGPT',
      description: 'Become part of answers people trust and act on.',
      position: 'node-chatgpt',
      icon: '✦',
    },
    {
      name: 'Gemini',
      description: 'Build signals that help AI understand your brand.',
      position: 'node-gemini',
      icon: 'G',
    },
    {
      name: 'Perplexity',
      description: 'Show up when customers ask for recommendations.',
      position: 'node-perplexity',
      icon: 'P',
    },
  ];

  return (
    <section className="search-ecosystem">
      <div className="container">
        <div className="section-header">
          <div className="section-label">
            SEARCH IS EVERYWHERE
          </div>

          <h2>
            Our customers are searching everywhere.
          </h2>

          <p className="section-description">
            Search has moved beyond blue links. Your customers discover
            businesses through search engines, AI assistants, and answer
            platforms — and your brand needs to be visible across all of them.
          </p>
        </div>

        <div className="search-network">
          <div className="network-lines">
            <span className="line line-one"></span>
            <span className="line line-two"></span>
            <span className="line line-three"></span>
            <span className="line line-four"></span>
          </div>

          <div className="network-core">
            <div className="core-ring"></div>

            <div className="core-ring core-ring-two"></div>

            <div className="core-content">
              <span>SEARCH</span>
              <strong>SEOONLY</strong>
            </div>
          </div>

          {platforms.map((platform) => (
            <div
              className={`search-platform ${platform.position}`}
              key={platform.name}
            >
              <div className="platform-icon">
                {platform.icon}
              </div>

              <div className="platform-content">
                <strong>{platform.name}</strong>

                <p>{platform.description}</p>
              </div>
            </div>
          ))}

          <div className="network-label network-label-top">
            <span></span>
            DISCOVERY
          </div>

          <div className="network-label network-label-bottom">
            <span></span>
            RECOMMENDATION
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchEcosystem;