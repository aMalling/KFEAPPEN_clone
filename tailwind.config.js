module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: false,
    },
    extend: {
      colors: {
        "kfe-primary": "#6C9471",
        "kfe-secondary": "#DBDFAC",
        "kfe-base": "#F6F4F6",
        kfe_attention: "#F19238",
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
  },
  plugins: [],
};
