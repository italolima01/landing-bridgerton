import React, { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Evento = () => {
  const [leftRef, leftVisible] = useScrollAnimation();
  const [isMuted, setIsMuted] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const initPlayer = () => {
      if (iframeRef.current && window.Vimeo) {
        playerRef.current = new window.Vimeo.Player(iframeRef.current);
        
        playerRef.current.setVolume(0).then(() => {
          setIsMuted(true);
        });
        
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (playerRef.current && !isMuted) {
                const ratio = entry.intersectionRatio;
                const newVolume = Math.max(0, Math.min(0.3, 0.3 * ratio));
                playerRef.current.setVolume(newVolume);
              }
            });
          },
          {
            threshold: Array.from({ length: 101 }, (_, i) => i / 100)
          }
        );

        if (iframeRef.current) {
          observer.observe(iframeRef.current);
        }

        return () => observer.disconnect();
      }
    };

    if (window.Vimeo) {
      initPlayer();
    } else {
      // Caso a API ainda esteja carregando, espera um instante
      const timer = setInterval(() => {
        if (window.Vimeo) {
          initPlayer();
          clearInterval(timer);
        }
      }, 100);
      return () => clearInterval(timer);
    }
  }, [isMuted]);

  const toggleMute = () => {
    if (playerRef.current) {
      playerRef.current.getVolume().then((volume) => {
        if (volume > 0) {
          playerRef.current.setVolume(0);
          setIsMuted(true);
        } else {
          playerRef.current.setVolume(0.3);
          setIsMuted(false);
        }
        setShowIcon(true);
        setTimeout(() => setShowIcon(false), 1000);
      });
    }
  };

  return (
    <section 
      id="evento" 
      className="relative" 
      style={{ 
        backgroundColor: '#8B1A1A',
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/textile-material-texture.webp)`,
        backgroundSize: '100% auto',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply',
        backgroundRepeat: 'repeat',
        scrollMarginTop: '56px'
      }}
    >

      
      <div className="relative z-10 w-full pt-8 md:pt-12">
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-12 md:py-16">
          {/* Conteúdo */}
          <div 
            ref={leftRef}
            className={`space-y-8 mb-12 ${
              leftVisible ? '' : ''
            }`}
          >

            
            <div className={`text-gold text-xs font-bold tracking-[3px] uppercase text-center transition-all duration-800 ${
              leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Sobre o Evento
            </div>
            
            <h2 className={`font-outfit text-3xl md:text-4xl lg:text-5xl text-white leading-tight font-semibold text-center transition-all duration-800 delay-100 ${
              leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              O evento que transforma profissionais comuns em nomes de referência
            </h2>
          </div>
          
          {/* Vídeo */}
          <div 
            className="relative overflow-hidden rounded-lg mb-8 cursor-pointer mx-auto"
            style={{ 
              width: '100%',
              maxWidth: '800px',
              aspectRatio: '16/9',
              boxShadow: '0 0 30px rgba(217, 184, 106, 0.4), 0 0 60px rgba(217, 184, 106, 0.2), inset 0 0 20px rgba(217, 184, 106, 0.1)',
              border: '2px solid rgba(217, 184, 106, 0.3)'
            }}
            onClick={toggleMute}
          >
            <iframe
              ref={iframeRef}
              src="https://player.vimeo.com/video/1180600420?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0&dnt=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              loading="lazy"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '110%',
                height: '110%',
                transform: 'translate(-50%, -50%)'
              }}
              className="pointer-events-none"
              title="Vídeo do Evento"
            />
            
            {/* Ícone de mute/unmute */}
            {showIcon && (
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-3 animate-fade-in pointer-events-none">
                {isMuted ? (
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            )}
          </div>

          {/* Continuação do conteúdo */}
          <div className="space-y-8 text-center">
            <div className="space-y-6">
              <p className="font-outfit text-lg md:text-xl text-white/90 leading-relaxed font-light animate-slide-in-left delay-300">
                A primeira temporada foi extraordinária.
              </p>
              
              <p className="font-outfit text-lg md:text-xl text-white/90 leading-relaxed font-light animate-slide-in-right delay-400">
                A segunda superou todas as expectativas.
              </p>
              
              <p className="font-outfit text-2xl md:text-3xl text-white italic leading-snug mt-10 animate-bounce-in delay-500">
                Mas dessa vez… será histórico.
              </p>
              
              <div className="space-y-4 mt-8">
                <p className="font-playfair text-2xl md:text-4xl text-gold italic leading-tight animate-rotate-in delay-600">
                  Porque essa será a última temporada da Imersão <span className="whitespace-nowrap">Evolution Brows.</span>
                </p>
                
                <p className="font-playfair text-xl md:text-3xl text-gold/90 italic leading-snug animate-fade-in-up delay-700">
                  A última vez que esse evento vai acontecer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evento;
