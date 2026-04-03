import { useState } from "react";
import "./Envelope.css";

export default function Envelope() {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
  };

  return (
    <div className="stage" style={{ backgroundImage: `linear-gradient(rgba(222,173,156,0.78), rgba(222,173,156,0.78)), url(${process.env.PUBLIC_URL}/assets/img/hero-bg.png)` }}>
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #dead9c, transparent)', zIndex: 0 }} />
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to top, #ebdac8, transparent)', zIndex: 0 }} />
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
