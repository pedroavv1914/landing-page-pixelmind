import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => (
  <div className="service-card reveal" style={{ transitionDelay: delay }}>
    <div className="service-icon">{icon}</div>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
  </div>
);

const Services = () => (
  <section id="services" className="section section-gray">
    <div className="container">
      <h2 className="section-title reveal">Nossos Serviços</h2>
      <p className="section-subtitle reveal" style={{ transitionDelay: '0.2s' }}>Oferecemos soluções completas de marketing digital para alavancar sua presença online.</p>
      <div className="services-grid">
        <ServiceCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
          title="Desenvolvimento Web"
          description="Criamos sites e aplicações web modernas, rápidas e responsivas para uma experiência de usuário impecável."
          delay="0s"
        />
        <ServiceCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.351a1.76 1.76 0 011.164-2.288l5.517-1.72a1.76 1.76 0 012.288 1.164l2.147 6.351a1.76 1.76 0 01-.592 3.417l-5.517 1.72a1.76 1.76 0 01-2.288-1.164z" /></svg>}
          title="Marketing Digital"
          description="Estratégias de SEO, SEM e mídias sociais para aumentar sua visibilidade e gerar leads qualificados."
          delay="0.2s"
        />
        <ServiceCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L15.232 5.232z" /></svg>}
          title="Criação de Conteúdo"
          description="Produzimos conteúdo relevante e de alta qualidade que engaja seu público e fortalece sua marca."
          delay="0.4s"
        />
      </div>
    </div>
  </section>
);

export default Services;
