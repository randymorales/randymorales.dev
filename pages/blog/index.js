import Head from 'next/head'
import { useRouter } from 'next/router'

import { FullName } from '@/lib/constants'
import Layout from '@/components/Layout'
import useTranslation from '@/i18n/useTranslation'

import utilStyles from '@/styles/utils.module.css'

const BlogIndex = ({ posts }) => {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <>
      <Layout>
        <Head>
          <title>
            {t('blog')} | {FullName}
          </title>
        </Head>

        <section className={utilStyles.headingMd}>
          <p>{t('blog-description')}</p>
        </section>

        <h1 className='title'>Posts</h1>

        <p className='description'>
          Posts, tutorials, snippets, musings, and everything else.
        </p>

        <main>
          <h1>Card posts here...</h1>
          {/* <PostList posts={posts} /> */}
        </main>
      </Layout>
    </>
  )
}

export default BlogIndex
