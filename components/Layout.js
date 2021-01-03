import dynamic from 'next/dynamic'
import Head from 'next/head'

import { SiteTitle, FullName } from '@/lib/constants'
import useTranslation from '@/i18n/useTranslation'

import layoutStyles from '@/styles/layout.module.css'
import utilStyles from '@/styles/utils.module.css'

export default function Layout({ children, home }) {
  const { t } = useTranslation()
  const Navbar = dynamic(() => import('@/components/Navbar'))

  return (
    <div className={layoutStyles.container}>
      <Navbar />

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
      </Head>

      <header className={layoutStyles.header}>
        {home ? (
          <>
            <img
              src='/images/profile.jpg'
              className={`${layoutStyles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={FullName}
            />
            <h1 className={utilStyles.heading2Xl}>{FullName}</h1>
          </>
        ) : (
          <>{/* Show nothing at blog post pages */}</>
        )}
      </header>

      <main>{children}</main>
    </div>
  )
}
