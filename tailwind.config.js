/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#a455f7',
          50: '#faf5ff',
          100: '#f2e8ff',
          200: '#e8d5ff',
          300: '#d6b4fe',
          400: '#bd84fc',
          500: '#a455f7',
          600: '#8726e8',
          700: '#7a23cd',
          800: '#6821a8',
          900: '#551c87',
          950: '#390764',
        },
      },
    },
  },
  plugins: [],
};
