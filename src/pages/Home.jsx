import React, { useState, useMemo } from 'react';
import JOBS from '../data/jobs';
import JobCard from '../components/JobCard';
import ApplyModal from '../components/ApplyModal';

const CATS = ['', 'tech', 'design', 'business', 'finance', 'marketing'];
const CAT_LABELS = { '': 'All', tech: '💻 Tech', design: '🎨 Design', business: '📈 Business', finance: '💰 Finance', marketing: '📣 Marketing' };

export default function Home({ saved, toggleSave }) {
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('');
  const [loc, setLoc] = useState('');
  const [type, setType] = useState('');
  const [sort, setSort] = useState('newest');
  const [remote, setRemote] = useState(false);
  const [selected, setSelected] = useState(null);
  const [applyJob, setApplyJob] = useState(null);

  const filtered = useMemo(() => {
    let jobs = JOBS.filter(j => {
      if (cat && j.cat !== cat) return false;
      if (loc && loc !== 'Remote' && j.location !== loc) return false;
      if (loc === 'Remote' && !j.remote) return false;
      if (type && j.type !== type) return false;
      if (remote && !j.remote) return false;
      if (search) {
        const hay = [j.title, j.company, ...j.skills, j.location].join(' ').toLowerCase();
        if (!hay.includes(search.toLowerCase())) return false;
      }
      return true;
    });
    jobs.sort((a, b) => sort === 'salary' ? b.salaryNum - a.salaryNum : sort === 'deadline' ? a.deadlineDays - b.deadlineDays : a.posted - b.posted);
    return jobs;
  }, [search, cat, loc, type, sort, remote]);

  const selectedJob = JOBS.find(j => j.id === selected);

  const tag = (bg, color, text) => <span style={{ padding: '3px 10px', borderRadius: 20, fontSize: 11.5, fontWeight: 500, background: bg, color, marginRight: 6, marginBottom: 4, display: 'inline-block' }}>{text}</span>;

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#0f1117', padding: '72px 24px 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 80% at 50% -10%, rgba(26,95,255,0.25) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: '5px 14px', marginBottom: 24 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px #22c55e', display: 'inline-block' }}></span>
            200+ companies hiring now
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 20 }}>
            Find your<br /><span style={{ color: '#3a70ff' }}>perfect internship</span><br />or first job
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', marginBottom: 36, maxWidth: 500, margin: '0 auto 36px' }}>
            Curated opportunities for students and fresh graduates.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 0, background: '#fff', borderRadius: 50, padding: '6px 6px 6px 20px', boxShadow: '0 4px 24px rgba(0,0,0,0.2)', maxWidth: 560, margin: '0 auto 40px' }}>
            <i className="fa-solid fa-magnifying-glass" style={{ color: '#6b7280', fontSize: 15, flexShrink: 0 }}></i>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search role, company, or skill…" style={{ flex: 1, border: 'none', outline: 'none', fontSize: 15, color: '#1c1f2e', padding: '6px 12px', background: 'transparent', fontFamily: 'inherit' }} />
            <button style={{ background: '#1a5fff', color: '#fff', fontSize: 14, fontWeight: 600, padding: '10px 24px', borderRadius: 40, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>Search</button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            {[['8', 'Openings'], ['12', 'Companies'], ['6', 'Cities']].map(([n, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 26, fontWeight: 700, color: '#fff' }}>{n}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e8eaf0', position: 'sticky', top: 60, zIndex: 90, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="container" style={{ padding: '12px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', flex: 1 }}>
              {CATS.map(c => (
                <button key={c} onClick={() => setCat(c)} style={{ padding: '6px 16px', borderRadius: 20, fontSize: 13, fontWeight: 500, border: `1.5px solid ${cat === c ? '#1a5fff' : '#e8eaf0'}`, background: cat === c ? '#1a5fff' : '#fff', color: cat === c ? '#fff' : '#6b7280', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                  {CAT_LABELS[c]}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {[
                { id: 'loc', val: loc, set: setLoc, opts: ['Bangalore', 'Mumbai', 'Chennai', 'Hyderabad', 'Delhi', 'Remote'], placeholder: 'All locations' },
                { id: 'type', val: type, set: setType, opts: ['Full-time', 'Internship', 'Contract'], placeholder: 'All types' },
                { id: 'sort', val: sort, set: setSort, opts: [['newest', 'Newest'], ['salary', 'Highest salary'], ['deadline', 'Soonest deadline']], placeholder: null }
              ].map(({ id, val, set, opts, placeholder }) => (
                <select key={id} value={val} onChange={e => set(e.target.value)} style={{ padding: '7px 12px', borderRadius: 8, border: '1.5px solid #e8eaf0', fontSize: 13, color: '#1c1f2e', background: '#fff', outline: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                  {placeholder && <option value="">{placeholder}</option>}
                  {opts.map(o => Array.isArray(o) ? <option key={o[0]} value={o[0]}>{o[1]}</option> : <option key={o}>{o}</option>)}
                </select>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <main style={{ padding: '32px 0 64px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: 24, alignItems: 'start' }}>
            {/* Job List */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <p style={{ fontSize: 14, color: '#6b7280' }}>{filtered.length} opening{filtered.length !== 1 ? 's' : ''} found</p>
                <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#6b7280', cursor: 'pointer' }}>
                  <input type="checkbox" checked={remote} onChange={e => setRemote(e.target.checked)} style={{ accentColor: '#1a5fff' }} /> Remote only
                </label>
              </div>
              {filtered.length === 0 ? (
                <div style={{ textAlign: 'center', padding: 64, background: '#fff', borderRadius: 12, border: '1.5px dashed #e8eaf0' }}>
                  <i className="fa-solid fa-magnifying-glass" style={{ fontSize: 40, color: '#e8eaf0', display: 'block', marginBottom: 12 }}></i>
                  <h3 style={{ marginBottom: 6 }}>No jobs found</h3>
                  <p style={{ color: '#6b7280', fontSize: 14 }}>Try adjusting your search or filters.</p>
                </div>
              ) : (
                filtered.map(job => (
                  <JobCard key={job.id} job={job} saved={saved} onToggleSave={toggleSave} onSelect={id => setSelected(selected === id ? null : id)} isSelected={selected === job.id} onApply={setApplyJob} />
                ))
              )}
            </div>

            {/* Detail Panel */}
            <div style={{ position: 'sticky', top: 120 }}>
              {!selectedJob ? (
                <div style={{ background: '#fff', border: '1.5px dashed #e8eaf0', borderRadius: 12, padding: 60, textAlign: 'center', color: '#6b7280' }}>
                  <i className="fa-regular fa-hand-pointer" style={{ fontSize: 36, opacity: 0.3, display: 'block', marginBottom: 12 }}></i>
                  <p>Click a job to view details</p>
                </div>
              ) : (
                <div style={{ background: '#fff', border: '1.5px solid #e8eaf0', borderRadius: 12, boxShadow: '0 1px 4px rgba(0,0,0,0.07)', overflow: 'hidden' }}>
                  <div style={{ padding: 22, borderBottom: '1px solid #e8eaf0' }}>
                    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 14 }}>
                      <div style={{ width: 52, height: 52, borderRadius: 12, background: selectedJob.logoColor, color: selectedJob.logoText, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 16, flexShrink: 0, border: '1px solid #e8eaf0' }}>{selectedJob.logo}</div>
                      <div>
                        <div style={{ fontSize: 18, fontWeight: 700, color: '#1c1f2e' }}>{selectedJob.title}</div>
                        <div style={{ fontSize: 13, color: '#6b7280', marginTop: 2 }}>{selectedJob.company}</div>
                      </div>
                    </div>
                    <div style={{ marginBottom: 14 }}>
                      {selectedJob.roles.map(r => tag('#e8f0ff', '#1a5fff', r))}
                      {tag('#dcfce7', '#16a34a', selectedJob.type)}
                      {selectedJob.remote && tag('#fef3c7', '#d97706', 'Remote')}
                      {selectedJob.isNew && tag('#fee2e2', '#dc2626', 'New')}
                    </div>
                    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                      {[['Salary', selectedJob.salary], ['Location', selectedJob.location], ['Deadline', `${selectedJob.deadlineDays} days`]].map(([l, v]) => (
                        <div key={l}>
                          <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '.06em', color: '#6b7280', marginBottom: 2 }}>{l}</div>
                          <div style={{ fontSize: 15, fontWeight: 600 }}>{v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ padding: 22, maxHeight: 380, overflowY: 'auto' }}>
                    {[['About the role', [selectedJob.desc]], ['Responsibilities', selectedJob.responsibilities], ['Requirements', selectedJob.requirements]].map(([title, items]) => (
                      <div key={title} style={{ marginBottom: 18 }}>
                        <h4 style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.07em', color: '#6b7280', marginBottom: 8, fontWeight: 600 }}>{title}</h4>
                        {items.length === 1 ? <p style={{ fontSize: 13.5, lineHeight: 1.7 }}>{items[0]}</p> : <ul style={{ paddingLeft: 18 }}>{items.map((r, i) => <li key={i} style={{ fontSize: 13.5, lineHeight: 1.8 }}>{r}</li>)}</ul>}
                      </div>
                    ))}
                    <div style={{ marginBottom: 18 }}>
                      <h4 style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.07em', color: '#6b7280', marginBottom: 8, fontWeight: 600 }}>Skills</h4>
                      {selectedJob.skills.map(s => tag('#f3f4f6', '#4b5563', s))}
                    </div>
                  </div>
                  <div style={{ padding: '16px 22px', borderTop: '1px solid #e8eaf0', display: 'flex', gap: 8 }}>
                    <button onClick={() => toggleSave(selectedJob.id)} style={{ flex: 1, padding: 10, borderRadius: 8, border: `1.5px solid ${saved.has(selectedJob.id) ? '#1a5fff' : '#e8eaf0'}`, background: saved.has(selectedJob.id) ? '#e8f0ff' : '#fff', fontSize: 13, fontWeight: 600, color: saved.has(selectedJob.id) ? '#1a5fff' : '#6b7280', cursor: 'pointer' }}>
                      <i className={`fa-${saved.has(selectedJob.id) ? 'solid' : 'regular'} fa-bookmark`}></i> {saved.has(selectedJob.id) ? 'Saved' : 'Save'}
                    </button>
                    <button onClick={() => setApplyJob(selectedJob)} style={{ flex: 2, padding: 10, borderRadius: 8, background: '#1a5fff', color: '#fff', fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer' }}>
                      <i className="fa-solid fa-paper-plane"></i> Apply now
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {applyJob && <ApplyModal job={applyJob} onClose={() => setApplyJob(null)} />}
    </>
  );
}
