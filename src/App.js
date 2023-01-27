import React from 'react';
import Header from './components/Header'
import FirstSection from './components/FirstSection';
import Abilities from './components/Abilities';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstSection />
      <Abilities />
      <Projects />
    </div>
  );
}

export default App;
