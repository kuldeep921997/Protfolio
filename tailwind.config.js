/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      fontFamily: {
        title: ['var(--font-family-title)', 'serif'],
        body: ['var(--font-family-body)', 'sans-serif'],
        sans: ['var(--font-family-body)', 'sans-serif'],
      },
      transitionTimingFunction: {
        'ease': 'var(--ease)',
        'ease-2': 'var(--ease-2)',
        'ease-3': 'var(--ease-3)',
        'ease-4': 'var(--ease-4)',
        'ease-sine': 'var(--ease-sine)',
        'ease-in': 'var(--ease-in)',
        'ease-in-2': 'var(--ease-in-2)',
        'ease-in-3': 'var(--ease-in-3)',
        'ease-out': 'var(--ease-out)',
        'ease-out-2': 'var(--ease-out-2)',
        'ease-out-3': 'var(--ease-out-3)',
        'ease-out-expo': 'var(--ease-out-expo)',
        'custom-ease': 'var(--custom-ease)',
        'in-out-expo': 'var(--in-out-expo)',
        'ex': 'var(--ex)',
        'pr': 'var(--pr)',
        'entrance-ex': 'var(--entrance-ex)',
      },
      transitionDuration: {
        '125': 'var(--duration-125)',
        '170': 'var(--duration-170)',
        '250': 'var(--duration-250)',
        '340': 'var(--duration-340)',
        '500': 'var(--duration-500)',
        '670': 'var(--duration-670)',
        '900': 'var(--duration-900)',
        '1000': 'var(--duration-1000)',
      },
      spacing: {
        'header': 'var(--header-height)',
        'block': 'var(--vr-block-spacing)',
      },
    },
  },
  plugins: [],
}

