function VisibilityDashboard() {
  const metrics = [
    {
      label: 'Search Visibility',
      value: '87%',
      growth: '+24.8%',
    },
    {
      label: 'Organic Traffic',
      value: '64K',
      growth: '+31.4%',
    },
    {
      label: 'AI Mentions',
      value: '2.8K',
      growth: '+42.6%',
    },
  ];

  const chartPoints = [
    42, 48, 45, 54, 51, 59, 57, 66, 63, 71, 69, 78,
  ];

  return (
    <section className="visibility-dashboard">
      <div className="container">
        <div className="visibility-header">
          <div>
            <div className="section-label">
              VISIBILITY THAT MOVES
            </div>

            <h2>
              Turn search visibility
              <br />
              into business growth.
            </h2>
          </div>

          <p className="section-description">
            We track the signals that matter across traditional search
            and the growing AI ecosystem, giving you a clearer picture
            of how your brand is being discovered.
          </p>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-top">
            <div>
              <span className="dashboard-title">
                LIVE VISIBILITY
              </span>

              <span className="dashboard-subtitle">
                Search Performance · Last 12 months
              </span>
            </div>

            <span className="dashboard-live">
              <i></i>
              LIVE
            </span>
          </div>

          <div className="dashboard-metrics">
            {metrics.map((metric) => (
              <div className="dashboard-metric" key={metric.label}>
                <span>{metric.label}</span>

                <div className="metric-value-row">
                  <strong>{metric.value}</strong>
                  <small>{metric.growth}</small>
                </div>
              </div>
            ))}
          </div>

          <div className="dashboard-chart-area">
            <div className="chart-y-labels">
              <span>100</span>
              <span>75</span>
              <span>50</span>
              <span>25</span>
              <span>0</span>
            </div>

            <div className="dashboard-chart">
              <div className="chart-grid">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <svg
                className="visibility-chart"
                viewBox="0 0 1000 300"
                preserveAspectRatio="none"
                aria-label="Search visibility growth chart"
              >
                <defs>
                  <linearGradient
                    id="visibilityGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopOpacity="0.28"
                    />
                    <stop
                      offset="100%"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <path
                  className="chart-area-fill"
                  d="
                    M 0 190
                    L 90 174
                    L 180 181
                    L 270 154
                    L 360 162
                    L 450 138
                    L 540 145
                    L 630 116
                    L 720 125
                    L 810 93
                    L 900 101
                    L 1000 66
                    L 1000 300
                    L 0 300
                    Z
                  "
                />

                <path
                  className="chart-main-line"
                  d="
                    M 0 190
                    L 90 174
                    L 180 181
                    L 270 154
                    L 360 162
                    L 450 138
                    L 540 145
                    L 630 116
                    L 720 125
                    L 810 93
                    L 900 101
                    L 1000 66
                  "
                />

                {chartPoints.map((point, index) => {
                  const x = index * (1000 / 11);
                  const y = 300 - (point / 100) * 240;

                  return (
                    <circle
                      key={index}
                      cx={x}
                      cy={y}
                      r="5"
                      className="chart-point"
                    />
                  );
                })}
              </svg>

              <div className="chart-months">
                <span>JAN</span>
                <span>MAR</span>
                <span>MAY</span>
                <span>JUL</span>
                <span>SEP</span>
              </div>
            </div>
          </div>

          <div className="dashboard-footer">
            <div className="dashboard-status">
              <span className="status-dot"></span>
              <span>Visibility growing across search channels</span>
            </div>

            <span className="dashboard-period">
              Last 12 months
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisibilityDashboard;