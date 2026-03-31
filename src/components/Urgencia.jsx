import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Urgencia = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();

  return (
    <section className="py-24 px-4 bg-cream">
      <div className="container mx-auto max-w-4xl">      
        <h2 
          ref={titleRef}
          className={`text-4xl md:text-5xl text-navy text-center mb-12 leading-tight transition-all duration-800 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          O último e mais aguardado espetáculo da temporada está prestes a começar
        </h2>
        
        <div 
          ref={contentRef}
          className={`text-center space-y-6 text-lg text-navy-light leading-relaxed transition-all duration-800 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p>E como todo grande evento…</p>
          <p className="font-playfair text-2xl text-navy font-semibold italic">
            Nem todas terão acesso.
          </p>
          <p className="font-medium text-navy">
            Os convites oficiais serão enviados apenas para quem estiver na lista de espera.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Urgencia;
