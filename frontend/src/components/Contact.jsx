import React, { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';
import axios from 'axios';
import '../styles/darkTheme.css';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post(`${API}/contact/submit`, formData);
      if (response.data.success) {
        toast.success(response.data.message);
        setFormData({ name: '', email: '', company: '', message: '' });
      }
    } catch (error) {
      console.error('Contact submission error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{
      padding: '160px 7.6923%',
      background: 'var(--bg-primary)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <h2 className="display-large" style={{ marginBottom: '24px' }}>
            Let's Build <span style={{ color: 'var(--brand-primary)' }}>Together</span>
          </h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            Ready to transform your business with AI? Get in touch with our team
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '60px'
        }}>
          {/* Contact Form */}
          <div style={{
            background: 'var(--bg-secondary)',
            padding: '40px',
            border: '1px solid var(--border-subtle)'
          }}>
            <h3 className="heading-2" style={{ marginBottom: '32px' }}>Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '24px' }}>
                <label className="body-medium" style={{ display: 'block', marginBottom: '8px' }}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    fontSize: '16px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <label className="body-medium" style={{ display: 'block', marginBottom: '8px' }}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    fontSize: '16px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <label className="body-medium" style={{ display: 'block', marginBottom: '8px' }}>Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    fontSize: '16px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <label className="body-medium" style={{ display: 'block', marginBottom: '8px' }}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    fontSize: '16px',
                    outline: 'none',
                    resize: 'vertical',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              
              <button 
                type="submit" 
                className="btn-primary dark-button-animate" 
                disabled={isSubmitting}
                style={{ width: '100%' }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={20} />
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="heading-2" style={{ marginBottom: '32px' }}>Get in touch</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--brand-hover)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Mail size={24} color="var(--brand-primary)" />
                </div>
                <div>
                  <p className="body-medium" style={{ marginBottom: '4px' }}>Email</p>
                  <p className="body-large" style={{ color: 'var(--brand-primary)' }}>contact@neuralvectors.ai</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--brand-hover)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={24} color="var(--brand-primary)" />
                </div>
                <div>
                  <p className="body-medium" style={{ marginBottom: '4px' }}>Location</p>
                  <p className="body-large" style={{ color: 'var(--brand-primary)' }}>Bangalore, India</p>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div style={{
              marginTop: '60px',
              height: '300px',
              overflow: 'hidden',
              border: '1px solid var(--border-subtle)'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1694903110330-cc64b7e1d21d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTc2MDMyOTE2N3ww&ixlib=rb-4.1.0&q=85"
                alt="Neural Vectors AI"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
