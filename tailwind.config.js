/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      baseGreen: '#42BA96'
    },
    extend: {
      fontFamily: {
        LecklerliOne: ['Leckerli One'],
      }, 
    },
  },
  plugins: [],
}
