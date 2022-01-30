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
        <ul className={navbarStyles.menu}>
          <li>
            <div>
              <Link href='/'>{t('home')}</Link>
            </div>
          </li>
          <li>
            <div>
              <Link href='/blog'>{t('blog')}</Link>
            </div>
          </li>
          <li>
            <div>
              <Link href='/about'>{t('about')}</Link>
            </div>
          </li>
          <li>
            <div>
              <Translator />
            </div>
          </li>
        </ul>
        <div>
          <ThemeSelector />
        </div>
      </nav>
    </header>
  )
}
