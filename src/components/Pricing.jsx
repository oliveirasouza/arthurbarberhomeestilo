import React from "react";

export default function Pricing() {

  return (
    <section className="container section" id="precos">

      <h2 className="section-title">
        Preços
      </h2>

      <div className="pricing">

        <div className="price-card">
          Corte
          <div className="price">R$ 30</div>
        </div>

        <div className="price-card">
          Barba
          <div className="price">R$ 20</div>
        </div>

        <div className="price-card">
          Corte + Barba
          <div className="price">R$ 45</div>
        </div>

      </div>
    </section>
  );
}