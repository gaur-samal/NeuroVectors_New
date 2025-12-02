import React, { useState } from 'react';
import { Linkedin, X } from 'lucide-react';
import '../styles/darkTheme.css';
import { toast } from 'sonner';

const Footer = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);

  const handleCareersClick = (e) => {
    e.preventDefault();
    toast.success('🚀 Exciting things are brewing! We\'re just getting started. Stay tuned for amazing opportunities!', {
      duration: 5000,
      style: {
        background: 'var(--bg-secondary)',
        color: 'var(--text-primary)',
        border: '1px solid var(--brand-primary)'
      }
    });
  };

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
              Leading GenAI consulting and development firm specializing in Generative AI solutions and intelligent applications.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="https://www.linkedin.com/company/neuralvectors-technologies/" target="_blank" rel="noopener noreferrer" style={{
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
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="heading-3" style={{ marginBottom: '20px' }}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#services" className="body-medium" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>GenAI Strategy & Consulting</a>
              <a href="#services" className="body-medium" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>Training & Workshops</a>
              <a href="#services" className="body-medium" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>GenAI Application Development</a>
              <a href="#services" className="body-medium" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>Custom GenAI Agents</a>
            </div>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="heading-3" style={{ marginBottom: '20px' }}>Company</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#about" className="body-medium" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>About Us</a>
              <a href="#demos" className="body-medium" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>GenAI Demos</a>
              <a href="#contact" className="body-medium" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>Contact</a>
              <a href="#" onClick={handleCareersClick} className="body-medium" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s', cursor: 'pointer' }}>Careers</a>
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
            © 2025 NeuralVectors LLP. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setShowPrivacyPolicy(true); }} 
              className="body-small" 
              style={{ color: 'var(--text-muted)', textDecoration: 'none', cursor: 'pointer' }}
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setShowTermsOfService(true); }} 
              className="body-small" 
              style={{ color: 'var(--text-muted)', textDecoration: 'none', cursor: 'pointer' }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
      
      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.9)',
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }} onClick={() => setShowPrivacyPolicy(false)}>
          <div style={{
            background: 'var(--bg-secondary)',
            maxWidth: '800px',
            maxHeight: '80vh',
            overflow: 'auto',
            padding: '40px',
            position: 'relative',
            border: '1px solid var(--border-subtle)'
          }} onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setShowPrivacyPolicy(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-primary)',
                cursor: 'pointer'
              }}
            >
              <X size={24} />
            </button>
            
            <h2 className="display-medium" style={{ marginBottom: '24px' }}>Privacy Policy</h2>
            <p className="body-small" style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>
              Last Updated: January 13, 2025
            </p>
            
            <div style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              <h3 className="heading-3" style={{ marginTop: '24px', marginBottom: '12px' }}>1. Information We Collect</h3>
              <p className="body-medium" style={{ marginBottom: '16px' }}>
                We collect information you provide directly to us, including name, email address, company name, and any messages you send through our contact form. We may also collect information about how you use our website, including your IP address, browser type, and pages visited.
              </p>
              
              <h3 className="heading-3" style={{ marginTop: '24px', marginBottom: '12px' }}>2. How We Use Your Information</h3>
              <p className="body-medium" style={{ marginBottom: '16px' }}>
                We use the information we collect to respond to your inquiries, provide our services, improve our website, and communicate with you about our GenAI consulting services. We may also use your information to send you marketing communications, but only with your consent.
              </p>
              
              <h3 className="heading-3" style={{ marginTop: '24px', marginBottom: '12px' }}>3. Information Sharing</h3>
              <p className="body-medium" style={{ marginBottom: '16px' }}>
                We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
              </p>
              
              <h3 className="heading-3" style={{ marginTop: '24px', marginBottom: '12px' }}>4. Data Security</h3>
              <p className="body-medium" style={{ marginBottom: '16px' }}>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
              
              <h3 className="heading-3" style={{ marginTop: '24px', marginBottom: '12px' }}>5. Cookies and Tracking</h3>
              <p className="body-medium" style={{ marginBottom: '16px' }}>
                Our website may use cookies and similar tracking technologies to enhance user experience and analyze website traffic. You can control cookies through your browser settings.
              </p>
              
              <h3 className="heading-3" style={{ marginTop: '24px', marginBottom: '12px' }}>6. Your Rights</h3>
              <p className="body-medium" style={{ marginBottom: '16px' }}>
                You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us at info@neuralvectors.in.
              </p>
              
              <h3 className="heading-3" style={{ marginTop: '24px', marginBottom: '12px' }}>7. Changes to This Policy</h3>
              <p className="body-medium" style={{ marginBottom: '16px' }}>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              
              <h3 className="heading-3" style={{ marginTop: '24px', marginBottom: '12px' }}>8. Contact Us</h3>
              <p className="body-medium" style={{ marginBottom: '16px' }}>
                If you have any questions about this Privacy Policy, please contact us at info@neuralvectors.in or Bangalore, India.
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Terms of Service Modal */}
      {showTermsOfService && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.9)',
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }} onClick={() => setShowTermsOfService(false)}>
          <div style={{
            background: 'var(--bg-secondary)',
            maxWidth: '800px',
            maxHeight: '80vh',
            overflow: 'auto',
            padding: '40px',
            position: 'relative',
            border: '1px solid var(--border-subtle)'
          }} onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setShowTermsOfService(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-primary)',
                cursor: 'pointer'
              }}
            >
              <X size={24} />
            </button>
            
            <h2 className="display-medium" style={{ marginBottom: '24px' }}>Terms of Service</h2>
            <p className="body-small" style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>
              Last Updated: January 13, 2025
            </p>
            
            <div style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              <h3 className="heading-3" style={{ marginTop: '24px', marginBottom: '12px' }}>1. Acceptance of Terms</h3>
              <p className="body-medium" style={{ marginBottom: '16px' }}>
                By accessing and using the NeuralVectors LLP website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
              
              <h3 className="heading-3" style={{ marginTop: '24px', marginBottom: '12px' }}>2. Services Description</h3>
              <p className="body-medium" style={{ marginBottom: '16px' }}>
                NeuralVectors LLP provides GenAI consulting, AI application development, training workshops, and related services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>
              
              <h3 className="heading-3" style={{ marginTop: '24px', marginBottom: '12px' }}>3. Use of Services</h3>
              <p className="body-medium" style={{ marginBottom: '16px' }}>
                You agree to use our services only for lawful purposes and in accordance with these Terms. You shall not use our services in any way that could damage, disable, or impair our systems or interfere with others' use of our services.
              </p>
              
              <h3 className="heading-3" style={{ marginTop: '24px', marginBottom: '12px' }}>4. Intellectual Property</h3>
              <p className="body-medium" style={{ marginBottom: '16px' }}>
                All content, trademarks, and intellectual property on this website are owned by NeuralVectors LLP or our licensors. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
              
              <h3 className="heading-3" style={{ marginTop: '24px', marginBottom: '12px' }}>5. Client Responsibilities</h3>
              <p className="body-medium" style={{ marginBottom: '16px' }}>
                Clients are responsible for providing accurate information, maintaining confidentiality of account credentials, and complying with all applicable laws and regulations when using our services.
              </p>
              
              <h3 className="heading-3" style={{ marginTop: '24px', marginBottom: '12px' }}>6. Limitation of Liability</h3>
              <p className="body-medium" style={{ marginBottom: '16px' }}>
                To the maximum extent permitted by law, NeuralVectors LLP shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid by you for our services.
              </p>
              
              <h3 className="heading-3" style={{ marginTop: '24px', marginBottom: '12px' }}>7. Confidentiality</h3>
              <p className="body-medium" style={{ marginBottom: '16px' }}>
                We agree to maintain the confidentiality of any proprietary information shared during our engagement. Both parties agree not to disclose confidential information to third parties without prior written consent.
              </p>
              
              <h3 className="heading-3" style={{ marginTop: '24px', marginBottom: '12px' }}>8. Termination</h3>
              <p className="body-medium" style={{ marginBottom: '16px' }}>
                We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any breach of these Terms or for any other reason at our sole discretion.
              </p>
              
              <h3 className="heading-3" style={{ marginTop: '24px', marginBottom: '12px' }}>9. Governing Law</h3>
              <p className="body-medium" style={{ marginBottom: '16px' }}>
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Bangalore, India.
              </p>
              
              <h3 className="heading-3" style={{ marginTop: '24px', marginBottom: '12px' }}>10. Contact Information</h3>
              <p className="body-medium" style={{ marginBottom: '16px' }}>
                For questions about these Terms of Service, please contact us at info@neuralvectors.in.
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
