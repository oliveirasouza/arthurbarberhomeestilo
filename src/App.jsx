import "./App.css";

function App() {

  function toggleMenu() {
    document.querySelector(".nav").classList.toggle("active");
  }

  return (
    <>
      <header className="header">
        <div className="container header-content">

          <div className="logo-container">
            <img src="./img/logo.png" className="logo-img" />
            <div className="logo-text">
              Arthur<span>BarberHome Estilo</span>
            </div>
          </div>

          <div className="menu-toggle" onClick={toggleMenu}>
            ☰
          </div>

          <nav className="nav">
            <a href="#">Home</a>
            <a href="#galeria">Galeria</a>
            <a href="#precos">Preços</a>
            <a href="#contato">Contato</a>
          </nav>

        </div>
      </header>

      <section className="hero">
        <div>
          <h1>Estilo e Precisão</h1>
          <p>Experiência Premium em Cada Corte</p>
          <button className="btn">
            Agendar Agora
          </button>
        </div>
      </section>

      <section className="container section" id="galeria">
        <h2 className="section-title">Galeria</h2>
        <div className="gallery">
          <img src="/img/corte1.jpg" />
          <img src="/img/corte2.jpg" />
          <img src="/img/corte3.jpg" />
        </div>
      </section>

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

      <a
        className="whatsapp"
        href="https://wa.me/5599999999999"
        target="_blank"
      >
        WhatsApp
      </a>

      <footer className="footer">
        © 2026 Arthur Barber Home - Todos os direitos reservados
      </footer>
    </>
  );
}

export default App;