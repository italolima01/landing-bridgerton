import React from 'react';

const Footer = () => {
  return (
    <footer className="py-24 px-4 text-center relative" style={{
      backgroundColor: '#8B1A1A',
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/textile-material-texture.jpg)`,
      backgroundSize: '100% auto',
      backgroundPosition: 'center',
      backgroundBlendMode: 'multiply',
      backgroundRepeat: 'repeat'
    }}>
      {/* Carta decorativa no canto superior esquerdo */}
      <div className="absolute left-0 z-0" style={{ opacity: 0.5, top: '-20px' }}>
        <img 
          src={`${process.env.PUBLIC_URL}/assets/img/carta-dtlh.png`}
          alt="Carta decorativa"
          className="w-48 md:w-64 animate-fade-in"
        />
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-5xl mb-8" style={{ filter: 'brightness(0) invert(1)' }}>🕯</div>
        
        <p className="font-playfair text-xl md:text-2xl text-white/90 leading-relaxed mb-8 italic">
          A temporada está prestes a começar…<br />
          E os olhares estarão voltados para aquelas que ousarem se destacar.
        </p>
        
        <p className="text-base text-white/75 mb-4">Com expectativa,</p>
        <p className="text-gold text-4xl md:text-5xl font-script font-normal">— Lady Erika Sousa</p>
        
        <div className="mt-8">
          <img 
            src={`${process.env.PUBLIC_URL}/assets/img/diamante-outline.png`}
            alt="Diamante"
            className="w-16 h-16 mx-auto"
            style={{ filter: 'brightness(0) saturate(100%) invert(77%) sepia(48%) saturate(466%) hue-rotate(8deg) brightness(95%) contrast(87%)' }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
