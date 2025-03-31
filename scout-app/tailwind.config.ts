import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-border": "linear-gradient(90deg, #3b82f6, #06b6d4, #4f46e5, #3b82f6)",
      },
      keyframes: {
        'border-spin': {
          '0%': { 'background-position': '0% 0%' },
          '100%': { 'background-position': '100% 0%' }
        }
      },
      animation: {
        'border-spin': 'border-spin 4s linear infinite',
      },
      backgroundSize: {
        '400%': '400% 100%'
      },
      colors: {
        primary: {
          DEFAULT: "rgb(var(--primary-rgb))",
          light: "rgb(96, 165, 250)",
          dark: "rgb(37, 99, 235)",
        },

        success: "rgb(var(--success-rgb))",
        error: "rgb(var(--error-rgb))",
        warning: "rgb(var(--warning-rgb))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
