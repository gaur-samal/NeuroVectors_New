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
      
      {/* Center AI Brain Image */}
      <div style={{
        position: 'absolute',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(0, 255, 209, 0.3), rgba(0, 255, 209, 0.1))',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'pulse-glow 2s ease-in-out infinite',
        boxShadow: '0 0 60px rgba(0, 255, 209, 0.6)',
        zIndex: 10,
        padding: '10px'
      }}>
        <img 
          src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=200&h=200&fit=crop&q=80" 
          alt="AI Brain"
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
            filter: 'brightness(1.1)'
          }}
        />
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
