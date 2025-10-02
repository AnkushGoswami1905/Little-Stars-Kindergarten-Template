/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'fredoka': ['Fredoka', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#2C3D73',
        accent: '#F15B42', 
        highlight: '#FFD372',
        playful: '#F49CC4',
        support: '#7CAADC',
      },
    },
  },
  plugins: [],
};