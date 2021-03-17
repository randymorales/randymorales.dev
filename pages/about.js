import { Name } from '@/lib/constants'
import useTranslation from '@/i18n/useTranslation'
import Layout from '@/components/Layout'

import styles from '@/styles/about.module.css'

export default function About() {
  const { t } = useTranslation()

  return (
    <>
      <Layout pageTitle={t('about')}>
        <h1>
          {t('greeting')} {Name}
        </h1>

        <div className={styles.container}>
          <div className={styles.leftSide}>
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
          </div>

          <div className={styles.rightSide}>
            <img
              src='./images/college-graduation.jpg'
              alt='college graduation photo'
            />
          </div>
        </div>
      </Layout>
    </>
  )
}
