/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        //Primary
        softBlue: "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        //Neutral
        veryDarkBlue: "hsl(217, 54%, 11%)",
        veryDarkBlue1: "hsl(216, 50%, 16%)",
        veryDarkBlue2: "hsl(215, 32%, 27%)",

      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
