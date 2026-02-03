import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // use .dark class from next-themes instead of prefers-color-scheme
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.4s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
