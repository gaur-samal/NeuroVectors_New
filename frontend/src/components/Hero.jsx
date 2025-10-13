import React from 'react';
import { ArrowRight, Brain, Cpu, Sparkles } from 'lucide-react';
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
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
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
        
        {/* Right - GenAI Robot Visualization */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '600px', height: '600px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Animated Robot using Lottie from public CDN */}
            <Lottie 
              animationData={{}}
              loop={true}
              autoplay={true}
              style={{ width: '100%', height: '100%' }}
              onLoadedImages={() => console.log('Animation loaded')}
              fallback={
                <div style={{ 
                  width: '100%', 
                  height: '100%', 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '40px'
                }}>
                  {/* CSS-only animated robot */}
                  <div style={{ position: 'relative' }}>
                    {/* Robot head */}
                    <div style={{
                      width: '200px',
                      height: '200px',
                      background: 'linear-gradient(135deg, var(--brand-primary), #00d4aa)',
                      borderRadius: '20px',
                      position: 'relative',
                      animation: 'float 3s ease-in-out infinite',
                      boxShadow: '0 20px 60px rgba(0, 255, 209, 0.3)'
                    }}>
                      {/* Eyes */}
                      <div style={{ 
                        position: 'absolute', 
                        top: '60px', 
                        left: '40px',
                        width: '40px',
                        height: '40px',
                        background: '#000',
                        borderRadius: '50%',
                        animation: 'blink 3s infinite'
                      }}></div>
                      <div style={{ 
                        position: 'absolute', 
                        top: '60px', 
                        right: '40px',
                        width: '40px',
                        height: '40px',
                        background: '#000',
                        borderRadius: '50%',
                        animation: 'blink 3s infinite'
                      }}></div>
                      
                      {/* Mouth */}
                      <div style={{
                        position: 'absolute',
                        bottom: '50px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '100px',
                        height: '10px',
                        background: '#000',
                        borderRadius: '5px',
                        animation: 'talk 2s infinite'
                      }}></div>
                      
                      {/* Antenna */}
                      <div style={{
                        position: 'absolute',
                        top: '-30px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '4px',
                        height: '30px',
                        background: 'var(--brand-primary)'
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: '-10px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '16px',
                          height: '16px',
                          background: 'var(--brand-primary)',
                          borderRadius: '50%',
                          animation: 'pulse 1.5s infinite',
                          boxShadow: '0 0 20px var(--brand-primary)'
                        }}></div>
                      </div>
                    </div>
                    
                    {/* Floating icons around robot */}
                    <Brain 
                      size={48} 
                      style={{
                        position: 'absolute',
                        top: '-40px',
                        right: '-60px',
                        color: 'var(--brand-primary)',
                        animation: 'orbit1 4s linear infinite'
                      }}
                    />
                    <Cpu 
                      size={48} 
                      style={{
                        position: 'absolute',
                        bottom: '-40px',
                        left: '-60px',
                        color: 'var(--brand-primary)',
                        animation: 'orbit2 5s linear infinite'
                      }}
                    />
                    <Sparkles 
                      size={48} 
                      style={{
                        position: 'absolute',
                        top: '50%',
                        right: '-80px',
                        color: 'var(--brand-primary)',
                        animation: 'orbit3 3.5s linear infinite'
                      }}
                    />
                  </div>
                  
                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    fontSize: '14px',
                    textAlign: 'center'
                  }}>
                    Powered by Advanced GenAI
                  </p>
                </div>
              }
            />
          </div>
        </div>
        
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes pulse {
            0%, 100% { 
              transform: translateX(-50%) scale(1); 
              opacity: 1;
            }
            50% { 
              transform: translateX(-50%) scale(1.3); 
              opacity: 0.7;
            }
          }
          
          @keyframes blink {
            0%, 90%, 100% { height: 40px; }
            95% { height: 5px; }
          }
          
          @keyframes talk {
            0%, 100% { width: 100px; }
            50% { width: 80px; }
          }
          
          @keyframes orbit1 {
            0% { transform: rotate(0deg) translateX(80px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
          }
          
          @keyframes orbit2 {
            0% { transform: rotate(0deg) translateX(80px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
          }
          
          @keyframes orbit3 {
            0% { transform: rotate(0deg) translateX(90px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(90px) rotate(-360deg); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Hero;
