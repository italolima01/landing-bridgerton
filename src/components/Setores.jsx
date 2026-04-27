import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const checkIcon = (
  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const Setores = () => {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="setores" className="py-20 md:py-32 px-6 bg-[#0d0d0d]">
      <div
        ref={ref}
        className={`mx-auto text-center transition-all duration-800 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Cabeçalho */}
        <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold leading-tight mb-4 max-w-2xl mx-auto">
          Escolha a sua experiência
        </h2>
        <p className="font-outfit text-base md:text-xl text-white/70 leading-relaxed mb-16 max-w-2xl mx-auto">
          Selecione o setor que está alinhado com a visão que você tem do seu futuro.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mx-auto md:items-stretch px-4 md:px-16">
          {/* Card Setor Gold */}
          <div className="bg-[#181818] rounded-2xl p-8 md:p-10 text-left border-2 border-gold flex flex-col">

            {/* Badge lote */}
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold mb-3 block">
              Primeiro Lote
            </span>

            {/* Nome do setor */}
            <h3 className="font-playfair text-3xl md:text-4xl text-white font-semibold mb-6">
              Setor Gold
            </h3>

            {/* Preços */}
            <div className="mb-8">
              <p className="font-outfit text-white/40 line-through text-base mb-1">
                De R$ 997
              </p>
              <p className="font-outfit font-bold leading-none">
                <span className="text-[rgb(130,29,35)] text-2xl">R$</span>
                <span className="text-white text-6xl md:text-7xl ml-1">597</span>
              </p>
            </div>

            {/* Divisor */}
            <div className="w-full h-px bg-white/10 mb-8" />

            {/* Lista de benefícios */}
            <ul className="space-y-4 mb-12">
              {[
                'Acesso ao dia oficial do evento',
                'Palestras com demonstração (Brow lamination, micropigmentação e marketing)',
                'Grupo de acompanhamento',
                'Kit de boas vindas',
                'Stand de vendas (com descontos exclusivos)',
                'Networking com os congressistas',
                'Certificado de participação digital',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  {checkIcon}
                  <span className="font-outfit text-white/85 text-base leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button className="mt-auto w-full py-4 rounded-xl font-outfit font-bold text-lg tracking-wide text-white transition-all duration-300 hover:brightness-110 hover:scale-[1.02] animate-pulse-subtle"
              style={{ backgroundColor: 'rgb(130 29 35)' }}
              onClick={() => window.open('https://pay.kiwify.com.br/nZOtrKF', '_blank')}
            >
              Garantir minha vaga
            </button>
          </div>

          {/* Card Setor Diamante */}
          <div className="bg-[#181818] rounded-2xl p-8 md:p-10 text-left relative overflow-hidden flex flex-col" style={{
            background: 'linear-gradient(#181818, #181818) padding-box, linear-gradient(135deg, #b9f2ff, #ffffff, #b9f2ff, #ffffff) border-box',
            border: '2px solid transparent',
            borderRadius: '1rem',
            boxShadow: '0 0 40px rgba(185, 242, 255, 0.3), inset 0 0 20px rgba(185, 242, 255, 0.1)'
          }}>

            {/* Faixa PREMIUM */}
            <div className="absolute top-0 right-0 w-0 h-0 pointer-events-none">
              <div
                className="absolute font-outfit font-black text-[11px] tracking-[2px] text-black flex items-center justify-center"
                style={{
                  width: '140px',
                  top: '20px',
                  right: '-35px',
                  transform: 'rotate(45deg)',
                  background: 'linear-gradient(135deg, #b9f2ff, #ffffff, #b9f2ff, #ffffff)',
                  padding: '6px 0',
                  boxShadow: '0 2px 8px rgba(185, 242, 255, 0.6), 0 0 20px rgba(185, 242, 255, 0.4)',
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
              Setor Diamond
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
            <ul className="space-y-4 mb-12">
              {[
                'Acesso ao dia oficial do evento',
                'Encontro pós evento',
                'Palestras com demonstração (brow lamination, micropigmentação e marketing)',
                'Diagnóstico do seu negócio',
                'Grupo de acompanhamento',
                'Kit de boas vindas PREMIUM',
                'Brindes de patrocinadores',
                'Assento privilegiado (frente ao palco)',
                'Stand de vendas (com descontos exclusivos)',
                'Networking com os palestrantes',
                'Coffe break',
                'Festa e jantar de encerramento',
                'Certificado de participação digital',
              ].map((item, i) => (
                <li key={`diamante-${i}`} className="flex items-start gap-3">
                  {checkIcon}
                  <span className="font-outfit text-white/85 text-base leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              className="mt-auto w-full py-4 rounded-xl font-outfit font-bold text-lg tracking-wide text-white transition-all duration-300 hover:brightness-110 hover:scale-[1.02] animate-pulse-subtle"
              style={{ background: 'linear-gradient(135deg, #c9a84c, #f0d060, #c9a84c)', color: 'black' }}
              onClick={() => window.open('https://pay.kiwify.com.br/CDDj4pN', '_blank')}
            >
              Garantir minha vaga
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Setores;
