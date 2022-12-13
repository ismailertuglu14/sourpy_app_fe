/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      
      boxShadow:{
        navbar: '0px 5px 4px rgba(0, 0, 0, 0.25);'
      },

      colors:{
        baseGreen: '#42BA96',
        baseGray: '#3C3A3A'
      },

      fontFamily: {
        LecklerliOne: ['Leckerli One'],
      },
      transitionProperty: {
        width: "width",
        margin: "margin-left"
      }
    },
  },
  plugins: [],
}
