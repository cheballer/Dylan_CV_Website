/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:      '#0B0B09',
        surface: '#141410',
        accent:  '#E8FF47',
      },
      fontFamily: {
        display: ['var(--font-sans)', 'sans-serif'],
        sans:    ['var(--font-sans)', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
