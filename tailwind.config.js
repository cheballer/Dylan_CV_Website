/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#020508',
          900: '#060D1A',
          800: '#0A1628',
          700: '#0E1E35',
          600: '#152844',
        },
        cyan: {
          DEFAULT: '#00C4D8',
          bright: '#00E5F8',
          muted: 'rgba(0,196,216,0.6)',
          dim: 'rgba(0,196,216,0.12)',
        },
        gold: {
          DEFAULT: '#C49A2D',
          dim: 'rgba(196,154,45,0.15)',
        },
        silver: '#8CA0B8',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 35s linear infinite',
        'spin-slower': 'spin 55s linear infinite',
        'spin-reverse': 'spin-reverse 28s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 7s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'scan': 'scan 3s ease-in-out infinite',
        'blink': 'blink 1.4s ease-in-out infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4', filter: 'blur(12px)' },
          '50%': { opacity: '0.8', filter: 'blur(8px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(0,196,216,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,196,216,0.04) 1px, transparent 1px)
        `,
        'radial-glow': 'radial-gradient(ellipse at center, rgba(0,196,216,0.08) 0%, transparent 65%)',
        'hero-gradient': 'linear-gradient(to right, #060D1A 30%, rgba(6,13,26,0.8) 60%, rgba(6,13,26,0.4) 100%)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(0,196,216,0.25)',
        'glow-md': '0 0 30px rgba(0,196,216,0.2)',
        'glow-lg': '0 0 60px rgba(0,196,216,0.15)',
        'glow-xl': '0 0 100px rgba(0,196,216,0.12)',
        'card': '0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)',
        'card-hover': '0 8px 48px rgba(0,0,0,0.5), 0 0 30px rgba(0,196,216,0.1), inset 0 1px 0 rgba(255,255,255,0.06)',
      },
    },
  },
  plugins: [],
};
