/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
import flowbitePlugin from 'flowbite/plugin'

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-qwik/**/*.{cjs,mjs}",
    "./src/**/*.{html,js,jsx,ts,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          25:  '#f5fae8', 
          50:  '#eaf4d1',  
          100: '#dbe9a7',  
          200: '#c4dc73',  
          300: '#b1d237',  
          400: '#9ac32d',  
          500: '#7ead26',  // Core green (base)
          DEFAULT: '#7ead26', // Default primary
          600: '#69921f',  
          700: '#4f741a',  
          800: '#375614',  
          900: '#1f390d',  
          950: '#0f1e06',  
        },
        secondary: {
          50:  '#e6f9f7',  
          100: '#c0f0ea',  
          200: '#88e1d4',  
          300: '#4fcdbd',  
          400: '#26b4a3',  
          500: '#129086',  // Core teal (base)
          DEFAULT: '#129086', // Default secondary
          600: '#0f736a',  
          700: '#0b5851',  
          800: '#073e39',  
          900: '#042724',  
          950: '#021514',  
        },
      },
      fontFamily: {
        sans: ["'Inter Variable'", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'from-left': 'slideFromLeft 0.2s 1',
        'from-right': 'slideFromRight 0.2s 1',
        'accordion-up': 'collapsible-up 0.2s ease-out 0s 1 normal forwards',
        'accordion-down': 'collapsible-down 0.2s ease-out 0s 1 normal forwards',
      },
      keyframes: {
        'collapsible-down': {
          from: { height: '0' },
          to: { height: 'var(--qwikui-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--qwikui-collapsible-content-height)' },
          to: { height: '0' },
        },
        slideFromLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideFromRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('tailwindcss-animate'),
    flowbitePlugin,
  ],
  darkMode: "class",
};
