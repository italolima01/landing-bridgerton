import { useState } from "react";
import "./Envelope.css";

export default function Envelope() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCarta, setShowCarta] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    // Após animação do envelope, mostra a carta no fluxo normal
    setTimeout(() => setShowCarta(true), 3200);
  };

  return (
    <div className="stage">
      {showCarta ? (
        /* Carta no fluxo normal, sem position absolute */
        <div className="carta-final">
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
        </div>
      ) : (
        <div className={`carta-reveal-container ${isOpen ? "is-open" : ""}`}>

          {/* Carta sobe por dentro do envelope */}
          <div className="carta-wrapper">
            <div className="carta-inner-preview" />
          </div>

          {/* Envelope fica na frente */}
          <div className="envelope-box">
            <div className="envelope-back" />
            <div className="envelope-front">
              <div className="envelope-pocket">
                <div className="envelope-fold-left" />
                <div className="envelope-fold-right" />
                <div className="envelope-fold-bottom" />
              </div>
              <div className="envelope-flap-wrapper">
                <div className="envelope-flap-shape" />
                <button
                  className="envelope-seal"
                  onClick={handleOpen}
                  aria-label="Abrir envelope"
                  type="button"
                >
                  E
                </button>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
