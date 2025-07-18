import React from 'react';

const processSteps = [
  {
    number: "01",
    title: "Descoberta e Análise",
    description: "Mergulhamos no seu negócio para entender seus objetivos, público e desafios. A análise de dados inicial guia toda a nossa estratégia."
  },
  {
    number: "02",
    title: "Estratégia e Planejamento",
    description: "Desenvolvemos um plano de ação personalizado, definindo KPIs, canais e táticas para alcançar os melhores resultados com o máximo de eficiência."
  },
  {
    number: "03",
    title: "Design e Execução",
    description: "Nossa equipe criativa entra em ação para desenvolver campanhas e materiais de alta qualidade, enquanto a equipe técnica garante uma implementação impecável."
  },
  {
    number: "04",
    title: "Análise e Otimização",
    description: "Monitoramos continuamente o desempenho, analisamos os resultados e otimizamos as campanhas para garantir um crescimento sustentável e um ROI cada vez maior."
  }
];

const Process = () => {
  return (
    <section id="process" className="section">
      <div className="container">
        <h2 className="section-title reveal">Nosso Processo de Sucesso</h2>
        <p className="section-subtitle reveal" style={{ transitionDelay: '0.2s' }}>
          Seguimos um caminho claro e comprovado para transformar suas metas em realidade.
        </p>
        <div className="process-grid reveal" style={{ transitionDelay: '0.4s' }}>
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="process-number">{step.number}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
