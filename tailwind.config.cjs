const defaultTheme = require('tailwindcss/defaultTheme')
// const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      gray: {
        50: 'hsl(0, 0%, 97%)',
        100: 'hsl(0, 0%, 95%)',
        200: 'hsl(0, 0%, 93%)',
        300: 'hsl(0, 0%, 80%)',
        400: 'hsl(0, 0%, 60%)',
        500: 'hsl(0, 0%, 50%)',
        600: 'hsl(0, 0%, 30%)',
        700: 'hsl(0, 0%, 20%)',
        800: 'hsl(0, 0%, 13%)',
        900: 'hsl(0, 0%, 8%)',
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
      boxShadow: {
        borderLight: '0 1px hsla(0, 0%, 0%, 0.05)',
        borderDark: '0 1px hsla(0, 0%, 100%, 0.07)',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      boxShadow: ['dark'],
    },
  },
  plugins: [],
}
