/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      colors: {
        "wealth-orange": "#fd7740",
        "asset-purple": "#5a32ff",
        "wealth-orange-80": "#FF6E4D",
        "asset-purple-80": "#6666FF",
        "wealth-orange-60": "#FF9478",
        "asset-purple-60": "#8C8CFF",
      },
      screens: {
        sm: "450px",
        phablet: "600px",
        tablet: "1200px",
        windowDesktop: "1480px",
        desktop: "1600px",
      },
      fontFamily: {
        "space-grotesk": "var(--font-space-grotesk)",
        "hanken-grotesk": "var(--font-hanken-grotesk)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    animation: {
      marquee: "marquee 10s linear infinite",
    },
    keyframes: {
      marquee: {
        "0%": { transform: "translateX(20%)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
  },
  plugins: [],
};
