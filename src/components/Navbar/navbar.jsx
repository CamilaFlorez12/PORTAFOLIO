import React from "react";
import "./Nabvar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="titulo">Mi portafolio</h2>
      <ul className="nav-menu">
        <li><Link to="/">inicio</Link></li>
        <li><Link to="About">sobre mi</Link></li>
        <li><Link to="Projects">proyectos</Link></li>
        <li><Link to="Skills">Habilidades</Link></li>
        <li><Link to="Contact">contacto</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
