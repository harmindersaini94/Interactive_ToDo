/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customTan: '#F2D2BD',
        customBrown: '#5C4033'
      },
    },
  },
  plugins: [],
}

