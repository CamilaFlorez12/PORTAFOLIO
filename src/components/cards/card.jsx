import React from "react";
import "./Card.css";

const Card = ({ imagen, titulo, descripcion, tecnologias, link }) => {
  const techList = tecnologias.split("|").map((t) => t.trim());

  return (
    <div className="card">
      <img src={imagen} alt={titulo} className="card-img" />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>

      <div className="tech-container">
        {techList.map((tech, index) => (
          <span key={index} className="tech-pill">
            {tech}
          </span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        Ver proyecto
      </a>
    </div>
  );
};

export default Card;
