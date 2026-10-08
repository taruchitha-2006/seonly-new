import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          SEOONLY
        </Link>

        <nav className="navbar-links">
          <Link to="/about">About</Link>

          <Link to="/services">Services</Link>

          <Link to="/process">Process</Link>

          <Link to="/case-studies">Case Studies</Link>

          <Link to="/contact">Contact</Link>
        </nav>

        <Link
          to="/"
          className="navbar-audit-button"
          onClick={() => {
            setTimeout(() => {
              document
                .getElementById('audit')
                ?.scrollIntoView({
                  behavior: 'smooth',
                });
            }, 100);
          }}
        >
          Free SEO Audit
          <span>↗</span>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;