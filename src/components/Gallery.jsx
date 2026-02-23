import React from "react";

export default function Gallery() {

  const cortes = [

    { img: "./img/Buzzcut.jpg", nome: "Buzz Cut" },
    { img: "./img/Moicano.jpg", nome: "Moicano" },
    { img: "./img/sufista.jpg", nome: "Surfista" },
    { img: "./img/Top Knot.jpg", nome: "Top Knot" },
    { img: "./img/Undercut.jpg", nome: "Undercut" },
    { img: "./img/Pompadour.jpg", nome: "Pompadour" },
    { img: "./img/degrade.jpg", nome: "Degradê" },
    { img: "./img/afinado.jpg", nome: "Afro Afinado" },
    { img: "./img/Bun Fade.jpg", nome: "Bun Fade" }

  ];

  return (

    <section className="container section" id="galeria">

      <h2 className="section-title">
        Galeria
      </h2>

      <div className="gallery">

        {cortes.map((corte, index) => (

          <figure className="gallery-item" key={index}>

            <img
              src={corte.img}
              alt={corte.nome}
            />

            <figcaption>
              {corte.nome}
            </figcaption>

          </figure>

        ))}

      </div>

    </section>

  );

}