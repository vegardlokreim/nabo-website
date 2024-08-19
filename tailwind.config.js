/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'small': '200px',
      'medium': '800px', // Your custom breakpoint
      'large': '1200px'
    },
  },
  extend: {},
  plugins: [],
}

