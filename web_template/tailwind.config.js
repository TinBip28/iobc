/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-g': {
          '300': 'RGBA(0, 128, 0, 0.1)',
          '400': 'RGBA(153, 204, 153, 1)',
          '500': 'RGBA(0, 128, 0, 1)',
          '700': 'RGBA(0, 51, 0, 1)',
        },
        'secondary-g': {
          '400': 'RGBA(220, 134, 141, 1)',
          '700': 'RGBA(51, 0, 11, 1)'
        },
      },
      width: {
        '22': '5.5rem',
        '100': '25rem',
        '120': '30rem',
        '150': '37.5rem',
        '180': '45rem',
        '200': '50rem',
      },
      height: {
        '100': '25rem', // 400px
        '200': '25.5rem', // 408px
        '250': '31.25rem', // 500px,
        '255': '31.875rem', // 510px
        '265': '33.125rem', // 530px
      },
      padding: {
        '4.5': '1.125rem',
      },
      scale: {
        '101': '1.01',
        '102': '1.02',
        '103': '1.03',
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
        '2500': '2500ms',
        '3000': '3000ms',
      },
      fontFamily: {
        'verveine': ['Verveine'],
        'nimbus': ['NimbusSanT-ReguExte', 'cursive'],
      },
      scale: {
        '55': '0.55',
        '60': '0.60',
        '70': '0.70',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      maxWidth: {
        '100': '25rem',
        '105': '26rem'
      }
    },
  },
  plugins: [],
}