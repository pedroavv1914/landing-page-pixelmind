'use client';

import React, { useState, useEffect } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => (
  <a href={href} className="fullscreen-nav-link" onClick={onClick}>
    {children}
  </a>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const navLinks = [
    { href: '#services', label: 'Serviços', id: 'services' },
    { href: '#process', label: 'Processo', id: 'process' },
    { href: '#portfolio', label: 'Portfólio', id: 'portfolio' },
    { href: '#testimonials', label: 'Depoimentos', id: 'testimonials' },
    { href: '#faq', label: 'FAQ', id: 'faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let currentSection = '';
      const sectionIds = [...navLinks.map(l => l.id), 'contact'];

      sectionIds.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - window.innerHeight / 2) {
            currentSection = id;
          }
        }
      });

      if (activeLink !== currentSection) {
        setActiveLink(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeLink, navLinks]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="container header-container">
          <div className="header-logo">PixelMind</div>
          
          {/* Desktop Navigation */}
          <nav className="header-links-desktop">
            {navLinks.map(link => (
              <a key={link.id} href={link.href} className={`header-link ${activeLink === link.id ? 'active' : ''}`}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className={`header-button ${activeLink === 'contact' ? 'active' : ''}`}>
              Contato
            </a>
          </nav>

          {/* Mobile Navigation Trigger */}
          <button className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation */}
      <div className={`fullscreen-nav ${isMenuOpen ? 'open' : ''}`}>
        <nav className="fullscreen-nav-links">
          {[...navLinks, { href: '#contact', label: 'Contato', id: 'contact' }].map((link, index) => (
            <div key={link.id} className="fullscreen-nav-link-wrapper" style={{ transitionDelay: `${isMenuOpen ? index * 0.1 + 0.3 : 0}s` }}>
              <NavLink href={link.href} onClick={closeMenu}>
                {link.label}
              </NavLink>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
