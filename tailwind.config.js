const defaultTheme = require('tailwindcss/defaultTheme')
// const colors = require('tailwindcss/colors')

module.exports = {
  important: false,
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      gray: {
        50: 'hsl(0, 0%, 98%)',
        100: 'hsl(0, 0%, 93%)',
        200: 'hsl(0, 0%, 60%)',
        300: 'hsl(0, 0%, 50%)',
        // 400: '#ced4da',
        // 500: '#adb5bd',
        // 600: '#868e96',
        // 700: '#495057',
        800: '#333333',
        900: '#111111',
      },

      // 50: '#f8f9fa',
      // 100: '#f1f3f5',
      // 200: '#e9ecef',
      // 300: '#dee2e6',
      // 400: '#ced4da',
      // 500: '#adb5bd',
      // 600: '#868e96',
      // 700: '#495057',
      // 800: '#343a40',
      // 900: '#212529',

      // 50: '#fafafa',
      // 100: '#f5f5f5',
      // 200: '#e5e5e5',
      // 300: '#d4d4d4',
      // 400: '#a3a3a3',
      // 500: '#737373',
      // 600: '#525252',
      // 700: '#404040',
      // 800: '#262626',
      // 900: '#171717',
    },
    extend: {
      textColor: {
        base: 'var(--text-base)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['Input', 'Menlo', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  variants: {},
  plugins: [],
}
