const colors = require("tailwindcss/colors")
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#4f46e5",
        accent:"#0891b2"
      }
    },
    
  },
  plugins: [],
};
