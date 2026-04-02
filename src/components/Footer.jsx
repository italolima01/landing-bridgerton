import React from 'react';

const Footer = () => {
  return (
    <footer className="py-24 px-4 text-center" style={{ backgroundColor: '#a8a68c' }}>
      <div className="container mx-auto max-w-5xl">
        <div className="text-5xl mb-8">🕯</div>
        
        <p className="font-playfair text-xl md:text-2xl text-navy/85 leading-relaxed mb-8 italic">
          A temporada está prestes a começar…<br />
          E os olhares estarão voltados para aquelas que ousarem se destacar.
        </p>
        
        <p className="text-base text-navy/75 mb-2">Com expectativa,</p>
        <p className="text-gold text-lg">— Lady Erika</p>
        
        <div className="text-3xl text-gold mt-12">✦</div>
      </div>
    </footer>
  );
};

export default Footer;
