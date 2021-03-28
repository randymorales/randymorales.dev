import dynamic from 'next/dynamic'
import Head from 'next/head'

import { SiteTitle, FullName } from '@/lib/constants'
import useTranslation from '@/i18n/useTranslation'
import Footer from '@/components/Footer'

import layoutStyles from '@/styles/layout.module.css'

export default function Layout({ children, pageTitle, large }) {
  const { t } = useTranslation()
  const Navbar = dynamic(() => import('@/components/Navbar'))

  return (
    <div>
      <Head>
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/android-icon-192x192.png'
        />
        <link rel='manifest' href='/manifest.json' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />

        <meta name='theme-color' content='#ffffff' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='msapplication-TileImage' content='/ms-icon-310x310.png' />

        <meta name='description' content={t('slogan')} />
        <meta name='og:title' content={SiteTitle} />
        <meta name='og:description' content={t('slogan')} />
        <meta
          property='og:image'
          content={`https://og-image.now.sh/${encodeURI(
            SiteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='twitter:card' content='summary_large_image' />
        <title>{`${pageTitle} | ${FullName}`}</title>
      </Head>

      <Navbar />

      <main className={large ? layoutStyles.large : layoutStyles.content}>
        {children}
      </main>

      <Footer />
    </div>
  )
}
