import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Espaco from './components/Espaco';
import Evento from './components/Evento';
import Diferencial from './components/Diferencial';
import Autoridade from './components/Autoridade';
import Diamantes from './components/Diamantes';
import Feedbacks from './components/Feedbacks';
import Setores from './components/Setores';
import FAQ from './components/FAQ';
import CTAFinal from './components/CTAFinal';
import Duvidas from './components/Duvidas';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';


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
      <Setores />
      <FAQ />
      <CTAFinal />
      <Duvidas />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
