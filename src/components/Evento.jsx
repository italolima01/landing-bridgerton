import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Evento = () => {
  const [leftRef, leftVisible] = useScrollAnimation();
  const [rightRef, rightVisible] = useScrollAnimation();

  return (
    <section id="evento" className="relative py-24 px-4 overflow-hidden scroll-mt-20">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={`${process.env.PUBLIC_URL}/assets/video/evento1.mp4`} type="video/mp4" />
      </video>
      
      <div className="relative z-10 container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Coluna Esquerda */}
          <div 
            ref={leftRef}
            className={`transition-all duration-800 ${
              leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="text-gold text-xs font-bold tracking-[3px] mb-6">
              SOBRE O EVENTO
            </div>
            
            <h2 className="font-playfair text-4xl md:text-5xl text-navy leading-tight mb-8">
              O evento que transforma profissionais comuns em nomes de referência
            </h2>
          </div>
          
          {/* Coluna Direita */}
          <div 
            ref={rightRef}
            className={`space-y-6 text-base text-navy/80 leading-relaxed transition-all duration-800 ${
              rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <p>Este não é mais um evento sobre técnicas.</p>
            
            <p>
              É um encontro criado para empreendedoras que atuam na área das sobrancelhas e que já perceberam que <span className="text-navy font-medium">apenas saber fazer não é mais suficiente.</span>
            </p>
            
            <p>
              Aqui, você vai desenvolver clareza sobre o seu negócio, fortalecer seu posicionamento e entender como se tornar uma autoridade no mercado.
            </p>
            
            <div className="border-l-2 border-gold/30 pl-6 mt-8 space-y-3">
              <p className="text-sm italic text-navy/70">Porque no cenário atual…</p>
              <p className="font-playfair text-lg text-navy italic">
                Não vence quem faz melhor.
              </p>
              <p className="font-playfair text-lg text-gold italic">
                Vence quem é lembrada, reconhecida e desejada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evento;
