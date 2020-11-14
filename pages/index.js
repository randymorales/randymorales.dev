import Head from 'next/head'
import Layout, { siteTitle } from '@components/Layout'
import utilStyles from '@styles/utils.module.css'
import { getSortedPostsData } from '../utils/posts'
import Link from 'next/link'
import Date from '@components/Date'


export default function Home({ allPostsData }) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className={utilStyles.headingMd}>
          <p>Hi! I'm a software engineer. This website is my digital legacy — a compendium of the things I've learned and put into practice.</p>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

          <h2 className={utilStyles.headingLg}>Blog</h2>

          <ul className={utilStyles.list}>
            {allPostsData.map(({ slug, date, title }) => (
              <li className={utilStyles.listItem} key={slug}>
              <Link href={`/posts/${slug}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
            ))}
          </ul>

        </section>
      </Layout>

    </>
  )
}


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
