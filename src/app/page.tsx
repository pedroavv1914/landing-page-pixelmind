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
  <section id="hero" className="relative bg-gradient-to-r from-indigo-800 to-purple-900 text-white overflow-hidden">
    <div className="container mx-auto px-6 py-32 text-center relative z-10">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Transformando Ideias em Resultados Digitais</h1>
      <p className="text-lg md:text-xl text-indigo-200 max-w-3xl mx-auto mb-8">A agência de marketing digital que impulsiona o seu negócio para o futuro com estratégias inovadoras e criativas.</p>
      <a href="#contact" className="bg-white text-indigo-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-2xl">
        Vamos Conversar
      </a>
    </div>
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
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
