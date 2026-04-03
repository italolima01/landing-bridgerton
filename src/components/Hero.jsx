const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center px-4 py-16" style={{ backgroundColor: '#a8a68c' }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/carta%20fundo.png)`,
          filter: 'blur(3px)',
          transform: 'scale(1.1)'
        }}
      />
      
      {/* Overlay escuro para opacidade */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Vinheta - escurecimento nas bordas */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 30%, rgba(0, 0, 0, 0.7) 100%)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl pt-16 px-8">
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
          style={{
            background: 'linear-gradient(90deg, #c41e3a 0%, #8b0000 100%)',
          }}
        >
          <span className="text-white text-base md:text-lg font-light tracking-[10px] uppercase">IMERSÃO</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 leading-tight tracking-wide animate-fade-in-up delay-100" style={{
          filter: 'url(#ink-texture)',
        }}>
          EVOLUTION<br />BROWS
        </h1>
        
        <h2 className="text-3xl md:text-4xl text-gold mb-8 font-semibold tracking-wide animate-fade-in-up delay-200" style={{
          filter: 'url(#ink-texture)',
        }}>
          UM CONVITE EXCLUSIVO
        </h2>
        
        <p className="text-base md:text-lg text-navy/75 mb-12 leading-relaxed italic animate-fade-in-up delay-400">
          Nesta temporada, não se trata apenas de técnica…<br />
          Trata-se de posição, estratégia e reconhecimento.
        </p>
        
        <div className="flex justify-center">
          <button 
            onClick={scrollToForm}
            className="animated-button"
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
