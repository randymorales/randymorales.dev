import dynamic from 'next/dynamic'
import Head from 'next/head'

import {
  FullName,
  SiteBaseURL,
  SiteTitle,
  TwitterUsername,
} from '@/lib/constants'
import Footer from '@/components/Footer'

import styles from '@/styles/layout.module.css'

export default function Layout({
  children,
  large,
  pageInfo = {
    url: SiteBaseURL,
    title: SiteTitle,
    description: FullName,
    image: SiteBaseURL + '/images/cover.png',
  },
}) {
  const Navbar = dynamic(() => import('@/components/Navbar'))

  if (!pageInfo.type) {
    pageInfo.type = 'website'
  }

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
        <meta name='description' content={pageInfo.description} />

        {/* Open Graph */}
        <meta property='og:locale' content='en_US' key='oglocal' />
        <meta property='og:locale:alternate' content='es_ES' key='oglocalalt' />
        <meta property='og:type' content={pageInfo.type} key='ogtype' />
        <meta property='og:site_name' content={SiteBaseURL} key='ogsitename' />
        <meta property='og:url' content={pageInfo.url} key='ogurl' />
        <meta name='og:title' content={pageInfo.title} key='ogtitle' />
        <meta
          name='og:description'
          content={pageInfo.description}
          key='ogdesc'
        />
        <meta property='og:image' content={pageInfo.image} key='ogimage' />
        <meta property='og:image:width' content='1280' key='ogimagew' />
        <meta property='og:image:height' content='720' key='ogimageh' />
        <meta property='og:image:alt' content='' key='ogimagealt' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' key='twcard' />
        <meta name='twitter:image' content={pageInfo.image} key='twimg' />
        <meta name='twitter:site' content={TwitterUsername} key='twsite' />
        <meta name='twitter:title' content={pageInfo.title} key='twtitle' />
        <meta
          name='twitter:creator'
          content={TwitterUsername}
          key='twcreator'
        />
        <meta
          name='twitter:description'
          content={pageInfo.description}
          key='twdesc'
        />

        <title>{`${pageInfo.title} | ${FullName}`}</title>
      </Head>

      <Navbar />

      <main className={large ? styles.large : styles.content}>{children}</main>

      <Footer />
    </div>
  )
}
