import fs from 'fs'

import { SiteBaseURL } from '@/lib/constants'
import generateRSS from '@/lib/rss'
import { getAllPostsMetadata } from '@/lib/posts'
import BlogPostsSection from '@/components/BlogPostsSection'
import Intro from '@/components/Intro'
import Layout from '@/components/Layout'

export default function Home({ allPostsMetadata }) {
  const pageInfo = {
    url: SiteBaseURL,
    title: 'Home',
    description: 'Randy Morales - Programming Blog',
    image: SiteBaseURL + '/images/cover.png',
  }

  // Get the last 3 posts
  const lastBlogEntries = allPostsMetadata.slice(0, 3)

  return (
    <Layout pageInfo={pageInfo} large={true}>
      <Intro />

      {/* Show blog post list */}
      <BlogPostsSection title='Latest Posts' posts={lastBlogEntries} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  // Get posts.
  let allPostsMetadata = getAllPostsMetadata()

  // Write RSS feed files.
  const rss = generateRSS(allPostsMetadata)
  fs.writeFileSync(`./public/rss.xml`, rss)

  return {
    props: {
      allPostsMetadata,
    },
  }
}
