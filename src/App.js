import React from 'react';
import Header from './components/Header'
import FirstSection from './components/FirstSection';
import Abilities from './components/Abilities';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Divider from './components/utils/Divider';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstSection />
      <Abilities />
      <Divider />
      <Projects />
      <Divider />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
