/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'smaller': {'max': '870px'},
      },
      // fontFamily: {
      //   sans: ["Plus Jakarta Sans", "sans-serif"],
      // },
    },
  },
  plugins: [],
}

