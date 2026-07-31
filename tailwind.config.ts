import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rougetu: {
          dark: "#0a0a0f",
          darker: "#060608",
          card: "#12121a",
          gold: "#c9a84c",
          goldLight: "#e8d5a3",
          gray: "#8a8a9a",
          lightgray: "#b0b0c0",
          border: "#2a2a35",
        },
      },
      fontFamily: {
        serif: ["'Noto Serif JP'", "serif"],
        display: ["'Cormorant Garamond'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
