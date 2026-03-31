import React from 'react';

const speakers = [
  {
    name: 'Erika Sousa',
    role: 'Micropigmentadora',
    image: 'erika-sousa.jpg',
    revealed: true
  },
  {
    label: 'A ser revelado…',
    role: 'Convidado especial',
    revealed: false
  },
  {
    label: 'A ser revelado…',
    role: 'Convidado especial',
    revealed: false
  },
  {
    label: 'A ser revelado…',
    role: 'Convidado especial',
    revealed: false
  },
  {
    label: 'A ser revelado…',
    role: 'Convidado especial',
    revealed: false
  }
];

const Autoridade = () => {
  return (
    <section className="py-24 px-4 bg-cream">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center text-gold text-sm font-bold tracking-[3px] mb-8">
          AUTORIDADE
        </div>
        
        <h2 className="text-4xl md:text-5xl text-navy text-center mb-12 leading-tight">
          Diretamente das maiores<br />referências do Brasil
        </h2>
        
        <p className="text-lg text-navy-light text-center mb-16 leading-relaxed max-w-3xl mx-auto">
          Profissionais que hoje são destaque nacional estarão presentes para compartilhar o que realmente funciona no mercado.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {speakers.map((speaker, index) => (
            <div key={index} className="text-center">
              <div className="w-36 h-36 mx-auto mb-4 rounded-full bg-navy border-2 border-gold flex items-center justify-center relative overflow-hidden">
                {speaker.revealed ? (
                  <img 
                    src={`${process.env.PUBLIC_URL}/assets/img/${speaker.image}`}
                    alt={speaker.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <img 
                      src={`${process.env.PUBLIC_URL}/assets/img/silhouette.png`}
                      alt="Palestrante" 
                      className="w-16 opacity-30"
                    />
                    <div className="absolute text-6xl text-gold font-playfair">?</div>
                  </>
                )}
              </div>
              <p className="text-base text-navy mb-2 font-medium">
                {speaker.revealed ? speaker.name : speaker.label}
              </p>
              <p className="text-sm text-gray-500">{speaker.role}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center space-y-4 text-lg text-navy-light max-w-3xl mx-auto">
          <p>Sem teoria vazia.</p>
          <p>Sem fórmulas genéricas.</p>
          <p className="font-playfair text-2xl text-gold italic font-semibold">
            Apenas direcionamentos validados que já transformaram empreendedoras comuns em grandes referências.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Autoridade;
