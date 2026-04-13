import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Diamantes = () => {
  const [contentRef, contentVisible] = useScrollAnimation();

  return (
    <section className="py-16 px-4 relative overflow-hidden min-h-[500px] bg-cover" style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/erika-integrantes.webp)`,
      backgroundPosition: 'center top'
    }}>
      {/* Overlay de fundo para legibilidade */}
      <div className="absolute inset-0 bg-[#dead9c]/95 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Vinheta */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at center, transparent 0%, transparent 30%, rgba(0,0,0,0.6) 100%)'
      }}></div>
      
      {/* Diamante decorativo na parte inferior central */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20" style={{ opacity: 0.7 }}>
        <img 
          src={`${process.env.PUBLIC_URL}/assets/img/diamante.webp`}
          alt="Diamante decorativo"
          className="w-24 md:w-32 animate-fade-in"
        />
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10 -mt-12">
        <div className="flex flex-col items-center justify-center text-center gap-12 pt-8">

          <div 
            ref={contentRef}
            className={`transition-all duration-800 max-w-2xl ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="font-outfit text-4xl md:text-5xl text-white mb-8 leading-tight animate-fade-in-down delay-100">
              E nesta temporada…<br />algumas serão escolhidas
            </h2>

            <p className="font-outfit text-lg text-white/90 mb-6 leading-relaxed font-medium animate-slide-in-left delay-300">
              Entre as participantes, empreendedoras serão reconhecidas como:
            </p>

            <p className="font-playfair text-4xl text-gold mb-16 italic animate-bounce-in delay-500">
              As Diamantes da Temporada.
            </p>
          </div>

        </div>
      </div>
      

    </section>
  );
};

export default Diamantes;
