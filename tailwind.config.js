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
        title: "3.0rem",
        sub: "2.2rem",
        text: "1.8rem",
        benefitsTitle: "2.4rem",
        benefitsText: "1.8rem",
      },
      lineHeight: {
        link: "2.5rem",
        title: "3.6rem",
        sub: "3.6rem",
        text: "2.1rem",
        benefitsTitle: "2.8rem",
        benefitsText: "2.1rem",
      },
      backgroundColor: {
        benefits: "#83B3D3",
      },
      backgroundImage: {
        subscribe: "url('C:/github/sedona/src/img/subscribe/bg.jpg')",
        filter: "url('C:/github/sedona/src/img/sort/catalog-background.jpg')",
      },
    },
  },
  plugins: [],
};
