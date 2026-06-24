import React, { useState } from 'react';
import JOBS from '../data/jobs';
import JobCard from '../components/JobCard';
import ApplyModal from '../components/ApplyModal';
import { Link } from 'react-router-dom';

export default function SavedJobs({ saved, toggleSave }) {
  const [applyJob, setApplyJob] = useState(null);
  const [selected, setSelected] = useState(null);
  const savedJobs = JOBS.filter(j => saved.has(j.id));

  return (
    <>
      <section style={{ background: '#0f1117', padding: '48px 24px 44px' }}>
        <div className="container">
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 32, fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <i className="fa-solid fa-bookmark"></i> Saved Jobs
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)' }}>Your shortlisted opportunities, all in one place.</p>
        </div>
      </section>

      <main style={{ padding: '32px 0 64px' }}>
        <div className="container">
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            {savedJobs.length === 0 ? (
              <div style={{ textAlign: 'center', padding: 64, background: '#fff', borderRadius: 12, border: '1.5px dashed #e8eaf0' }}>
                <i className="fa-regular fa-bookmark" style={{ fontSize: 40, color: '#e8eaf0', display: 'block', marginBottom: 12 }}></i>
                <h3 style={{ marginBottom: 6 }}>No saved jobs yet</h3>
                <p style={{ color: '#6b7280', fontSize: 14 }}>Browse <Link to="/" style={{ color: '#1a5fff', fontWeight: 500 }}>all jobs</Link> and bookmark the ones you like.</p>
              </div>
            ) : (
              savedJobs.map(job => (
                <JobCard key={job.id} job={job} saved={saved} onToggleSave={toggleSave} onSelect={id => setSelected(selected === id ? null : id)} isSelected={selected === job.id} onApply={setApplyJob} />
              ))
            )}
          </div>
        </div>
      </main>

      {applyJob && <ApplyModal job={applyJob} onClose={() => setApplyJob(null)} />}
    </>
  );
}
