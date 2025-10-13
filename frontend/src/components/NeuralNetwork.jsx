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
      
      {/* Center AI Processor Chip */}
      <div style={{
        position: 'absolute',
        width: '180px',
        height: '180px',
        background: 'linear-gradient(135deg, rgba(0, 255, 209, 0.2), rgba(0, 212, 170, 0.1))',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'pulse-glow 2s ease-in-out infinite',
        boxShadow: '0 0 100px rgba(0, 255, 209, 0.5), inset 0 0 60px rgba(0, 255, 209, 0.1)',
        border: '2px solid rgba(0, 255, 209, 0.5)',
        zIndex: 10,
        transform: 'rotate(45deg)'
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'rotate(-45deg)'
        }}>
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            {/* Outer circuit ring */}
            <circle cx="60" cy="60" r="50" stroke="#00FFD1" strokeWidth="1" fill="none" opacity="0.4">
              <animate attributeName="r" values="50;52;50" dur="3s" repeatCount="indefinite" />
            </circle>
            
            {/* Middle circuit ring */}
            <circle cx="60" cy="60" r="35" stroke="#00FFD1" strokeWidth="1.5" fill="none" opacity="0.6">
              <animate attributeName="stroke-dasharray" values="0,220;220,0;0,220" dur="4s" repeatCount="indefinite" />
            </circle>
            
            {/* Inner core */}
            <circle cx="60" cy="60" r="20" fill="url(#glowGradient)" />
            
            {/* Circuit paths radiating out */}
            <path d="M60,40 L60,10" stroke="#00FFD1" strokeWidth="2" opacity="0.7">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M80,60 L110,60" stroke="#00FFD1" strokeWidth="2" opacity="0.7">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.5s" repeatCount="indefinite" />
            </path>
            <path d="M60,80 L60,110" stroke="#00FFD1" strokeWidth="2" opacity="0.7">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="1s" repeatCount="indefinite" />
            </path>
            <path d="M40,60 L10,60" stroke="#00FFD1" strokeWidth="2" opacity="0.7">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="1.5s" repeatCount="indefinite" />
            </path>
            
            {/* Corner circuit nodes */}
            <circle cx="75" cy="45" r="3" fill="#00FFD1">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="75" cy="75" r="3" fill="#00FFD1">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" begin="0.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="45" cy="75" r="3" fill="#00FFD1">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" begin="0.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="45" cy="45" r="3" fill="#00FFD1">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" begin="1.2s" repeatCount="indefinite" />
            </circle>
            
            {/* Central processing indicators */}
            <circle cx="60" cy="60" r="12" fill="none" stroke="#00FFD1" strokeWidth="1">
              <animate attributeName="r" values="8;14;8" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite" />
            </circle>
            
            {/* Rotating outer ring */}
            <circle cx="60" cy="60" r="45" fill="none" stroke="#00FFD1" strokeWidth="0.5" strokeDasharray="5,5" opacity="0.4">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 60 60"
                to="360 60 60"
                dur="10s"
                repeatCount="indefinite"
              />
            </circle>
            
            {/* Data flow particles */}
            <circle cx="60" cy="30" r="2" fill="#00FFD1">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 60 60"
                to="360 60 60"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
            
            <defs>
              <radialGradient id="glowGradient">
                <stop offset="0%" stopColor="#00FFD1" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00FFD1" stopOpacity="0.2" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        
        {/* Corner accents */}
        <div style={{ position: 'absolute', top: '-3px', left: '-3px', width: '15px', height: '15px', borderTop: '3px solid #00FFD1', borderLeft: '3px solid #00FFD1' }}></div>
        <div style={{ position: 'absolute', top: '-3px', right: '-3px', width: '15px', height: '15px', borderTop: '3px solid #00FFD1', borderRight: '3px solid #00FFD1' }}></div>
        <div style={{ position: 'absolute', bottom: '-3px', left: '-3px', width: '15px', height: '15px', borderBottom: '3px solid #00FFD1', borderLeft: '3px solid #00FFD1' }}></div>
        <div style={{ position: 'absolute', bottom: '-3px', right: '-3px', width: '15px', height: '15px', borderBottom: '3px solid #00FFD1', borderRight: '3px solid #00FFD1' }}></div>
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
