import { useEffect, useState } from 'react'

import styles from '@/styles/themeSelector.module.css'

// Change website theme
export const ThemeSelector = () => {
  const darkThemeKey = 'darkTheme'
  const [darkMode, setDarkMode] = useState(getInitialTheme())

  useEffect(() => {
    localStorage.setItem(darkThemeKey, JSON.stringify(darkMode))
  }, [darkMode])

  // Get theme from user preferences
  function getInitialTheme() {
    if (typeof window === 'undefined') {
      return false
    }

    // Check for dark theme

    const isReturningUser = darkThemeKey in localStorage
    const cachedTheme = JSON.parse(localStorage.getItem(darkThemeKey))
    const userPrefersDarkTheme = getPreferredColorScheme()

    if (isReturningUser) return cachedTheme

    if (userPrefersDarkTheme) return true

    // otherwise, light theme
    return false
  }

  // Check color schema from user's device
  function getPreferredColorScheme() {
    if (!window.matchMedia) return

    return window.matchMedia('(prefers-color-scheme: dark)')
  }

  // Set class to body according to theme
  var body = document.body
  body.classList.toggle(darkThemeKey, darkMode)

  return (
    <span>
      <button
        className={[styles.switch, darkMode ? styles.active : ''].join(' ')}
        onClick={() => setDarkMode(previousMode => !previousMode)}
      >
        <span className={styles.switchIcon}>
          <i className='fas fa-sun'></i>
        </span>
        <span className={styles.switchIcon}>
          <i className='fas fa-moon'></i>
        </span>
      </button>
    </span>
  )
}

export default ThemeSelector
