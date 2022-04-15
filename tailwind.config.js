const colors = require('tailwindcss/colors')
module.exports = {
  mode: "jit",
  content: [
    './components/**/*.{html,js,jsx,ts,tsx}',
    './pages/**/*.{html,js,jsx,ts,tsx}',
    './index.html',
  ],
  darkMode: "class", // class, 'media' or boolean
  theme: {
    extend: {
      colors: {
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
      }
    },
  },
  plugins: [],
};
