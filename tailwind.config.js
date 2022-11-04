/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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