import React from "react";
import "./About.css";
import camila from "../../assets/fotoC.jpeg";
import codigo from "../../assets/icono-codigo.jpg";
import corazon from "../../assets/icono-corazon.jpg";
import creatividad from "../../assets/icono-creatividad.jpg";
import innovacion from "../../assets/icono-innovacion.jpg";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <h2>Sobre Mí</h2>
      <p className="subtitulo">Conoce un poco más sobre mí</p>

      <div className="text-aboutMe">
        <img src={camila} alt="Foto Camila" className="foto-camila" />

        <div className="info">
          <p className="texto">

 Desarrolladora fronted con formación intensiva en desarrollo web y experiencia en proyectos utilizando diversas tecnologías. Maneja con solidez HTML, CSS, JavaScript, MongoDB, Node.js y express. 

Ha trabajado tanto en equipo como de manera individual, destacando especialmente en fronted y el consumo de PIS. 

Se caracteriza por su buena comunicación, capacidad de trabajo en equipo y aprendizaje autónomo. Actualmente busca oportunidades para aportar en el área de fronted y, al mismo tiempo, seguir fortaleciendo sus habilidades técnicas y personales. 

  
          </p>

          {/* Bloques de valores */}
          <div className="atributos">
            <div className="atributo">
              <img src={corazon} alt="icono pasión" />
              <h3>Pasión</h3>
              <p>por lo que hago</p>
            </div>

            <div className="atributo">
              <img src={codigo} alt="icono código" />
              <h3>Código</h3>
              <p>como forma de expresión</p>
            </div>

            <div className="atributo">
              <img src={creatividad} alt="icono creatividad" />
              <h3>Creatividad</h3>
              <p>para diseñar y resolver</p>
            </div>

            <div className="atributo">
              <img src={innovacion} alt="icono innovación" />
              <h3>Innovación</h3>
              <p>en cada proyecto</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
