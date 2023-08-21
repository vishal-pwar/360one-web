/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "wealth-orange": "#fd7740",
        "asset-purple": "#5a32ff",
        "wealth-orange-80": "#FF6E4D",
        "asset-purple-80": "#6666FF",
        "wealth-orange-60": "#FF9478",
        "asset-purple-60": "#8C8CFF",
      },
      screens: {
        sm: "414px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
