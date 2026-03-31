# Evolution Brows - Landing Page

Landing page para o evento Imersão Evolution Brows, desenvolvida com React e Tailwind CSS.

## 🚀 Tecnologias

- React 18
- Tailwind CSS 3
- PostCSS
- Autoprefixer

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
│   ├── Hero.jsx          # Seção hero com CTA principal
│   ├── Carta.jsx         # Seção da carta
│   ├── Evento.jsx        # Sobre o evento (com vídeo background)
│   ├── Diferencial.jsx   # Diferenciais do evento
│   ├── Autoridade.jsx    # Palestrantes
│   ├── Diamantes.jsx     # Seção mistério
│   ├── Urgencia.jsx      # Urgência
│   ├── Formulario.jsx    # Formulário de captura
│   └── Footer.jsx        # Rodapé
├── App.js               # Componente principal
├── index.js             # Entry point
└── index.css            # Estilos globais com Tailwind

public/
└── assets/
    ├── img/             # Imagens
    └── video/           # Vídeos
```

## 🎨 Design System

### Cores
- **Navy**: `#0f1419` (Background principal)
- **Navy Light**: `#1a2332` (Background secundário)
- **Gold**: `#d4af37` (Destaques e CTAs)
- **Cream**: `#f5f1e8` (Backgrounds alternados)

### Tipografia
- **Títulos**: Playfair Display (serif)
- **Corpo**: Inter (sans-serif)

## 📱 Responsividade

O projeto é totalmente responsivo e otimizado para:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🎯 Funcionalidades

- Scroll suave entre seções
- Vídeo em background na seção Evento
- Formulário de captura de leads
- Animações e transições suaves
- Design fiel à referência Bridgerton/Regency

## 📄 Licença

Projeto desenvolvido para Evolution Brows.
