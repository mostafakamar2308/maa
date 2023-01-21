/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%",
          },
        },
      },
      fontFamily: {
        aref: ["Aref Ruqaa", "sans-serif"],
        noto: ["Noto Naskh Arabic", "serif"],
        cousin: ["Cousine", "monospace"],
      },
      colors: {
        lightText: "#145952",
        lightBackground: "#F2F2EB",
        lightEmphasizeText: "#F2A950",
        lightCodeBackground: "#BFBFBD",
        lightCodeText: "#0D0D0D",
        darkSelectionBackground: "#e4fe72",
        darkButtonUnimportantColor: "#191f2d",
        darkBackground: "#121723",
        darkText: "#fff",
        darkParagraph: "#adb1b9",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
