/** @type {import('tailwindcss').Config} */
const tailwindcss = require('tailwindcss');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const lineClamp = require('@tailwindcss/line-clamp');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgba(155, 89, 182,1.0)',
          50: 'rgba(142, 68, 173,1.0)',
          100: 'rgb(243 232 255)',
        },
        secondary: {
          DEFAULT: 'rgba(162, 155, 254,1.0)',
          50: 'rgba(108, 92, 231,1.0)',
          100: 'rgb(237 233 254)',
        },
        error: {
          DEFAULT: 'rgba(231, 76, 60,1.0)',
          50: 'rgba(192, 57, 43,1.0)',
        },
        warn: {
          DEFAULT: 'rgba(241, 196, 15,1.0)',
          50: 'rgba(243, 156, 18,1.0)',
        },
        info: {
          DEFAULT: 'rgba(52, 152, 219,1.0)',
          50: 'rgba(41, 128, 185,1.0)',
        },
        success: {
          DEFAULT: 'rgba(46, 204, 113,1.0)',
          50: 'rgba(39, 174, 96,1.0)',
        },
        light: {
          DEFAULT: '#FFFFFF',
          50: '#F8FAFC',
          100: '#F2F2F2',
          200: '#CCCCCC:',
        },
        dark: {
          DEFAULT: '#0F172A',
          50: '#1E293B',
          100: '#1e293b',
          200: '#1f2937',
          300: '#111827',
          400: '#334155',
          500: '#374151',
        },
        gradient: {
          orange: 'linear-gradient(10deg, #ffaa00, #ff6a00)',
          purple: 'linear-gradient(15deg, #ef5dff, #b648ff)',
          green: 'linear-gradient(15deg, #6adb00, #04e800)',
          success: 'linear-gradient(15deg, #6adb00, #04e800)',
          error: 'linear-gradient(15deg, #ff596d, #d72c2c)',
          warning: 'linear-gradient(15deg, #ffac37, #ff9238)',
          light: 'linear-gradient(15deg, #e7e7e7, #f4f4f4)',
          dark: 'linear-gradient(15deg, #202121, #292a2d)',
        },
      },
      fontFamily: {
        sans: ['Roboto, sans-serif', ...defaultTheme.fontFamily.sans],
        poppins: 'Poppins, sans-serif;',
        montserrat: 'Montserrat, sans-serif;',
        cursive: 'Moon Dance, sans-serif',
      },
      boxShadow: {
        'light-shadow':
          'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -30px, rgba(0, 0, 0, 0.3) 0px 30px 60px -40px',
        'dark-shadow': 'box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
    },
  },
  darkMode: 'class',
  plugins: [tailwindcss, postcss, autoprefixer, lineClamp],
};
