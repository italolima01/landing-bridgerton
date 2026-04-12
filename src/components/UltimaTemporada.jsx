import React from 'react';

const UltimaTemporada = () => {
  return (
    <section className="py-12 px-4" style={{
      backgroundColor: '#8B1A1A',
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/textile-material-texture.jpg)`,
      backgroundSize: '100% auto',
      backgroundPosition: 'center',
      backgroundBlendMode: 'multiply',
      backgroundRepeat: 'repeat'
    }}>
      <div className="container mx-auto max-w-5xl">
        <div className="text-center text-gold text-sm font-bold tracking-[3px] mb-8 animate-fade-in delay-100">
          A ÚLTIMA TEMPORADA
        </div>

        <h2 className="text-4xl md:text-5xl text-white text-center mb-12 leading-tight animate-rotate-in delay-200">
          Algumas vão assistir de longe.<br />Outras vão viver essa história.
        </h2>

        <div className="bg-white/10 backdrop-blur-sm border border-gold/30 rounded-2xl p-12 flex flex-col items-center justify-center gap-6 text-center animate-zoom-in delay-400">
          <div className="text-5xl text-gold">✦</div>
          <p className="text-white/90 text-lg font-playfair italic leading-relaxed">
            Esta é a sua chance de fazer parte de algo que nunca mais se repetirá.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UltimaTemporada;
