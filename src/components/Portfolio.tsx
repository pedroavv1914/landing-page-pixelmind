import React from 'react';

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  delay: string;
}

const PortfolioCard = ({ image, title, category, delay }: PortfolioCardProps) => (
  <div className="portfolio-card reveal" style={{ transitionDelay: delay }}>
    <img src={image} alt={title} className="portfolio-image" />
    <div className="portfolio-overlay">
      <div className="portfolio-text">
        <h3 className="portfolio-title">{title}</h3>
        <p className="portfolio-category">{category}</p>
      </div>
    </div>
  </div>
);

const Portfolio = () => (
  <section id="portfolio" className="section">
    <div className="container">
      <h2 className="section-title reveal">Nosso Portfólio</h2>
      <p className="section-subtitle reveal" style={{ transitionDelay: '0.2s' }}>Confira alguns dos projetos que tivemos o prazer de desenvolver.</p>
      <div className="portfolio-grid">
        <PortfolioCard image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" title="Website Corporativo" category="Desenvolvimento Web" delay="0s" />
        <PortfolioCard image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" title="Campanha de Mídia Social" category="Marketing Digital" delay="0.2s" />
        <PortfolioCard image="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" title="Blog de Conteúdo" category="Criação de Conteúdo" delay="0.4s" />
      </div>
    </div>
  </section>
);

export default Portfolio;
