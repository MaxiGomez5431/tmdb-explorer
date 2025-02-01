/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'TMDB': {
          '50': '#eef6ff',
          '100': '#d9e9ff',
          '200': '#b5e3ff',
          '300': '#74cfff',
          '400': '#2bb7ff',
          '500': '#009ef8',
          '600': '#007dd4',
          '700': '#0063ac',
          '800': '#00558e',
          '900': '#054675',
          '950': '#032541',
        }
      },
      boxShadow: {
        'normal': '2px 5px 15px black', 
      },
    },
  },
  plugins: [],
}

