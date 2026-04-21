import React from 'react';

const Footer = () => {
  return (
    <footer className="py-24 md:py-40 px-4 text-center relative" style={{
      backgroundColor: 'rgb(74, 7, 14)'
    }}>
      {/* Vinheta */}
      <div className="absolute inset-0 pointer-events-none" style={{
        boxShadow: 'inset 0 0 150px rgba(20, 0, 0, 0.9), inset 0 0 300px rgba(20, 0, 0, 0.6)'
      }}></div>

      
      <div className="container mx-auto max-w-5xl relative z-10">
        

        <p className="font-outfit text-xl md:text-2xl text-white/90 leading-relaxed mb-8 italic">
          A temporada está prestes a começar…<br />
          E os olhares estarão voltados para aquelas que ousarem se destacar.
        </p>
        
        <p className="font-outfit text-base text-white/75 mb-4">Com expectativa,</p>
        <p className="text-white text-5xl md:text-6xl font-geraldyn font-normal">— Lady Erika Sousa</p>
        
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
