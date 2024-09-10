import fs from 'fs'

import { SiteBaseURL } from '@/lib/constants'
import generateRSS from '@/lib/rss'
import { getSortedPostsData } from '@/lib/posts'
import BlogPostsSection from '@/components/BlogPostsSection'
import Intro from '@/components/Intro'
import Layout from '@/components/Layout'

export default function Home({ allLocalePostsData }) {
  const pageInfo = {
    url: SiteBaseURL,
    title: 'Home',
    description: 'Randy Morales - Programming Blog',
    image: SiteBaseURL + '/images/cover.png',
  }

  // Get the last 3 posts
  const lastBlogEntries = allLocalePostsData.slice(0, 3)

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
  let allLocalePostsData = getSortedPostsData()

  // Write RSS feed files.
  const rss = generateRSS(allLocalePostsData)
  fs.writeFileSync(`./public/rss.xml`, rss)

  return {
    props: {
      allLocalePostsData,
    },
  }
}
