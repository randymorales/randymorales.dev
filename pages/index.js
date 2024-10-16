import fs from 'fs'
import Link from 'next/link'

import { SiteBaseURL } from '@/lib/constants'
import generateRSS from '@/lib/rss'
import { getAllPostsMetadata } from '@/lib/posts'
import BlogPostsSection from '@/components/BlogPostsSection'
import HeroSection from '@/components/HeroSection'
import Layout from '@/components/Layout'

export default function Home({ posts }) {
  const pageInfo = {
    url: SiteBaseURL,
    title: 'Home',
    description: 'Randy Morales - Programming Blog',
    image: SiteBaseURL + '/images/cover.png',
  }

  // Get the last 3 posts
  const latestBlogPosts = posts.slice(0, 3)

  return (
    <Layout pageInfo={pageInfo} large={true}>
      <HeroSection />

      <div className='divide-y divide-gray-700'>
        <div className='flex justify-between items-center mb-7'>
          <h2 className='text-white text-3xl font-bold'>Recently Published</h2>
          <Link href='/blog' className='text-white hover:text-accentColor'>
            View All →
          </Link>
        </div>

        <BlogPostsSection posts={latestBlogPosts} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPostsMetadata()

  // Write RSS feed files.
  const rss = generateRSS(posts)
  fs.writeFileSync(`./public/rss.xml`, rss)

  return {
    props: {
      posts,
    },
  }
}
