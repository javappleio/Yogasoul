/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#F4F6F7",
        primary: "#306566",
        secondary: "#FCE227",
        dark: "#3A393A"
      },
      fontFamily: {
        fjalla: ["Fjalla One", "sans-serif"],
      },
    },
  },
  plugins: [],
}

