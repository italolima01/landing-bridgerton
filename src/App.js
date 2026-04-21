import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Espaco from './components/Espaco';
import Evento from './components/Evento';
import Diferencial from './components/Diferencial';
import Autoridade from './components/Autoridade';
import Diamantes from './components/Diamantes';
import Feedbacks from './components/Feedbacks';
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
      <Diamantes />
      <Feedbacks />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
