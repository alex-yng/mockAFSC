/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'General Sans'", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        slideDown: {
          "0%": {
            transform: "translateY(-200px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        slideUp: {
          "0%": {
            transform: "translateY(200px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s",
        fadeOut: "fadeOut 2s",
        slideDown: "slideDown 1s",
        slideUp: "slideUp 1s",
      },
    },
  },
  plugins: [],
};
