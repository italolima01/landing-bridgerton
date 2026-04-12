import React from 'react';
import Envelope from './Envelope';

const Urgencia = () => {
  return (
    <>
      <section className="py-24 px-4 relative bg-cover bg-center" style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/mask-invitation.webp)`,
      }}>
        {/* Overlay escuro para legibilidade */}
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="absolute inset-0 bg-[#8B1A1A]/50 mix-blend-multiply"></div>
        
        <div className="container mx-auto max-w-5xl relative z-10">      
          <h2 className="text-4xl md:text-5xl text-white text-center mb-12 leading-tight animate-flip-in delay-100">
            O último e mais aguardado espetáculo da temporada está prestes a começar
          </h2>
          
          <div className="text-center space-y-6 text-lg text-white/90 leading-relaxed">
            <p className="animate-fade-in-up delay-300">E como todo grande evento…</p>
            <p className="font-playfair text-2xl text-gold font-semibold italic animate-zoom-in delay-400">
              Nem todas terão acesso.
            </p>
            <p className="font-medium text-white animate-slide-in-up delay-500">
              Os convites oficiais serão enviados apenas para quem estiver na lista de espera.
            </p>
          </div>
        </div>
        

      </section>
      <Envelope />
    </>
  );
};

export default Urgencia;
