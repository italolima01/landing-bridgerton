import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false); // Fecha o menu ao clicar
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
        isScrolled || isMenuOpen
          ? 'bg-white/20 backdrop-blur-xl shadow-2xl border-b border-white/30' 
          : 'bg-transparent'
      }`}
      style={(isScrolled || isMenuOpen) ? {
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      } : {}}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-end space-x-1 hover:opacity-80 transition-all duration-300 hover:scale-105"
          >
            <img 
              src={`${process.env.PUBLIC_URL}/assets/img/diamante.webp`}
              alt="Diamante"
              className="w-6 h-6 object-contain mb-0.5"
            />
            <span className="font-playfair text-lg font-semibold tracking-wide text-white transition-colors duration-500">
              Evolution Brows
            </span>
          </button>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('evento')}
              className="transition-all duration-500 text-xs tracking-widest uppercase hover:scale-110 hover:font-bold text-white/80 hover:text-white"
            >
              O Evento
            </button>
            <button
              onClick={() => scrollToSection('diferencial')}
              className="transition-all duration-500 text-xs tracking-widest uppercase hover:scale-110 hover:font-bold text-white/80 hover:text-white"
            >
              Diferencial
            </button>
            <button
              onClick={() => scrollToSection('autoridade')}
              className="transition-all duration-500 text-xs tracking-widest uppercase hover:scale-110 hover:font-bold text-white/80 hover:text-white"
            >
              Palestrantes
            </button>
            <button
              onClick={() => scrollToSection('formulario')}
              className="transition-all duration-500 text-xs tracking-widest uppercase hover:scale-110 hover:font-bold text-white/80 hover:text-white"
            >
              Lista de Espera
            </button>
            <button
              onClick={() => scrollToSection('formulario')}
              className="border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-500 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase font-medium hover:scale-105 hover:shadow-lg"
            >
              Meu Convite
            </button>
          </div>

          {/* Menu Mobile */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white transition-colors duration-500"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="grid grid-cols-2 gap-3 px-4">
              <button
                onClick={() => scrollToSection('evento')}
                className="text-center px-3 py-3 text-xs tracking-widest uppercase transition-colors rounded-lg text-white/80 hover:text-white hover:bg-white/10"
              >
                O Evento
              </button>
              <button
                onClick={() => scrollToSection('diferencial')}
                className="text-center px-3 py-3 text-xs tracking-widest uppercase transition-colors rounded-lg text-white/80 hover:text-white hover:bg-white/10"
              >
                Diferencial
              </button>
              <button
                onClick={() => scrollToSection('autoridade')}
                className="text-center px-3 py-3 text-xs tracking-widest uppercase transition-colors rounded-lg text-white/80 hover:text-white hover:bg-white/10"
              >
                Palestrantes
              </button>
              <button
                onClick={() => scrollToSection('formulario')}
                className="text-center px-3 py-3 text-xs tracking-widest uppercase transition-colors rounded-lg text-white/80 hover:text-white hover:bg-white/10"
              >
                Lista de Espera
              </button>
            </div>
            <button
              onClick={() => scrollToSection('formulario')}
              className="mt-3 mx-4 w-[calc(100%-2rem)] transition-all duration-500 px-4 py-2 rounded-full text-xs tracking-widest uppercase font-medium bg-gold text-white hover:bg-gold/90"
            >
              Meu Convite
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
