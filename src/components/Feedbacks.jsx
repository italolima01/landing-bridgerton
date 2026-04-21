import React, { useState, useRef, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const feedbacks = [
  'feedback-1.webp',
  'feedback-2.webp',
  'feedback-3.webp',
  'feedback-4.webp',
  'feedback-5.webp',
  'feedback-6.webp',
  'feedback-7.webp',
  'feedback-8.webp',
];

const Feedbacks = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [isMuted, setIsMuted] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const videoContainerRef = useRef(null);

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
              if (playerRef.current) {
                const ratio = entry.intersectionRatio;
                
                playerRef.current.getVolume().then((currentVolume) => {
                  if (currentVolume > 0) {
                    const newVolume = Math.max(0, Math.min(0.3, 0.3 * ratio));
                    playerRef.current.setVolume(newVolume);
                  }
                });
              }
            });
          },
          {
            threshold: Array.from({ length: 101 }, (_, i) => i / 100)
          }
        );

        if (videoContainerRef.current) {
          observer.observe(videoContainerRef.current);
        }

        return () => observer.disconnect();
      }
    };

    if (window.Vimeo) {
      initPlayer();
    } else {
      const timer = setInterval(() => {
        if (window.Vimeo) {
          initPlayer();
          clearInterval(timer);
        }
      }, 100);
      return () => clearInterval(timer);
    }
  }, []);

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
    <section className="py-24 md:py-40 px-4 relative" style={{
      backgroundColor: '#D9B86A'
    }}>
      {/* Vinheta */}
      <div className="absolute inset-0 pointer-events-none" style={{
        boxShadow: 'inset 0 0 100px rgba(184, 154, 88, 0.6), inset 0 0 200px rgba(184, 154, 88, 0.3)'
      }}></div>

      
      <div className="container mx-auto max-w-7xl">
        <div
          ref={titleRef}
          className={`transition-all duration-800 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center text-white text-sm font-bold tracking-[3px] mb-8 animate-fade-in delay-100">
            DEPOIMENTOS
          </div>
          <h2 className="font-outfit text-4xl md:text-5xl text-white text-center mb-16 leading-tight animate-rotate-in delay-200">
            Algumas experiências terminam. Outras deixam marcas para sempre.
          </h2>
        </div>

        {/* Layout com carrosséis e vídeo */}
        <div className="flex flex-col md:grid md:grid-cols-[1fr_2fr_1fr] gap-12 md:gap-8 items-center mb-16">
          {/* Carrossel Esquerdo (Desktop) - Sobe */}
          <div className="w-full md:h-[600px] h-[200px] overflow-hidden relative">
            <div className="animate-scroll-left md:animate-scroll-up space-x-4 md:space-x-0 md:space-y-4 flex flex-row md:flex-col">
              {[...feedbacks, ...feedbacks, ...feedbacks, ...feedbacks].map((file, index) => (
                <div key={`left-${index}`} className="rounded-xl overflow-hidden border border-gold/20 flex-shrink-0 md:w-full">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/${file}`}
                    alt={`Feedback ${index + 1}`}
                    className="w-auto md:w-full h-[180px] md:h-[180px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Vídeo Central */}
          <div
            ref={videoContainerRef}
            className="rounded-2xl overflow-hidden relative cursor-pointer"
            style={{
              width: '550px',
              height: '410px',
              maxWidth: '100%',
              margin: '0 auto',
              boxShadow: '0 0 30px rgba(217, 184, 106, 0.4), 0 0 60px rgba(217, 184, 106, 0.2), inset 0 0 20px rgba(217, 184, 106, 0.1)',
              border: '2px solid rgba(217, 184, 106, 0.3)'
            }}
            onClick={toggleMute}
          >
            <iframe
              ref={iframeRef}
              src="https://player.vimeo.com/video/1181745272?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0&dnt=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              loading="lazy"
              className="pointer-events-none absolute"
              style={{ width: '605px', height: '1040px', top: '-315px', left: '-27.5px' }}
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

          {/* Carrossel Direito (Desktop) - Desce */}
          <div className="w-full md:h-[600px] h-[200px] overflow-hidden relative z-10">
            <div className="animate-scroll-right md:animate-scroll-down space-x-4 md:space-x-0 md:space-y-4 flex flex-row md:flex-col">
              {[...feedbacks, ...feedbacks, ...feedbacks, ...feedbacks].map((file, index) => (
                <div key={`right-${index}`} className="rounded-xl overflow-hidden border border-gold/20 flex-shrink-0 md:w-full">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/${file}`}
                    alt={`Feedback ${index + 1}`}
                    className="w-auto md:w-full h-[180px] md:h-[180px] object-cover"
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
