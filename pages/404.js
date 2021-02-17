import useTranslation from '@/i18n/useTranslation'
import Layout from '@/components/Layout'

export default function Error404() {
  const { t } = useTranslation()

  return (
    <Layout pageTitle={t('error-heading')}>
      <p>{t('error-content')}</p>
      <p>
        <span aria-label={t('sorry')} role='img'>
          😵
        </span>
      </p>
    </Layout>
  )
}
