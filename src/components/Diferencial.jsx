import React from 'react';

const skills = [
  { icon: '🎭', name: '— Shadow' },
  { icon: '✦', name: '— Fios Realistas' },
  { icon: '💋', name: '— Micropigmentação Labial' },
  { icon: '✨', name: '— Brow Lamination' },
  { icon: '👑', name: '— Posicionamento' },
  { icon: '📈', name: '— Marketing' },
];

const Diferencial = () => {
  return (
    <section className="py-24 px-4 bg-navy">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center text-gold text-sm font-bold tracking-[3px] mb-8">
          O DIFERENCIAL
        </div>
        
        <h2 className="text-4xl md:text-5xl text-white text-center mb-12 leading-tight">
          Nem todas estão preparadas<br />para o que será revelado aqui…
        </h2>
        
        <p className="text-lg text-gray-400 text-center mb-16 leading-relaxed max-w-3xl mx-auto">
          Durante esse encontro, você terá acesso a uma nova forma de enxergar o seu negócio — unindo técnica, estratégia e posicionamento.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white/5 border border-gold/20 rounded-2xl p-8 text-center hover:bg-gold/10 hover:border-gold hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{skill.icon}</div>
              <div className="text-lg text-cream">{skill.name}</div>
            </div>
          ))}
        </div>
        
        <p className="text-lg text-gray-400 text-center mb-6 leading-relaxed">
          Tudo isso conectado a uma visão que te posiciona em outro nível no mercado.
        </p>
        
        <p className="font-playfair text-2xl text-gold text-center italic font-semibold mt-8">
          Porque talento sem estratégia… passa despercebido.
        </p>
      </div>
    </section>
  );
};

export default Diferencial;
