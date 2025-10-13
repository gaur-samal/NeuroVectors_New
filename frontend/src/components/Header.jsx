import React from 'react';
import '../styles/darkTheme.css';

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="dark-header">
      <img 
        src="https://customer-assets.emergentagent.com/job_1a5cfbe2-9845-4942-bcde-bfc48ffd0c5e/artifacts/ftjklk9b_Logo.png" 
        alt="Neural Vectors Logo" 
        className="dark-logo"
      />
      <nav className="dark-nav">
        <a href="#services" className="dark-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
        <a href="#demos" className="dark-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('demos'); }}>GenAI Demos</a>
        <a href="#about" className="dark-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
        <a href="#contact" className="dark-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
