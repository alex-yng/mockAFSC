/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
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
        slideRight: {
          "0%": {
            transform: "translateX(-500px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        slideLeft: {
          "0%": {
            transform: "translateX(500px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        expandDownward: {
          "0%": {
            scale: "1 0",
          },
          "100%": {
            scale: "1 1",
          },
        },
        expandUpward: {
          "0%": {
            scale: "1 1",
            height: "60vh",
          },
          "100%": {
            scale: "1 0",
            height: "0",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s",
        fadeOut: "fadeOut 2s",
        slideDown: "slideDown 1s",
        slideUp: "slideUp 1s",
        slideRight: "slideRight 1s",
        slideLeft: "slideLeft 1s",
        expandDownward: "expandDownward 1s",
        expandUpward: "expandUpward 1s ease-in",
      },
    },
  },
  plugins: [],
};
