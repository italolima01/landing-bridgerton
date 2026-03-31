import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const speakers = [
  {
    name: 'Erika Sousa',
    role: 'Micropigmentadora',
    image: 'erika-sousa.jpg',
    revealed: true
  },
  {
    name: 'Em breve',
    role: 'Convidado especial',
    revealed: false
  },
  {
    name: 'Em breve',
    role: 'Convidado especial',
    revealed: false
  },
  {
    name: 'Em breve',
    role: 'Convidado especial',
    revealed: false
  },
  {
    name: 'Em breve',
    role: 'Convidado especial',
    revealed: false
  }
];

const Autoridade = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();
  const [hoveredCards, setHoveredCards] = useState({});

  const handleCardHover = (index) => {
    setHoveredCards(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section id="autoridade" className="py-24 px-4 bg-cream scroll-mt-20">
      <div className="container mx-auto max-w-5xl">
        <div 
          ref={titleRef}
          className={`transition-all duration-800 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center text-gold text-sm font-bold tracking-[3px] mb-8">
            AUTORIDADE
          </div>
          
          <h2 className="text-4xl md:text-5xl text-navy text-center mb-12 leading-tight">
            Diretamente das maiores<br />referências do Brasil
          </h2>
          
          <p className="text-lg text-navy-light text-center mb-16 leading-relaxed max-w-3xl mx-auto">
            Profissionais que hoje são destaque nacional estarão presentes para compartilhar o que realmente funciona no mercado.
          </p>
        </div>
        
        <div 
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16"
        >
          {speakers.map((speaker, index) => (
            <div 
              key={index}
              className={`relative group transition-all duration-500 ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => handleCardHover(index)}
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-navy border border-gold/20 group-hover:border-gold transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-gold/20">
                {speaker.revealed ? (
                  <>
                    {/* Imagem revelada - fica colorida no hover e permanece */}
                    <img 
                      src={`${process.env.PUBLIC_URL}/assets/img/${speaker.image}`}
                      alt={speaker.name} 
                      className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                        hoveredCards[index] ? '' : 'grayscale'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center transform transition-all duration-300 group-hover:translate-y-0">
                      <p className="text-white font-medium text-sm mb-1">{speaker.name}</p>
                      <p className="text-gold text-xs font-playfair italic">{speaker.role}</p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Card misterioso - revela info no hover */}
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 transition-all duration-500">
                      <div className="text-6xl text-gold/30 mb-4 font-playfair group-hover:opacity-0 transition-opacity duration-300">
                        ?
                      </div>
                      <p className="text-gray-400 text-xs font-playfair italic text-center group-hover:opacity-0 transition-opacity duration-300">
                        Convidado especial
                      </p>
                    </div>
                    
                    {/* Informação revelada no hover */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black/90 via-black/60 to-black/30">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-white font-medium text-sm mb-2 text-center">{speaker.name}</p>
                        <p className="text-gold text-xs font-playfair italic text-center">{speaker.role}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center space-y-4 text-lg text-navy-light max-w-3xl mx-auto opacity-0 animate-fade-in-up delay-300">
          <p>Sem teoria vazia.</p>
          <p>Sem fórmulas genéricas.</p>
          <p className="font-playfair text-2xl text-gold italic font-semibold">
            Apenas direcionamentos validados que já transformaram empreendedoras comuns em grandes referências.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Autoridade;
