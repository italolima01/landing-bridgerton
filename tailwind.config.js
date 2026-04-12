/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0f1419',
          light: '#1a2332',
        },
        taupe: '#a8a68c',
        blush: '#dead9c',
        pearl: '#ebdac8',
        sage: '#9cb7ae',
        sand: '#c8af8a',
        gold: {
          DEFAULT: '#d9b86a',
          light: '#e9c87e',
        },
        cream: '#f5f1e8',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        bodoni: ['"Bodoni Moda"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
