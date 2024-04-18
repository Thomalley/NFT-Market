/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#DDF247',
        light: '#DEE8E8',
        'text-in-bg': '#161616',
      },
      height: {
        100: '410px',
        120: '430px',
        122: '550px',
      },
      width: {
        86: '350px',
      },
      borderRadius: {
        '4xl': '30px',
      },
      boxShadow: {
        'card-shadow': '0px 30px 70px 0px #0A0A0A',
      },
      fontFamily: {
        Manrope: ['Manrope', 'serif'],
        AzeretMono: ['Azeret Mono', 'serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
