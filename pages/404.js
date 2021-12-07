import { useRouter } from 'next/router'

import { NotFoundErrorCode, SiteBaseURL } from '@/lib/constants'
import useTranslation from '@/i18n/useTranslation'
import Layout from '@/components/Layout'

import styles from '@/styles/404.module.css'

export default function Error404() {
  const { t } = useTranslation()
  const router = useRouter()
  const { locale } = router

  const pageInfo = {
    title: t('error-heading'),
    description: t('error-content'),
    image: SiteBaseURL + '/images/cover.png',
  }

  return (
    <Layout pageInfo={pageInfo}>
      <div className={styles.box}>
        <h2>{NotFoundErrorCode}</h2>
        <p>{t('error-content')}</p>
      </div>
    </Layout>
  )
}
