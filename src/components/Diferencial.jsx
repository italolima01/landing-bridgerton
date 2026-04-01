import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skills = [
  { icon: '🎭', name: '— Shadow', img: '/assets/img/dream-shadow.jpg' },
  { icon: '✦', name: '— Fios Realistas', img: '/assets/img/fios-realistas.jpeg' },
  { icon: '💋', name: '— Micropigmentação Labial', img: '/assets/img/aquarelle-lips.jpeg' },
  { icon: '✨', name: '— Brow Lamination', img: '/assets/img/brow-lamination.jpg' },
  { icon: '👑', name: '— Posicionamento', img: null },
  { icon: '📈', name: '— Marketing', img: null },
];

const Diferencial = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();

  return (
    <section id="diferencial" className="py-24 px-4 bg-navy scroll-mt-20">
      <div className="container mx-auto max-w-5xl">
        <div 
          ref={titleRef}
          className={`transition-all duration-800 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center text-gold text-sm font-bold tracking-[3px] mb-8">
            O DIFERENCIAL
          </div>
          
          <h2 className="text-4xl md:text-5xl text-white text-center mb-12 leading-tight">
            Nem todas estão preparadas<br />para o que será revelado aqui…
          </h2>
          
          <p className="text-lg text-gray-400 text-center mb-16 leading-relaxed max-w-3xl mx-auto">
            Durante esse encontro, você terá acesso a uma nova forma de enxergar o seu negócio — unindo técnica, estratégia e posicionamento.
          </p>
        </div>
        
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {skills.map((skill, index) => (
            <div 
              key={index}
              className={`bg-white/5 border border-gold/20 rounded-2xl overflow-hidden text-center hover:bg-gold/10 hover:border-gold hover:-translate-y-2 transition-all duration-300 ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {skill.img ? (
                <img src={skill.img} alt={skill.name} className="w-full h-40 object-cover" />
              ) : (
                <div className="p-8 pb-0">
                  <div className="text-5xl mb-4">{skill.icon}</div>
                </div>
              )}
              <div className={`text-lg text-cream ${skill.img ? 'p-4' : 'pb-8'}`}>{skill.name}</div>
            </div>
          ))}
        </div>
        
        <div 
          className={`transition-all duration-800 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <p className="text-lg text-gray-400 text-center mb-6 leading-relaxed">
            Tudo isso conectado a uma visão que te posiciona em outro nível no mercado.
          </p>
          
          <p className="font-playfair text-2xl text-gold text-center italic font-semibold mt-8">
            Porque talento sem estratégia… passa despercebido.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Diferencial;
