module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-1": "-1",
      },
    },
    colors: {
      brightRed: {
        DEFAULT: "hsl(12, 88%, 59%)",
      },
      lightGray: {
        DEFAULT: "hsl(0, 0%, 98%)",
      },
      grayishBlue: {
        DEFAULT: "hsl(227, 12%, 61%)",
      },
      darkBlue: {
        DEFAULT: "hsl(233, 12%, 13%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
