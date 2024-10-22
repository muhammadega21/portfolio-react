/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Epilogue", "sans-serif"],
      },
      colors: {
        "background-dark": "var(--dark-background)",
        "background-light": "var(--light-background)",
        "color-primary": "var(--color-primary)",
        "color-accent": "var(--text-accent)",
        "color-dark": "var(--text-dark)",
        "color-light": "var(--text-light)",
      },
    },
  },
  plugins: [tailwindScrollbar],
};
