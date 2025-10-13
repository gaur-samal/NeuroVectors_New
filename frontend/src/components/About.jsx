import React from 'react';
import { Zap, Target, Users, Shield } from 'lucide-react';
import { whyChooseUs, technologies } from '../mockData';
import '../styles/darkTheme.css';

const iconMap = {
  'Cutting-Edge Expertise': Zap,
  'Production-Ready Solutions': Target,
  'End-to-End Delivery': Users,
  'Ethical & Compliant': Shield
};

const About = () => {
  return (
    <section id="about" style={{
      padding: '160px 7.6923%',
      background: 'var(--bg-primary)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <h2 className="display-large" style={{ marginBottom: '24px' }}>
            Why <span style={{ color: 'var(--brand-primary)' }}>Neural Vectors</span>?
          </h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            We combine deep technical expertise with practical implementation experience
          </p>
        </div>
        
        {/* Why Choose Us Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          marginBottom: '100px'
        }}>
          {whyChooseUs.map((item) => {
            const IconComponent = iconMap[item.title];
            return (
              <div key={item.title} style={{
                background: 'var(--bg-secondary)',
                padding: '32px',
                border: '1px solid var(--border-subtle)',
                transition: 'all 0.4s ease-in-out'
              }} className="dark-hover">
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: 'var(--brand-hover)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <IconComponent size={28} color="var(--brand-primary)" />
                </div>
                <h3 className="heading-3" style={{ marginBottom: '12px' }}>
                  {item.title}
                </h3>
                <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Technologies Section */}
        <div style={{ textAlign: 'center' }}>
          <h3 className="display-medium" style={{ marginBottom: '40px' }}>
            Our <span style={{ color: 'var(--brand-primary)' }}>Tech Stack</span>
          </h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {technologies.map((tech) => (
              <div key={tech} style={{
                padding: '16px 28px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                transition: 'all 0.3s ease'
              }} className="dark-hover">
                <span className="body-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Image Gallery */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginTop: '100px'
        }}>
          {[
            'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTc2MDMyOTE2N3ww&ixlib=rb-4.1.0&q=85',
            'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxuZXVyYWwlMjBuZXR3b3Jrc3xlbnwwfHx8fDE3NjAzMjkxNjN8MA&ixlib=rb-4.1.0&q=85',
            'https://images.unsplash.com/photo-1672581437674-3186b17b405a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3NjAzMjkxNzF8MA&ixlib=rb-4.1.0&q=85',
            'https://images.unsplash.com/photo-1485740112426-0c2549fa8c86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3NjAzMjkxNzF8MA&ixlib=rb-4.1.0&q=85'
          ].map((img, idx) => (
            <div key={idx} style={{
              height: '200px',
              overflow: 'hidden',
              border: '1px solid var(--border-subtle)',
              transition: 'all 0.3s ease'
            }} className="dark-hover">
              <img 
                src={img} 
                alt={`AI Technology ${idx + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
