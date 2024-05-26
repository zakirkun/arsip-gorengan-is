/** @type {import('tailwindcss').Config} */
module.exports = {
  preflight: false,
  content: ['contents/**/*.md', 'contents/.vitepress/theme/*.vue'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}

