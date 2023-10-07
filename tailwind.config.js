/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        box: "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px",
      },
      screens: {
        tablet: "640px",
        desktop: "1540px",
        desktop2k: "2560px",
      },
    },
    fontFamily: {
      'verdana': ['Verdana, sans-serif'],
    },

    variants: {},
    plugins: [],
  },
  
  plugins: [require("daisyui")],
};
