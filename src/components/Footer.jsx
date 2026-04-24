import React from 'react';

const Footer = () => {
  return (
    <footer className="py-16 md:py-20 px-4 text-center bg-[#0d0d0d] border-t border-white/10">
      <div className="container mx-auto">
        <p className="font-outfit text-white/40 text-sm">
          © {new Date().getFullYear()} Evolution Brows. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
