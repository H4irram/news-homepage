/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        grayishBlue: "hsl(233, 8%, 79%)",
        darkGrayishBlue: "hsl(236, 13%, 42%)",
        softRed: "hsl(5, 85%, 63%)",
        softOrange: "hsl(35, 77%, 62%)",
        offWhite: "hsl(36, 100%, 99%)",
        veryDarkBlue: "hsl(240, 100%, 5%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      container: true,
    },
  },
  plugins: [],
};
