/** @type {import('tailwindcss').Config} */ 
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
        'body': ['"Google Sans"', 'Roboto', 'RobotoDraft', 'Helvetica', 'Arial', 'sans-serif']
    },
    
    extend: {},
  },
  plugins: [],
}
