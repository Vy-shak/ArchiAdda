/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Ablue100: "#050515",
        Ablue200: "#100e3f",
        Ablue300: "#1b1769",
        Ablue400: "#262092",
        Ablue500: "#251F8D",
        Ablue550: "#3129bc",
        Ablue600: "#4b43d6",
        Ablue700: "#736ddf",
        Ablue800: "#9b96e8",
        Ablue900: "#c3c0f1",
        Ablue1000: "#ebeafa",
        Agrey100: "#09090c",
        Agrey200: "#1b1c25",
        Agrey300: "#2d2f3d",
        Agrey400: "#3f4156",
        Agrey500: "#1C1D26",
        Agrey550: "#51546e",
        Agrey600: "#636787",
        Agrey700: "#787c9c",
        Agrey800: "#9194ae",
        Agrey900: "#a9acc0",
        Agrey1000: "#c2c3d2",
        Agrey1100: "#dadbe4",
        Agrey1200: "#f3f3f6",

        Aneutral500: "#666666"
      },
      fontFamily: {
        Aroboto: ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}
