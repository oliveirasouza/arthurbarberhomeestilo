import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">


      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/user">User</Link>
        <Link to="/contato">Contato</Link>
      </div>

    </nav>
  );
}