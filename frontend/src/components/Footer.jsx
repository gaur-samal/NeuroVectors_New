import React, { useState } from 'react';
import { Linkedin } from 'lucide-react';
import '../styles/darkTheme.css';
import { toast } from 'sonner';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '60px 7.6923%',
      marginTop: '0'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '60px',
          marginBottom: '60px'
        }}>
          {/* Brand */}
          <div>
            <img 
              src="https://customer-assets.emergentagent.com/job_1a5cfbe2-9845-4942-bcde-bfc48ffd0c5e/artifacts/ftjklk9b_Logo.png" 
              alt="Neural Vectors" 
              style={{ height: '36px', marginBottom: '20px' }}
            />
            <p className="body-medium" style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Leading AI consulting and development firm specializing in GenAI solutions and intelligent applications.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" style={{
                width: '40px',
                height: '40px',
                background: 'var(--brand-hover)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }} className="dark-hover">
                <Twitter size={20} color="var(--brand-primary)" />
              </a>
              <a href="#" style={{
                width: '40px',
                height: '40px',
                background: 'var(--brand-hover)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }} className="dark-hover">
                <Linkedin size={20} color="var(--brand-primary)" />
              </a>
              <a href="#" style={{
                width: '40px',
                height: '40px',
                background: 'var(--brand-hover)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }} className="dark-hover">
                <Github size={20} color="var(--brand-primary)" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="heading-3" style={{ marginBottom: '20px' }}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#services" className="body-medium" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>AI Strategy & Consulting</a>
              <a href="#services" className="body-medium" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>Training & Workshops</a>
              <a href="#services" className="body-medium" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>AI Application Development</a>
              <a href="#services" className="body-medium" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>Custom AI Agents</a>
            </div>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="heading-3" style={{ marginBottom: '20px' }}>Company</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#about" className="body-medium" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>About Us</a>
              <a href="#demos" className="body-medium" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>AI Demos</a>
              <a href="#contact" className="body-medium" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>Contact</a>
              <a href="#" className="body-medium" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>Careers</a>
            </div>
          </div>
          
          {/* Technologies */}
          <div>
            <h4 className="heading-3" style={{ marginBottom: '20px' }}>Technologies</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span className="body-medium" style={{ color: 'var(--text-secondary)' }}>GPT-5 & GPT-4.1</span>
              <span className="body-medium" style={{ color: 'var(--text-secondary)' }}>Claude 3.7</span>
              <span className="body-medium" style={{ color: 'var(--text-secondary)' }}>Gemini 2.5</span>
              <span className="body-medium" style={{ color: 'var(--text-secondary)' }}>LangGraph & MCP</span>
            </div>
          </div>
        </div>
        
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p className="body-small" style={{ color: 'var(--text-muted)' }}>
            © 2025 Neural Vectors. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" className="body-small" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" className="body-small" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
