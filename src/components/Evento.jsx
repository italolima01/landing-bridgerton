import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Evento = () => {
  const [leftRef, leftVisible] = useScrollAnimation();
  const [rightRef, rightVisible] = useScrollAnimation();

  return (
    <section 
      id="evento" 
      className="relative scroll-mt-20" 
      style={{ 
        backgroundColor: '#8B1A1A',
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/textile-material-texture.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply'
      }}
    >
      <div className="relative z-10 w-full">
        <div className="grid md:grid-cols-2" style={{ minHeight: '100vh' }}>
          {/* Coluna Esquerda — texto */}
          <div 
            ref={leftRef}
            className={`flex flex-col justify-center py-24 px-8 md:px-16 space-y-8 ${
              leftVisible ? '' : ''
            }`}
          >
            {/* Ornamento floral */}
            <div className={`transition-all duration-800 ${
              leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Flor central */}
                <circle cx="30" cy="20" r="3" fill="#d4af37" opacity="0.8"/>
                {/* Pétalas */}
                <ellipse cx="30" cy="12" rx="4" ry="8" fill="#d4af37" opacity="0.6"/>
                <ellipse cx="30" cy="28" rx="4" ry="8" fill="#d4af37" opacity="0.6"/>
                <ellipse cx="22" cy="20" rx="8" ry="4" fill="#d4af37" opacity="0.6"/>
                <ellipse cx="38" cy="20" rx="8" ry="4" fill="#d4af37" opacity="0.6"/>
                {/* Pétalas diagonais */}
                <ellipse cx="24" cy="14" rx="3" ry="6" fill="#d4af37" opacity="0.5" transform="rotate(-45 24 14)"/>
                <ellipse cx="36" cy="14" rx="3" ry="6" fill="#d4af37" opacity="0.5" transform="rotate(45 36 14)"/>
                <ellipse cx="24" cy="26" rx="3" ry="6" fill="#d4af37" opacity="0.5" transform="rotate(45 24 26)"/>
                <ellipse cx="36" cy="26" rx="3" ry="6" fill="#d4af37" opacity="0.5" transform="rotate(-45 36 26)"/>
                {/* Folhas laterais */}
                <path d="M10 20 Q15 15 20 20 Q15 25 10 20" fill="#d4af37" opacity="0.4"/>
                <path d="M50 20 Q45 15 40 20 Q45 25 50 20" fill="#d4af37" opacity="0.4"/>
              </svg>
            </div>
            
            <div className={`text-gold text-xs font-bold tracking-[3px] uppercase transition-all duration-800 ${
              leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Sobre o Evento
            </div>
            
            <h2 className={`font-playfair text-3xl md:text-4xl lg:text-5xl text-navy leading-tight font-semibold transition-all duration-800 delay-100 ${
              leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              O evento que transforma profissionais comuns em nomes de referência
            </h2>

            <p className={`text-base md:text-lg text-navy/75 leading-relaxed transition-all duration-800 delay-200 ${
              leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Um encontro para empreendedoras de sobrancelhas que sabem que técnica sozinha não basta e querem se tornar uma autoridade no mercado.
            </p>
            
            <div className={`space-y-6 transition-all duration-800 delay-300 ${
              leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <p className="text-sm md:text-base italic text-navy/60 font-light">Porque no cenário atual…</p>
              <p className="font-playfair text-xl md:text-2xl text-navy italic leading-snug">
                Não vence quem faz melhor.
              </p>
              <p className="font-playfair text-xl md:text-2xl text-gold italic leading-snug">
                Vence quem é lembrada, reconhecida e desejada.
              </p>
            </div>
          </div>
          
          {/* Coluna Direita — vídeo */}
          <div 
            ref={rightRef}
            className={`relative overflow-hidden transition-all duration-1000 ${
              rightVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {/* Borda decorativa esquerda */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent z-10 transition-all duration-1000 delay-200 ${
              rightVisible ? 'opacity-100' : 'opacity-0'
            }`} />
            <div className={`absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent z-10 transition-all duration-1000 delay-300 ${
              rightVisible ? 'opacity-100' : 'opacity-0'
            }`} />
            
            {/* Ornamentos decorativos */}
            <div className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 transition-all duration-1000 delay-400 ${
              rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}>
              <svg width="24" height="48" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L16 12L12 20L8 12L12 4Z" fill="#d4af37" opacity="0.8"/>
                <path d="M12 28L16 36L12 44L8 36L12 28Z" fill="#d4af37" opacity="0.8"/>
              </svg>
            </div>
            
            <div className="absolute inset-0 w-full h-full">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={`${process.env.PUBLIC_URL}/assets/video/evento1.mp4`} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evento;
