/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: 'class',


  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-start': 'spin 4s 1',
        'slide-Right' : 'slideInRight 4s 1',
        'slide-Left' : 'slideInLeft 4s 1'
      },
      keyframes:{ 
        slideInRight: {
        '0%' : {
          transform: 'translateX(-800px)'
        },
        '100%': {
          transform: 'translateX(0)'
        }
        
      },
      slideInLeft: {
        '0%' : {
          transform: 'translateX(800px)'
        },
        '100%': {
          transform: 'translateX(0)'
        }
        
      }
    
    
    
    },
      fontFamily: {
        
        typesauce: 'typesauce',
      },
      backgroundImage: {
        'curves': "url('../public/layered-waves-haikei.svg')",
              }
    },
  },
  plugins: [],
}