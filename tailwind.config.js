// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    fontFamily: {
      display: ["Inter", "sans-serif"],
    },
    // extend: {
    //   colors: {
    //     primary: "#4c51bf",
    //     background: "#f7fafc",
    //   },
    // },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
