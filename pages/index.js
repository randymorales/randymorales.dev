import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import fs from 'fs'

import generateRSS from '@/lib/rss'
import { SiteTitle, PostsDirectory } from '@/lib/constants'
import Date from '@/components/Date'
import Layout from '@/components/Layout'
import Intro from '@/components/Intro'
import { getSortedPostsData } from '@/lib/posts'
import useTranslation from '@/i18n/useTranslation'

export default function Home({ allLocalePostsData }) {
  const { t } = useTranslation()
  const router = useRouter()
  const { locale } = router

  // Get the first 3 items
  const lastBlogEntries = allLocalePostsData.slice(0, 3)

  return (
    <Layout>
      <Head>
        <title>{SiteTitle}</title>
      </Head>

      <Intro />

      <h2>{t('latest-posts')}</h2>
      <section>
        {/* List blog posts */}
        {lastBlogEntries.map(({ id, title, date, tags }) => (
          <article>
            <h3>
              <Link href={`${PostsDirectory}${id}`}>{title}</Link>
            </h3>
            <small>
              <Date dateString={date} locale={locale} />
            </small>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export const getStaticProps = async ({ locale, locales }) => {
  let allLocalePostsData

  // Write RSS feed files.
  for (let language of locales) {
    const allPostsData = getSortedPostsData(language)
    const rss = generateRSS(allPostsData, language)
    fs.writeFileSync(`./public/rss-${language}.xml`, rss)

    // Save the posts according to the current locale
    // in order to return it to the client.
    if (language === locale) {
      allLocalePostsData = allPostsData
    }
  }

  return {
    props: {
      allLocalePostsData,
    },
  }
}
