import { useState } from "react";
import "./Envelope.css";

export default function Envelope() {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
  };

  return (
    <div className="stage">
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
            }}
          >
            <div className="carta-inner">
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
