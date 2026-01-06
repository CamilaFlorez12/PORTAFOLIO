import React from "react";
import { Link } from "react-router-dom";
import "./Presentation.css";
import logo from "../../assets/logo.png";
import github from "../../assets/logoGithub.png";
import linkedin from "../../assets/logoLinkedin.png";
import correo from "../../assets/logoCorreo.png";

const Presentation = () => {
  return (
    <div className="presentation">
      <img src={logo} alt="logo" className="logo" />
      <h2>
        Hola, soy <span className="nombre">Camila Florez</span>
      </h2>
      <p>Desarrolladora| fronted | </p>
      <p>Desarrollo ideas de forma creativa</p>
      <div className="buttons">
        <Link to="/Contact"><button className="btn-contacto">Contáctame</button></Link>
        <Link to="/Projects"><button className="btn-proyectos">Ver proyectos</button></Link>
      </div>

      <div className="socialMedia">
        <a href="https://github.com/CamilaFlorez12" target="_blank"><img src={github} alt="logoGithub" className="icon" /></a>
        <a href="https://www.linkedin.com/in/laura-camila-florez-santos-1403a637a/" target="_blank"><img src={linkedin} alt="logoLinkedin" className="icon" /></a>
        <a href="mailto:07camilaFlorezsantos@gmail.com"><img src={correo} alt="logoCorreo" className="icon" /></a>
      </div>
    </div>
  );
};

export default Presentation;
