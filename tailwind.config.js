/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx,md,mdx}',
  './components/**/*.{js,ts,jsx,tsx}',
]

export const theme = {
  extend: {
    colors: {
      // Mantener para compatibilidad con código existente
      darkBackground: '#18181b', // zinc-900
      primaryColor: '#111b27',
      accentColor: '#dc2626', // red-600

      // Zinc palette (Tailwind ya la incluye, pero por claridad)
      zinc: {
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        800: '#27272a',
        900: '#18181b',
        950: '#09090b',
      },
    },
    keyframes: {
      profile_animate: {
        '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
      },
    },
    animation: {
      profile: 'profile_animate 5s infinite',
    },
  },
}

export const plugins = [require('@tailwindcss/typography')]
