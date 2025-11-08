/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-lime': '#D4FF3D',
        'bg-dark': '#0A0A0A',
        'text-primary': '#EDEDED',
        'text-secondary': '#8A8A8A',
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'Space Mono', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #D4FF3D, 0 0 10px #D4FF3D' },
          '100%': { boxShadow: '0 0 10px #D4FF3D, 0 0 20px #D4FF3D, 0 0 30px #D4FF3D' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}

