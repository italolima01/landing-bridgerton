import React from 'react';

const Urgencia = () => {
  return (
    <section className="py-24 px-4" style={{ backgroundColor: '#9cb7ae' }}>
      <div className="container mx-auto max-w-5xl">      
        <h2 className="text-4xl md:text-5xl text-navy text-center mb-12 leading-tight">
          O último e mais aguardado espetáculo da temporada está prestes a começar
        </h2>
        
        <div className="text-center space-y-6 text-lg text-navy/80 leading-relaxed">
          <p>E como todo grande evento…</p>
          <p className="font-playfair text-2xl text-gold font-semibold italic">
            Nem todas terão acesso.
          </p>
          <p className="font-medium text-navy/85">
            Os convites oficiais serão enviados apenas para quem estiver na lista de espera.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Urgencia;
