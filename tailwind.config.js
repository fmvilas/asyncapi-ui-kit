const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    // This is not present inside the default configuration
    // but it's good to build your production application
    // Read more about this here: https://tailwindcss.com/docs/installation#building-your-css
    './pages/**/*.js',
    './components/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        gray: colors.blueGray,
        cyan: colors.cyan,
        'code-block': 'rgb(37, 47, 63)',
        'code-block2': 'rgb(57, 67, 83)',
        'code-block-highlight': colors.blueGray[300],
      },
      maxWidth: {
        '9xl': '98rem'
      },
      width: {
        prose: '65ch',
        '144': '36rem',
      },
      typography: {
        DEFAULT: {
          css: {
            pre: {
              marginTop: 0,
              marginBottom: 0,
            }
          },
        },
        sm: {
          css: {
            pre: {
              marginTop: 0,
              marginBottom: 0,
            }
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'), 
  ],
}
