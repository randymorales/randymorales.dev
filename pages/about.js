import { Name } from '@/lib/constants'
import useTranslation from '@/i18n/useTranslation'
import Layout from '@/components/Layout'

import styles from '@/styles/about.module.css'

export default function About() {
  const { t } = useTranslation()

  return (
    <Layout pageTitle={t('about')} large={true}>
      <h1>
        {t('greeting')} {Name}
      </h1>

      <div className={styles.container}>
        <p className={styles.paragraph}>{t('about-paragraph1')}</p>
        <p className={styles.paragraph}>{t('about-paragraph2')}</p>
        <p className={styles.paragraph}>{t('about-paragraph3')}</p>
        <p className={styles.paragraph}>{t('about-paragraph4')}</p>
        <p className={styles.paragraph}>{t('about-paragraph5')}</p>

        <h3 className={styles.subtitle}>{t('skills-tools')}</h3>
        <ul className={styles.skills}>
          <li>Go</li>
          <li>C</li>
          <li>Linux</li>
          <li>Python</li>
          <li>Javascript</li>
          <li>NextJS</li>
          <li>Git</li>
        </ul>

        <h3 className={styles.subtitle}>{t('statistics')}</h3>
        <div className={styles.statistics}>
          {/* Strava */}
          <iframe
            height='460'
            width='350'
            frameborder='0'
            allowtransparency='true'
            scrolling='yes'
            src='https://www.strava.com/athletes/40609050/latest-rides/aa328eaf2e21d69d776d04ab20deda9d5c3058f9'
          ></iframe>

          {/* GitHub */}
          <img
            className={styles.center}
            src='https://github-readme-stats.vercel.app/api?username=randymorales'
          />
        </div>

        <h1 className={styles.subtitle}>{t('gallery')}</h1>
        <div className={styles.photos}>
          <img
            src='./images/college-graduation.jpg'
            alt='college graduation photo'
          />
          <img src='./images/mtb.jpg' alt='moravia mtb photo' />
          <img src='./images/alajuela.jpg' alt='iberico photo' />
        </div>
      </div>
    </Layout>
  )
}
