import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/navbar.jsx";
import Presentation from "./components/Presentation/presentation.jsx";
import AboutMe from "./components/About-me/about.jsx";
import Projects from "./components/projects/project.jsx";
import Skills from "./components/skillCart/skill.jsx";
import Contact from "./components/Contact/contact.jsx";
import { Routes, Route } from "react-router-dom";
import "./index.css"; 

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.setAttribute("data-theme", savedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} /> 
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/About" element={<AboutMe />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
