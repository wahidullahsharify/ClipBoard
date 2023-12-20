/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '400px',
      md: '600px',
      lg: '900px'
    },
    extend: {
      colors: {
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)'
      },
      fontFamily: {
        wahid: ['Aldhabi', 'Aldhabi'],
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'spin-fast': 'spin 0.1s linear infinite'
      }
    },
  },
  plugins: [],
}

