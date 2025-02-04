/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Work Sans"],
      },
      colors: {
        primary: ["#2fc8c3"],
        mainblue: ["#213F7D"],
      },
    },
  },
  plugins: [],
};
