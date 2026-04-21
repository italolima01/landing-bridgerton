import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Diamantes = () => {
  const [contentRef, contentVisible] = useScrollAnimation();

  return (
    <section className="py-16 md:py-32 px-4 relative overflow-hidden min-h-[500px] bg-cover" style={{ 
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
      

      
      <div className="container mx-auto max-w-5xl relative z-10 mt-32">
        <div className="flex flex-col items-center justify-center text-center gap-12 pt-16">

          <div 
            ref={contentRef}
            className={`transition-all duration-800 max-w-2xl ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="font-outfit text-3xl md:text-4xl text-white mb-8 leading-tight animate-fade-in-down delay-100">
              Entre as participantes, empreendedoras serão reconhecidas como:
            </h2>

            <p className="font-geraldyn text-5xl md:text-6xl text-white mb-16 italic animate-bounce-in delay-500">
              As Diamantes da Temporada.
            </p>
          </div>

        </div>
      </div>
      

    </section>
  );
};

export default Diamantes;
