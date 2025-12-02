import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/darkTheme.css';

const EventsPage = () => {
  const navigate = useNavigate();
  const [showPastEventsPopup, setShowPastEventsPopup] = useState(false);
  const [selectedView, setSelectedView] = useState('upcoming');

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
      registrationLink: 'https://forms.gle/f6141cxpD1ncWdNK8',
      type: 'webinar'
    }
  ];

  const handleShowInterest = () => {
    window.open('https://www.linkedin.com/company/neuralvectors-technologies/', '_blank');
  };

  const handlePastEventsClick = () => {
    setSelectedView('past');
    setShowPastEventsPopup(true);
    setTimeout(() => setShowPastEventsPopup(false), 3000);
  };

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* Header with Back Button */}
      <header className="dark-header" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer' }} onClick={handleBackHome}>
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
        <button
          onClick={handleBackHome}
          style={{
            padding: '12px 30px',
            fontSize: '16px',
            fontWeight: '600',
            fontFamily: 'Kode Mono, monospace',
            background: 'transparent',
            color: 'var(--brand-primary)',
            border: '2px solid var(--brand-primary)',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'var(--brand-primary)';
            e.target.style.color = 'var(--bg-primary)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = 'var(--brand-primary)';
          }}
        >
          ← Back to Home
        </button>
      </header>

      {/* Events Content */}
      <section style={{ minHeight: '100vh', padding: '100px 20px' }}>
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
                    height: '400px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img
                      src={event.image}
                      alt={event.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        background: 'var(--bg-primary)',
                        transition: 'transform 0.4s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.02)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                      }}
                    />
                  </div>

                  {/* Event Content */}
                  <div style={{ padding: '30px' }}>
                    {/* Flashy Event Title */}
                    <div style={{
                      marginBottom: '25px',
                      textAlign: 'center',
                      position: 'relative'
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '15px',
                        marginBottom: '15px',
                        animation: 'sparkle 2s ease-in-out infinite'
                      }}>
                        <span style={{ fontSize: '24px' }}>✨</span>
                        <span style={{ fontSize: '28px' }}>⭐</span>
                        <span style={{ fontSize: '24px' }}>✨</span>
                      </div>
                      
                      <h3 style={{
                        background: 'linear-gradient(135deg, #FFD700, #FFA500, #FF69B4, #00FFFF, #FFD700)',
                        backgroundSize: '200% 200%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontSize: '28px',
                        fontWeight: '900',
                        marginBottom: '10px',
                        lineHeight: '1.3',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        animation: 'gradientShift 3s ease-in-out infinite, glow 2s ease-in-out infinite',
                        textShadow: '0 0 20px rgba(255, 215, 0, 0.5), 0 0 40px rgba(0, 255, 255, 0.3)',
                        filter: 'brightness(1.2)'
                      }}>
                        {event.title}
                      </h3>
                      
                      <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '15px',
                        marginTop: '15px',
                        animation: 'sparkle 2s ease-in-out infinite 1s'
                      }}>
                        <span style={{ fontSize: '24px' }}>🌟</span>
                        <span style={{ fontSize: '28px' }}>💫</span>
                        <span style={{ fontSize: '24px' }}>🌟</span>
                      </div>
                    </div>

                    <p style={{
                      color: 'var(--brand-primary)',
                      fontSize: '14px',
                      fontWeight: '600',
                      marginBottom: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      textAlign: 'center'
                    }}>
                      {event.subtitle}
                    </p>

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
                        onClick={() => window.open(event.registrationLink, '_blank')}
                        style={{
                          flex: 1,
                          minWidth: '200px',
                          padding: '15px 30px',
                          fontSize: '16px',
                          fontWeight: '700',
                          fontFamily: 'Kode Mono, monospace',
                          background: 'linear-gradient(135deg, #00FFFF, #8A2BE2)',
                          color: '#0a0a0f',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          boxShadow: '0 4px 15px rgba(0, 255, 255, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'scale(1.05)';
                          e.target.style.boxShadow = '0 8px 25px rgba(0, 255, 255, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'scale(1)';
                          e.target.style.boxShadow = '0 4px 15px rgba(0, 255, 255, 0.3)';
                        }}
                      >
                        🎯 Register Now
                      </button>

                      <button
                        onClick={handleShowInterest}
                        style={{
                          flex: 1,
                          minWidth: '200px',
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
      </section>

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

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes glow {
          0%, 100% {
            filter: brightness(1.2) drop-shadow(0 0 10px rgba(255, 215, 0, 0.5));
          }
          50% {
            filter: brightness(1.5) drop-shadow(0 0 20px rgba(0, 255, 255, 0.7));
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.2) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default EventsPage;