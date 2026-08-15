import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-dark-bg text-gray-100 selection:bg-brand-blue/30 selection:text-white">
      {/* Navbar navigation header */}
      <Navbar />

      {/* Hero section */}
      <Hero
        onContactClick={() => scrollToSection('contact')}
        onProjectsClick={() => scrollToSection('projects')}
      />

      {/* Main sections container */}
      <main className="relative z-10">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Footer social icons & copyright info */}
      <Footer />
    </div>
  );
};

export default Home;