/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Roboto, sans-serif'
      },
      backgroundImage:{
        app: 'url(/app-bg.png)'
      },
      colors: {
        bege:{
          100: '#FEFFEB',
          200: '#D1CAA1',
          300: '#b39d69',
      },
        orangeBrown:{
        100: '#a86b4c'
      },
        wine:{
        500: '#7d1a0c',
        700: '#340a0b'
      },
    },
    },
  },
  plugins: [],
}

