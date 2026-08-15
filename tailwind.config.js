/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // support class-based dark mode
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#030712',      // Deep black-blue background
          card: '#1f2937',    // Grey-blue card backgrounds
          cardBorder: '#374151',
          textMuted: '#9ca3af'
        },
        brand: {
          blue: {
            DEFAULT: '#3b82f6',
            dark: '#1d4ed8',
            light: '#60a5fa'
          },
          purple: {
            DEFAULT: '#8b5cf6',
            dark: '#6d28d9',
            light: '#a78bfa'
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
