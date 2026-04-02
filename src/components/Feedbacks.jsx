import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const feedbacks = [
  'feedback-1.PNG',
  'feedback-2.PNG',
  'feedback-3.jpeg',
  'feedback-4.jpeg',
  'feedback-5.jpeg',
  'feedback-6.jpeg',
  'feedback-7.jpeg',
  'feedback-8.jpeg',
];

const Feedbacks = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();

  return (
    <section className="py-24 px-4 bg-navy">
      <div className="container mx-auto max-w-6xl">
        <div
          ref={titleRef}
          className={`transition-all duration-800 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center text-gold text-sm font-bold tracking-[3px] mb-8">
            DEPOIMENTOS
          </div>
          <h2 className="text-4xl md:text-5xl text-white text-center mb-16 leading-tight">
            O que dizem quem já viveu essa experiência
          </h2>
        </div>

        {/* Área de vídeo — substitua o src quando tiver o vídeo */}
        <div className="mb-16 rounded-2xl overflow-hidden border border-gold/30 max-w-3xl mx-auto">
          {/* Quando tiver o vídeo, substitua o conteúdo abaixo por: */}
          {/* <video src={`${process.env.PUBLIC_URL}/assets/video/depoimento.mp4`} controls className="w-full" /> */}
          <div className="aspect-video bg-white/5 flex flex-col items-center justify-center gap-4">
            <div className="text-4xl text-gold/40">▶</div>
            <p className="text-gray-500 text-sm tracking-widest uppercase">Vídeo em breve</p>
          </div>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 items-start"
        >
          {feedbacks.map((file, index) => {
            // Define tamanhos variados para criar um layout dinâmico
            const sizes = [
              'col-span-2 md:col-span-2', // Grande
              'col-span-1', // Pequeno
              'col-span-1', // Pequeno
              'col-span-2 md:col-span-1', // Médio
              'col-span-1', // Pequeno
              'col-span-1', // Pequeno
              'col-span-2 md:col-span-2', // Grande
              'col-span-2 md:col-span-1', // Médio
            ];

            return (
              <div
                key={index}
                className={`${sizes[index]} ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="rounded-xl overflow-hidden border border-gold/20 hover:border-gold transition-all duration-300 hover:-translate-y-1 w-fit">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/${file}`}
                    alt={`Feedback ${index + 1}`}
                    className="w-full h-auto object-contain max-h-[400px] block"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
