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
          '500': '#294EED',
          '900': '#050629',
          '950': '#070111',
      },
      },
      boxShadow: {
        'normal': '2px 5px 15px black', 
      },
    },
  },
  plugins: [],
}

