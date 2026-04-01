import React, { useState, useRef, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Formulario = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [leftRef, leftVisible] = useScrollAnimation();
  const [rightRef, rightVisible] = useScrollAnimation();
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: ''
  });
  const [activeField, setActiveField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0, show: false });
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeoutRef = useRef(null);
  
  const inputRefs = {
    nome: useRef(null),
    whatsapp: useRef(null),
    email: useRef(null)
  };

  useEffect(() => {
    const updateCursorPosition = () => {
      if (activeField && inputRefs[activeField].current) {
        const input = inputRefs[activeField].current;
        const rect = input.getBoundingClientRect();
        
        // Cria um span temporário para medir a largura do texto
        const span = document.createElement('span');
        span.style.font = window.getComputedStyle(input).font;
        span.style.visibility = 'hidden';
        span.style.position = 'absolute';
        span.textContent = input.value || input.placeholder;
        document.body.appendChild(span);
        
        const textWidth = span.offsetWidth;
        document.body.removeChild(span);
        
        // Calcula a posição Y baseada no centro vertical do input
        const inputCenterY = rect.top + (rect.height / 2) - 3; // -3px para ajustar altura
        
        setCursorPosition({
          x: rect.left + 24 + textWidth + 4, // 24px padding-left + 4px espaço
          y: inputCenterY,
          show: true
        });
      } else {
        setCursorPosition(prev => ({ ...prev, show: false }));
      }
    };

    updateCursorPosition();
    window.addEventListener('scroll', updateCursorPosition);
    window.addEventListener('resize', updateCursorPosition);
    
    return () => {
      window.removeEventListener('scroll', updateCursorPosition);
      window.removeEventListener('resize', updateCursorPosition);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeField, formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simula envio
    await fetch('http://localhost/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }).catch(() => {});

    // Aguarda animação de dobra
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Ativa animação durante digitação
    setIsTyping(true);
    
    // Para a animação após 300ms sem digitar
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
    }, 300);
  };

  const handleFocus = (fieldName) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  return (
    <section id="formulario" className="py-24 px-4 bg-navy scroll-mt-20">
      {/* Cursor de pena customizado */}
      {cursorPosition.show && (
        <div 
          className="fixed pointer-events-none z-50"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: 'translate(0, -50%)',
            transition: 'left 0.05s ease-out, top 0.05s ease-out'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={isTyping ? 'animate-pen-write' : ''}>
            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#d4af37" opacity="0.9"/>
            <line x1="16" y1="8" x2="2" y2="22" stroke="#d4af37" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      )}

      <div className="container mx-auto max-w-6xl">
        <div 
          ref={titleRef}
          className={`text-center text-gold text-sm font-bold tracking-[3px] mb-12 transition-all duration-800 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          LISTA DE ESPERA
        </div>

        <div className="flex flex-col md:flex-row items-center gap-16">

          <div 
            ref={leftRef}
            className={`flex-1 text-center md:text-left space-y-6 text-lg text-gray-300 leading-relaxed transition-all duration-800 ${
              leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl text-white leading-tight">
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

          <div 
            ref={rightRef}
            className={`flex-1 w-full transition-all duration-800 ${
              rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {!submitted ? (
              <div className={`transition-all duration-800 ${isSubmitting ? 'animate-fold-envelope' : ''}`}>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      ref={inputRefs.nome}
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      onFocus={() => handleFocus('nome')}
                      onBlur={handleBlur}
                      placeholder="NOME"
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl text-sm font-semibold tracking-wide focus:outline-none focus:border-gold transition-colors"
                      style={{ caretColor: 'transparent' }}
                    />
                  </div>
                  
                  <div className="relative">
                    <input
                      ref={inputRefs.whatsapp}
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      onFocus={() => handleFocus('whatsapp')}
                      onBlur={handleBlur}
                      placeholder="WHATSAPP"
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl text-sm font-semibold tracking-wide focus:outline-none focus:border-gold transition-colors"
                      style={{ caretColor: 'transparent' }}
                    />
                  </div>
                  
                  <div className="relative">
                    <input
                      ref={inputRefs.email}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      placeholder="E-MAIL"
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl text-sm font-semibold tracking-wide focus:outline-none focus:border-gold transition-colors"
                      style={{ caretColor: 'transparent' }}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold text-navy px-10 py-5 rounded-full font-bold text-sm tracking-wide uppercase hover:-translate-y-1 transition-all duration-300 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ animation: 'btn-glow 2.5s ease-in-out infinite' }}
                  >
                    {isSubmitting ? 'ENVIANDO...' : 'QUERO RECEBER MEU CONVITE EXCLUSIVO'}
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <div className="text-6xl mb-6 animate-bounce-slow">💌</div>
                <h3 className="font-playfair text-2xl text-navy mb-4">
                  Seu pedido foi enviado ao Palácio
                </h3>
                <p className="text-lg text-gray-600">
                  Verifique sua correspondência (e-mail) em instantes.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Formulario;
