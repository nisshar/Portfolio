import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillChart from './components/SkillChart';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased text-slate-200 selection:bg-accent selection:text-slate-900">
      <Navbar />
      <Hero />
      <SkillChart />
      <Experience />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;