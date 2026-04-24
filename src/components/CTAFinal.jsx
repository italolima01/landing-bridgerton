import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CTAFinal = () => {
  const [ref, visible] = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 px-6 bg-[#0d0d0d]">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto text-center transition-all duration-800 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Título */}
        <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold leading-tight mb-4">
          Você pode continuar onde está...
        </h2>

        {/* Frase em itálico dourado */}
        <p className="font-playfair text-3xl md:text-4xl italic leading-snug mb-10 text-gold">
          ou subir um nível na sua carreira.
        </p>

        {/* Parágrafo */}
        <p className="font-outfit text-base md:text-xl text-white/70 leading-relaxed mb-12">
          Essa decisão define o seu crescimento. Esta é a última edição. As portas para se
          tornar uma verdadeira Referência estão se fechando. Você vai estar do lado de dentro?
        </p>

        {/* Botão CTA principal */}
        <button
          className="w-full py-5 font-outfit font-bold text-lg tracking-widest text-white uppercase transition-all duration-300 hover:brightness-110 hover:scale-[1.02] rounded-xl mb-4"
          style={{ backgroundColor: 'rgb(130 29 35)' }}
          onClick={() => window.open('https://wa.me/5585989148031', '_blank')}
        >
          Estou decidida a evoluir
        </button>

        {/* Botão secundário dourado */}
        <button
          className="w-full py-5 font-outfit font-bold text-lg tracking-widest uppercase transition-all duration-300 hover:bg-gold/10 rounded-xl"
          style={{
            backgroundColor: 'transparent',
            border: '1px solid #c9a84c',
            color: '#c9a84c',
          }}
          onClick={() => document.getElementById('setores')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Quero viver essa experiência
        </button>
      </div>
    </section>
  );
};

export default CTAFinal;
