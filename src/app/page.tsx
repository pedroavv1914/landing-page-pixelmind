import React from 'react';

// Componente Header
const Header = () => (
  <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
    <nav className="container mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-black text-gray-800">PixelMind</div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-600 hover:text-indigo-600 transition duration-300">Serviços</a>
          <a href="#portfolio" className="text-gray-600 hover:text-indigo-600 transition duration-300">Portfólio</a>
          <a href="#contact" className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg">Contato</a>
        </div>
      </div>
    </nav>
  </header>
);

// Componente Hero
const Hero = () => (
  <section id="hero" className="relative text-white overflow-hidden animated-gradient">
    <div className="container mx-auto px-6 py-32 text-center relative z-10">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 fade-in-up">Transformando Ideias em Resultados Digitais</h1>
      <p className="text-lg md:text-xl text-indigo-200 max-w-3xl mx-auto mb-8 fade-in-up" style={{ animationDelay: '0.2s' }}>A agência de marketing digital que impulsiona o seu negócio para o futuro com estratégias inovadoras e criativas.</p>
      <a href="#contact" className="bg-white text-indigo-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-2xl">
        Vamos Conversar
      </a>
    </div>
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
  </section>
);

// Componente Services
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <div className="bg-white p-8 rounded-lg shadow-lg service-card-hover">
    <div className="text-indigo-600 mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => (
  <section id="services" className="bg-gray-50 py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Nossos Serviços</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">Oferecemos soluções completas de marketing digital para alavancar sua presença online.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
          title="Desenvolvimento Web"
          description="Criamos sites e aplicações web modernas, rápidas e responsivas para uma experiência de usuário impecável."
        />
        <ServiceCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.351a1.76 1.76 0 011.164-2.288l5.517-1.72a1.76 1.76 0 012.288 1.164l2.147 6.351a1.76 1.76 0 01-.592 3.417l-5.517 1.72a1.76 1.76 0 01-2.288-1.164z" /></svg>}
          title="Marketing Digital"
          description="Estratégias de SEO, SEM e mídias sociais para aumentar sua visibilidade e gerar leads qualificados."
        />
        <ServiceCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L15.232 5.232z" /></svg>}
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
  <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center text-white p-4">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-lg">{category}</p>
        </div>
      </div>
    </div>
  </div>
);

const Portfolio = () => (
  <section id="portfolio" className="bg-white py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Nosso Portfólio</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">Confira alguns dos projetos que tivemos o prazer de desenvolver.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PortfolioCard image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" title="Website Corporativo" category="Desenvolvimento Web" />
        <PortfolioCard image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" title="Campanha de Mídia Social" category="Marketing Digital" />
        <PortfolioCard image="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" title="Blog de Conteúdo" category="Criação de Conteúdo" />
      </div>
    </div>
  </section>
);

// Componente Contact
const Contact = () => (
  <section id="contact" className="bg-gray-50 py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Entre em Contato</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">Tem um projeto em mente? Adoraríamos ouvir sobre ele. Preencha o formulário abaixo.</p>
      <form className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg text-left">
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nome</label>
          <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" required />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" required />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensagem</label>
          <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" required></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg transform hover:scale-105">
            Enviar Mensagem
          </button>
        </div>
      </form>
    </div>
  </section>
);

// Componente Footer
const Footer = () => (
  <footer className="bg-gray-800 text-white">
    <div className="container mx-auto px-6 py-6 text-center">
      <p>&copy; 2025 PixelMind. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="bg-gray-50">
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
