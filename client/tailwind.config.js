const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        accent: "#0891b2",
      },
      screens: {
        'xs': '475px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
  mode: 'jit',
};
