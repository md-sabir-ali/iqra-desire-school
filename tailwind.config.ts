import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — navy blue + gold, matching the school logo.
        brand: {
          50: "#eef2f9",
          100: "#d8e0f0",
          200: "#b3c3e0",
          300: "#8099c9",
          400: "#4d6daf",
          500: "#2b4e94",
          600: "#1f3c76",
          700: "#1a3366",
          800: "#152a54",
          900: "#0f1f3f",
        },
        accent: {
          400: "#e3b23c",
          500: "#d4a017",
          600: "#b8860b",
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
