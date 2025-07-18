import React from 'react';

// Componente Header
const Header = () => (
  <header className="bg-white shadow-md sticky top-0 z-50">
    <nav className="container mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">PixelMind</div>
        <div>
          <a href="#services" className="text-gray-800 hover:text-blue-500 mx-4">Serviços</a>
          <a href="#portfolio" className="text-gray-800 hover:text-blue-500 mx-4">Portfólio</a>
          <a href="#contact" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600">Contato</a>
        </div>
      </div>
    </nav>
  </header>
);

// Componente Hero
const Hero = () => (
  <section id="hero" className="bg-blue-600 text-white">
    <div className="container mx-auto px-6 py-24 text-center">
      <h1 className="text-5xl font-extrabold mb-4">Transformando Ideias em Resultados Digitais</h1>
      <p className="text-xl mb-8">A agência de marketing digital que impulsiona o seu negócio para o futuro.</p>
      <a href="#contact" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
        Vamos Conversar
      </a>
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
        {/* As próximas seções (Serviços, Portfólio, Contato) serão adicionadas aqui */}
      </main>
      <Footer />
    </div>
  );
}
