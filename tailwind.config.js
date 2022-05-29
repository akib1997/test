module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        telluscoopWhite: "#F9F9F9",
        telluscoopPink: "#FF6392",
        telluscoopYellow: "#FFE45E",
        telluscoopRed: "#E02020",
        telluscoopBlue: "#5AA9E6",
        telluscoopGreen: "#71C666",
        telluscoopDark: "#22333F",
      },
      // boxShadow: {
      //   brutal: "12px 12px 0px 0px rgba(0, 0, 0, 1)",
      // },
      fontFamily: {
        roboto: ["'Roboto Mono'", "'monospace'"],
        flex: ["'Roboto Flex'", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
