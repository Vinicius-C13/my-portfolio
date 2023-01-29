import React from 'react';
import Header from './components/Header'
import FirstSection from './components/FirstSection';
import Abilities from './components/Abilities';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstSection />
      <Abilities />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
