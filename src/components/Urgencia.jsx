import React from 'react';

const Urgencia = () => {
  return (
    <section className="py-24 px-4 relative" style={{
      backgroundColor: '#8B1A1A',
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/textile-material-texture.jpg)`,
      backgroundSize: '100% auto',
      backgroundPosition: 'center',
      backgroundBlendMode: 'multiply',
      backgroundRepeat: 'repeat'
    }}>
      <div className="container mx-auto max-w-5xl">      
        <h2 className="text-4xl md:text-5xl text-white text-center mb-12 leading-tight">
          O último e mais aguardado espetáculo da temporada está prestes a começar
        </h2>
        
        <div className="text-center space-y-6 text-lg text-white/90 leading-relaxed">
          <p>E como todo grande evento…</p>
          <p className="font-playfair text-2xl text-gold font-semibold italic">
            Nem todas terão acesso.
          </p>
          <p className="font-medium text-white">
            Os convites oficiais serão enviados apenas para quem estiver na lista de espera.
          </p>
        </div>
      </div>
      
      {/* Divisor ornamental dourado */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center translate-y-1/2 z-20">
        <img 
          src={`${process.env.PUBLIC_URL}/assets/img/divisor2.png`}
          alt="Divisor ornamental"
          className="w-80 md:w-[600px] lg:w-[800px]"
        />
      </div>
    </section>
  );
};

export default Urgencia;
