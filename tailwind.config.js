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
        '50': '#f4f9f9',
        '100': '#d9eeec',
        '200': '#b2ddd9',
        '300': '#84c4c1',
        '400': '#5ba6a5',
        '500': '#408989',
        '600': '#326d6f',
        '700': '#2b595a',
        '800': '#264749',
        '900': '#233d3e',
        '950': '#102123',
        }
      },
      boxShadow: {
        'normal': '0px 5px 20px black', 
      },
    },
  },
  plugins: [],
}

