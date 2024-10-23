import { useEffect } from 'react'
import { useRouter } from 'next/router'

import Navbar from '@/components/Navbar'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import '@/styles/globals.css'
import '@/styles/prismTheme.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      window.gtag('config', process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID, {
        page_path: url,
      })
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <div>
      <Navbar />
      <div className='lg:ml-48'>
        {/* Google Analytics Script */}
        <GoogleAnalytics />
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
