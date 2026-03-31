import React from 'react';

const Evento = () => {
  return (
    <section className="relative py-24 px-4 bg-black overflow-hidden">
      {/* Background Video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src={`${process.env.PUBLIC_URL}/assets/video/evento1.mp4`} type="video/mp4" />
      </video>
      
      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Coluna Esquerda */}
          <div>
            <div className="text-gold text-xs font-bold tracking-[3px] mb-6">
              SOBRE O EVENTO
            </div>
            
            <h2 className="font-playfair text-4xl md:text-5xl text-white leading-tight mb-8">
              O evento que transforma profissionais comuns em nomes de referência
            </h2>
          </div>
          
          {/* Coluna Direita */}
          <div className="space-y-6 text-base text-gray-300 leading-relaxed">
            <p>Este não é mais um evento sobre técnicas.</p>
            
            <p>
              É um encontro criado para empreendedoras que atuam na área das sobrancelhas e que já perceberam que <span className="text-white font-medium">apenas saber fazer não é mais suficiente.</span>
            </p>
            
            <p>
              Aqui, você vai desenvolver clareza sobre o seu negócio, fortalecer seu posicionamento e entender como se tornar uma autoridade no mercado.
            </p>
            
            <div className="border-l-2 border-gold/30 pl-6 mt-8 space-y-3">
              <p className="text-sm italic text-gray-400">Porque no cenário atual…</p>
              <p className="font-playfair text-lg text-white italic">
                Não vence quem faz melhor.
              </p>
              <p className="font-playfair text-lg text-gold italic">
                Vence quem é lembrada, reconhecida e desejada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evento;
