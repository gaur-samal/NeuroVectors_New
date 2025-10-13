import React from "react";
import "./App.css";
import "./styles/darkTheme.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AIDemos from "./components/AIDemos";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <AIDemos />
      <About />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
