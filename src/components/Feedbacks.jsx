import React, { useState, useRef, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const feedbacks = [
  'feedback-1.PNG',
  'feedback-2.PNG',
  'feedback-3.jpeg',
  'feedback-4.jpeg',
  'feedback-5.jpeg',
  'feedback-6.jpeg',
  'feedback-7.jpeg',
  'feedback-8.jpeg',
];

const Feedbacks = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [isMuted, setIsMuted] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Carregar a API do Vimeo Player
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (iframeRef.current && window.Vimeo) {
        playerRef.current = new window.Vimeo.Player(iframeRef.current);

        // Garantir que o vídeo inicie mutado
        playerRef.current.setVolume(0).then(() => {
          setIsMuted(true);
        });

        // Configurar Intersection Observer para controlar volume
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (playerRef.current) {
                playerRef.current.getVolume().then((currentVolume) => {
                  // Se o vídeo está mutado (volume 0), não fazer nada
                  if (currentVolume === 0) return;

                  // Ajustar volume baseado na visibilidade
                  const ratio = entry.intersectionRatio;
                  const newVolume = Math.max(0, Math.min(0.5, 0.5 * ratio));
                  playerRef.current.setVolume(newVolume);
                });
              }
            });
          },
          {
            threshold: Array.from({ length: 101 }, (_, i) => i / 100) // 0 a 1 em incrementos de 0.01
          }
        );

        if (iframeRef.current) {
          observer.observe(iframeRef.current);
        }

        return () => observer.disconnect();
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const toggleMute = () => {
    if (playerRef.current) {
      playerRef.current.getVolume().then((volume) => {
        if (volume > 0) {
          playerRef.current.setVolume(0);
          setIsMuted(true);
        } else {
          playerRef.current.setVolume(0.5);
          setIsMuted(false);
        }
        setShowIcon(true);
        setTimeout(() => setShowIcon(false), 1000);
      });
    }
  };

  return (
    <section className="py-24 px-4" style={{
      backgroundColor: '#8B1A1A',
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/textile-material-texture.jpg)`,
      backgroundSize: '100% auto',
      backgroundPosition: 'center',
      backgroundBlendMode: 'multiply',
      backgroundRepeat: 'repeat'
    }}>
      <div className="container mx-auto max-w-7xl">
        <div
          ref={titleRef}
          className={`transition-all duration-800 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center text-gold text-sm font-bold tracking-[3px] mb-8">
            DEPOIMENTOS
          </div>
          <h2 className="text-4xl md:text-5xl text-white text-center mb-16 leading-tight">
            Algumas experiências terminam. Outras deixam marcas para sempre.
          </h2>
        </div>

        {/* Layout com carrosséis e vídeo */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-12 md:gap-16 items-center mb-16">
          {/* Carrossel Superior (Mobile) / Esquerdo (Desktop) - Sobe */}
          <div className="w-full md:h-[600px] h-[200px] overflow-hidden relative">
            <div className="animate-scroll-up md:animate-scroll-up animate-scroll-left md:space-y-4 flex md:flex-col space-x-4 md:space-x-0">
              {[...feedbacks, ...feedbacks].map((file, index) => (
                <div key={`left-${index}`} className="rounded-xl overflow-hidden border border-gold/20 flex-shrink-0 md:flex-shrink">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/${file}`}
                    alt={`Feedback ${index + 1}`}
                    className="w-auto md:w-full h-[180px] md:h-auto object-contain md:max-h-[300px]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Vídeo Central */}
          <div
            className="rounded-2xl overflow-hidden relative cursor-pointer"
            style={{
              width: '350px',
              height: '260px',
              maxWidth: '100%',
              margin: '0 auto',
              boxShadow: '0 0 30px rgba(212, 175, 55, 0.4), 0 0 60px rgba(212, 175, 55, 0.2), inset 0 0 20px rgba(212, 175, 55, 0.1)',
              border: '2px solid rgba(212, 175, 55, 0.3)'
            }}
            onClick={toggleMute}
          >
            <iframe
              ref={iframeRef}
              src="https://player.vimeo.com/video/1181745272?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              className="pointer-events-none absolute"
              style={{ width: '350px', height: '600px', top: '-170px', left: '0' }}
              title="Vídeo de Feedbacks"
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

          {/* Carrossel Inferior (Mobile) / Direito (Desktop) - Desce */}
          <div className="w-full md:h-[600px] h-[200px] overflow-hidden relative">
            <div className="animate-scroll-down md:animate-scroll-down animate-scroll-right md:space-y-4 flex md:flex-col space-x-4 md:space-x-0">
              {[...feedbacks, ...feedbacks].map((file, index) => (
                <div key={`right-${index}`} className="rounded-xl overflow-hidden border border-gold/20 flex-shrink-0 md:flex-shrink">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/${file}`}
                    alt={`Feedback ${index + 1}`}
                    className="w-auto md:w-full h-[180px] md:h-auto object-contain md:max-h-[300px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
