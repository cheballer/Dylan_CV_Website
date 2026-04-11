/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:      '#07090F',
        'bg-2':  '#0D1117',
        'bg-3':  '#131924',
        surface: '#0D1117',
        accent:  '#38BDF8',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans:    ['var(--font-sans)',    'sans-serif'],
        mono:    ['var(--font-mono)',    'monospace'],
      },
    },
  },
  plugins: [],
};
