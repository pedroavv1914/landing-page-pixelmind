'use client';

import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="container">
        <div className="header-nav">
          <div className="header-logo">PixelMind</div>
          <div className="header-links">
            <a href="#services" className="header-link">Serviços</a>
            <a href="#process" className="header-link">Processo</a>
            <a href="#portfolio" className="header-link">Portfólio</a>
            <a href="#testimonials" className="header-link">Depoimentos</a>
            <a href="#faq" className="header-link">FAQ</a>
            <a href="#contact" className="header-button">Contato</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
