import useTranslation from '@/i18n/useTranslation'

import styles from '@/styles/footer.module.css'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className={styles.container}>
      <p>
        {t('made-with')} 💻 {t('and')} ❤️ - Randy © 2020
      </p>
      <ul className={styles.socialNetworks}>
        <li>
          <a
            href='https://twitter.com/randymoralesg'
            target='_blank'
            rel='noopener'
          >
            <i aria-hidden className='fab fa-twitter'></i>
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/randymoralesg/'
            target='_blank'
            rel='noopener'
          >
            <i aria-hidden className='fab fa-linkedin'></i>
          </a>
        </li>
        <li>
          <a
            href='https://github.com/randymorales'
            target='_blank'
            rel='noopener'
          >
            <i aria-hidden className='fab fa-github'></i>
          </a>
        </li>
        <li>
          <a
            href='
            https://www.strava.com/athletes/randymorales'
            target='_blank'
            rel='noopener'
          >
            <i aria-hidden className='fab fa-strava'></i>
          </a>
        </li>
      </ul>
    </footer>
  )
}
