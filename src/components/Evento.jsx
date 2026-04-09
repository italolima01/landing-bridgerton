import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Evento = () => {
  const [leftRef, leftVisible] = useScrollAnimation();
  const [isMuted, setIsMuted] = React.useState(true);
  const [showIcon, setShowIcon] = React.useState(false);
  const [videoVisible, setVideoVisible] = React.useState(false);
  const videoRef = React.useRef(null);
  const videoContainerRef = React.useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
      setShowIcon(true);
      setTimeout(() => setShowIcon(false), 1000);
    }
  };

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.2;
    }
  }, []);

  React.useEffect(() => {
    const video = videoRef.current;
    const container = videoContainerRef.current;
    
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVideoVisible(entry.isIntersecting);
          
          if (entry.isIntersecting) {
            // Vídeo entrou na tela - iniciar
            video.play().catch(() => {});
          } else {
            // Vídeo saiu da tela - pausar
            video.pause();
          }

          // Ajustar volume baseado na visibilidade
          if (!video.muted) {
            const ratio = entry.intersectionRatio;
            video.volume = Math.max(0, Math.min(0.2, 0.2 * ratio));
          }
        });
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100) // 0 a 1 em incrementos de 0.01
      }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="evento" 
      className="relative" 
      style={{ 
        backgroundColor: '#8B1A1A',
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/textile-material-texture.jpg)`,
        backgroundSize: '100% auto',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply',
        backgroundRepeat: 'repeat',
        scrollMarginTop: '56px'
      }}
    >
      {/* Divisor Ornamental */}
      <div className="absolute top-0 left-0 right-0 flex justify-center -translate-y-8 md:-translate-y-12 z-20">
        <img 
          src={`${process.env.PUBLIC_URL}/assets/img/divisor-dourado.png`}
          alt="Divisor ornamental"
          className="w-80 md:w-[600px] lg:w-[800px]"
        />
      </div>
      
      <div className="relative z-10 w-full pt-14 md:pt-20">
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-16 md:py-24">
          {/* Conteúdo */}
          <div 
            ref={leftRef}
            className={`space-y-8 mb-12 ${
              leftVisible ? '' : ''
            }`}
          >
            {/* Ornamento floral */}
            <div className={`transition-all duration-800 ${
              leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="20" r="3" fill="#d4af37" opacity="0.8"/>
                <ellipse cx="30" cy="12" rx="4" ry="8" fill="#d4af37" opacity="0.6"/>
                <ellipse cx="30" cy="28" rx="4" ry="8" fill="#d4af37" opacity="0.6"/>
                <ellipse cx="22" cy="20" rx="8" ry="4" fill="#d4af37" opacity="0.6"/>
                <ellipse cx="38" cy="20" rx="8" ry="4" fill="#d4af37" opacity="0.6"/>
                <ellipse cx="24" cy="14" rx="3" ry="6" fill="#d4af37" opacity="0.5" transform="rotate(-45 24 14)"/>
                <ellipse cx="36" cy="14" rx="3" ry="6" fill="#d4af37" opacity="0.5" transform="rotate(45 36 14)"/>
                <ellipse cx="24" cy="26" rx="3" ry="6" fill="#d4af37" opacity="0.5" transform="rotate(45 24 26)"/>
                <ellipse cx="36" cy="26" rx="3" ry="6" fill="#d4af37" opacity="0.5" transform="rotate(-45 36 26)"/>
                <path d="M10 20 Q15 15 20 20 Q15 25 10 20" fill="#d4af37" opacity="0.4"/>
                <path d="M50 20 Q45 15 40 20 Q45 25 50 20" fill="#d4af37" opacity="0.4"/>
              </svg>
            </div>
            
            <div className={`text-gold text-xs font-bold tracking-[3px] uppercase transition-all duration-800 ${
              leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Sobre o Evento
            </div>
            
            <h2 className={`font-playfair text-3xl md:text-4xl lg:text-5xl text-white leading-tight font-semibold transition-all duration-800 delay-100 ${
              leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              O evento que transforma profissionais comuns em nomes de referência
            </h2>
          </div>
          
          {/* Vídeo */}
          <div 
            ref={videoContainerRef}
            className={`relative overflow-hidden rounded-lg transition-all duration-1000 mb-8 cursor-pointer group ${
              videoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ 
              aspectRatio: '16/9',
              boxShadow: '0 0 30px rgba(212, 175, 55, 0.4), 0 0 60px rgba(212, 175, 55, 0.2), inset 0 0 20px rgba(212, 175, 55, 0.1)',
              border: '2px solid rgba(212, 175, 55, 0.3)'
            }}
            onClick={toggleMute}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={`${process.env.PUBLIC_URL}/assets/video/evento1.mp4`} type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
            
            {/* Ícone de mute/unmute */}
            {showIcon && (
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 animate-fade-in">
                {isMuted ? (
                  <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            )}
          </div>

          {/* Continuação do conteúdo */}
          <div className="space-y-8">
            <p className={`text-base md:text-lg text-white/90 leading-relaxed transition-all duration-800 delay-200 ${
              leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Algumas vão assistir de longe. Outras vão viver essa história.
            </p>
            
            <div className={`space-y-6 transition-all duration-800 delay-300 ${
              leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <p className="text-sm md:text-base italic text-white/70 font-light">Porque no cenário atual…</p>
              <p className="font-playfair text-xl md:text-2xl text-white italic leading-snug">
                Não vence quem faz melhor.
              </p>
              <p className="font-playfair text-xl md:text-2xl text-gold italic leading-snug">
                Vence quem é lembrada, reconhecida e desejada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evento;
