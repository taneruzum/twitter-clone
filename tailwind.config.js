/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        box: "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px",
      },
    },

    screens: {
      //desktop:max-custom1:bg-[#fff] = kullanım bu şekilde minimum desktop px ile maximum custom1 pixel arasında background beyaz olsun 

      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }

      custom1:"1500px",
      // => @media (min-width: 1500px) { ... }

      custom2:"1881px",
      // => @media (min-width: 1881px) { ... }
    },
  },
  plugins: [],
};
