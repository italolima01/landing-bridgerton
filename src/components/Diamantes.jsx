import React from 'react';

const Diamantes = () => {
  return (
    <section className="py-24 px-4 bg-navy">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl text-white text-center mb-12 leading-tight">
          E nesta temporada…<br />algumas serão escolhidas
        </h2>
        
        <p className="text-lg text-gray-400 text-center mb-8 leading-relaxed">
          Entre as participantes, empreendedoras serão reconhecidas como:
        </p>
        
        <p className="font-playfair text-3xl md:text-4xl text-gold text-center mb-12 italic">
          As Diamantes da Temporada.
        </p>
        
        <div className="bg-white/5 border border-gold/30 rounded-2xl p-8 md:p-12 text-center space-y-6">
          <p className="text-lg text-gray-400 leading-relaxed">
            Os critérios ainda não foram revelados.
          </p>
          <p className="font-playfair text-xl text-gold italic font-semibold leading-relaxed">
            Mas uma coisa é certa…<br />
            Você não vai querer descobrir isso depois que tudo já tiver acontecido.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Diamantes;
