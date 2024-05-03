/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "rgb(var(--primary-green) / <alpha-value>)",
        secondaryGreen: "rgb(var(--secondary-green) / <alpha-value>)",
      },
      fontFamily: {
        Phoppins: ["Poppins sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
