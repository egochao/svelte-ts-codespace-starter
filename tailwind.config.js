/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend']
      },
    },
    plugins: [require("@tailwindcss/typography")],
  }
};