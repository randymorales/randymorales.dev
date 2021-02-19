import fs from 'fs'

import { PostsDirectory } from '@/lib/constants'
import generateRSS from '@/lib/rss'
import { getSortedPostsData } from '@/lib/posts'
import useTranslation from '@/i18n/useTranslation'
import Intro from '@/components/Intro'
import Layout from '@/components/Layout'
import PostCard from '@/components/PostCard'

import blogStyles from '@/styles/blog.module.css'

export default function Home({ allLocalePostsData }) {
  const { t } = useTranslation()

  // Get the first 3 items
  const lastBlogEntries = allLocalePostsData.slice(0, 3)

  return (
    <Layout pageTitle={t('home')}>
      <Intro />

      <h2>{t('latest-posts')}</h2>
      <section className={blogStyles.cardsContainer}>
        {/* Blog posts list*/}
        {lastBlogEntries.map(
          ({ id, title, description, date, tags, image }) => (
            <PostCard
              key={id}
              url={`${PostsDirectory}${id}`}
              title={title}
              description={description}
              date={date}
              tags={tags}
              image={image}
            />
          ),
        )}
      </section>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => {
  // Get posts.
  let allLocalePostsData = getSortedPostsData(locale)

  // Write RSS feed files.
  const rss = generateRSS(allLocalePostsData, locale)
  fs.writeFileSync(`./public/rss-${locale}.xml`, rss)

  return {
    props: {
      allLocalePostsData,
    },
  }
}
