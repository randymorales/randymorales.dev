/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  './styles/**/*.{js,ts,jsx,tsx}',
]

export const theme = {
  extend: {
    colors: {
      darkBackground: '#0A0A0A',
      primaryColor: '#111b27',
      secondaryColor: '#FF6600',
    },
  },
}

export const plugins = [require('@tailwindcss/typography')]
