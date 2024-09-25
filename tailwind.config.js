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
