import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skills = [
  { icon: '🎭', name: 'Shadow', img: '/assets/img/dream-shadow.jpg' },
  { icon: '✦', name: 'Fios Realistas', img: '/assets/img/fios-realistas.jpeg', objectPosition: 'center 30%' },
  { icon: '💋', name: 'Micropigmentação Labial', img: '/assets/img/aquarelle-lips.jpeg', objectPosition: 'center 55%' },
  { icon: '✨', name: 'Brow Lamination', img: '/assets/img/brow-lamination.jpg', objectPosition: 'center 35%' },
  { icon: '👑', name: 'Posicionamento', img: '/assets/img/posicionamento.jpg', objectPosition: 'center 40%' },
  { icon: '📈', name: 'Marketing', img: '/assets/img/marketing.JPG', objectPosition: 'center 35%' },
];

const Diferencial = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();

  return (
    <section id="diferencial" className="relative py-24 px-4 scroll-mt-20" style={{ backgroundColor: '#540810' }}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/vertical-shot-red-textile-it-is-great-background.jpg)`,
          backgroundSize: '100%',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      />

      {/* Vinheta - escurecimento nas bordas */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.6) 100%)'
        }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div
          ref={titleRef}
          className={`transition-all duration-800 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="text-center text-gold text-base font-bold tracking-[3px] mb-8">
            O DIFERENCIAL
          </div>

          <h2 className="text-5xl md:text-6xl text-white text-center mb-12 leading-tight">
            Nem todas estão preparadas<br />para o que será revelado aqui…
          </h2>

          <p className="text-xl text-white/90 text-center mb-16 leading-relaxed max-w-3xl mx-auto">
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
              className={`backdrop-blur-xl bg-white/5 border border-gold/60 rounded-2xl overflow-hidden text-center hover:bg-white/10 hover:border-gold hover:-translate-y-2 transition-all duration-300 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)'
              }}
            >
              {skill.img ? (
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={`${process.env.PUBLIC_URL}${skill.img}`}
                    alt={skill.name}
                    className={`w-full h-full object-cover transition-transform duration-300 ${
                      skill.name === 'Shadow' ? 'scale-150 hover:scale-[1.6]' : 'hover:scale-110'
                    } ${
                      skill.name === 'Posicionamento' ? 'scale-100' : ''
                    }`}
                    style={skill.objectPosition ? { objectPosition: skill.objectPosition } : {}}
                  />
                </div>
              ) : (
                <div className="p-8 pb-0">
                  <div className="text-5xl mb-4">{skill.icon}</div>
                </div>
              )}
              <div className={`text-base text-gold ${skill.img ? 'p-4' : 'pb-8'}`}>{skill.name}</div>
            </div>
          ))}
        </div>

        <div
          className={`transition-all duration-800 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          style={{ transitionDelay: '600ms' }}
        >
          <p className="text-lg text-white/90 text-center mb-6 leading-relaxed">
            Tudo isso conectado a uma visão que te posiciona em outro nível no mercado.
          </p>

          <p className="font-playfair text-3xl md:text-4xl text-gold text-center italic font-bold mt-8">
            Porque talento sem estratégia… passa despercebido.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Diferencial;
