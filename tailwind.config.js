/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        primaryBtn: "#3687FF",
        secondaryBtn: "#ededed",
        accent: "#428bff",
      },
      fontFamily: {
        'karla': ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
