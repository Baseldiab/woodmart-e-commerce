/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        mainBg: "#02020f",
        secBg: "#000E2B",
        primary: "#558063",
        secondary: "#36B9EA",
        searchBtn: "#8b8ba7",
        gradientSec: "#dbeafe14",
        borderColor: "#ffffff2e",
      },
      // fontFamily: {
      //   karla: ["Karla", "sans-serif"],
      //   source: ["Source Sans Pro", "ui-sans-serif", "system-ui", "sans-serif"],
      //   cairo: ["Cairo", "sans-serif"],
      // },
    },
  },
  plugins: [],
};
