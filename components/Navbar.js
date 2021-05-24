import Image from 'next/image'
import Link from 'next/link'

import useTranslation from '@/i18n/useTranslation'
import Translator from '@/components/Translator'
import ThemeSelector from '@/components/ThemeSelector'

import navbarStyles from '@/styles/navbar.module.css'

export default function Header() {
  const { t } = useTranslation()
  return (
    <header>
      <nav className={navbarStyles.nav}>
        <Link href='/'>
          <div className={navbarStyles.logo}>
            <Image
              src='/android-icon-192x192.png'
              alt='logo'
              width={80}
              height={80}
              priority
            />
          </div>
        </Link>
        <ul className={navbarStyles.menu}>
          <li>
            <div className={navbarStyles.menuLink}>
              <Link href='/blog'>{t('blog')}</Link>
            </div>
          </li>
          <li>
            <div className={navbarStyles.menuLink}>
              <Link href='/about'>{t('about')}</Link>
            </div>
          </li>
          <li>
            <div className={navbarStyles.menuLink}>
              <Translator />
            </div>
          </li>
          <li>
            <div className={navbarStyles.menuLink}>
              <ThemeSelector />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}
