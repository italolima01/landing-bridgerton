import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Duvidas = () => {
  const [ref, visible] = useScrollAnimation();

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#0d0d0d' }}>
      <div
        ref={ref}
        className={`max-w-md mx-auto rounded-3xl px-8 py-12 text-center shadow-2xl transition-all duration-800 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{
          background: 'linear-gradient(135deg, #c9a84c 0%, #a07830 60%, #7a5a1e 100%)',
        }}
      >
        {/* Título */}
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-black leading-tight mb-4">
          Ainda tem alguma dúvida?<br />Fala com a gente.
        </h2>

        {/* Descrição */}
        <p className="font-outfit text-base md:text-lg text-black/80 leading-relaxed mb-10">
          Nosso time vai entender o seu perfil e indicar o melhor ingresso para você sem pressão, sem enrolação.
        </p>

        {/* Botão WhatsApp */}
        <a
          href="https://wa.me/5585989148031"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full py-4 rounded-full font-outfit font-bold text-base tracking-widest uppercase text-black mb-4 transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
          style={{ backgroundColor: '#25D366' }}
        >
          Suporte WhatsApp
          {/* Ícone WhatsApp inline SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>

        {/* Botão Garantir Vaga */}
        <a
          href="#setores"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('setores')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex items-center justify-center gap-3 w-full py-4 rounded-full font-outfit font-bold text-base tracking-widest uppercase text-black transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
          style={{ backgroundColor: '#8B6010' }}
        >
          Garantir minha vaga
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 16 16 12 12 8"/>
            <line x1="8" y1="12" x2="16" y2="12"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Duvidas;
