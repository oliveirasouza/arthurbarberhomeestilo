import React from "react";

export default function Gallery() {

  return (
    <section className="container section" id="galeria">

      <h2 className="section-title">
        Galeria
      </h2>

      <div className="gallery">

        <img src="/img/corte1.jpg" alt="Corte 1" />
        <img src="/img/corte2.jpg" alt="Corte 2" />
        <img src="/img/corte3.jpg" alt="Corte 3" />

      </div>
    </section>
  );
}