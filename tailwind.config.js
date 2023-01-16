const defaultTheme = require('tailwindcss/defaultTheme');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        crimsonPro: ['"Crimson Pro"', ...defaultTheme.fontFamily.serif ],
        lato: ['"Lato"', ...defaultTheme.fontFamily.sans ],
      },
      colors: {
        text: '#271A45'
      }
    },
  },
  plugins: [],
}
