const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/vue-tailwind-datepicker/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "main-color": colors.emerald,
        "danger-color": colors.red,

        "vtd-primary": colors.emerald, // Light mode Datepicker color
      },
    },
  },
  plugins: [
    /*require("@tailwindcss/forms")*/
  ],
};
