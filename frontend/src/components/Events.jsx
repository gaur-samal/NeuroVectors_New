import React, { useState } from 'react';
import EventRegistration from './EventRegistration';
import '../styles/darkTheme.css';

const Events = () => {
  const [showPastEventsPopup, setShowPastEventsPopup] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [selectedView, setSelectedView] = useState('upcoming'); // 'upcoming' or 'past'

  // Listen for custom event from Header dropdown
  React.useEffect(() => {
    const handleEventViewChange = (e) => {
      if (e.detail === 'past') {
        handlePastEventsClick();
      } else {
        setSelectedView('upcoming');
      }
    };

    window.addEventListener('eventViewChange', handleEventViewChange);
    return () => window.removeEventListener('eventViewChange', handleEventViewChange);
  }, []);

  const upcomingEvents = [
    {
      id: 1,
      title: 'From AI to Generative AI: A Technical Journey',
      subtitle: 'NeuralVectors Technologies Presents',
      description: 'Unlock Enterprise-Grade GenAI power. Join our 90 minutes exclusive technical GenAI webinar to master designing and production-ready GenAI systems.',
      date: '🎯 Announcing Soon - Stay Tuned!',
      topics: [
        'Architectural Evolution: Symbolic AI → Neural Networks → Generative Models',
        'RAG Architectures & Tool Calling Frameworks',
        'Autonomous Agents'
      ],
      image: 'https://customer-assets.emergentagent.com/job_vectors-ai/artifacts/b7oohrmw_NeuralVectors.png',
      type: 'webinar'
    }
  ];

  const handleShowInterest = () => {
    window.open('https://www.linkedin.com/company/neuralvectors', '_blank');
  };

  const handlePastEventsClick = () => {
    setShowPastEventsPopup(true);
    setTimeout(() => setShowPastEventsPopup(false), 3000);
  };

  return (
    <section id="events" className="dark-section" style={{ minHeight: '100vh', padding: '100px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 className="dark-section-title" style={{ marginBottom: '20px' }}>
          Events
        </h2>
        <p className="dark-section-subtitle" style={{ marginBottom: '60px' }}>
          Join us for exclusive GenAI learning experiences
        </p>

        {/* Event Type Tabs */}
        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          marginBottom: '50px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => setSelectedView('upcoming')}
            style={{
              padding: '15px 40px',
              fontSize: '18px',
              fontWeight: '600',
              fontFamily: 'Kode Mono, monospace',
              border: selectedView === 'upcoming' ? '2px solid var(--brand-primary)' : '2px solid var(--border)',
              background: selectedView === 'upcoming' ? 'rgba(0, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.03)',
              color: selectedView === 'upcoming' ? 'var(--brand-primary)' : 'var(--text-secondary)',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
            onMouseEnter={(e) => {
              if (selectedView !== 'upcoming') {
                e.target.style.borderColor = 'var(--brand-primary)';
                e.target.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedView !== 'upcoming') {
                e.target.style.borderColor = 'var(--border)';
                e.target.style.transform = 'translateY(0)';
              }
            }}
          >
            🚀 Upcoming Events
          </button>

          <button
            onClick={handlePastEventsClick}
            style={{
              padding: '15px 40px',
              fontSize: '18px',
              fontWeight: '600',
              fontFamily: 'Kode Mono, monospace',
              border: '2px solid var(--border)',
              background: 'rgba(255, 255, 255, 0.03)',
              color: 'var(--text-secondary)',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'var(--brand-primary)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'var(--border)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            📚 Past Events
          </button>
        </div>

        {/* Past Events Popup */}
        {showPastEventsPopup && (
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000,
            animation: 'popupBounce 0.5s ease-out'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(138, 43, 226, 0.2))',
              border: '2px solid var(--brand-primary)',
              borderRadius: '16px',
              padding: '40px 60px',
              boxShadow: '0 20px 60px rgba(0, 255, 255, 0.3)',
              backdropFilter: 'blur(20px)',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '48px',
                marginBottom: '20px',
                animation: 'rotate 2s linear infinite'
              }}>🚧</div>
              <h3 style={{
                color: 'var(--brand-primary)',
                fontSize: '24px',
                fontWeight: '700',
                marginBottom: '10px',
                fontFamily: 'Kode Mono, monospace'
              }}>
                Building History...
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '16px',
                fontFamily: 'Kode Mono, monospace'
              }}>
                Our journey is just beginning! 🌟<br/>
                Check back soon for our event archives.
              </p>
            </div>
          </div>
        )}

        {/* Upcoming Events */}
        {selectedView === 'upcoming' && (
          <div style={{
            display: 'grid',
            gap: '40px',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
          }}>
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.05), rgba(138, 43, 226, 0.05))',
                  border: '2px solid var(--border)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  animation: 'fadeInUp 0.6s ease-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.borderColor = 'var(--brand-primary)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Flashy Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'linear-gradient(135deg, var(--brand-primary), var(--accent-purple))',
                  color: 'var(--bg-primary)',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  animation: 'pulse 2s ease-in-out infinite',
                  zIndex: 1
                }}>
                  🔥 Hot
                </div>

                {/* Event Image */}
                <div style={{
                  width: '100%',
                  height: '300px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                  />
                </div>

                {/* Event Content */}
                <div style={{ padding: '30px' }}>
                  <p style={{
                    color: 'var(--brand-primary)',
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {event.subtitle}
                  </p>

                  <h3 style={{
                    color: 'var(--text-primary)',
                    fontSize: '24px',
                    fontWeight: '700',
                    marginBottom: '15px',
                    lineHeight: '1.3'
                  }}>
                    {event.title}
                  </h3>

                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    marginBottom: '20px'
                  }}>
                    {event.description}
                  </p>

                  {/* Date Badge */}
                  <div style={{
                    background: 'rgba(0, 255, 255, 0.1)',
                    border: '1px solid var(--brand-primary)',
                    borderRadius: '8px',
                    padding: '12px 20px',
                    marginBottom: '20px',
                    textAlign: 'center'
                  }}>
                    <p style={{
                      color: 'var(--brand-primary)',
                      fontSize: '16px',
                      fontWeight: '600',
                      fontFamily: 'Kode Mono, monospace'
                    }}>
                      {event.date}
                    </p>
                  </div>

                  {/* Topics */}
                  <div style={{ marginBottom: '25px' }}>
                    <h4 style={{
                      color: 'var(--text-primary)',
                      fontSize: '16px',
                      fontWeight: '600',
                      marginBottom: '12px'
                    }}>
                      What You'll Learn:
                    </h4>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {event.topics.map((topic, idx) => (
                        <li key={idx} style={{
                          color: 'var(--text-secondary)',
                          fontSize: '14px',
                          marginBottom: '8px',
                          paddingLeft: '24px',
                          position: 'relative',
                          lineHeight: '1.5'
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: '0',
                            color: 'var(--brand-primary)'
                          }}>▸</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div style={{
                    display: 'flex',
                    gap: '15px',
                    flexWrap: 'wrap'
                  }}>
                    <button
                      onClick={() => setShowRegistrationModal(true)}
                      style={{
                        flex: 1,
                        padding: '15px 30px',
                        fontSize: '16px',
                        fontWeight: '600',
                        fontFamily: 'Kode Mono, monospace',
                        background: 'linear-gradient(135deg, var(--brand-primary), var(--accent-purple))',
                        color: 'var(--bg-primary)',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.05)';
                        e.target.style.boxShadow = '0 8px 25px rgba(0, 255, 255, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      🎯 Register Now
                    </button>

                    <button
                      onClick={handleShowInterest}
                      style={{
                        flex: 1,
                        padding: '15px 30px',
                        fontSize: '16px',
                        fontWeight: '600',
                        fontFamily: 'Kode Mono, monospace',
                        background: 'transparent',
                        color: 'var(--brand-primary)',
                        border: '2px solid var(--brand-primary)',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'var(--brand-primary)';
                        e.target.style.color = 'var(--bg-primary)';
                        e.target.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = 'var(--brand-primary)';
                        e.target.style.transform = 'scale(1)';
                      }}
                    >
                      🔗 Connect on LinkedIn
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Event Registration Modal */}
      {showRegistrationModal && (
        <EventRegistration onClose={() => setShowRegistrationModal(false)} />
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }

        @keyframes popupBounce {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Events;