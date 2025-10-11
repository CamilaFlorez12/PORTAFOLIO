import React from "react";
import "./Nabvar.css";
import logo from "../../assets/logo.svc.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="titulo">Mi portafolio</h2>
      <ul className="nav-menu">
        <li>inicio</li>
        <li>sobre mi</li>
        <li>proyectos</li>
        <li>Habilidades</li>
        <li>contacto</li>
      </ul>
    </div>
  );
};

export default Navbar;
