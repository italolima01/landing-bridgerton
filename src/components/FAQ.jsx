import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqs = [
  {
    question: 'Vale a pena participar presencialmente?',
    answer:
      'Sim! A experiência presencial é completamente diferente. Você vai absorver conteúdo de alto nível, fazer conexões reais com profissionais do mercado e sair com uma visão transformada do seu negócio.',
  },
  {
    question: 'E se eu ainda não me sinto pronta ou estou começando?',
    answer:
      'Este evento foi pensado para profissionais em todos os estágios. Se você está começando, vai sair com uma base sólida e acelerada. Se já tem experiência, vai elevar seu nível de forma significativa.',
  },
  {
    question: 'Eu vou realmente conseguir aplicar o que aprender?',
    answer:
      'Sim! O evento é totalmente prático. Você aprenderá técnicas e estratégias aplicáveis imediatamente no seu dia a dia, com demonstrações ao vivo e materiais de apoio para levar para casa.',
  },
  {
    question: 'O evento é somente para profissionais de estética?',
    answer:
      'O evento é voltado para profissionais da área de beleza e estética que desejam crescer, se posicionar no mercado e transformar sua carreira.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer:
      'Você pode pagar via cartão de crédito, PIX ou boleto bancário. Parcelamento disponível no cartão em até 12x.',
  },
  {
    question: 'E se eu não puder comparecer após comprar meu ingresso?',
    answer:
      'Entre em contato com nossa equipe pelo WhatsApp. Analisamos cada caso individualmente para encontrar a melhor solução.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, visible] = useScrollAnimation();

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-20 md:py-32 px-6 bg-[#0d0d0d]">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-800 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Título */}
        <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold text-center mb-12">
          Perguntas Frequentes
        </h2>

        {/* Acordeão */}
        <div className="divide-y divide-white/10">
          {faqs.map((faq, i) => (
            <div key={i} className="py-6">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-start justify-between gap-4 text-left group"
              >
                <span className="font-outfit text-lg text-white/90 group-hover:text-white transition-colors duration-200 leading-snug">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 mt-0.5 text-white/50 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Resposta com animação */}
              <div
                className={`overflow-hidden transition-all duration-400 ${
                  openIndex === i ? 'max-h-96 mt-4' : 'max-h-0'
                }`}
              >
                <p className="font-outfit text-base text-white/60 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
