/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#1C2833', //dark 
        'secondary': '#283747', //gray
        'tertiary': '#FFFFFA', //white
        'quaternary': '#7547FF', // light purple
        'quinary': '#571FFF' //purple
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif']
      },
      keyframes: {
        spaceLeft: {
          '0%,100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(-20%,-50%)' },
        },
        spaceMiddle: {
          '0%,100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(0,-50%)' },
        },
        spaceRight: {
          '0%,100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(20%,-50%)' },
        }
      }
    },
    animationDelay: {
      '1s': '1s',
      '2s': '2s',
      '3s': '3s',
      '4s': '4s',
    },
    backgroundImage: {
      'home': "url('/img/background.gif')",
    },
  },
  plugins: [require('./plugins/animationDelay')],

}

