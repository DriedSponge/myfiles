/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        'background':'#1c2128',
        'backroundsecondary':'#2D333B',
        'clickblue':'#539BE9'
      }
    },
  },
  plugins: [],
}
