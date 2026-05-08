import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  "#f4f6f1",
          100: "#e4e9da",
          200: "#c8d2b3",
          300: "#a4b486",
          400: "#85975f",
          500: "#677c43",
          600: "#4d6132",
          700: "#3c4c28",
          800: "#2c3920",
          900: "#1d2616",
          950: "#101610",
        },
        clay: {
          50:  "#fbf5ec",
          100: "#f4e7cc",
          200: "#e8cd9a",
          300: "#daad65",
          400: "#cf914a",
          500: "#bb7733",
          600: "#9b5f2a",
          700: "#7c4a25",
          800: "#5e3920",
          900: "#3f2716",
        },
        bone: {
          50:  "#fbfaf6",
          100: "#f4efe3",
          200: "#e8dec8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fade-in 0.6s ease forwards",
        "slow-zoom": "slow-zoom 18s ease-out forwards",
        "underline-grow": "underline-grow 0.4s ease forwards",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(28px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" }, to: { opacity: "1" },
        },
        "slow-zoom": {
          from: { transform: "scale(1.0)" }, to: { transform: "scale(1.08)" },
        },
        "underline-grow": {
          from: { transform: "scaleX(0)" }, to: { transform: "scaleX(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
