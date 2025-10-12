import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar.jsx";
import Presentation from "./components/Presentation/presentation.jsx";
import AboutMe from "./components/About-me/About.jsx";
import Projects from "./components/projects/project.jsx";
import Skills from "./components/skillCart/skill.jsx";
import Contact from "./components/Contact/contact.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/About" element={<AboutMe />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
