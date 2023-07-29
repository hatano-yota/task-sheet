/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        theme: {
          DEFAULT: "#D3CCD6",
        },
        primary: {
          DEFAULT: "#7B7C7D",
        },
        error: {
          DEFAULT: "#DB250C",
        },
      },
    },
  },
  plugins: [],
};
