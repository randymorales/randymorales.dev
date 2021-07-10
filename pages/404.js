import { useRouter } from 'next/router'

import useTranslation from '@/i18n/useTranslation'
import Layout from '@/components/Layout'

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
      <p>{t('error-content')}</p>
      <p>
        <span aria-label={t('sorry')} role='img'>
          😵
        </span>
      </p>
    </Layout>
  )
}
