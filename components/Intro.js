import { Name } from '@/lib/constants'
import useTranslation from '@/i18n/useTranslation'

import introStyles from '@/styles/intro.module.css'

export default function Intro() {
  const { t } = useTranslation()

  return (
    <section className={introStyles.container}>
      <div className={introStyles.profileInfo}>
        <img
          src='./images/profile.jpg'
          className={introStyles.profileImage}
          alt='site author photo'
        />
      </div>

      <div className={introStyles.description}>
        <h1>
          {t('greeting')} {Name}
        </h1>

        <p>{t('intro-description')}</p>

        <ul className={introStyles.socialNetworks}>
          <li>
            <a
              href='https://twitter.com/randymoralesg'
              target='_blank'
              rel='noopener'
            >
              <i aria-hidden className='fab fa-twitter big-icon'></i>
            </a>
          </li>

          <li>
            <a
              href='https://www.linkedin.com/in/randymoralesg/'
              target='_blank'
              rel='noopener'
            >
              <i aria-hidden className='fab fa-linkedin big-icon'></i>
            </a>
          </li>

          <li>
            <a
              href='https://github.com/randymorales'
              target='_blank'
              rel='noopener'
            >
              <i aria-hidden className='fab fa-github big-icon'></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
