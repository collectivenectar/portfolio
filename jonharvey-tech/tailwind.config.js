/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    
    fontFamily: {
      Outfit: ['Outfit', 'sans-serif'],
    },
    extend: {
      
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
