import Layout from '@components/layout'
import Date from '@components/date'
import { getAllPostIds, getPostData } from '@utils/posts'
import Head from 'next/head'
import utilStyles from '@styles/utils.module.css'
import Link from 'next/link'


export default function Post({ postData }) {
  return (
    <Layout>

      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Link href="/">
            <a className={utilStyles.backToHome}>← Back to home </a>
          </Link>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>

    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
