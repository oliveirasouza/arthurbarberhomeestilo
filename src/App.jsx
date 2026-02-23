import React, { useState } from "react";
import "./App.css";

export default function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappNumber = "5585988757226"; 

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo-container">
            <img src="./public/img/logo.png" alt="Logo" className="logo-img" />
            <h1 className="logo">Arthur BarberHome Estilo</h1>
          </div>
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>

          <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
            <a href="#home">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#precos">Preços</a>
            <a href="#galeria">Galeria</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato" className="btn-primary">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="container hero-content">
          <div className="hero-text">
            <h2>Estilo, Precisão e Confiança em Cada Corte</h2>
            <p>
              Na Arthur BarberHome Estilo, oferecemos cortes modernos, barba profissional e um atendimento premium para elevar seu estilo.
            </p>
            <button className="btn-primary-WhatsApp" onClick={openWhatsApp}>Agendar pelo WhatsApp</button>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="section" id="servicos">
        <div className="container">
          <h2 className="section-title">Nossos Serviços de Barbearia</h2>

          <div className="grid">
            <div className="card">
              <h3>Corte Masculino</h3>
              <p>
                Cortes modernos, clássicos e personalizados para seu estilo.
              </p>
            </div>

            <div className="card">
              <h3>Barba Profissional</h3>
              <p>
                Modelagem, alinhamento e acabamento perfeito para sua barba.
              </p>
            </div>

            <div className="card">
              <h3>Tratamentos Premium</h3>
              <p>
                Cuidados especiais para cabelo e barba com produtos de qualidade.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* preços */}
      <section className="container section" id="precos">
        <h2 className="section-title">Tabela de Preços</h2>
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

      {/* Galeria */}
        <section className="container section" id="galeria">
        <h2 className="section-title">Galeria</h2>
        <div className="gallery">
          <img src="/img/corte1.jpg" />
          <img src="/img/corte2.jpg" />
          <img src="/img/corte3.jpg" />
        </div>
      </section>

      {/* Sobre */}
      <section className="section section-alt" id="sobre">
        <div className="container">
          <h2 className="section-title">Sobre a Arthur BarberHome Estilo</h2>
          <p className="section-text">
            Somos uma barbearia dedicada a oferecer experiência premium, conforto e estilo. Nosso objetivo é garantir que cada cliente saia com confiança e visual impecável.
          </p>
        </div>
      </section>



    
      {/* Footer */}
      <footer className="footer" id="contato">
        <div className="container footer-content">
          <p>© 2026 Arthur BarberHome Estilo. Todos os direitos reservados. Desenvolvido com excelência.</p>
        </div>
      </footer>

      {/* Botão WhatsApp Flutuante */}
      {/* <button className="whatsapp-float" onClick={openWhatsApp}>
        WhatsApp
      </button> */}
    </div>
  );
}
