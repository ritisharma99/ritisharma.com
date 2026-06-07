import type { Config } from 'tailwindcss'

export default <Config>{
  darkMode: 'class',
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
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          teal: '#2A9D8F',
          'dark-teal': '#218077',
          'light-teal': '#3AB3A4',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #2A9D8F, #264653)',
        'gradient-text': 'linear-gradient(135deg, #2A9D8F, #264653)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
