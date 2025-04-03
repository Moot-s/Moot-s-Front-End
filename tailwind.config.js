const { heroui } = require("@heroui/react");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        wobble: ["Wobbles", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    plugins: [],
    darkMode: "class",
    plugins: [heroui(), require("@tailwindcss/typography")],
  },
};
