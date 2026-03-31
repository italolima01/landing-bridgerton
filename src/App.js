import React from 'react';
import Hero from './components/Hero';
import Carta from './components/Carta';
import Evento from './components/Evento';
import Diferencial from './components/Diferencial';
import Autoridade from './components/Autoridade';
import Diamantes from './components/Diamantes';
import Urgencia from './components/Urgencia';
import Formulario from './components/Formulario';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Carta />
      <Evento />
      <Diferencial />
      <Autoridade />
      <Diamantes />
      <Urgencia />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
