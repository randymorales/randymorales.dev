import { useRouter } from 'next/router'
import Link from 'next/link'

import useTranslation from '@/i18n/useTranslation'

// Change main route according to selected locale.
export const Translator = () => {
  const router = useRouter()
  const locate = router.locale === 'en' ? 'es' : 'en'

  const { t } = useTranslation()

  return (
    <span>
      <Link href={router.asPath} locale={locate}>
        {t('translate')}
      </Link>
    </span>
  )
}

export default Translator
