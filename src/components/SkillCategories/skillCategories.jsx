import React from "react";
import SkillBar from "../skillBar/skillBar.jsx";
import "./SkillCategories.css";

const SkillCategory = ({ titulo, skills }) => {
  return (
    <div className="skill-category">
      <h3>{titulo}</h3>
      <div className="skill-list">
        {skills.map((s, i) => (
          <SkillBar
            key={i}
            nombre={s.nombre}
            porcentaje={s.porcentaje}
            color={s.color}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
