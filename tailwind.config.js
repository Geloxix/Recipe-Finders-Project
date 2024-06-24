/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ["Montserrat", "Helvetica", "sans-serif"],
        "palanquin": ["Palanquin", "Helvetica", "sans-serif"]
      }
    },
  },
  plugins: [],
}