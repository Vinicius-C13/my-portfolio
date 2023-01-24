import React from 'react';
import ContantBtn from './components/utils/ContactBtn';
import TecnologyItem from './components/utils/TecnologyItem';
import ProjectItem from './components/utils/ProjectItem';

function App() {
  return (
    <div className="App">
      <ContantBtn content='Entre em Contato'/>
      <TecnologyItem tech='HTML' desc='sei de html' />
      <ProjectItem img='calculadora.png' project='Calculadora' tech='HTML CSS JS'/>
      <ProjectItem img='lp-easybank.png' project='EasyBank Landing Page' tech='HTML CSS JS'/>
    </div>
  );
}

export default App;
