module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'theme-dark': '#030014',
      },
      boxShadow: {
        'custom-purple': '0 0 15px rgba(138, 43, 226, 0.7)',
      },
    },
  },
  variants: {
    extend: {
      backdropFilter: ['responsive'], // For blur support
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-filters'),
  ],
}
