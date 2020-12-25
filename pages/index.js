import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import fs from 'fs'

import generateRSS from '@/lib/rss'
import { SiteTitle, PostsDirectory } from '@/lib/constants'
import Date from '@/components/Date'
import Layout from '@/components/Layout'
import { getSortedPostsData } from '@/lib/posts'
import useTranslation from '@/i18n/useTranslation'

import utilStyles from '@/styles/utils.module.css'

export default function Home({ allLocalePostsData }) {
  const { t } = useTranslation()
  const router = useRouter()
  const { locale } = router

  return (
    <Layout home>
      <Head>
        <title>{SiteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>{t('about-description')}</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>

        {/* List blog posts */}
        <ul className={utilStyles.list}>
          {allLocalePostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`${PostsDirectory}${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} locale={locale} />
              </small>
            </li>
          ))}
        </ul>
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
