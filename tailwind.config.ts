import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — deep green (trust, growth) + warm accent.
        brand: {
          50: "#f0f9f4",
          100: "#dbf0e3",
          200: "#b9e1ca",
          300: "#8acba8",
          400: "#56ad81",
          500: "#339063",
          600: "#23744f",
          700: "#1d5c41",
          800: "#194a36",
          900: "#153d2d",
        },
        accent: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
