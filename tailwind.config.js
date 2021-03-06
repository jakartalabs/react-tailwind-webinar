module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '85': '21.875rem',
      },
      fontSize: {
        'custom-xl': ['21px', {
          lineHeight: '32px',
        }],
        '10xl': '5rem',
        'full-button-l': ['18px',{
          lineHeight: '60px',
        }]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
