/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: {
      base: "calc(1*var(--size-20))",
    },
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
        "greyscale-100": "#E2E2E2",
        "light-grey": "#F8F8F8",
        "greyscale-700": "#1B1C1E",
        "greyscale-200": "#BDBDBD",
        "greyscale-400": "#828282",
        "greyscale-500": "#4F4F4F",
        "greyscale-50": "#F6F6F6",
        "greyscale-300": "#9A9A9A",
        "baby-cream": "#F4F0EF",
        "light-text": "#707070",
        "light-black": "#1B1C1EE0",
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
