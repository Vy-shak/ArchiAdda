/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Agrey500: "#1C1D26",
        Ablue500: "#251F8D",
        Aneutral500: "#666666"
      },
      fontFamily: {
        Aroboto: ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}
