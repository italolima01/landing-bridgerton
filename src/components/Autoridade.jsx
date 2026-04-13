import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const speakers = [
  {
    name: 'Erika Sousa',
    role: 'Micropigmentadora',
    image: 'erika-sousa.webp',
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
  const [clickedCards, setClickedCards] = useState({});

  const handleCardClick = (index) => {
    // Ativa a animação
    setClickedCards(prev => ({ ...prev, [index]: true }));
    
    // Volta ao estado inicial após 2 segundos
    setTimeout(() => {
      setClickedCards(prev => ({ ...prev, [index]: false }));
    }, 2000);
  };

  return (
    <section id="autoridade" className="py-24 px-4 scroll-mt-20 relative" style={{ 
      backgroundColor: '#8B1A1A',
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/textile-material-texture.webp)`,
      backgroundSize: '100% auto',
      backgroundPosition: 'center',
      backgroundBlendMode: 'multiply',
      backgroundRepeat: 'repeat'
    }}>

      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div 
          ref={titleRef}
          className={`transition-all duration-800 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center text-gold text-sm font-bold tracking-[3px] mb-8">
            AUTORIDADE
          </div>
          
          <h2 className="font-outfit text-4xl md:text-5xl text-white text-center mb-12 leading-tight">
            Diretamente das maiores<br />referências do Brasil
          </h2>
          
          <p className="font-outfit text-lg text-white/90 text-center mb-16 leading-relaxed max-w-3xl mx-auto">
            Profissionais que hoje são destaque nacional estarão presentes para compartilhar o que realmente funciona no mercado.
          </p>
        </div>
        
        <div 
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16"
        >
          {speakers.map((speaker, index) => (
            <div 
              key={index}
              className={`relative transition-all duration-500 cursor-pointer ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => handleCardClick(index)}
            >
              <div className={`relative aspect-[3/4] rounded-2xl overflow-hidden bg-black/30 backdrop-blur-sm border transition-all duration-300 ${
                clickedCards[index] ? 'border-gold shadow-2xl shadow-gold/20' : 'border-gold/20'
              }`}>
                {speaker.revealed ? (
                  <>
                    {/* Imagem revelada - sempre colorida */}
                    <img 
                      src={`${process.env.PUBLIC_URL}/assets/img/${speaker.image}`}
                      alt={speaker.name} 
                      className={`w-full h-full object-cover object-top transition-all duration-500 ${
                        clickedCards[index] ? 'scale-105' : ''
                      }`}
                      style={{ objectPosition: 'center 20%', transform: clickedCards[index] ? 'scale(1.35)' : 'scale(1.3)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                      <p className="font-outfit text-white font-medium text-sm mb-1">{speaker.name}</p>
                      <p className="text-gold text-xs font-playfair italic">{speaker.role}</p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Card misterioso - revela info no click */}
                    <div className={`w-full h-full flex flex-col items-center justify-center p-4 transition-all duration-500 ${
                      clickedCards[index] ? 'opacity-0' : 'opacity-100'
                    }`}>
                      <img 
                        src={`${process.env.PUBLIC_URL}/assets/img/diamante.webp`}
                        alt="Diamante"
                        className="w-20 h-20 mb-4 opacity-50 object-contain"
                        loading="lazy"
                      />
                      <p className="font-outfit text-white/70 text-xs italic text-center">
                        Convidado especial
                      </p>
                    </div>
                    
                    {/* Informação revelada no click */}
                    <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 transition-all duration-500 bg-gradient-to-t from-black/90 via-black/60 to-black/30 ${
                      clickedCards[index] ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className={`transform transition-transform duration-500 ${
                        clickedCards[index] ? 'translate-y-0' : 'translate-y-4'
                      }`}>
                        <p className="font-outfit text-white font-medium text-sm mb-2 text-center">{speaker.name}</p>
                        <p className="text-gold text-xs font-playfair italic text-center">{speaker.role}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="font-outfit text-center space-y-4 text-lg text-white/90 max-w-3xl mx-auto opacity-0 animate-fade-in-up delay-300">
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
