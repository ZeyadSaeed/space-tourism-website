/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BarlowCondensed: ["Barlow Condensed", "sans-serif"],
        Bellefair: ["Bellefair", "serif"],
      },
      backgroundImage: {
        "home-desktop": "url('/home/background-home-desktop.jpg')",
        "home-tablet": "url('/home/background-home-tablet.jpg')",
        "home-mobile": "url('/home/background-home-mobile.jpg')",
        "destination-desktop":
          "url('/destination/background-destination-desktop.jpg')",
        "destination-tablet":
          "url('/destination/background-destination-tablet.jpg')",
        "destination-mobile":
          "url('/destination/background-destination-mobile.jpg')",
        "crew-desktop": "url('/crew/background-crew-desktop.jpg')",
        "crew-tablet": "url('/crew/background-crew-tablet.jpg')",
        "crew-mobile": "url('/crew/background-crew-mobile.jpg')",
        "technology-desktop":
          "url('/technology/background-technology-desktop.jpg')",
        "technology-tablet":
          "url('/technology/background-technology-tablet.jpg')",
        "technology-mobile":
          "url('/technology/background-technology-mobile.jpg')",
        moon: "url('/destination/image-moon.webp')",
        mars: "url('/destination/image-mars.webp')",
        europa: "url('/destination/image-europa.webp')",
        titan: "url('/destination/image-titan.webp')",
      },
      screens: {
        sm: "444px",
        tb: "768px",
        md: "990px",
      },
      colors: {
        navbar: "rgba(255, 255, 255, 0.04)",
        burgerIcon: "#D0D6F9",
        lightGray: "#383B4B",
      },
      blur: {
        navbar: "40.7742px",
      },
      boxShadow: {
        exploreButton: "0px 0px 0 88px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
  ],
};
