/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        "roboto-condensed": ["Roboto Condensed", "sans-serif"],
      },
      colors: {
        "custom-green": "#307e6c",
        "custom-teal": "#2b996d",
        "custom-light-green": "#76c0ae",
        "custom-light-teal": "#83e6c0",
        "custom-dark-green": "#1a1f1d",
        "custom-medium-green": "#303b37",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(#303b37, #1a1f1d)",
      },
      fontSize: {
        xs: "0.5rem",
      },
    },
  },
  plugins: [],
};
