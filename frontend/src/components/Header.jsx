import React, { useState } from 'react';
import '../styles/darkTheme.css';

const Header = () => {
  const [showEventsDropdown, setShowEventsDropdown] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowEventsDropdown(false); // Close dropdown after navigation
  };

  const handleEventsClick = (type) => {
    scrollToSection('events');
    // Trigger the appropriate view in Events component via custom event
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('eventViewChange', { detail: type }));
    }, 500);
  };

  return (
    <header className="dark-header">
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <img 
          src="https://customer-assets.emergentagent.com/job_1a5cfbe2-9845-4942-bcde-bfc48ffd0c5e/artifacts/ftjklk9b_Logo.png" 
          alt="Neural Vectors Logo" 
          className="dark-logo"
        />
        <span style={{
          fontSize: '24px',
          fontWeight: '600',
          color: 'var(--text-primary)',
          letterSpacing: '1px',
          fontFamily: 'Kode Mono, monospace'
        }}>
          NEURALVECTORS
        </span>
      </div>
      <nav className="dark-nav">
        <a href="#services" className="dark-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
        <a href="#demos" className="dark-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('demos'); }}>GenAI Demos</a>
        <a href="#about" className="dark-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
        
        {/* Events Dropdown */}
        <div 
          style={{ position: 'relative', display: 'inline-block' }}
          onMouseEnter={() => setShowEventsDropdown(true)}
          onMouseLeave={() => setShowEventsDropdown(false)}
          onClick={() => setShowEventsDropdown(!showEventsDropdown)}
        >
          <a 
            href="#events" 
            className="dark-nav-link" 
            onClick={(e) => { 
              e.preventDefault(); 
              scrollToSection('events'); 
            }}
            style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
          >
            Events
            <span style={{ fontSize: '12px', transition: 'transform 0.3s ease', transform: showEventsDropdown ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              ▼
            </span>
          </a>
          
          {showEventsDropdown && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              marginTop: '10px',
              background: 'var(--bg-secondary)',
              border: '2px solid var(--brand-primary)',
              borderRadius: '8px',
              padding: '10px 0',
              minWidth: '200px',
              boxShadow: '0 10px 30px rgba(0, 255, 255, 0.3)',
              zIndex: 1000,
              animation: 'dropdownSlide 0.3s ease-out'
            }}>
              <a
                href="#events"
                onClick={(e) => { 
                  e.preventDefault(); 
                  handleEventsClick('upcoming'); 
                }}
                style={{
                  display: 'block',
                  padding: '12px 20px',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontFamily: 'Kode Mono, monospace',
                  transition: 'all 0.3s ease',
                  borderLeft: '3px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(0, 255, 255, 0.1)';
                  e.target.style.color = 'var(--brand-primary)';
                  e.target.style.borderLeftColor = 'var(--brand-primary)';
                  e.target.style.paddingLeft = '25px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = 'var(--text-primary)';
                  e.target.style.borderLeftColor = 'transparent';
                  e.target.style.paddingLeft = '20px';
                }}
              >
                🚀 Upcoming Events
              </a>
              <a
                href="#events"
                onClick={(e) => { 
                  e.preventDefault(); 
                  handleEventsClick('past'); 
                }}
                style={{
                  display: 'block',
                  padding: '12px 20px',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontFamily: 'Kode Mono, monospace',
                  transition: 'all 0.3s ease',
                  borderLeft: '3px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(0, 255, 255, 0.1)';
                  e.target.style.color = 'var(--brand-primary)';
                  e.target.style.borderLeftColor = 'var(--brand-primary)';
                  e.target.style.paddingLeft = '25px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = 'var(--text-primary)';
                  e.target.style.borderLeftColor = 'transparent';
                  e.target.style.paddingLeft = '20px';
                }}
              >
                📚 Past Events
              </a>
            </div>
          )}
        </div>

        <a href="#contact" className="dark-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
      </nav>
      
      <style>{`
        @keyframes dropdownSlide {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
