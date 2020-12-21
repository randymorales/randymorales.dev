import { useRouter } from 'next/router'

import Strings from './strings'

export default function useTranslation() {
  const router = useRouter()
  const { locale, defaultLocale } = router

  const t = key => {
    try {
      if (!Strings[locale][key]) {
        console.warn(`No key '${key}' for locale '${locale}'`)
        return key
      }
      return Strings[locale][key] || Strings[defaultLocale][key] || key
    } catch (error) {
      return key
    }
  }

  return { t }
}
