import React from 'react';

export default function About() {
  const card = { background: '#fff', border: '1.5px solid #e8eaf0', borderRadius: 12, padding: '28px 32px', boxShadow: '0 1px 4px rgba(0,0,0,0.07)', marginBottom: 20 };

  return (
    <>
      <section style={{ background: '#0f1117', padding: '48px 24px 44px' }}>
        <div className="container">
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 32, fontWeight: 700, color: '#fff', marginBottom: 8 }}>About PlacementCell</h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)' }}>Connecting students to their first opportunities.</p>
        </div>
      </section>

      <main style={{ padding: '32px 0 64px' }}>
        <div className="container">
          <div style={{ maxWidth: 800, margin: '0 auto' }}>

            <div style={card}>
              <div style={{ fontSize: 28, color: '#1a5fff', marginBottom: 12 }}><i className="fa-solid fa-bullseye"></i></div>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>Our Mission</h2>
              <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.8 }}>PlacementCell helps students at engineering and management colleges discover internships and entry-level jobs from top companies — all in one curated portal.</p>
            </div>

            <div style={card}>
              <div style={{ fontSize: 28, color: '#1a5fff', marginBottom: 12 }}><i className="fa-solid fa-gears"></i></div>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>How it works</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Browse hundreds of verified openings', 'Filter by role, location, type, or category', 'Bookmark jobs and revisit anytime', 'View full job details and apply directly'].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, color: '#6b7280' }}>
                    <i className="fa-solid fa-check" style={{ color: '#16a34a' }}></i> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={card}>
              <div style={{ fontSize: 28, color: '#1a5fff', marginBottom: 12 }}><i className="fa-solid fa-code"></i></div>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>Tech Stack</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {[['fa-brands fa-react', 'React.js'], ['fa-brands fa-js', 'JavaScript'], ['fa-solid fa-database', 'LocalStorage'], ['fa-solid fa-mobile-alt', 'Responsive Design'], ['fa-solid fa-route', 'React Router']].map(([icon, name]) => (
                  <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 14px', borderRadius: 8, border: '1.5px solid #e8eaf0', fontSize: 13, fontWeight: 500 }}>
                    <i className={icon} style={{ fontSize: 16, color: '#1a5fff' }}></i> {name}
                  </div>
                ))}
              </div>
            </div>

            <div style={card}>
              <div style={{ fontSize: 28, color: '#1a5fff', marginBottom: 12 }}><i className="fa-solid fa-user-graduate"></i></div>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>Built for students</h2>
              <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.8 }}>This project was developed as an internship project to demonstrate React development skills including component-based architecture, React hooks (useState, useMemo), React Router, and localStorage persistence.</p>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
