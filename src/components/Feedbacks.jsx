import React, { useState, useRef } from 'react';
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
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      videoRef.current.volume = 0.3; // Define volume em 30%
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-24 px-4" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/textile-material-texture.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: '#f5f1e8'
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
            O que dizem quem já viveu essa experiência
          </h2>
        </div>

        {/* Layout com carrosséis e vídeo */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 items-center mb-16">
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
          <div className="rounded-2xl overflow-hidden border border-gold/30 relative group cursor-pointer w-full" onClick={toggleMute}>
            <video
              ref={videoRef}
              src={`${process.env.PUBLIC_URL}/assets/video/FEEDBACK - IMERSÃO VÍDEO .MP4`}
              autoPlay
              muted
              loop
              playsInline
              className="w-full"
            />
            {/* Indicador de mute/unmute */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className={`bg-black/60 text-white px-4 py-2 rounded-full transition-opacity duration-300 ${isMuted ? 'opacity-0 group-hover:opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                {isMuted ? '🔇 Clique para ativar som' : '🔊 Clique para desativar som'}
              </div>
            </div>
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
