/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Roboto, sans-serif',
        pacifico: ['Pacifico', 'cursive'],
      },
      backgroundImage:{
        app: 'url(/app-bg.png)'
      },
      colors: {
        primary: {
          100: '#F8F7F2',
          200: '#alice',
          300: '#FFFFFF',
          400: '#117a65',
          500: '#0e6655',
        },
        secondary: {
          100: '#e74c3c',
          200: '#c0392b',
          300: '#922b21',
          400: '#7b241c',
          500: '#641e16',
        },
        accent1: {
          100: '#117a65',
          200: '#0e6655',
          300: '#1f618d',
          400: '#154360',
          500: '#0e4a31',
        },
        accent2: {
          100: '#f39c12',
          200: '#d4ac0d',
          300: '#b7950b',
          400: '#9a7d0a',
          500: '#7d6608',
        },
        darkColor: {
          100: '#122F41',
        },
        background: '#ecf0f1',
        text: '#122F41',
    },
    },
  },
  plugins: [],
}

