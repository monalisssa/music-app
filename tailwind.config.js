/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {

    screens: {
      'xs': { 'max': '575px' },    // Экраны с шириной до 575px
      'sm': { 'max': '1024px' },    // Экраны с шириной до 767px
      'xl': { 'min': '1280px' },   // Экраны с шириной до 1399px
    },

    extend: {
      gridTemplateColumns:{
        'grid_top_tracks': '30px 230px 20px 20px',
      },
      colors:{
        'main-color': '#18171C',
        'button-color': '#23282B',
        'custom-background': '#9400D3'
      },
      keyframes: {
        rotation: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '100%': { transform: 'rotate(360deg) scale(1.5)' },
        },
      },
      animation: {
        'spin': 'rotation 0.5s linear 1',
      },
    },
  },
  plugins: [],
}