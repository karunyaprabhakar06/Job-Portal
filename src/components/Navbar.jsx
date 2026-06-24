import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const styles = {
  navbar: { background: '#0f1117', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 1px 0 rgba(255,255,255,0.06)' },
  inner: { maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 },
  logo: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' },
  logoIcon: { width: 32, height: 32, borderRadius: 8, background: '#1a5fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: '#fff' },
  accent: { color: '#3a70ff' },
  links: { display: 'flex', alignItems: 'center', gap: 4 },
  link: { padding: '6px 14px', borderRadius: 8, fontSize: 14, color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none', transition: 'all 0.15s' },
  linkActive: { color: '#fff', background: 'rgba(255,255,255,0.08)' },
  badge: { background: '#1a5fff', color: '#fff', fontSize: 11, fontWeight: 600, padding: '1px 7px', borderRadius: 20, minWidth: 20, textAlign: 'center' },
  hamburger: { display: 'none', color: '#fff', fontSize: 20, padding: 6, background: 'transparent', border: 'none', cursor: 'pointer' },
  mobileMenu: { display: 'flex', flexDirection: 'column', gap: 4, padding: '12px 24px 16px', borderTop: '1px solid rgba(255,255,255,0.06)' }
};

export default function Navbar({ savedCount }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={styles.navbar}>
      <div style={styles.inner}>
        <Link to="/" style={styles.logo}>
          <span style={styles.logoIcon}><i className="fa-solid fa-briefcase"></i></span>
          Placement<span style={styles.accent}>Cell</span>
        </Link>
        <div style={styles.links} className="nav-links-desktop">
          <Link to="/" style={{ ...styles.link, ...(isActive('/') ? styles.linkActive : {}) }}>Browse Jobs</Link>
          <Link to="/saved" style={{ ...styles.link, ...(isActive('/saved') ? styles.linkActive : {}) }}>
            <i className="fa-regular fa-bookmark"></i> Saved
            <span style={styles.badge}>{savedCount}</span>
          </Link>
          <Link to="/about" style={{ ...styles.link, ...(isActive('/about') ? styles.linkActive : {}) }}>About</Link>
        </div>
        <button style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fa-solid fa-${menuOpen ? 'xmark' : 'bars'}`}></i>
        </button>
      </div>
      {menuOpen && (
        <div style={styles.mobileMenu}>
          <Link to="/" style={styles.link} onClick={() => setMenuOpen(false)}>Browse Jobs</Link>
          <Link to="/saved" style={styles.link} onClick={() => setMenuOpen(false)}>Saved ({savedCount})</Link>
          <Link to="/about" style={styles.link} onClick={() => setMenuOpen(false)}>About</Link>
        </div>
      )}
    </nav>
  );
}
