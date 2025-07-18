import React from 'react';

// Componente Header
const Header = () => (
  <header className="header">
    <nav className="container">
      <div className="header-nav">
        <div className="header-logo">PixelMind</div>
        <div className="header-links">
          <a href="#services" className="header-link">Serviços</a>
          <a href="#portfolio" className="header-link">Portfólio</a>
          <a href="#contact" className="header-button">Contato</a>
        </div>
      </div>
    </nav>
  </header>
);

// Componente Hero
const Hero = () => (
  <section id="hero" className="hero-section animated-gradient">
    <div className="container hero-content">
      <h1 className="hero-title fade-in-up">Transformando Ideias em Resultados Digitais</h1>
      <p className="hero-subtitle fade-in-up" style={{ animationDelay: '0.2s' }}>A agência de marketing digital que impulsiona o seu negócio para o futuro com estratégias inovadoras e criativas.</p>
      <a href="#contact" className="hero-button">
        Vamos Conversar
      </a>
    </div>
    <div className="hero-overlay"></div>
  </section>
);

// Componente Services
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <div className="service-card service-card-hover">
    <div className="service-icon">{icon}</div>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
  </div>
);

const Services = () => (
  <section id="services" className="section section-gray">
    <div className="container">
      <h2 className="section-title">Nossos Serviços</h2>
      <p className="section-subtitle">Oferecemos soluções completas de marketing digital para alavancar sua presença online.</p>
      <div className="services-grid">
        <ServiceCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
          title="Desenvolvimento Web"
          description="Criamos sites e aplicações web modernas, rápidas e responsivas para uma experiência de usuário impecável."
        />
        <ServiceCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.351a1.76 1.76 0 011.164-2.288l5.517-1.72a1.76 1.76 0 012.288 1.164l2.147 6.351a1.76 1.76 0 01-.592 3.417l-5.517 1.72a1.76 1.76 0 01-2.288-1.164z" /></svg>}
          title="Marketing Digital"
          description="Estratégias de SEO, SEM e mídias sociais para aumentar sua visibilidade e gerar leads qualificados."
        />
        <ServiceCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L15.232 5.232z" /></svg>}
          title="Criação de Conteúdo"
          description="Produzimos conteúdo relevante e de alta qualidade que engaja seu público e fortalece sua marca."
        />
      </div>
    </div>
  </section>
);

// Componente Portfolio
interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
}

const PortfolioCard = ({ image, title, category }: PortfolioCardProps) => (
  <div className="portfolio-card">
    <div style={{ position: 'relative' }}>
      <img src={image} alt={title} className="portfolio-image" />
      <div className="portfolio-overlay">
        <div className="portfolio-text">
          <h3 className="portfolio-title">{title}</h3>
          <p className="portfolio-category">{category}</p>
        </div>
      </div>
    </div>
  </div>
);

const Portfolio = () => (
  <section id="portfolio" className="section">
    <div className="container">
      <h2 className="section-title">Nosso Portfólio</h2>
      <p className="section-subtitle">Confira alguns dos projetos que tivemos o prazer de desenvolver.</p>
      <div className="portfolio-grid">
        <PortfolioCard image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" title="Website Corporativo" category="Desenvolvimento Web" />
        <PortfolioCard image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" title="Campanha de Mídia Social" category="Marketing Digital" />
        <PortfolioCard image="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" title="Blog de Conteúdo" category="Criação de Conteúdo" />
      </div>
    </div>
  </section>
);

// Componente Contact
const Contact = () => (
  <section id="contact" className="section section-gray">
    <div className="container">
      <h2 className="section-title">Entre em Contato</h2>
      <p className="section-subtitle">Tem um projeto em mente? Adoraríamos ouvir sobre ele. Preencha o formulário abaixo.</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Nome</label>
          <input type="text" id="name" name="name" className="form-input" required />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" name="email" className="form-input" required />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Mensagem</label>
          <textarea id="message" name="message" rows={4} className="form-textarea" required></textarea>
        </div>
        <div className="submit-button-wrapper">
          <button type="submit" className="submit-button">
            Enviar Mensagem
          </button>
        </div>
      </form>
    </div>
  </section>
);

// Componente Footer
const Footer = () => (
  <footer className="footer">
    <div className="container footer-content">
      <p>&copy; 2025 PixelMind. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
