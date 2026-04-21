import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const checkIcon = (
  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const SetoresDiamante = () => {
  const [ref, visible] = useScrollAnimation();

  return (
    <section className="pb-20 md:pb-32 px-6 bg-[#0d0d0d]">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto text-center transition-all duration-800 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Card Setor Diamante */}
        <div className="bg-[#181818] rounded-2xl p-8 md:p-10 text-left border border-white/10 relative overflow-hidden">

          {/* Faixa PREMIUM */}
          <div className="absolute top-0 right-0 w-0 h-0 pointer-events-none">
            <div
              className="absolute font-outfit font-black text-[11px] tracking-[2px] text-black flex items-center justify-center"
              style={{
                width: '120px',
                top: '24px',
                right: '-30px',
                transform: 'rotate(45deg)',
                background: 'linear-gradient(135deg, #c9a84c, #f0d060, #c9a84c)',
                padding: '5px 0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
              }}
            >
              PREMIUM
            </div>
          </div>

          {/* Badge lote */}
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold mb-3 block">
            Primeiro Lote
          </span>

          {/* Nome do setor */}
          <h3 className="font-playfair text-3xl md:text-4xl text-white font-semibold mb-6">
            Setor Diamante
          </h3>

          {/* Preços */}
          <div className="mb-8">
            <p className="font-outfit text-white/40 line-through text-base mb-1">
              De R$ 1.497
            </p>
            <p className="font-outfit font-bold leading-none">
              <span className="text-[rgb(130,29,35)] text-2xl">R$</span>
              <span className="text-white text-6xl md:text-7xl ml-1">997</span>
            </p>
          </div>

          {/* Divisor */}
          <div className="w-full h-px bg-white/10 mb-8" />

          {/* Lista de benefícios */}
          <ul className="space-y-4">
            <li className="font-outfit font-bold text-white text-base mb-2">
              Tudo do Gold, MAIS:
            </li>
            {[
              'Assento premium na primeira fila',
              'Welcome kit premium',
              'Encontro estratégico pós-evento',
              'Grupo exclusivo de acompanhamento',
              'Brindes especiais dos patrocinadores',
              'Networking VIP com as palestrantes',
              'Jantar e festa de encerramento',
              'Experiência ampliada e proximidade do palco',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                {checkIcon}
                <span className="font-outfit text-white/85 text-base leading-snug">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            className="mt-10 w-full py-4 rounded-xl font-outfit font-bold text-lg tracking-wide text-white transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
            style={{ backgroundColor: 'rgb(130 29 35)' }}
          >
            Garantir minha vaga
          </button>
        </div>
      </div>
    </section>
  );
};

export default SetoresDiamante;
