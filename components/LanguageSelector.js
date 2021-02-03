import { useRouter } from 'next/router'

import useTranslation from '@/i18n/useTranslation'

import styles from '@/styles/languageSelector.module.css'

// Change main route according to selected locale.
export const LanguageSelector = () => {
  const {
    locale,
    locales,
    asPath: currentRoute,
    push: navigateTo,
  } = useRouter()

  const { t } = useTranslation()

  const navigate = e => {
    const selectedLocale = e.target.value
    navigateTo(currentRoute, currentRoute, { locale: selectedLocale })
  }

  return (
    <span>
      <select
        name='languageSelector'
        id='languageSelector'
        onChange={navigate}
        defaultValue={locale}
        title={t('language')}
        className={styles.languageSelector}
      >
        {locales.map(locale => (
          <option key={locale} value={locale}>
            {t(`locale-${locale}`)}
          </option>
        ))}
      </select>
    </span>
  )
}

export default LanguageSelector
