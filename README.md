# Evolution Brows - Landing Page

Landing page para a última temporada da Imersão Evolution Brows, desenvolvida com React e Tailwind CSS. Um evento presencial exclusivo que transforma profissionais comuns em referências do mercado de micropigmentação e design de sobrancelhas.

## 🚀 Tecnologias

- React 18
- Tailwind CSS 3
- Vimeo Player API
- PostCSS
- Autoprefixer
- WebP para otimização de imagens

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start

# Build para produção
npm run build
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Navbar.jsx           # Barra de navegação fixa
│   ├── Hero.jsx             # Seção hero com título principal
│   ├── Espaco.jsx           # Apresentação do evento com vídeo
│   ├── Evento.jsx           # Vídeo da última temporada
│   ├── Diferencial.jsx      # Diferenciais do evento
│   ├── Autoridade.jsx       # Palestrantes e referências
│   ├── Diamantes.jsx        # Seção das participantes diamante
│   ├── Feedbacks.jsx        # Depoimentos em carrossel
│   ├── Envelope.jsx         # Carta animada com convite
│   ├── UltimaEdicao.jsx     # Aviso de última temporada
│   ├── Setores.jsx          # Escolha de ingressos (Gold/Diamond)
│   ├── FAQ.jsx              # Perguntas frequentes
│   ├── CTAFinal.jsx         # Call-to-action final
│   ├── Footer.jsx           # Rodapé com redes sociais
│   └── WhatsAppButton.jsx   # Botão flutuante arrastável
├── hooks/
│   └── useScrollAnimation.js # Hook para animações no scroll
├── App.js                   # Componente principal
├── index.js                 # Entry point
└── index.css                # Estilos globais e animações

public/
└── assets/
    ├── img/                 # Imagens otimizadas (WebP)
    └── video/               # Vídeos do evento
```

## 🎨 Design System

### Cores
- **Background Escuro**: `#0d0d0d` (Seções principais)
- **Background Vinho**: `rgb(74, 7, 14)` (Seção Diferencial)
- **Gold**: `#D9B86A` (Seções Evento, Autoridade, Feedbacks)
- **Vermelho**: `rgb(130, 29, 35)` (CTAs principais)
- **Diamond**: `#b9f2ff` (Gradiente setor premium)

### Tipografia
- **Títulos**: Outfit (sans-serif) - peso semibold
- **Textos Itálicos**: Playfair Display (serif)
- **Assinatura**: Geraldyn Brushko (script)
- **Corpo**: Outfit (sans-serif)

## 📱 Responsividade

O projeto é totalmente responsivo e otimizado para:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

Ajustes específicos:
- Vídeos ocupam 100% da largura no mobile
- Carrosséis de feedbacks: horizontal no mobile, vertical no desktop
- Quebras de linha otimizadas por dispositivo
- Botão WhatsApp arrastável e responsivo

## 🎯 Funcionalidades

### Navegação
- Navbar fixa com scroll suave
- Links para seções: Evento, Autoridade, Feedbacks, Setores
- Botão "Meu Convite" leva aos setores

### Vídeos Interativos
- Vídeos Vimeo com controle de volume
- Mute/unmute ao clicar
- Volume ajustado por visibilidade na tela
- Autoplay e loop

### Animações
- Scroll animations com Intersection Observer
- Carrosséis infinitos (vertical e horizontal)
- Animação de envelope abrindo
- Efeito de pulsar nos botões
- Transições suaves entre seções

### Interatividade
- Cards de palestrantes com reveal ao clicar
- Acordeão de FAQ
- Botão WhatsApp flutuante e arrastável (snap para bordas)
- Formulário de captura (desabilitado)

### Setores de Ingresso
- Setor Gold: borda dourada, R$ 597
- Setor Diamond: borda gradiente diamante, R$ 997
- Links diretos para checkout Kiwify
- Efeito de pulsar nos botões

## 🔗 Links Importantes

- Instagram: [@erikasousaoficiall_](https://www.instagram.com/erikasousaoficiall_)
- WhatsApp: +55 85 98914-8031
- Checkout Gold: [Kiwify](https://pay.kiwify.com.br/nZOtrKF)
- Checkout Diamond: [Kiwify](https://pay.kiwify.com.br/CDDj4pN)

## 🎬 Vídeos

- Vídeo Espaço: Vimeo ID 1185651442
- Vídeo Evento: Vimeo ID 1180600420
- Vídeo Feedbacks: Local (feedbackv2.mp4)

## 📄 Licença

Projeto desenvolvido para Evolution Brows - Última Temporada.
© 2025 Evolution Brows. Todos os direitos reservados.
