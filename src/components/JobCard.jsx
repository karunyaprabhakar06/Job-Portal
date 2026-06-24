import React from 'react';

export default function JobCard({ job, saved, onToggleSave, onSelect, isSelected, onApply }) {
  const posted = job.posted === 0 ? 'Today' : job.posted === 1 ? 'Yesterday' : `${job.posted}d ago`;
  const isSaved = saved.has(job.id);

  const card = {
    background: '#fff', border: `${isSelected ? '2px' : '1.5px'} solid ${isSelected ? '#1a5fff' : '#e8eaf0'}`,
    borderRadius: 12, padding: '20px 22px', cursor: 'pointer',
    transition: 'all 0.18s', boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
    marginBottom: 12
  };

  const tag = (bg, color, text) => (
    <span style={{ padding: '3px 10px', borderRadius: 20, fontSize: 11.5, fontWeight: 500, background: bg, color, marginRight: 6, marginBottom: 4, display: 'inline-block' }}>{text}</span>
  );

  return (
    <div style={card} onClick={() => onSelect(job.id)}>
      {/* Header */}
      <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 14 }}>
        <div style={{ width: 46, height: 46, borderRadius: 10, background: job.logoColor, color: job.logoText, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 14, flexShrink: 0, border: '1px solid #e8eaf0' }}>
          {job.logo}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 16, fontWeight: 600, color: '#1c1f2e', marginBottom: 2 }}>{job.title}</div>
          <div style={{ fontSize: 13, color: '#6b7280' }}>{job.company}</div>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onToggleSave(job.id); }}
          style={{ width: 34, height: 34, borderRadius: 8, border: `1.5px solid ${isSaved ? '#1a5fff' : '#e8eaf0'}`, background: isSaved ? '#e8f0ff' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, color: isSaved ? '#1a5fff' : '#6b7280', cursor: 'pointer' }}
          aria-label={isSaved ? 'Remove bookmark' : 'Save job'}
        >
          <i className={`fa-${isSaved ? 'solid' : 'regular'} fa-bookmark`}></i>
        </button>
      </div>

      {/* Meta */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 14 }}>
        {[
          { icon: 'fa-location-dot', text: `${job.location}${job.remote ? ' · Remote' : ''}` },
          { icon: 'fa-clock', text: posted },
          { icon: 'fa-hourglass-half', text: `${job.deadlineDays}d left` }
        ].map((m, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12.5, color: '#6b7280' }}>
            <i className={`fa-solid ${m.icon}`} style={{ fontSize: 12 }}></i> {m.text}
          </span>
        ))}
      </div>

      {/* Tags */}
      <div style={{ marginBottom: 16 }}>
        {job.roles.map(r => tag('#e8f0ff', '#1a5fff', r))}
        {tag('#dcfce7', '#16a34a', job.type)}
        {job.remote && tag('#fef3c7', '#d97706', 'Remote')}
        {job.stipend && tag('#ede9fe', '#7c3aed', 'Stipend')}
        {job.isNew && tag('#fee2e2', '#dc2626', 'New')}
        {job.skills.slice(0, 3).map(s => tag('#f3f4f6', '#4b5563', s))}
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 14, borderTop: '1px solid #e8eaf0' }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 600, color: '#1c1f2e' }}>{job.salary}</div>
          <div style={{ fontSize: 12, color: '#6b7280' }}>Apply within {job.deadlineDays} days</div>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onApply(job); }}
          style={{ padding: '8px 20px', borderRadius: 8, background: '#1a5fff', color: '#fff', fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer' }}
        >
          Apply now
        </button>
      </div>
    </div>
  );
}
