/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "quicksand": ["Quicksand", "sans-serif"],
        "roboto-condensed": ["Roboto Condensed", "sans-serif"],
      },
      colors: {
        "bg-gradient-start": "#303b37",
        "bg-gradient-end": "#1e1f1d",
        "text-main": "#e1eeeb",
        "input-border": "#76c0ae",
        "input-bg": "transparent",
        "input-text": "#c2e9e0",
        "header-text": "#83e6c0",
        "result-text": "#c2e9e0",
      },
    },
  },
  plugins: [],
};
