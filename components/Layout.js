import Head from 'next/head'
import Link from 'next/link'

import { SiteTitle, FullName } from '@/lib/constants'
import LanguageSelector from './LanguageSelector'
import useTranslation from '@/i18n/useTranslation'

import layoutStyles from '@/styles/layout.module.css'
import utilStyles from '@/styles/utils.module.css'

export default function Layout({ children, home }) {
  const { t } = useTranslation()

  return (
    <div className={layoutStyles.container}>
      <LanguageSelector />

      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content={t('slogan')} />
        <meta
          property='og:image'
          content={`https://og-image.now.sh/${encodeURI(
            SiteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={SiteTitle} />
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

      {!home && (
        <div className={layoutStyles.backToHome}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
