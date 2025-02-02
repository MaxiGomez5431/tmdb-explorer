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
          '50': '#f0f7fe',
          '100': '#ddedfc',
          '200': '#c3e1fa',
          '300': '#9acef6',
          '400': '#6bb3ef',
          '500': '#4895e9',
          '600': '#3379dd',
          '700': '#2a64cb',
          '800': '#2b58b1',
          '900': '#254883',
          '950': '#091822',
      },
      },
      boxShadow: {
        'normal': '2px 5px 15px black', 
      },
    },
  },
  plugins: [],
}

