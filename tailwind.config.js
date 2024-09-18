/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      fontFamily: {
        'League-spartan': ["League Spartan", "sans-serif"]
      },

      colors: {
        "dark-gray": "hsl(0, 0%, 63%)",
        "black": "hsl(0, 0%, 0%)",
        "white": "hsl(0, 0%, 100%)",
        "very-dark-gray": "hsl(0, 0%, 27%)",
      },

      backgroundImage: {
        
        'header-mobile': "url('images/mobile-image-hero-1.jpg')",
        'header-desktop': "url('images/desktop-image-hero-1.jpg')",
        'hamburger': "url('images/icon-hamburger.svg')",
        'close': "url('images/icon-close.svg')"     

      }

    },
  },
  plugins: [],
}

