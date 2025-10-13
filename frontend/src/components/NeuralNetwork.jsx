import React, { useEffect, useRef } from 'react';

const NeuralNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = 700;
    canvas.height = 700;

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x || Math.random() * canvas.width;
        this.y = y || Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1.2; // Increased from 0.5 to 1.2
        this.vy = (Math.random() - 0.5) * 1.2; // Increased from 0.5 to 1.2
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#00FFD1';
        ctx.fill();
        // Removed shadow blur for better performance
      }
    }

    // Create particles (reduced for performance)
    const particles = [];
    const particleCount = 40; // Reduced from 80 to 40
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop with performance optimization
    let frameCount = 0;
    function animate() {
      frameCount++;
      
      // Skip frames for better performance (render every other frame)
      if (frameCount % 2 === 0) {
        requestAnimationFrame(animate);
        return;
      }
      
      // Fade effect for trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Increased fade for less trails
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        // Connect nearby particles
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) { // Reduced connection distance from 150 to 120
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 255, 209, ${1 - distance / 120})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    // Cleanup
    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  return (
    <div style={{ 
      position: 'relative',
      width: '700px',
      height: '700px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <canvas 
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          background: 'transparent'
        }}
      />
      
      {/* Center Digital Brain/ML Visualization */}
      <div style={{
        position: 'absolute',
        width: '160px',
        height: '160px',
        background: 'radial-gradient(circle, rgba(0, 255, 209, 0.4), rgba(0, 0, 0, 0))',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'pulse-glow 2s ease-in-out infinite',
        boxShadow: '0 0 80px rgba(0, 255, 209, 0.6)',
        zIndex: 10
      }}>
        {/* Digital Brain/ML Icon */}
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          {/* Central neural network core */}
          <circle cx="50" cy="50" r="35" stroke="#00FFD1" strokeWidth="2" fill="rgba(0, 255, 209, 0.1)" />
          <circle cx="50" cy="50" r="25" stroke="#00FFD1" strokeWidth="1.5" fill="rgba(0, 255, 209, 0.05)" />
          <circle cx="50" cy="50" r="15" stroke="#00FFD1" strokeWidth="1" fill="rgba(0, 255, 209, 0.15)" />
          
          {/* Neural nodes */}
          <circle cx="50" cy="20" r="4" fill="#00FFD1" />
          <circle cx="80" cy="50" r="4" fill="#00FFD1" />
          <circle cx="50" cy="80" r="4" fill="#00FFD1" />
          <circle cx="20" cy="50" r="4" fill="#00FFD1" />
          <circle cx="70" cy="30" r="3" fill="#00FFD1" />
          <circle cx="70" cy="70" r="3" fill="#00FFD1" />
          <circle cx="30" cy="70" r="3" fill="#00FFD1" />
          <circle cx="30" cy="30" r="3" fill="#00FFD1" />
          
          {/* Connection lines */}
          <line x1="50" y1="50" x2="50" y2="20" stroke="#00FFD1" strokeWidth="1" opacity="0.5" />
          <line x1="50" y1="50" x2="80" y2="50" stroke="#00FFD1" strokeWidth="1" opacity="0.5" />
          <line x1="50" y1="50" x2="50" y2="80" stroke="#00FFD1" strokeWidth="1" opacity="0.5" />
          <line x1="50" y1="50" x2="20" y2="50" stroke="#00FFD1" strokeWidth="1" opacity="0.5" />
          <line x1="50" y1="50" x2="70" y2="30" stroke="#00FFD1" strokeWidth="0.5" opacity="0.3" />
          <line x1="50" y1="50" x2="70" y2="70" stroke="#00FFD1" strokeWidth="0.5" opacity="0.3" />
          <line x1="50" y1="50" x2="30" y2="70" stroke="#00FFD1" strokeWidth="0.5" opacity="0.3" />
          <line x1="50" y1="50" x2="30" y2="30" stroke="#00FFD1" strokeWidth="0.5" opacity="0.3" />
          
          {/* Pulsing central dot */}
          <circle cx="50" cy="50" r="5" fill="#00FFD1">
            <animate attributeName="r" values="3;7;3" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
          </circle>
          
          {/* Orbiting data points */}
          <circle cx="50" cy="50" r="3" fill="#00FFD1">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="4s"
              repeatCount="indefinite"
            />
            <animate attributeName="cx" values="50;85;50" dur="4s" repeatCount="indefinite" />
          </circle>
        </svg>
        
        {/* ML Text */}
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          fontSize: '12px',
          fontWeight: '600',
          color: 'var(--brand-primary)',
          letterSpacing: '2px'
        }}>
          ML CORE
        </div>
      </div>
      
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 60px rgba(0, 255, 209, 0.6);
          }
          50% {
            transform: scale(1.1);
            box-shadow: 0 0 80px rgba(0, 255, 209, 0.8);
          }
        }
      `}</style>
    </div>
  );
};

export default NeuralNetwork;
