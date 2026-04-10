import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Diamantes = () => {
  const [contentRef, contentVisible] = useScrollAnimation();

  return (
    <section className="py-32 px-4 relative overflow-hidden min-h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/erika-integrantes.jpg)` }}>
      {/* Overlay de fundo para legibilidade */}
      <div className="absolute inset-0 bg-[#dead9c]/80 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-white/40"></div>
      
      {/* Diamante decorativo no topo central */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20" style={{ opacity: 0.7 }}>
        <img 
          src={`${process.env.PUBLIC_URL}/assets/img/diamante.png`}
          alt="Diamante decorativo"
          className="w-24 md:w-32 animate-fade-in"
        />
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10 mt-8">
        <div className="flex flex-col items-center justify-center text-center gap-12">

          <div 
            ref={contentRef}
            className={`transition-all duration-800 max-w-2xl ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl text-navy mb-8 leading-tight">
              E nesta temporada…<br />algumas serão escolhidas
            </h2>

            <p className="text-lg text-navy/80 mb-6 leading-relaxed font-medium">
              Entre as participantes, empreendedoras serão reconhecidas como:
            </p>

            <p className="font-playfair text-4xl text-gold mb-2 italic">
              As Diamantes da Temporada.
            </p>
          </div>

        </div>
      </div>
      

    </section>
  );
};

export default Diamantes;
