/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%":{ transform: "translateY(-6px)", opacity: "0"},
          "100%":{ transform: "translateY(0px)", opacity: "1"},
        },
      },
      animation: {
        "slide-down":"slideDown 0.2s linear"
      }
    },
  },
  plugins: [],
}

