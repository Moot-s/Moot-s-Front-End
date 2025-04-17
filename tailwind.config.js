const { heroui } = require("@heroui/react");

export default {
  content: [ "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}", "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        wobble: ["Wobbles", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    darkMode: "class",
    plugins: [heroui(), require("@tailwindcss/typography")],
  },
};
