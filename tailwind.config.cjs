/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        futura: "'futura-pt', sans-serif",
        blakely: "'blakely', sans-serif;",
      },
      colors: {},
      maxWidth: {
        readable: "65ch",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
