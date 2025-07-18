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
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 9v4H8V9H4v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z"/><path d="M4 13V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8"/></svg>}
          title="Desenvolvimento Web"
          description="Criamos sites e aplicações web de alta performance, focados na experiência do usuário e otimizados para conversão."
          delay="0s"
        />
        <ServiceCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.351a1.76 1.76 0 011.164-2.288l5.517-1.72a1.76 1.76 0 012.288 1.164l2.147 6.351a1.76 1.76 0 01-.592 3.417l-5.517 1.72a1.76 1.76 0 01-2.288-1.164z" /></svg>}
          title="Marketing Digital"
          description="Estratégias de SEO, SEM e mídias sociais para aumentar sua visibilidade e gerar leads qualificados."
          delay="0.2s"
        />
        <ServiceCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L15.232 5.232z" /></svg>}
          title="Criação de Conteúdo"
          description="Produzimos conteúdo relevante e de alta qualidade que engaja seu público e fortalece sua autoridade no mercado."
          delay="0.4s"
        />
        <ServiceCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 2-2 2 4 4-2 2 4 4-2 2 4 4-4-4-4 4-4-4 4-4-4-4 4-4-2-2Z"/><path d="m10 8 4 4"/><path d="m14 12 4 4"/><path d="m4 20 4-4"/></svg>}
          title="Branding e Identidade Visual"
          description="Construímos marcas fortes e memoráveis, desde o logo até o manual da marca, que se conectam com seu público."
          delay="0.6s"
        />
        <ServiceCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/><path d="m9 12 2 2 4-4"/></svg>}
          title="Consultoria Estratégica"
          description="Analisamos seu mercado e negócio para fornecer insights e direcionamentos que impulsionam o crescimento sustentável."
          delay="0.8s"
        />
        <ServiceCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 12v5"/><path d="M12 7v10"/><path d="M17 4v13"/></svg>}
          title="Análise de Dados & BI"
          description="Transformamos dados em insights para otimizar suas estratégias e tomadas de decisão."
          delay="1.0s"
        />
      </div>
    </div>
  </section>
);

export default Services;
