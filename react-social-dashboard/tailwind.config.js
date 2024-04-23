/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          'dark-text': '#8C98C6',
          'light-text': '#63687D',
          'slate-blue': '#333A55',
          'light-gray': '#D8D8D8',
          'facebook-border': '#178FF5',
          'twitter-border': '#1DA1F2',
          'youtube-border': '#C4032B',
          'green': '#1EB589',
          'red': '#DC414C',
          'dark-cards-hover': '#333A55',
          'light-cards-hover': '#E1E4F0',
          'dark': '#1D1F29',
          'dark-background': '#252B42',
          'light-background': '#F1F3FA',
          'cool-gray': '#848BAB',
          'body': '#1D1F29',
          'white': '#FFF'
      },
    },
  },
  plugins: [],
}