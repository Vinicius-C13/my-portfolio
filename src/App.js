import React from 'react';
import Header from './components/Header'
import FirstSection from './components/FirstSection';
import Abilities from './components/Abilities';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstSection />
      <Abilities />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
