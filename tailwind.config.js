/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'graay': '#EEF1F3',
        'fwhite': '#FFFEFE',
        'hwhite': '#FBFBFB',
        'bluey': '#3B71CA',
        'bulu': '#54B4D3',
        'reddy': '#DC4C64',
        'greyy': '#656565',
      },
      screens: {
        'xsm': '500px',
        'sm': '600px',
        'md': '750px',
        'lg': '1000px',
        'xl': '1280px',
        '2xl': '1450px',
        '3xl': '1800px'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

