import React, { useEffect, useRef } from 'react';

const NeuralNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 600;

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x || Math.random() * canvas.width;
        this.y = y || Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
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
        
        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00FFD1';
      }
    }

    // Create particles
    const particles = [];
    const particleCount = 80;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    function animate() {
      // Fade effect for trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
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

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 255, 209, ${1 - distance / 150})`;
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
      width: '600px',
      height: '600px',
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
      
      {/* Center AI Brain Icon */}
      <div style={{
        position: 'absolute',
        width: '120px',
        height: '120px',
        background: 'linear-gradient(135deg, #00FFD1, #00d4aa)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'pulse-glow 2s ease-in-out infinite',
        boxShadow: '0 0 60px rgba(0, 255, 209, 0.6)',
        zIndex: 10
      }}>
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
        </svg>
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
