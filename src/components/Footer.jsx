import React from 'react';

const Footer = () => {
  return (
    <footer className="py-16 md:py-20 px-4 text-center bg-[#0d0d0d] border-t border-white/10">
      <div className="container mx-auto space-y-4">
        <p className="font-outfit text-white/60 text-sm tracking-widest uppercase">
          21 DE SETEMBRO <span className="mx-3">•</span> FORTALEZA, CEARÁ
        </p>
        <p className="font-outfit text-white/40 text-sm">
          © {new Date().getFullYear()} Evolution Brows. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
