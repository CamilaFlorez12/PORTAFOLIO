import React from "react";
import "./SkillBar.css";

const SkillBar = ({ nombre, porcentaje, color = "#c86dd7" }) => {
  return (
    <div className="skill-bar-container">
      <div className="skill-header">
        <span>{nombre}</span>
        <span>{porcentaje}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{ width: `${porcentaje}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
