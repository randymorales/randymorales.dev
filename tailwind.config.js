/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  './styles/**/*.{js,ts,jsx,tsx}',
]

export const theme = {
  extend: {
    colors: {
      titleColor: 'var(--title-color)',
    },
  },
}

export const plugins = [require('@tailwindcss/typography')]
