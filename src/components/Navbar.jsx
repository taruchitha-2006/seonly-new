import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleAuditClick = (event) => {
    event.preventDefault();
    closeMenu();

    if (window.location.pathname !== '/') {
      window.location.href = '/#audit';
      return;
    }

    const auditSection = document.getElementById('audit');

    if (auditSection) {
      auditSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Logo onClick={closeMenu} />

        <div className="navbar-actions">
          <button
            type="button"
            className={`navbar-menu-button ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="navbar-menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>

            <span>Menu</span>
          </button>

          <Link
            to="/"
            className="navbar-audit-button"
            onClick={handleAuditClick}
          >
            Free SEO Audit <span>↗</span>
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="navbar-menu-panel">
          <div className="container navbar-menu-inner">
            <div className="navbar-menu-header">
              <span>EXPLORE SEOONLY</span>

              <button
                type="button"
                className="navbar-menu-close"
                onClick={closeMenu}
                aria-label="Close navigation menu"
              >
                ×
              </button>
            </div>

            <nav className="navbar-menu-links">
              <Link to="/" onClick={closeMenu}>
                Home <span>↗</span>
              </Link>

              <Link to="/about" onClick={closeMenu}>
                About <span>↗</span>
              </Link>

              <Link to="/services" onClick={closeMenu}>
                Services <span>↗</span>
              </Link>

              <Link to="/process" onClick={closeMenu}>
                Process <span>↗</span>
              </Link>

              <Link to="/case-studies" onClick={closeMenu}>
                Case Studies <span>↗</span>
              </Link>

              <Link to="/contact" onClick={closeMenu}>
                Contact <span>↗</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;