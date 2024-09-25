import { useEffect } from 'react'
import { pageview } from '@/lib/gtag'

import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import '@/styles/prismTheme.css'

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    const handleRouteChange = url => {
      pageview(url, document.title)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <div >
      <Navbar />
      <div className="lg:ml-48">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
