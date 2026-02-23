import React from "react";

export default function Gallery() {

  return (
    <section className="container section" id="galeria">

      <h2 className="section-title">
        Galeria
      </h2>

      <div className="gallery">

        <img src="./img/Buzzcut.jpg" alt="Corte 1" />
        <img src="./img/Moicano.jpg" alt="Corte 2" />
        <img src="./img/sufista.jpg" alt="Corte 3" />
        <img src="./img/Top Knot.jpg" alt="Corte 4" />
        <img src="./img/Undercut.jpg" alt="Corte 5" />
        <img src="./img/Pompadour.jpg" alt="Corte 6" />
        <img src="./img/degrade.jpg" alt="Corte 7" />

      </div>
    </section>
  );
}