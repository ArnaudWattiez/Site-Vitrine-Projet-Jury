/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '300px',
      // => @media (min-width: 300px) { ... }
      
      'sm': '430px',
      // => @media (min-width: 430px) { ... }

      'md': '834px',
      // => @media (min-width: 834px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    }
  },
  plugins: [],
}
