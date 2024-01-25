/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#999'
        },
        secondary : {
          DEFAULT: '#0891B2',
          50: '#79E0F9',
          100: '#65DCF8',
          200: '#3ED3F6',
          300: '#17CAF5',
          400: '#0AB1D9',
          500: '#0891B2',
          600: '#06657C',
          700: '#033A47',
          800: '#010E11',
          900: '#000000',
          950: '#000000'
        },
        greenCustom: {
          50: '#00acc0',
          100: '#00c6b6',
          500: '#5bdc9f',
          900: '#aaed83'
        },
        yellowCustom: {
          500: '#f9f871'
        },

        //CUSTOM COLORS
        //https://www.tailwindshades.com/
        //or crtl g + ctrl k on hexa value (#007ce6)
      },
      fontFamily: {
        'primary': ['"Open Sans"', ...defaultTheme.fontFamily.sans],
        'secondary': ["Salsa"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
