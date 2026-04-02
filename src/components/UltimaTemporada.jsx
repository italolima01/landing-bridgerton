import React from 'react';

const UltimaTemporada = () => {
  return (
    <section className="py-24 px-4 bg-navy">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center text-gold text-sm font-bold tracking-[3px] mb-8">
          A ÚLTIMA TEMPORADA
        </div>

        <h2 className="text-4xl md:text-5xl text-white text-center mb-12 leading-tight">
          Conteúdo em breve
        </h2>

        <div className="bg-white/5 border border-gold/20 rounded-2xl p-16 flex flex-col items-center justify-center gap-6 text-center">
          <div className="text-5xl text-gold/30">✦</div>
          <p className="text-gray-500 text-sm tracking-widest uppercase">Placeholder — conteúdo será adicionado em breve</p>
        </div>
      </div>
    </section>
  );
};

export default UltimaTemporada;
