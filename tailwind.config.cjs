/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        english:['Just Another Hand', 'cursive'],
        marquee:['Moul', 'cursive'],
        hindi:['Rozha One', 'serif'],
        logo:['Kaushan Script', 'cursive'],
        badcats:["BadCats" , "cursive"],
        ams:["ams", "cursive"],
      }
    },
  },
  plugins: [],
}