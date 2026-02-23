import React from "react";

export default function Services() {

  return (
    <section className="section" id="servicos">

      <div className="container">

        <h2 className="section-title">
          Serviços
        </h2>

        <div className="grid">

          <div className="card">
            <h3>Corte Masculino</h3>
            <p>Cortes modernos e personalizados.</p>
          </div>

          <div className="card">
            <h3>Barba</h3>
            <p>Modelagem profissional.</p>
          </div>

          <div className="card">
            <h3>Premium</h3>
            <p>Tratamentos especiais.</p>
          </div>

        </div>
      </div>
    </section>
  );
}