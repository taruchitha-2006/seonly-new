import { Link } from 'react-router-dom';

function Footer() {
  const scrollToAudit = () => {
    window.location.href = '/#audit';

    setTimeout(() => {
      document
        .getElementById('audit')
        ?.scrollIntoView({
          behavior: 'smooth',
        });
    }, 100);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              SEOONLY
            </Link>

            <p>
              Building search visibility for ambitious brands
              across Google, AI search, and the next
              generation of discovery.
            </p>

            <a
              href="mailto:hello@seoonly.com.au"
              className="footer-email"
            >
              ✉ hello@seoonly.com.au
            </a>
          </div>

          <div className="footer-column">
            <span className="footer-column-title">
              SERVICES
            </span>

            <Link to="/services">Local SEO</Link>
            <Link to="/services">National SEO</Link>
            <Link to="/services">Ecommerce SEO</Link>
            <Link to="/services">SaaS SEO</Link>
            <Link to="/services">Enterprise SEO</Link>
          </div>

          <div className="footer-column">
            <span className="footer-column-title">
              COMPANY
            </span>

            <Link to="/about">About Us</Link>
            <Link to="/process">Our Process</Link>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/contact">Insights</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-cta">
            <span className="footer-column-title">
              START A CONVERSATION
            </span>

            <h3>
              Ready to build your
              <br />
              search advantage?
            </h3>

            <button
              type="button"
              className="footer-audit-button"
              onClick={scrollToAudit}
            >
              Get Your Free SEO Audit
              <span>↗</span>
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 SEOOnly. All rights reserved.
          </span>

          <div className="footer-socials">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              in
            </a>

            <a
              href="mailto:hello@seoonly.com.au"
            >
              @
            </a>
          </div>

          <div className="footer-legal">
            <Link to="/contact">
              Privacy Policy
            </Link>

            <Link to="/contact">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;