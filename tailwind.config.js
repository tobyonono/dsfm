// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
      opacity: ['responsive', 'hover', 'focus', 'group-hover'],
      fontFamily: {
        'nitti': ['Nitti', 'mono'],
        'guyot': ['Guyot', 'sans'],
        'lora':['"Space Grotesk"', 'sans'],
        'GTWalsheim':['GTWalsheimPro', 'sans']
      },
      animation: {
        'colour-overlay': 'colourFlow 90000ms 0ms infinite linear',
        'flicker-animation': 'flickerAnimation 2000ms 0ms infinite linear',
      },
      keyframes: {
        colourFlow: {
          '0%': { filter: 'sepia(100%) saturate(300%) brightness(70%) hue-rotate(180deg)' },
          '16%': { filter: 'sepia(100%) saturate(300%) brightness(70%) hue-rotate(240deg)' },
          '32%': { filter: 'sepia(100%) saturate(300%) brightness(70%) hue-rotate(300deg)' },
          '48%': { filter: 'sepia(100%) saturate(300%) brightness(70%) hue-rotate(360deg)' },
          '64%': { filter: 'sepia(100%) saturate(300%) brightness(70%) hue-rotate(420deg)' },
          '80%': { filter: 'sepia(100%) saturate(300%) brightness(70%) hue-rotate(480deg)' },
          '100%': { filter: 'sepia(100%) saturate(300%) brightness(70%) hue-rotate(540deg)' },

        },
        flickerAnimation: {
          '0%': { opacity: '1'},   
          '50%': {opacity: '0'},
          '100%': {opacity: '1'},      
        }
      }
    },
  },
  plugins: [],
};
