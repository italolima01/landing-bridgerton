import React from 'react';

const Carta = () => {
  return (
    <section className="relative py-24 px-4 bg-cream overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/carta-bg.jpg)`
        }}
      />
      
      <div className="relative z-10 container mx-auto max-w-4xl">
        
        <div className="font-playfair text-xl md:text-2xl leading-loose text-navy text-center space-y-8">
          <p className="italic text-navy">Prezada empreendedora,</p>
          
          <p>
            Nesta nova temporada, observo atentamente aquelas que dominam mais do que técnicas…<br />
            Mas que compreendem o verdadeiro jogo por trás de um nome respeitado.
          </p>
          
          <p>
            O mercado está repleto de profissionais.<br />
            Mas são raras aquelas que se tornam impossíveis de ignorar.
          </p>
          
          <p className="italic text-gold font-semibold">
            E é exatamente sobre isso que será o encontro mais aguardado desta temporada…
          </p>
        </div>
      </div>
    </section>
  );
};

export default Carta;
