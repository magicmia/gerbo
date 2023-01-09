/** @type {import('tailwindcss').Config} */ 
module.exports = {
  corePlugins: {
    preflight: false,
  },

  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],

    theme: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'),
      
require("@tailwindcss/typography"),
      // ...
    ],
  }