import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skills = [
  { icon: '🎭', name: 'Shadow', img: '/assets/img/dream-shadow.webp' },
  { icon: '✦', name: 'Fios Realistas', img: '/assets/img/fios-realistas.webp', objectPosition: 'center 30%' },
  { icon: '💋', name: 'Micropigmentação Labial', img: '/assets/img/aquarelle-lips.webp', objectPosition: 'center 55%' },
  { icon: '✨', name: 'Brow Lamination', img: '/assets/img/brow-lamination.webp', objectPosition: 'center 35%' },
  { icon: '👑', name: 'Posicionamento', img: '/assets/img/posicionamento.webp', objectPosition: 'center 40%' },
  { icon: '📈', name: 'Marketing', img: '/assets/img/marketing.webp', objectPosition: '20% 30%' },
];

const Diferencial = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();

  return (
    <section id="diferencial" className="relative py-24 md:py-40 px-4 scroll-mt-20" style={{ backgroundColor: 'rgb(74, 7, 14)' }}>
      {/* Vinheta */}
      <div className="absolute inset-0 pointer-events-none" style={{
        boxShadow: 'inset 0 0 150px rgba(20, 0, 0, 0.9), inset 0 0 300px rgba(20, 0, 0, 0.6)'
      }}></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div
          ref={titleRef}
          className={`transition-all duration-800 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="text-center text-white text-base font-bold tracking-[3px] mb-8 animate-fade-in delay-100">
          </div>

          <h2 className="font-outfit text-3xl md:text-4xl text-white text-center mb-16 leading-tight font-light animate-flip-in delay-200">
            Durante esse encontro, você terá acesso a uma nova forma de enxergar o seu negócio. Unindo técnica, estratégia e posicionamento.
          </h2>
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
                      skill.name === 'Shadow' ? 'scale-150 hover:scale-[1.6]' : 
                      skill.name === 'Marketing' ? 'scale-125 hover:scale-[1.35] translate-x-8' :
                      'hover:scale-110'
                    } ${
                      skill.name === 'Posicionamento' ? 'scale-100' : ''
                    }`}
                    style={{
                      objectPosition: skill.objectPosition || 'center center',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              ) : (
                <div className="p-8 pb-0">
                  <div className="text-5xl mb-4">{skill.icon}</div>
                </div>
              )}
              <div className={`text-base text-white ${skill.img ? 'p-4' : 'pb-8'}`}>{skill.name}</div>
            </div>
          ))}
        </div>

        <div
          className={`transition-all duration-800 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          style={{ transitionDelay: '600ms' }}
        >
          <p className="font-outfit text-lg md:text-xl text-white/90 text-center mb-6 leading-relaxed animate-slide-in-up delay-600">
            Tudo isso conectado a uma visão que te<br />posiciona em outro nível no mercado.
          </p>

          <p className="font-playfair text-3xl md:text-4xl text-white text-center italic font-bold mt-8 animate-bounce-in delay-700">
            Porque talento sem estratégia… passa despercebido.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Diferencial;
