const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative flex items-center justify-center text-center px-4 py-8 md:py-16" style={{ backgroundColor: '#4a3f35', minHeight: '85vh' }}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center animate-zoom-out"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/carta%20fundo.png)`,
          filter: 'saturate(1.4) contrast(1.0)',
          backgroundSize: '120% 100%',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40" />
      
      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl pt-0 md:pt-16 px-4 md:px-8">
        {/* SVG Filter para textura de tinta */}
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <filter id="ink-texture">
              <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" xChannelSelector="R" yChannelSelector="G" />
              <feGaussianBlur stdDeviation="0.2" />
            </filter>
          </defs>
        </svg>

        <div
          className="inline-block px-4 py-2 mb-4 animate-fade-in"
        >
          <span className="text-white text-base md:text-lg font-light tracking-[10px] uppercase">IMERSÃO</span>
        </div>

        <h1 className="hero-title font-bold text-white mb-8 leading-tight flex flex-col items-center">
          <span className="animate-handwriting-evolution" style={{ fontFamily: "'Great Vibes', cursive", fontWeight: 'normal', letterSpacing: 'normal', transform: 'translateY(10px)' }}>Evolution</span>
          <span className="animate-handwriting-brows" style={{ fontFamily: "'Cinzel Decorative', 'Cinzel', serif", letterSpacing: '0.05em' }}>BROWS</span>
        </h1>

        <h2 className="text-5xl md:text-6xl text-gold mb-8 font-script font-normal tracking-wide animate-fade-in-up delay-200" style={{
          filter: 'url(#ink-texture)',
          textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)'
        }}>
          Um Convite Exclusivo
        </h2>

        <div className="flex justify-center px-4 animate-fade-in-up delay-300">
          <button
            onClick={scrollToForm}
            className="animated-button text-sm md:text-base px-6 md:px-12 py-3 md:py-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span className="text">QUERO ENTRAR PARA A LISTA DE ESPERA</span>
            <span className="circle"></span>
            <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
