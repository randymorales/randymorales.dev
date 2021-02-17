import { Name } from '@/lib/constants'
import useTranslation from '@/i18n/useTranslation'
import Layout from '@/components/Layout'

export default function About() {
  const { t } = useTranslation()

  return (
    <>
      <Layout pageTitle={t('about')}>
        <h1>
          {t('greeting')} {Name}
        </h1>

        <p>{t('blog-description')}</p>
      </Layout>
    </>
  )
}
