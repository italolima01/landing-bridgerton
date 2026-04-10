import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Espaco from './components/Espaco';
import Evento from './components/Evento';
import Diferencial from './components/Diferencial';
import Autoridade from './components/Autoridade';
import UltimaTemporada from './components/UltimaTemporada';
import Diamantes from './components/Diamantes';
import Feedbacks from './components/Feedbacks';
import Urgencia from './components/Urgencia';
import Formulario from './components/Formulario';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Espaco />
      <Evento />
      <Diferencial />
      <Autoridade />
      <UltimaTemporada />
      <Diamantes />
      <Feedbacks />
      <Urgencia />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
