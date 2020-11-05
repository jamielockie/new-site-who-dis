// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    fontFamily: {
      display: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "hsl(204deg 100% 50%)",
        primaryLight: "hsl(204deg 100% 70%)",
        primaryDark: "hsl(204deg 100% 30%)",
        primaryText: "hsl(204deg 100% 38%)",
        secondary: "#ff5500",
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
