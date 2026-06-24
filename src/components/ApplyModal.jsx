import React, { useState } from 'react';

export default function ApplyModal({ job, onClose }) {
  const [step, setStep] = useState('form');
  const [form, setForm] = useState({ name: '', email: '', phone: '', college: '', degree: '', year: '', cover: '', link: '' });
  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Enter your full name';
    if (!form.email.trim() || !form.email.includes('@')) e.email = 'Enter a valid email';
    if (!form.phone.trim()) e.phone = 'Enter your phone number';
    if (!form.college.trim()) e.college = 'Enter your college name';
    if (!resume) e.resume = 'Please upload your resume';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => { if (validate()) setStep('success'); };

  const overlay = { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 };
  const modal = { background: '#fff', borderRadius: 16, width: '100%', maxWidth: 600, maxHeight: '90vh', display: 'flex', flexDirection: 'column', boxShadow: '0 20px 60px rgba(0,0,0,0.25)' };
  const inputStyle = (err) => ({ padding: '9px 13px', borderRadius: 8, border: `1.5px solid ${err ? '#dc2626' : '#e8eaf0'}`, fontSize: 14, fontFamily: 'inherit', color: '#1c1f2e', width: '100%', outline: 'none' });
  const label = (text, req, opt) => <label style={{ fontSize: 13, fontWeight: 600, color: '#1c1f2e', marginBottom: 6, display: 'block' }}>{text} {req && <span style={{ color: '#dc2626' }}>*</span>}{opt && <span style={{ color: '#6b7280', fontWeight: 400 }}> (optional)</span>}</label>;

  return (
    <div style={overlay} onClick={onClose}>
      <div style={modal} onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '22px 24px 18px', borderBottom: '1px solid #e8eaf0', flexShrink: 0 }}>
          <div>
            <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.07em', color: '#6b7280', marginBottom: 4 }}>Applying for</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#1c1f2e' }}>{job.title}</div>
            <div style={{ fontSize: 13, color: '#6b7280', marginTop: 2 }}>{job.company}</div>
          </div>
          <button onClick={onClose} style={{ width: 34, height: 34, borderRadius: 8, border: '1px solid #e8eaf0', background: '#fff', fontSize: 16, color: '#6b7280', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Body */}
        <div style={{ overflowY: 'auto', padding: '22px 24px', flex: 1 }}>
          {step === 'form' ? (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                <div>
                  {label('Full Name', true)}
                  <input style={inputStyle(errors.name)} value={form.name} onChange={e => update('name', e.target.value)} placeholder="e.g. Arun Kumar" />
                  {errors.name && <div style={{ color: '#dc2626', fontSize: 12, marginTop: 4 }}>{errors.name}</div>}
                </div>
                <div>
                  {label('Email', true)}
                  <input style={inputStyle(errors.email)} value={form.email} onChange={e => update('email', e.target.value)} placeholder="you@email.com" type="email" />
                  {errors.email && <div style={{ color: '#dc2626', fontSize: 12, marginTop: 4 }}>{errors.email}</div>}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                <div>
                  {label('Phone', true)}
                  <input style={inputStyle(errors.phone)} value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="+91 98765 43210" />
                  {errors.phone && <div style={{ color: '#dc2626', fontSize: 12, marginTop: 4 }}>{errors.phone}</div>}
                </div>
                <div>
                  {label('College', true)}
                  <input style={inputStyle(errors.college)} value={form.college} onChange={e => update('college', e.target.value)} placeholder="e.g. Anna University" />
                  {errors.college && <div style={{ color: '#dc2626', fontSize: 12, marginTop: 4 }}>{errors.college}</div>}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                <div>
                  {label('Degree & Branch', false, true)}
                  <input style={inputStyle()} value={form.degree} onChange={e => update('degree', e.target.value)} placeholder="e.g. B.E Computer Science" />
                </div>
                <div>
                  {label('Year of Graduation', false, true)}
                  <select style={inputStyle()} value={form.year} onChange={e => update('year', e.target.value)}>
                    <option value="">Select year</option>
                    <option>2024</option><option>2025</option><option>2026</option><option>2027</option>
                  </select>
                </div>
              </div>
              <div style={{ marginBottom: 14 }}>
                {label('Upload Resume', true)}
                <div
                  onClick={() => document.getElementById('resume-input').click()}
                  style={{ border: `2px dashed ${errors.resume ? '#dc2626' : resume ? '#16a34a' : '#e8eaf0'}`, background: resume ? '#dcfce7' : '#fff', borderRadius: 8, padding: 22, textAlign: 'center', cursor: 'pointer' }}
                >
                  <i className="fa-solid fa-cloud-arrow-up" style={{ fontSize: 28, color: resume ? '#16a34a' : '#1a5fff', display: 'block', marginBottom: 8 }}></i>
                  <span style={{ fontSize: 13, color: resume ? '#16a34a' : '#6b7280' }}>{resume ? `✓ ${resume.name}` : 'Click to upload PDF or DOC (max 5MB)'}</span>
                  <input id="resume-input" type="file" accept=".pdf,.doc,.docx" style={{ display: 'none' }} onChange={e => { setResume(e.target.files[0]); setErrors(err => ({ ...err, resume: null })); }} />
                </div>
                {errors.resume && <div style={{ color: '#dc2626', fontSize: 12, marginTop: 4 }}>{errors.resume}</div>}
              </div>
              <div style={{ marginBottom: 14 }}>
                {label('Cover Letter', false, true)}
                <textarea style={{ ...inputStyle(), resize: 'vertical', lineHeight: 1.6 }} value={form.cover} onChange={e => update('cover', e.target.value)} rows={4} placeholder="Tell the employer why you're a great fit…" />
              </div>
              <div style={{ marginBottom: 14 }}>
                {label('LinkedIn / Portfolio URL', false, true)}
                <input style={inputStyle()} value={form.link} onChange={e => update('link', e.target.value)} placeholder="https://linkedin.com/in/yourname" type="url" />
              </div>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', paddingTop: 18, borderTop: '1px solid #e8eaf0' }}>
                <button onClick={onClose} style={{ padding: '10px 22px', borderRadius: 8, border: '1.5px solid #e8eaf0', fontSize: 14, fontWeight: 600, color: '#6b7280', background: '#fff', cursor: 'pointer' }}>Cancel</button>
                <button onClick={submit} style={{ padding: '10px 26px', borderRadius: 8, background: '#1a5fff', color: '#fff', fontSize: 14, fontWeight: 600, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <i className="fa-solid fa-paper-plane"></i> Submit Application
                </button>
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '20px 10px' }}>
              <div style={{ fontSize: 56, color: '#16a34a', marginBottom: 16 }}><i className="fa-solid fa-circle-check"></i></div>
              <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Application Submitted!</h2>
              <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 20 }}>Your application for <strong>{job.title}</strong> at <strong>{job.company}</strong> has been sent successfully.</p>
              <div style={{ background: '#f8f9fb', borderRadius: 8, border: '1px solid #e8eaf0', padding: '14px 18px', textAlign: 'left', marginBottom: 16 }}>
                {[['Name', form.name], ['Email', form.email], ['Phone', form.phone], ['College', form.college], ['Resume', resume?.name]].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                    <span style={{ color: '#6b7280', minWidth: 80, fontSize: 13 }}>{k}</span>
                    <span style={{ fontWeight: 500, fontSize: 13 }}>{v}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 12, color: '#6b7280', marginBottom: 20 }}>The recruiter will contact you within 3–5 business days.</p>
              <button onClick={onClose} style={{ padding: '10px 32px', borderRadius: 8, background: '#1a5fff', color: '#fff', fontSize: 14, fontWeight: 600, border: 'none', cursor: 'pointer', width: '100%' }}>
                <i className="fa-solid fa-check"></i> Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
