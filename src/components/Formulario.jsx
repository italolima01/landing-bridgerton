import { useState, useRef, useEffect } from 'react';
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
  const [showFormFields, setShowFormFields] = useState(true);
  
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
    setActiveField(null);
    setCursorPosition({ x: 0, y: 0, show: false });
    setShowFormFields(false); // Esconde os campos

    // Simula envio
    await fetch('http://localhost/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }).catch(() => {});

    // Aguarda animação de dobra
    setTimeout(() => {
      setSubmitted(true);
      
      // Após 7 segundos, reseta o formulário
      setTimeout(() => {
        setSubmitted(false);
        
        // Aguarda 600ms para o form-frame aparecer primeiro
        setTimeout(() => {
          setIsSubmitting(false);
          setFormData({
            nome: '',
            whatsapp: '',
            email: ''
          });
          
          // Depois de mais 400ms, mostra os campos
          setTimeout(() => {
            setShowFormFields(true);
          }, 400);
        }, 600);
      }, 7000);
    }, 800);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Se for o campo whatsapp, permite apenas números
    if (name === 'whatsapp') {
      const numbersOnly = value.replace(/\D/g, '');
      setFormData({
        ...formData,
        [name]: numbersOnly
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    
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
    <section id="formulario" className="py-16 md:py-32 px-4 scroll-mt-20" style={{
      backgroundColor: '#8B1A1A',
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/textile-material-texture.webp)`,
      backgroundSize: '100% auto',
      backgroundPosition: 'center',
      backgroundBlendMode: 'multiply',
      backgroundRepeat: 'repeat'
    }}>
      {/* Cursor de pena customizado */}
      {cursorPosition.show && !submitted && (
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
            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" stroke="#d9b86a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#d9b86a" opacity="0.9"/>
            <line x1="16" y1="8" x2="2" y2="22" stroke="#d9b86a" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      )}

      <div className="container mx-auto max-w-6xl">
        <div 
          ref={titleRef}
          className={`text-center md:text-left text-gold text-sm font-bold tracking-[3px] mb-12 transition-all duration-800 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          LISTA DE ESPERA
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-end gap-16 md:gap-24">

          <div 
            ref={leftRef}
            className={`flex-1 text-center md:text-left space-y-6 leading-relaxed transition-all duration-800 md:pr-8 ${
              leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="font-playfair text-4xl md:text-5xl text-white leading-tight font-semibold">
              Garanta seu lugar antes<br />da abertura oficial
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Se você deseja parar de ser apenas mais uma profissional
              e finalmente se tornar uma referência no seu mercado…
            </p>
            <p className="text-2xl md:text-3xl text-gold font-playfair italic font-bold leading-snug">
              Este é o seu momento.
            </p>
          </div>

          <div 
            ref={rightRef}
            className={`flex-1 w-full transition-all duration-800 mt-16 md:mt-0 ${
              rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {!submitted ? (
              <div className={`relative transition-all duration-1000 ease-in-out ${isSubmitting ? 'animate-fold-envelope' : 'animate-slide-in-right'}`}>
                {/* Moldura do formulário */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/form-frame.webp)`,
                  }}
                />
                
                {/* Texto no topo da carta */}
                <div className={`relative z-10 text-center pt-6 pb-8 transition-all duration-500 ${showFormFields ? 'opacity-100' : 'opacity-0'}`}>
                  <h3 className="font-playfair text-2xl md:text-3xl text-navy italic">
                    {formData.nome ? (
                      <>
                        {formData.nome.split(' ')[0]}, este é seu convite exclusivo
                      </>
                    ) : (
                      'Seu Convite Exclusivo'
                    )}
                  </h3>
                </div>
                
                <form onSubmit={handleSubmit} className={`space-y-4 relative z-10 px-12 py-10 transition-all duration-500 ${showFormFields ? 'opacity-100' : 'opacity-0'}`}>
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
                      autoComplete="name"
                      className="w-full px-6 py-3 border-2 border-white/80 bg-white/95 text-navy rounded-xl text-sm font-semibold tracking-wide focus:outline-none focus:border-gold transition-colors"
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
                      autoComplete="tel"
                      className="w-full px-6 py-3 border-2 border-white/80 bg-white/95 text-navy rounded-xl text-sm font-semibold tracking-wide focus:outline-none focus:border-gold transition-colors"
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
                      autoComplete="email"
                      className="w-full px-6 py-3 border-2 border-white/80 bg-white/95 text-navy rounded-xl text-sm font-semibold tracking-wide focus:outline-none focus:border-gold transition-colors"
                      style={{ caretColor: 'transparent' }}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="animated-button w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                    <span className="text">{isSubmitting ? 'ENVIANDO...' : 'RECEBER CONVITE EXCLUSIVO'}</span>
                    <span className="circle"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <div className="text-6xl mb-6 animate-bounce-slow">✉️</div>
                <h3 className="font-playfair text-2xl text-gold mb-4">
                  Seu pedido foi enviado ao Palácio
                </h3>
                <p className="text-lg text-white/90">
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
