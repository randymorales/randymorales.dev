import Head from 'next/head'

import useTranslation from '@/i18n/useTranslation'

const Error = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t('error-heading')} - Randy Morales</title>
      </Head>
      <p className=''>{t('error-content')}</p>
      <p className=''>
        <span aria-label={t('sorry')} role='img'>
          😵
        </span>
      </p>
    </>
  )
}

export default Error
