import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/darkTheme.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AIDemos from "./components/AIDemos";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import EventsPage from "./pages/EventsPage";
import { Toaster } from "./components/ui/sonner";

function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load time
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isInitialLoading) {
    return (
      <div style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-primary)',
        gap: '24px'
      }}>
        <img 
          src="https://customer-assets.emergentagent.com/job_1a5cfbe2-9845-4942-bcde-bfc48ffd0c5e/artifacts/ftjklk9b_Logo.png" 
          alt="Neural Vectors" 
          style={{ height: '60px', marginBottom: '20px' }}
        />
        <div style={{
          width: '64px',
          height: '64px',
          border: '4px solid var(--brand-primary)',
          borderTopColor: 'transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <p style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '18px',
          fontFamily: 'Kode Mono, monospace'
        }}>
          Loading NeuralVectors...
        </p>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <AIDemos />
      <About />
      <Events />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
