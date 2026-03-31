import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Diamantes = () => {
  const [contentRef, contentVisible] = useScrollAnimation();

  return (
    <section className="py-24 px-4 bg-navy relative overflow-hidden min-h-[500px]">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">

          <div 
            ref={contentRef}
            className={`flex-1 text-center md:text-left transition-all duration-800 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl text-white mb-8 leading-tight">
              E nesta temporada…<br />algumas serão escolhidas
            </h2>

            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              Entre as participantes, empreendedoras serão reconhecidas como:
            </p>

            <p className="font-playfair text-3xl md:text-4xl text-gold mb-10 italic">
              As Diamantes da Temporada.
            </p>

            <div className="bg-white/5 border border-gold/30 rounded-2xl p-8 space-y-6">
              <p className="text-lg text-gray-400 leading-relaxed">
                Os critérios ainda não foram revelados.
              </p>
              <p className="font-playfair text-xl text-gold italic font-semibold leading-relaxed">
                Mas uma coisa é certa…<br />
                Você não vai querer descobrir isso depois que tudo já tiver acontecido.
              </p>
            </div>
          </div>

          <div className="hidden md:block flex-shrink-0 w-[480px]"></div>

        </div>
      </div>

      <div className="hidden md:block absolute top-0 right-0 h-full w-[48%]">
        <img
          src="/assets/img/diamante-bg.png"
          alt="Diamante"
          className="w-full h-full object-cover opacity-60"
          style={{
            mixBlendMode: 'screen',
            maskImage: 'linear-gradient(to right, transparent 0%, black 35%, black 75%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
            maskComposite: 'intersect',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 35%, black 75%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
            WebkitMaskComposite: 'source-in',
          }}
        />
      </div>
    </section>
  );
};

export default Diamantes;
