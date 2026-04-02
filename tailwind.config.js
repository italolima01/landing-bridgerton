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
          DEFAULT: '#d4af37',
          light: '#f4e4c1',
        },
        cream: '#f5f1e8',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
