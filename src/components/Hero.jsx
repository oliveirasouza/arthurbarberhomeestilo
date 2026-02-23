import React from "react";

const WHATSAPP = "5585988757226";

/**
 * Seção principal
 */
export default function Hero() {

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="hero" id="home">

      <div className="container hero-content">

        <div className="hero-text">

          <h2>
            Estilo, Precisão e Confiança em Cada Corte
          </h2>

          <p>
            Cortes modernos, barba profissional e atendimento premium.
          </p>

          <button
            className="btn-primary-WhatsApp"
            onClick={openWhatsApp}
          >
            Agendar pelo WhatsApp
          </button>

        </div>
      </div>
    </section>
  );
}