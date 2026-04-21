import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const UltimaEdicao = () => {
  const [ref, visible] = useScrollAnimation();

  return (
    <section
      className="py-20 md:py-32 px-6 relative"
      style={{ backgroundColor: 'rgb(130 29 35)' }}
    >
      <div
        ref={ref}
        className={`max-w-2xl mx-auto text-center transition-all duration-800 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Título */}
        <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold leading-tight mb-6">
          Esta é a <span className="uppercase">Última</span> edição.
        </h2>

        {/* Linha decorativa */}
        <div className="w-20 h-px bg-white/50 mx-auto mb-8" />

        {/* Parágrafo principal */}
        <p className="font-outfit text-base md:text-lg text-white/90 leading-relaxed mb-10">
          Estamos encerrando este capítulo para abrir uma nova era. Não haverá outra
          oportunidade como essa. Esta é a sua chance final de participar do evento que
          definiu a carreira das principais profissionais do mercado.
        </p>

        {/* Frase em itálico */}
        <p className="font-playfair text-lg md:text-xl text-white/80 italic leading-relaxed">
          Será histórico. Será inesquecível. E será sem repetição.
        </p>
      </div>
    </section>
  );
};

export default UltimaEdicao;
