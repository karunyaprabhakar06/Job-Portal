import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SavedJobs from './pages/SavedJobs';
import About from './pages/About';
import './index.css';

function App() {
  const [saved, setSaved] = useState(() => {
    try {
      const stored = localStorage.getItem('saved_jobs');
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch { return new Set(); }
  });

  const toggleSave = (id) => {
    setSaved(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      localStorage.setItem('saved_jobs', JSON.stringify([...next]));
      return next;
    });
  };
return (
    <Router basename="/Job-Portal">
      <Navbar savedCount={saved.size} />
      <Routes>
        <Route path="/" element={<Home saved={saved} toggleSave={toggleSave} />} />
        <Route path="/saved" element={<SavedJobs saved={saved} toggleSave={toggleSave} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;