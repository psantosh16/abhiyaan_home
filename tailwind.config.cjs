/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
     screens: {
    'zero': '0px',
    // => @media (min-width: 640px) { ... } 

    'phone': '410px',
    // => @media (min-width: 768px) { ... }

    
  },
    extend: {
      fontFamily:{
        poppins:['Poppins', 'sans-serif'],
        openSans:['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
