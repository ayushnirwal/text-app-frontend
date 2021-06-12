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
      keyframes: {
        appear: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        disappear: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        appear: "appear 500ms ease-in-out",
        disappear: "disappear 500ms ease-in-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
