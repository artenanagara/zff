/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#272727',
        'primary': '#FFE927',
        'gray-1': '#C5CBD0',
        'gray-2': '#A1B2B8'
      }
    },
    container: {
      padding: '2rem',
      center: true,
    }
  },
  plugins: [],
}

