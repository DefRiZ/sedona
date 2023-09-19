/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        containerFull: "1200px",
      },
      colors: {
        favorite: "#7DB54F",
        accent: "#756257",
      },
      fontSize: {
        fav: "1.0rem",
        link: "2.0rem",
        btn: "1.6rem",
      },
    },
  },
  plugins: [],
};
