import React from 'react';

const Footer = () => {
  return (
    <footer className="py-24 px-4 text-center" style={{ backgroundColor: '#f5f1e8' }}>
      <div className="container mx-auto max-w-5xl">
        <div className="text-5xl mb-8">🕯</div>
        
        <p className="font-playfair text-xl md:text-2xl text-navy/85 leading-relaxed mb-8 italic">
          A temporada está prestes a começar…<br />
          E os olhares estarão voltados para aquelas que ousarem se destacar.
        </p>
        
        <p className="text-base text-navy/75 mb-2">Com expectativa,</p>
        <p className="text-gold text-lg">— Lady Erika Sousa</p>
        
        <div className="mt-12">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
            <path d="M12 2L19 9L12 22L5 9L12 2Z" fill="#d4af37" stroke="#d4af37" strokeWidth="0.5"/>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
