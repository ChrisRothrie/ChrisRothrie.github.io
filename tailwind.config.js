/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/index.html'],
  theme: {
    extend: {
      //fontFamily: {
      //  nunito: ["Nunito", "sans-serif"],
      //  anta: ["\"Anta\"", "sans-serif"]
      //},
      colors: {
        'white': '#ffffff',
        'verdigris': '#5bc0be',
        'yinmnblue': '#3a506b',
        'spacecadet': '#1c2541',
        'oxfordblue': '#0b132b',
      }
    },
  },
  plugins: [],
}