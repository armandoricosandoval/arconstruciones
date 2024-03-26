/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#1fb6ff",
      black: "#000000",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      red: {
        50: "#fff1f2",
        100: "#ffdfe1",
        200: "#ffc4c7",
        300: "#ff9aa0",
        400: "#ff6069",
        500: "#ff2f3b",
        600: "#f30f1c",
        700: "#d80915",
        800: "#a90b14",
        900: "#8b1118",
        950: "#4c0307",
      },
      brand: {
        50: "#FEE2E3",
        100: "#FDC9CC",
        200: "#FB9398",
        300: "#F85961",
        400: "#F6232D",
        500: "#D80915",
        600: "#AB070F",
        700: "#7F050B",
        800: "#580408",
        900: "#2C0204",
        950: "#140102",
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
    // eslint-disable-next-line no-undef
    require("tailwindcss-animated"),
  ],
  daisyui: {
    themes: ["cupcake", "dark", "cmyk"],
  },
};
