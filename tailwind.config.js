/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: "#72ECAC",
      black: "#000000",
      white: "#ffffff",
      bgwhite: "#fefefe",
    },
    extend: {
      backgroundImage: (theme) => ({
        kvark: "url('/src/assets/kvark.png')",
        "kvark-mobile": "url('/src/assets/kvark_mobile.png')",
      }),
    },
    fontFamily: {
      archivo: ['"Archivo"', "cursive"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
};
