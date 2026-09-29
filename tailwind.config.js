/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        pastel: {
          cream: '#FAFAF7',
          lavender: '#EAE6FA',
          'lavender-dark': '#8E7DBE',
          rose: '#FCE7ED',
          'rose-dark': '#C97A91',
          sage: '#E2EBE5',
          'sage-dark': '#5B8266',
          sky: '#E0F0F8',
          'sky-dark': '#4F8AAB',
          sand: '#F7EFE8',
          slate: '#303642',
          subtle: '#6B7280',
        }
      }
    }
  },
  plugins: [],
}
