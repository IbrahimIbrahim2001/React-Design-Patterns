/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainTextColor': '#150101',
        'specialColor': '#6366f1',
      }
    },
    fontFamily: {
      'mainFont': ["Montagu Slab"]
    },
  },
  plugins: [],
}