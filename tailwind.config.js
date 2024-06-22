/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightGrayCyanFilter: "hsl(180, 31%, 95%)",
        darkGrayCyan: "hsl(180, 8%, 52%)",
        veryDarkGrayCyan: "hsl(180, 14%, 20%)",
        darkCyan: "hsl(180, 29%, 50%)",
        attribution: "hsl(228, 45%, 44%)",
        lightGrayCyanBG: "hsl(180, 52%, 96%)"
      },
      backgroundColor:{
      },
      fontSize:{
        ffSize: "1rem"
      },
      fontFamily:{
        'leagueSpartan':['League Spartan', 'sans-serif']
      }
    },
  },
  plugins: [],
}