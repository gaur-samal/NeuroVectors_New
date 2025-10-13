import React from 'react';
import { ArrowRight } from 'lucide-react';
import NeuralNetwork from './NeuralNetwork';
import '../styles/darkTheme.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section style={{
      minHeight: '110vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      paddingBottom: '60px',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--bg-primary)'
    }}>
      <div className="dark-container"></div>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: '0 7.6923%',
        position: 'relative',
        zIndex: 1,
        gap: '60px'
      }}>
        {/* Left Content */}
        <div style={{ flex: 1 }}>
          <h1 className="display-huge" style={{ marginBottom: '24px' }}>
            Transform Your Business with
            <span style={{ color: 'var(--brand-primary)' }}> Intelligent GenAI Solutions</span>
          </h1>
          
          <p className="body-large" style={{ marginBottom: '40px', maxWidth: '600px' }}>
            Leading-edge GenAI consulting, custom GenAI agent development, and enterprise-grade solutions powered by GPT-5, Claude 3.7, and advanced agentic frameworks.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <button className="btn-primary dark-button-animate" onClick={scrollToContact}>
              Get Started <ArrowRight size={20} />
            </button>
            <button className="btn-secondary dark-button-animate" onClick={() => document.getElementById('demos').scrollIntoView({ behavior: 'smooth' })}>
              View AI Demos
            </button>
          </div>
          
          <div style={{ marginTop: '60px' }}>
            <p className="body-muted" style={{ marginBottom: '16px' }}>Powered by cutting-edge technologies:</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {['GPT-5', 'Claude 3.7', 'Gemini 2.5', 'LangGraph', 'MCP'].map((tech) => (
                <span key={tech} style={{
                  padding: '8px 16px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  fontSize: '14px',
                  color: 'var(--text-secondary)'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right - Dynamic Neural Network Visualization */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <NeuralNetwork />
        </div>
      </div>
    </section>
  );
};

export default Hero;
