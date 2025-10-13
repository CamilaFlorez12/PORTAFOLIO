import React, { useState } from "react";
import "./Nabvar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="titulo">Mi portafolio</h2>

      <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
        <li><Link to="/About" onClick={() => setMenuOpen(false)}>Sobre mí</Link></li>
        <li><Link to="/Projects" onClick={() => setMenuOpen(false)}>Proyectos</Link></li>
        <li><Link to="/Skills" onClick={() => setMenuOpen(false)}>Habilidades</Link></li>
        <li><Link to="/Contact" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
