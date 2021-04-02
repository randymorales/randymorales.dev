import Image from 'next/image'

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

        <h2 className={styles.subtitle}>{t('skills-tools')}</h2>
        <ul className={styles.skills}>
          <li>Go</li>
          <li>C</li>
          <li>Linux</li>
          <li>Python</li>
          <li>Javascript</li>
          <li>NextJS</li>
          <li>Git</li>
        </ul>

        <h2 className={styles.subtitle}>{t('statistics')}</h2>
        <div className={styles.statistics}>
          {/* Strava */}
          <iframe
            title='Strava statistics'
            height='460'
            width='350'
            frameBorder='0'
            allowtransparency='true'
            scrolling='yes'
            src='https://www.strava.com/athletes/40609050/latest-rides/aa328eaf2e21d69d776d04ab20deda9d5c3058f9'
          ></iframe>

          {/* GitHub */}
          <img
            className={styles.center}
            src='https://github-readme-stats.vercel.app/api?username=randymorales'
            alt='GitHub statistics'
            width='540'
            height='460'
          />
        </div>

        <h1 className={styles.subtitle}>{t('gallery')}</h1>
        <div className={styles.photos}>
          <Image
            src='/images/college-graduation.jpg'
            alt='college graduation photo'
            width='320'
            height='680'
            priority
          />
          <Image
            src='/images/mtb.jpg'
            alt='moravia mtb photo'
            width='490'
            height='680'
            priority
          />
          <Image
            src='/images/alajuela.jpg'
            alt='iberico photo'
            width='450'
            height='680'
            priority
          />
        </div>
      </div>
    </Layout>
  )
}
