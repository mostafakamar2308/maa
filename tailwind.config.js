/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aref: ["Aref Ruqaa", "sans-serif"],
        noto: ["Noto Naskh Arabic", "serif"],
      },
    },
  },
  plugins: [],
};
