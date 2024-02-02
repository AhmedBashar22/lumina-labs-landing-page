/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{htm?,js?,ts?}'],
  theme: {
    extend: {
      colors: {
        primary: {
          '91': '#FFF9D0',
          '75': "#F5E68B",
        },
        secondary: {
          "15": "#133923",
          '70': "#ADDD86",
        },
      },
    },
  },
  plugins: [],
}

