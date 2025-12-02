import React, { useState } from 'react';
import '../styles/darkTheme.css';

const EventRegistration = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
      // Using the same Google AppScript endpoint as contact form
      const response = await fetch('https://script.google.com/macros/s/AKfycbxwMRh4TN6OyQUzg_Fve8BH_DJPj_gK_xL--2i4Hw3y9VTBW2e1jdPE_MQ8s1i-57tB/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'Event Registration',
          event: 'From AI to Generative AI: A Technical Journey'
        })
      });

      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error submitting registration:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(8px)',
          zIndex: 9998,
          animation: 'fadeIn 0.3s ease-out'
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          width: '90%',
          maxWidth: '600px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'var(--bg-secondary)',
          border: '2px solid var(--brand-primary)',
          borderRadius: '16px',
          padding: '40px',
          boxShadow: '0 20px 60px rgba(0, 255, 255, 0.3)',
          animation: 'slideUp 0.4s ease-out'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-secondary)',
            fontSize: '28px',
            cursor: 'pointer',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            e.target.style.color = 'var(--brand-primary)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = 'var(--text-secondary)';
          }}
        >
          ×
        </button>

        {/* Header */}
        <div style={{ marginBottom: '30px', textAlign: 'center' }}>
          <div style={{
            fontSize: '48px',
            marginBottom: '15px'
          }}>🎓</div>
          <h2 style={{
            color: 'var(--text-primary)',
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '10px',
            fontFamily: 'Kode Mono, monospace'
          }}>
            Register for Event
          </h2>
          <p style={{
            color: 'var(--brand-primary)',
            fontSize: '16px',
            fontWeight: '600'
          }}>
            From AI to Generative AI: A Technical Journey
          </p>
        </div>

        {/* Success/Error Message */}
        {submitStatus === 'success' && (
          <div style={{
            background: 'rgba(0, 255, 0, 0.1)',
            border: '2px solid #00ff00',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '20px',
            textAlign: 'center',
            animation: 'fadeIn 0.3s ease-out'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '10px' }}>✅</div>
            <p style={{
              color: '#00ff00',
              fontSize: '18px',
              fontWeight: '600',
              fontFamily: 'Kode Mono, monospace'
            }}>
              Registration Successful!
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '14px',
              marginTop: '5px'
            }}>
              We'll contact you soon with event details.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div style={{
            background: 'rgba(255, 0, 0, 0.1)',
            border: '2px solid #ff0000',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '20px',
            textAlign: 'center',
            animation: 'fadeIn 0.3s ease-out'
          }}>
            <p style={{
              color: '#ff0000',
              fontSize: '16px',
              fontWeight: '600'
            }}>
              Something went wrong. Please try again.
            </p>
          </div>
        )}

        {/* Form */}
        {!submitStatus && (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{
                display: 'block',
                color: 'var(--text-primary)',
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '8px',
                fontFamily: 'Kode Mono, monospace'
              }}>
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                style={{
                  width: '100%',
                  padding: '15px',
                  background: 'var(--bg-primary)',
                  border: '2px solid var(--border)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Kode Mono, monospace'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--brand-primary)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border)';
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                color: 'var(--text-primary)',
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '8px',
                fontFamily: 'Kode Mono, monospace'
              }}>
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@company.com"
                style={{
                  width: '100%',
                  padding: '15px',
                  background: 'var(--bg-primary)',
                  border: '2px solid var(--border)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Kode Mono, monospace'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--brand-primary)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border)';
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                color: 'var(--text-primary)',
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '8px',
                fontFamily: 'Kode Mono, monospace'
              }}>
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXXXXXXX"
                style={{
                  width: '100%',
                  padding: '15px',
                  background: 'var(--bg-primary)',
                  border: '2px solid var(--border)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Kode Mono, monospace'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--brand-primary)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border)';
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                color: 'var(--text-primary)',
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '8px',
                fontFamily: 'Kode Mono, monospace'
              }}>
                Company/Organization
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
                style={{
                  width: '100%',
                  padding: '15px',
                  background: 'var(--bg-primary)',
                  border: '2px solid var(--border)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Kode Mono, monospace'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--brand-primary)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border)';
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                color: 'var(--text-primary)',
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '8px',
                fontFamily: 'Kode Mono, monospace'
              }}>
                Your Role
              </label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="e.g., ML Engineer, CTO, Data Scientist"
                style={{
                  width: '100%',
                  padding: '15px',
                  background: 'var(--bg-primary)',
                  border: '2px solid var(--border)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Kode Mono, monospace'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--brand-primary)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border)';
                }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '18px',
                fontSize: '18px',
                fontWeight: '700',
                fontFamily: 'Kode Mono, monospace',
                background: isSubmitting ? 'rgba(0, 255, 255, 0.3)' : 'linear-gradient(135deg, var(--brand-primary), var(--accent-purple))',
                color: 'var(--bg-primary)',
                border: 'none',
                borderRadius: '8px',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginTop: '10px'
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.target.style.transform = 'scale(1.02)';
                  e.target.style.boxShadow = '0 8px 25px rgba(0, 255, 255, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }
              }}
            >
              {isSubmitting ? '🚀 Registering...' : '✨ Complete Registration'}
            </button>
          </form>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translate(-50%, -40%);
            opacity: 0;
          }
          to {
            transform: translate(-50%, -50%);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default EventRegistration;