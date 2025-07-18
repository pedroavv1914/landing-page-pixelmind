'use client';

import React, { useState } from 'react';

interface FaqItemData {
  question: string;
  answer: string;
}

interface FaqItemProps {
  item: FaqItemData;
  isOpen: boolean;
  onClick: () => void;
}

const faqData: FaqItemData[] = [
  {
    question: "Quais serviços de marketing digital vocês oferecem?",
    answer: "Oferecemos uma gama completa de serviços, incluindo SEO (Otimização para Mecanismos de Busca), SEM (Marketing para Mecanismos de Busca), marketing de conteúdo, gestão de mídias sociais, desenvolvimento web e análise de dados."
  },
  {
    question: "Quanto tempo leva para ver os resultados?",
    answer: "O tempo para ver resultados tangíveis pode variar dependendo dos serviços contratados e da competitividade do seu mercado. Geralmente, estratégias de SEO podem levar de 3 a 6 meses, enquanto campanhas de tráfego pago (SEM) podem gerar resultados em questão de dias ou semanas."
  },
  {
    question: "Vocês trabalham com empresas de todos os tamanhos?",
    answer: "Sim! Atendemos desde startups e pequenas empresas até grandes corporações. Adaptamos nossas estratégias para atender às necessidades e ao orçamento de cada cliente, garantindo que todos possam se beneficiar de uma presença digital forte."
  },
  {
    question: "Como vocês medem o sucesso de uma campanha?",
    answer: "O sucesso é medido através de KPIs (Indicadores-Chave de Performance) definidos no início do projeto. Isso pode incluir aumento de tráfego, geração de leads, taxa de conversão, engajamento nas redes sociais e, o mais importante, o retorno sobre o investimento (ROI)."
  }
];

const FaqItem: React.FC<FaqItemProps> = ({ item, isOpen, onClick }) => (
  <div className="faq-item">
    <button className="faq-question" onClick={onClick}>
      <span>{item.question}</span>
      <span className={`faq-icon ${isOpen ? 'open' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </button>
    <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
      <p>{item.answer}</p>
    </div>
  </div>
);

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section section-gray">
      <div className="container">
        <h2 className="section-title reveal">Perguntas Frequentes</h2>
        <p className="section-subtitle reveal" style={{ transitionDelay: '0.2s' }}>
          Tudo o que você precisa saber para começar a sua jornada digital conosco.
        </p>
        <div className="faq-container reveal" style={{ transitionDelay: '0.4s' }}>
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
