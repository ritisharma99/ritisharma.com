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
          'dark-teal': '#0D9488',
          'light-teal': '#2DD4BF',
          blue: '#0EA5E9',
          cyan: '#06B6D4',
        },
        dark: {
          900: '#020617',
          800: '#0F172A',
          700: '#1E293B',
          600: '#334155',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #14B8A6, #0EA5E9)',
        'gradient-text': 'linear-gradient(135deg, #2DD4BF, #0EA5E9)',
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
