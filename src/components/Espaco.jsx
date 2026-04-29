import React, { useEffect, useRef, useState } from 'react';

const Espaco = () => {
  const [isMuted, setIsMuted] = useState(false);
  const isMutedRef = useRef(false);
  const [showIcon, setShowIcon] = useState(false);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const initPlayer = () => {
      if (iframeRef.current && window.Vimeo) {
        playerRef.current = new window.Vimeo.Player(iframeRef.current);

        playerRef.current.setVolume(0.5).then(() => {
          setIsMuted(false);
          isMutedRef.current = false;
        }).catch(() => {
          setIsMuted(true);
          isMutedRef.current = true;
        });

        const playObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && playerRef.current) {
                playerRef.current.play();
              }
            });
          },
          { threshold: 0.3 }
        );

        if (sectionRef.current) {
          playObserver.observe(sectionRef.current);
        }

        const volumeObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (playerRef.current && !isMutedRef.current) {
                const ratio = entry.intersectionRatio;
                const newVolume = Math.max(0, Math.min(0.5, 0.5 * ratio));
                playerRef.current.setVolume(newVolume);
              }
            });
          },
          {
            threshold: Array.from({ length: 101 }, (_, i) => i / 100)
          }
        );

        if (iframeRef.current) {
          volumeObserver.observe(iframeRef.current);
        }

        return () => {
          playObserver.disconnect();
          volumeObserver.disconnect();
        };
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
          isMutedRef.current = true;
        } else {
          playerRef.current.setVolume(0.5);
          setIsMuted(false);
          isMutedRef.current = false;
        }
        setShowIcon(true);
        setTimeout(() => setShowIcon(false), 1000);
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/writing-letter.webp)`,
      }}
    >
      {/* Degradê superior para transição suave */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#4a3f35] to-transparent z-0"></div>

      {/* Overlay escuro para legibilidade */}
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="absolute inset-0 bg-[#8B1A1A]/50 mix-blend-multiply"></div>

      <div className="relative z-10">
        {/* Título */}
        <div className="text-center mb-12 space-y-6 px-8 md:px-16">
          <h2 className="font-outfit text-3xl md:text-4xl text-white leading-tight font-semibold max-w-4xl mx-auto animate-fade-in-down delay-100">
            A última temporada da<br className="md:hidden" /> Imersão Evolution Brows<br className="hidden md:block" /> não será apenas mais um evento.
          </h2>
        </div>

        <div
          className="relative overflow-hidden cursor-pointer w-full md:max-w-5xl md:mx-auto md:px-8 md:px-16"
          style={{
            aspectRatio: '16/9',
            boxShadow: '0 0 30px rgba(217, 184, 106, 0.4), 0 0 60px rgba(217, 184, 106, 0.2), inset 0 0 20px rgba(217, 184, 106, 0.1)',
            border: '2px solid rgba(217, 184, 106, 0.3)'
          }}
          onClick={toggleMute}
        >
          <iframe
            ref={iframeRef}
            src="https://player.vimeo.com/video/1185651442?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&controls=0&playsinline=1&title=0&byline=0&portrait=0&dnt=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            loading="eager"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100%',
              height: '100%',
              transform: 'translate(-50%, -50%)',
              objectFit: 'cover'
            }}
            className="pointer-events-none"
            title="Evolution Brows"
          />

          {/* Ícone de mute/unmute */}
          {showIcon && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-black/50 backdrop-blur-sm rounded-full p-3 animate-fade-in">
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
            </div>
          )}
        </div>

        {/* Botão CTA */}
        <div className="flex justify-center mt-12 px-8 md:px-16">
          <button
            onClick={() => document.getElementById('setores')?.scrollIntoView({ behavior: 'smooth' })}
            className="animated-button text-sm md:text-base px-6 md:px-12 py-3 md:py-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span className="text">VIVER ESTA EXPERIÊNCIA</span>
            <span className="circle"></span>
            <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Espaco;
