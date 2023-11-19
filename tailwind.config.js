/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/blog/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'box-color': '#1D1A27',
        'box-image-color': '#5E5B71',
        'dark-blue': '#02223B',
      }
    },
  },
  plugins: [],
}
