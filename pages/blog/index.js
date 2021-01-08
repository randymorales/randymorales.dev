import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { FullName, PostsDirectory } from '@/lib/constants'
import { getSortedPostsData } from '@/lib/posts'
import useTranslation from '@/i18n/useTranslation'
import Layout from '@/components/Layout'
import Date from '@/components/Date'

import layoutStyles from '@/styles/layout.module.css'
import utilStyles from '@/styles/utils.module.css'

const BlogIndex = ({ allLocalePostsData }) => {
  const { t } = useTranslation()
  const router = useRouter()
  const { locale } = router

  return (
    <>
      <Layout>
        <Head>
          <title>
            {t('blog')} | {FullName}
          </title>
        </Head>

        <header className={layoutStyles.header}>
          <>
            <img
              src='/images/profile.jpg'
              className={`${layoutStyles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={FullName}
            />
            <h1 className={utilStyles.heading2Xl}>{FullName}</h1>
          </>
        </header>

        <section className={utilStyles.headingMd}>
          <p>{t('blog-description')}</p>
        </section>

        <h1 className='title'>Posts</h1>

        <p className='description'>
          Posts, tutorials, snippets, musings, and everything else.
        </p>

        <main>
          <h1 className={utilStyles.headingLg}>Card posts here...</h1>
          {/* <PostList posts={posts} /> */}
          <section
            className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
          >
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
        </main>
      </Layout>
    </>
  )
}

export default BlogIndex

export const getStaticProps = async ({ locale, locales }) => {
  let allLocalePostsData

  for (let language of locales) {
    // Save the posts according to the current locale
    // in order to return it to the client.
    if (language === locale) {
      allLocalePostsData = getSortedPostsData(language)
    }
  }

  return {
    props: {
      allLocalePostsData,
    },
  }
}
