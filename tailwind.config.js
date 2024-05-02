/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        rancho : "'Rancho', cursive"
      },
      colors:{
        "dark-yellow": "#E3B577",
        "custom-light": "#ECEAE3",
        "chocolate": "#331A15",
        "chocolate1": "#1B1A1A"

      }
    },
  },
  plugins: [require("daisyui")],
}