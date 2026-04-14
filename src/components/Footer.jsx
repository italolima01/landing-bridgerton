import React from 'react';

const Footer = () => {
  return (
    <footer className="py-24 md:py-40 px-4 text-center relative" style={{
      backgroundColor: '#8B1A1A',
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/textile-material-texture.webp)`,
      backgroundSize: '100% auto',
      backgroundPosition: 'center',
      backgroundBlendMode: 'multiply',
      backgroundRepeat: 'repeat'
    }}>

      
      <div className="container mx-auto max-w-5xl relative z-10">
        

        <p className="font-outfit text-xl md:text-2xl text-white/90 leading-relaxed mb-8 italic">
          A temporada está prestes a começar…<br />
          E os olhares estarão voltados para aquelas que ousarem se destacar.
        </p>
        
        <p className="font-outfit text-base text-white/75 mb-4">Com expectativa,</p>
        <p className="text-gold text-4xl md:text-5xl font-script font-normal">— Lady Erika Sousa</p>
        
        <div className="mt-8">
          <img 
            src={`${process.env.PUBLIC_URL}/assets/img/diamante.webp`}
            alt="Diamante"
            className="w-16 h-16 mx-auto opacity-50 object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
