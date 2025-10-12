import React from "react";
import SkillCategory from "../SkillCategories/skillCategories.jsx";
import "./Skill.css";

const Skills = () => {
  return (
    <div className="skills">
      <h2>Mis Habilidades</h2>
      <p className="subtitulo">Áreas técnicas y personales</p>

      <div className="skills-grid">
        <SkillCategory
          titulo="Frontend"
          skills={[
            { nombre: "HTML & CSS", porcentaje: 95, color: "#c86dd7" },
            { nombre: "JavaScript", porcentaje: 80, color: "#7a56d1" },
            { nombre: "React", porcentaje: 50, color: "#dca7e3" },
          ]}
        />

        <SkillCategory
          titulo="Backend"
          skills={[
            { nombre: "Node.js", porcentaje: 80, color: "#a47de9" },
            { nombre: "Express", porcentaje: 70, color: "#b58ce9" },
            { nombre: "MongoDB", porcentaje: 85, color: "#8a63d2" },
          ]}
        />

        <SkillCategory
          titulo="Herramientas"
          skills={[
            { nombre: "Git & GitHub", porcentaje: 95, color: "#c86dd7" },
            { nombre: "VS Code", porcentaje: 90, color: "#7a56d1" },
          ]}
        />

        <SkillCategory
          titulo="Habilidades del Ser"
          skills={[
            { nombre: "Comunicación", porcentaje: 90, color: "#c86dd7" },
            { nombre: "Creatividad", porcentaje: 95, color: "#7a56d1" },
            { nombre: "Trabajo en equipo", porcentaje: 90, color: "#dca7e3" },
          ]}
        />
      </div>
    </div>
  );
};

export default Skills;
