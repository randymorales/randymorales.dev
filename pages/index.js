import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { SiteTitle, PostsDirectory } from '@/lib/constants'
import Date from '@/components/Date'
import Layout from '@/components/Layout'
import { getSortedPostsData } from '@/lib/posts'
import useTranslation from '@/i18n/useTranslation'

import utilStyles from '@/styles/utils.module.css'

export default function Home({ allPostsData }) {
  const { t } = useTranslation()
  const router = useRouter()
  const { locale } = router

  return (
    <Layout home>
      <Head>
        <title>{SiteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>{t('blog-description')}</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>

        {/* List blog posts */}
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
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

export const getStaticProps = async ({ locale }) => {
  // Get posts data according to given locale.
  const allPostsData = getSortedPostsData(locale)
  return {
    props: {
      allPostsData,
    },
  }
}
