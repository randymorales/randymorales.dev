/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  './styles/**/*.{js,ts,jsx,tsx}',
]

export const theme = {
  extend: {
    colors: {
      darkBackground: 'var(--main-background-color)',
      primaryColor: '#111b27',
      accentColor: 'var(--accent-color)',
    },
    keyframes: {
      profile_animate: {
        '0%': {
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        },
        '50%': {
          borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
        },
        '100%': {
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        },
      },
    },
    animation: {
      profile: 'profile_animate 5s infinite',
    },
  },
}

export const plugins = [require('@tailwindcss/typography')]
