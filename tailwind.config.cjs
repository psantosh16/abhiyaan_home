/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Logo:['Changa One', 'cursive'],
        cardB:['Blaka Ink', 'cursive']
      }
    },
  },
  plugins: [],
}