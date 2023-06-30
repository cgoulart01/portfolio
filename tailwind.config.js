/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode:"class",
  theme: {
    
    extend: {
     colors:{
     "purple1":"#674F99",
     "purple2":"#A892D4",
     "white1":"#EEEEEE"
     },
      fontFamily:{
        'rubik':['Rubik','sans-serif'],
        'bsd':['Big Shoulders Display', 'cursive']
      }
    },
  },
  plugins: [],
}

