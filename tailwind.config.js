module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: {
          550: "#0051AA",
          650: "#0F3D70",
        },
      },
      fontSize: {
        "4.5xl": "40px",
        "2.5xl": "28px",
      },
      maxWidth: {
        "8xl": "1300px",
      },
      minWidth: {
        240: "240px",
        330: "330px",
        660: "660px",
      },
      maxHeight: {
        660: "660px",
      },
      minHeight: {
        600: "600px",
        440: "440px",
        315: "315px",
      },
    },
  },
  plugins: [],
};
