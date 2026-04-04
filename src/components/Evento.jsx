import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Evento = () => {
  const [leftRef, leftVisible] = useScrollAnimation();
  const [rightRef, rightVisible] = useScrollAnimation();

  return (
    <section id="evento" className="relative py-24 px-4 overflow-hidden scroll-mt-20" style={{ backgroundColor: '#ebdac8' }}>
      {/* Gradientes de transição */}
      <div className="absolute top-0 left-0 right-0 h-32 z-10" style={{ background: 'linear-gradient(to bottom, #ebdac8, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10" style={{ background: 'linear-gradient(to top, #9cb7ae, transparent)' }} />
      
      <div className="relative z-10 w-full px-4 md:pl-12 md:pr-0">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Coluna Esquerda — texto */}
          <div 
            ref={leftRef}
            className={`md:col-span-2 transition-all duration-800 ${
              leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="text-gold text-xs font-bold tracking-[3px] mb-6">
              SOBRE O EVENTO
            </div>
            
            <h2 className="font-playfair text-4xl md:text-5xl text-navy leading-tight mb-8">
              O evento que transforma profissionais comuns em nomes de referência
            </h2>

            <p className="text-base text-navy/80 leading-relaxed mb-8">
              Um encontro para empreendedoras de sobrancelhas que sabem que técnica sozinha não basta e querem se tornar uma autoridade no mercado.
            </p>
            
            <div className="border-l-2 border-gold/30 pl-6 space-y-3">
              <p className="text-sm italic text-navy/70">Porque no cenário atual…</p>
              <p className="font-playfair text-lg text-navy italic">Não vence quem faz melhor.</p>
              <p className="font-playfair text-lg text-gold italic">Vence quem é lembrada, reconhecida e desejada.</p>
            </div>
          </div>
          
          {/* Coluna Direita — vídeo */}
          <div 
            ref={rightRef}
            className={`md:col-span-3 transition-all duration-800 ${
              rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gold/20" style={{ minHeight: '500px' }}>
              <video
                className="w-full h-full object-cover"
                style={{ minHeight: '500px' }}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={`${process.env.PUBLIC_URL}/assets/video/evento1.mp4`} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evento;
