/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#f2e4ce",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
      },
      // colors: {
      //   "gray-20": "#F8F4EB",
      //   "gray-50": "#EFE6E6",
      //   "gray-100": "#DFCCCC",
      //   "gray-500": "#01030f",
      //   "purple-200" :"#c89fcf",
      //   "purple-300" : "#7a2287",
      //   "primary-100": "#FFE1E0",
      //   "primary-300": "#FFA6A3",
      //   "primary-500": "#F16767",
      //   "secondary-400": "#FFCD5B",
      //   "secondary-500": "#FFB84C",
      // },
      
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    content: {
      upgradetext: "url('./assets/ModernizeText.png')"
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1070px",
    },
  },
  plugins: [],
}
