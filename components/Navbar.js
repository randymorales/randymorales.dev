import Image from 'next/image'
import Link from 'next/link'

import { useState, useEffect } from 'react'

import { CSSTransition } from 'react-transition-group'

import useTranslation from '@/i18n/useTranslation'
import Translator from '@/components/Translator'
import ThemeSelector from '@/components/ThemeSelector'

import navbarStyles from '@/styles/navbar.module.css'

// Header using react-transition-group
export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)')
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    handleMediaQueryChange(mediaQuery)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true)
    } else {
      setIsSmallScreen(false)
    }
  }

  const toggleNav = () => {
    setNavVisibility(!isNavVisible)
  }

  return (
    <header className={navbarStyles.header}>
      <Link href='/'>
        <div className={navbarStyles.logo}>
          <Image
            src='/android-icon-192x192.png'
            alt='logo'
            width={70}
            height={70}
            priority
          />
        </div>
      </Link>

      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames='NavAnimation'
        unmountOnExit
      >
        <nav className={navbarStyles.nav}>
          <Link href='/blog'>{t('blog')}</Link>

          <Link href='/about'>{t('about')}</Link>

          <Translator />

          <ThemeSelector />
        </nav>
      </CSSTransition>

      <button onClick={toggleNav} className={navbarStyles.burger}>
        🍔
      </button>
    </header>
  )
}
