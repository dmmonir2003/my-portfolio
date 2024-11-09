const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // boxShadow: {
      //   'custom-green': '-23px 25px 6px -15px rgba(118,194,21,0.75)',
      // },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

