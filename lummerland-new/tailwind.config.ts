import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sorts-mill': ['"Sorts Mill Goudy"', 'serif'],
        'raleway': ['Raleway', 'sans-serif'],
      },
      colors: {
        'cream-can': {
          DEFAULT: '#f0bb65',
          dark: '#c09550',
          darker: '#604a28',
        },
        'cream': {
          DEFAULT: '#fcf1e0',
          light: '#fdf8ef',
        },
      },
    }
  }
}
