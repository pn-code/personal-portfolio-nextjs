/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f6f5f4",
        secondary: "#060505",
        primaryBtn: "#5125b6",
        secondaryBtn: "#ededed",
        accent: "#428bff",
      },
    },
  },
  plugins: [],
};
