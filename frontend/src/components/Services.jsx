import React from 'react';
import { Brain, GraduationCap, Code, CheckCircle } from 'lucide-react';
import { servicesData } from '../mockData';
import '../styles/darkTheme.css';

const iconMap = {
  brain: Brain,
  'graduation-cap': GraduationCap,
  code: Code
};

const Services = () => {
  return (
    <section id="services" style={{
      padding: '160px 7.6923%',
      background: 'var(--bg-primary)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <h2 className="display-large" style={{ marginBottom: '24px' }}>
            Our <span style={{ color: 'var(--brand-primary)' }}>GenAI Services</span>
          </h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            End-to-end GenAI transformation services from strategy to deployment
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px'
        }}>
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div key={service.id} className="dark-hover" style={{
                background: 'var(--bg-secondary)',
                padding: '40px',
                border: '1px solid var(--border-subtle)',
                transition: 'all 0.4s ease-in-out'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: 'var(--brand-hover)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <IconComponent size={32} color="var(--brand-primary)" />
                </div>
                
                <h3 className="heading-2" style={{ marginBottom: '16px' }}>
                  {service.title}
                </h3>
                
                <p className="body-medium" style={{ marginBottom: '24px', color: 'var(--text-secondary)' }}>
                  {service.description}
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {service.features.map((feature, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <CheckCircle size={18} color="var(--brand-primary)" />
                      <span className="body-small">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
