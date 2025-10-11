import React from "react";
import "./Presentation.css";
import logo from "../../assets/logo.svc.jpg";
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
      <p>Desarrolladora| backend | </p>
      <p>Desarrollo ideas de forma creativa</p>
      <div className="buttons">
        <button className="btn-contacto">Contáctame</button>
        <button className="btn-proyectos">Ver proyectos</button>
      </div>

      <div className="socialMedia">
        <img src={github} alt="logoGithub" className="icon" />
        <img src={linkedin} alt="logoLinkedin" className="icon" />
        <img src={correo} alt="logoCorreo" className="icon" />
      </div>
    </div>
  );
};

export default Presentation;
