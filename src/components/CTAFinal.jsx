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
        <p className="font-outfit text-base md:text-lg text-white/70 leading-relaxed mb-12">
          Essa decisão define o seu crescimento. Esta é a última edição. As portas para se
          tornar uma verdadeira Referência estão se fechando. Você vai estar do lado de dentro?
        </p>

        {/* Botão CTA principal */}
        <button
          className="w-full py-5 font-outfit font-bold text-lg tracking-widest text-white uppercase transition-all duration-300 hover:brightness-110 hover:scale-[1.02] rounded-xl mb-4"
          style={{ backgroundColor: 'rgb(130 29 35)' }}
          onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Estou decidida a evoluir
        </button>

        {/* Botão secundário dourado */}
        <button
          className="w-full py-5 font-outfit font-bold text-lg tracking-widest uppercase transition-all duration-300 hover:bg-gold/10 rounded-xl mb-4"
          style={{
            backgroundColor: 'transparent',
            border: '1px solid #c9a84c',
            color: '#c9a84c',
          }}
        >
          Quero viver essa experiência
        </button>

        {/* Botão terciário branco */}
        <button
          className="w-full py-5 font-outfit font-bold text-lg tracking-widest text-white uppercase transition-all duration-300 hover:bg-white/5 rounded-xl mb-12"
          style={{
            backgroundColor: 'transparent',
            border: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          Quero me inscrever
        </button>

        {/* Contato WhatsApp */}
        <div className="space-y-3">
          <p className="font-outfit text-xs tracking-[2px] uppercase text-white/40">
            Para dúvidas ou mais informações, fale conosco no WhatsApp
          </p>
          <a
            href="https://wa.me/5585989148031"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-outfit text-gold text-base hover:text-gold/80 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            +55 85 98914-8031
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;
