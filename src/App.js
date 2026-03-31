import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Envelope from './components/Envelope';
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
      <Navbar />
      <Hero />
      <Envelope />
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
