import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          teal: '#14B8A6',
          'dark-teal': '#0F766E',
          'light-teal': '#5EEAD4',
          blue: '#22D3EE',
          cyan: '#67E8F9',
          secondary: '#8B5CF6',
          highlight: '#F59E0B',
        },
        dark: {
          900: '#0B1020',
          800: '#111827',
          700: '#1F2937',
          600: '#334155',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #14B8A6, #8B5CF6)',
        'gradient-text': 'linear-gradient(135deg, #5EEAD4, #8B5CF6)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-up': 'slideInUp 0.5s ease-out forwards',
        'bg-shift': 'backgroundShift 15s ease infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink-caret': 'blink-caret 0.75s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        backgroundShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#14B8A6' },
        },
      },
    },
  },
  plugins: [],
}
