import React from 'react';

const Urgencia = () => {
  return (
    <section className="py-24 px-4 bg-navy">
      <div className="container mx-auto max-w-5xl">      
        <h2 className="text-4xl md:text-5xl text-white text-center mb-12 leading-tight">
          O último e mais aguardado espetáculo da temporada está prestes a começar
        </h2>
        
        <div className="text-center space-y-6 text-lg text-gray-400 leading-relaxed">
          <p>E como todo grande evento…</p>
          <p className="font-playfair text-2xl text-gold font-semibold italic">
            Nem todas terão acesso.
          </p>
          <p className="font-medium text-gray-300">
            Os convites oficiais serão enviados apenas para quem estiver na lista de espera.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Urgencia;
