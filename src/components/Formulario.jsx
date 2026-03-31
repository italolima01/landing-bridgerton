import React, { useState } from 'react';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch('http://localhost/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    alert(`Obrigado, ${formData.nome}! Seu convite exclusivo será enviado em breve.`);
    setFormData({ nome: '', whatsapp: '', email: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="formulario" className="py-24 px-4 bg-white scroll-mt-20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center text-gold text-sm font-bold tracking-[3px] mb-12">
          LISTA DE ESPERA
        </div>

        <div className="flex flex-col md:flex-row items-center gap-16">

          <div className="flex-1 text-center md:text-left space-y-6 text-lg text-navy-light leading-relaxed">
            <h2 className="text-4xl md:text-5xl text-navy leading-tight">
              Garanta seu lugar antes<br />da abertura oficial
            </h2>
            <p>
              Se você deseja parar de ser apenas mais uma profissional
              e finalmente se tornar uma referência no seu mercado…<br />
              <span className="text-gold font-playfair italic font-semibold">Este é o seu momento.</span>
            </p>
            <p>
              Preencha seus dados ao lado e receba em primeira mão todas as informações e o convite oficial.
            </p>
          </div>

          <div className="flex-1 w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="NOME"
                required
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl text-sm font-semibold tracking-wide focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="WHATSAPP"
                required
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl text-sm font-semibold tracking-wide focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-MAIL"
                required
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl text-sm font-semibold tracking-wide focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-gold text-navy px-10 py-5 rounded-full font-bold text-sm tracking-wide uppercase hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 mt-4"
              >
                QUERO RECEBER MEU CONVITE EXCLUSIVO
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Formulario;
