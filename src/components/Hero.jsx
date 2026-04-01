const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center px-4 py-16 bg-navy">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/hero-bg.png)`
        }}
      />
      
      {/* Dark overlay para melhorar contraste */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <div className="inline-block px-6 py-2 mb-8 border border-gold rounded-full bg-gold/10 animate-fade-in">
          <span className="text-gold text-sm font-semibold tracking-[2px]">IMERSÃO 💎</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-wide animate-fade-in-up delay-100">
          EVOLUTION<br />BROWS
        </h1>
        
        <h2 className="text-3xl md:text-4xl text-gold mb-8 font-semibold tracking-wide animate-fade-in-up delay-200">
          UM CONVITE EXCLUSIVO
        </h2>
        
        <p className="text-lg md:text-xl text-cream mb-6 leading-relaxed animate-fade-in-up delay-300">
          Apenas aquelas que compreendem que não basta dominar técnicas — é preciso ocupar o lugar de destaque que lhes pertence.
        </p>
        
        <p className="text-base md:text-lg text-gray-400 mb-12 leading-relaxed italic animate-fade-in-up delay-400">
          Nesta temporada, não se trata apenas de técnica…<br />
          Trata-se de posição, estratégia e reconhecimento.
        </p>
        
        <button 
          onClick={scrollToForm}
          className="bg-gold text-navy px-10 py-5 rounded-full font-bold text-sm tracking-wide uppercase hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-scale-in delay-500 animate-btn-glow"
        >
        QUERO ENTRAR PARA A LISTA DE ESPERA
        </button>
      </div>
    </section>
  );
};

export default Hero;
