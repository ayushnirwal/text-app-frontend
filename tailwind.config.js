module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGray: "#303633",
        red: "#EE6352",
        cream: "#FFDAB9",
        green: "#68A691",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
