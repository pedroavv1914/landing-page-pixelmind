import React from 'react';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => (
  <section id="hero" className="hero-section">
    <ParticlesBackground />
    <div className="container hero-content">
      <h1 className="hero-title reveal">Inovação Digital. Resultados Reais.</h1>
      <p className="hero-subtitle reveal" style={{ transitionDelay: '0.2s' }}>
        Construímos o futuro da sua marca no universo digital com design de ponta e estratégias que convertem.
      </p>
      <div className="hero-buttons reveal" style={{ transitionDelay: '0.4s' }}>
        <a href="#portfolio" className="hero-button-primary">Nossos Projetos</a>
        <a href="#contact" className="hero-button-secondary">Fale Conosco</a>
      </div>
    </div>
  </section>
);

export default Hero;
