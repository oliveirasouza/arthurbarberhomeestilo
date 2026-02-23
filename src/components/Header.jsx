import React, { useState } from "react";

/**
 * Componente do cabeçalho
 */
export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      <div className="container header-content">

        <div className="logo-container">
          <img
            src="./img/logo.png"
            alt="Arthur BarberHome"
            className="logo-img"
          />
          <h1 className="logo">Arthur BarberHome Estilo</h1>
        </div>

        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <a href="#home">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#precos">Preços</a>
          <a href="#galeria">Galeria</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato" className="btn-primary">
            Contato
          </a>
        </nav>

      </div>
    </header>
  );
}