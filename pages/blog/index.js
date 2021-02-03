import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { FullName, PostsDirectory } from '@/lib/constants'
import { getSortedPostsData } from '@/lib/posts'
import useTranslation from '@/i18n/useTranslation'
import Layout from '@/components/Layout'
import Date from '@/components/Date'

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

        <h1>Posts</h1>

        <p>Posts, tutorials, snippets, musings, and everything else.</p>

        <h2>Card posts here...</h2>
        {/* <PostList posts={posts} /> */}
        <section>
          {/* List blog posts */}
          {allLocalePostsData.map(({ id, title, date, tags }) => (
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
