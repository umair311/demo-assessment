/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", 
  ],
  theme: {
    extend: {
      colors: {
        appBackground: '#e5e7eb',
      },
      margin:{
        headerSpace:'61px',
      }
    },
  },
  plugins: [],
};