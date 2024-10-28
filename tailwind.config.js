/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'katalog':'#70C05B',
        'price':'#414141',
        'dastavka':'#606060',
      },
      backgroundImage:{
        'hero':"url('../src/imgs/hero.png')"
      }
    },
  },
  plugins: [],
}