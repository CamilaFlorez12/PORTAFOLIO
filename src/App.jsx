import React from 'react';
import Navbar from './components/Navbar/navbar.jsx';
import Presentation from './components/Presentation/presentation.jsx'
import AboutMe from './components/About-me/About.jsx';
import Projects from './components/projects/project.jsx';
import Skills from './components/skillCart/skill.jsx';
import Contact from './components/Contact/contact.jsx';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Presentation/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App
