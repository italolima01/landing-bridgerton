import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Adiciona um pequeno delay para garantir que o DOM está pronto
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/40 backdrop-blur-xl shadow-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300"
          >
            <span className="text-gold text-xl">✦</span>
            <span className="text-white font-playfair text-lg font-semibold tracking-wide">
              Evolution Brows
            </span>
          </button>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('evento')}
              className="text-gray-300 hover:text-gold transition-colors duration-300 text-sm tracking-widest uppercase"
            >
              O Evento
            </button>
            <button
              onClick={() => scrollToSection('diferencial')}
              className="text-gray-300 hover:text-gold transition-colors duration-300 text-sm tracking-widest uppercase"
            >
              Diferencial
            </button>
            <button
              onClick={() => scrollToSection('autoridade')}
              className="text-gray-300 hover:text-gold transition-colors duration-300 text-sm tracking-widest uppercase"
            >
              Palestrantes
            </button>
            <button
              onClick={() => scrollToSection('formulario')}
              className="text-gray-300 hover:text-gold transition-colors duration-300 text-sm tracking-widest uppercase"
            >
              Lista de Espera
            </button>
            <button
              onClick={() => scrollToSection('formulario')}
              className="border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 px-6 py-2 rounded-full text-sm tracking-widest uppercase font-medium"
            >
              Meu Convite
            </button>
          </div>

          {/* Menu Mobile */}
          <button className="md:hidden text-gold">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
