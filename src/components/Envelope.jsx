import { useState, useEffect, useRef } from "react";
import "./Envelope.css";

export default function Envelope() {
  const [opened, setOpened] = useState(false);
  const envelopeRef = useRef(null);

  useEffect(() => {
    const currentRef = envelopeRef.current; // Copia a ref para uma variável
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !opened) {
            // Aguarda 500ms após entrar na viewport para abrir
            setTimeout(() => {
              setOpened(true);
            }, 500);
          }
        });
      },
      {
        threshold: 0.3, // Ativa quando 30% do elemento está visível
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [opened]);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
  };

  return (
    <div 
      ref={envelopeRef}
      className="stage" 
      style={{ 
        backgroundColor: '#8B1A1A',
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/textile-material-texture.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply',
        backgroundAttachment: 'scroll'
      }}
    >
      <div className={`carta-reveal-container ${opened ? "is-open" : ""}`}>

        <div className="envelope-back" />

        {/* Carta sobe por dentro do envelope */}
        <article className="carta-wrapper">
          <div
            className="carta-content"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/carta-bg.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'sepia(40%) brightness(0.85) contrast(1.1)',
            }}
          >
            <div className="carta-inner" style={{ position: 'relative', zIndex: 1 }}>
              {/* Overlay para tom envelhecido */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(120, 53, 15, 0.15)',
                pointerEvents: 'none',
                zIndex: -1
              }} />
              <p style={{ fontStyle: 'italic' }}>Prezada empreendedora,</p>
              <p>
                Nesta nova temporada, observo atentamente aquelas que dominam mais do que técnicas…<br />
                Mas que compreendem o verdadeiro jogo por trás de um nome respeitado.
              </p>
              <p>
                O mercado está repleto de profissionais.<br />
                Mas são raras aquelas que se tornam impossíveis de ignorar.
              </p>
              <p className="gold">
                E é exatamente sobre isso que será o encontro mais aguardado desta temporada…
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <button
                  onClick={() => {
                    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="carta-cta-button"
                >
                  DESEJO RECEBER MEU CONVITE
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Máscara que esconde a carta atrás da borda inferior do envelope */}
        <div className="pocket-mask" />

        {/* Frente do envelope */}
        <div className="envelope-front">
          <div className="envelope-pocket">
            <div className="envelope-fold-left" />
            <div className="envelope-fold-right" />
            <div className="envelope-fold-bottom" />
          </div>
        </div>

        {/* Aba + selo — separados para o rotateX funcionar */}
        <div className="envelope-flap-wrapper">
          <div className="envelope-flap-shape" />
          <button
            className="envelope-seal"
            onClick={handleOpen}
            aria-label="Abrir envelope"
            type="button"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/selo.png`}
              alt="Selo"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </button>
        </div>

      </div>
    </div>
  );
}
