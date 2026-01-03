import fs from 'fs'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Blogs from '@/components/Blogs'
import About from '@/components/About'
import { SiteBaseURL, SiteTitle } from '@/lib/constants'
import generateRSS from '@/lib/rss'
import { getAllPostsMetadata } from '@/lib/posts'

export default function Home({ posts }) {
  const pageInfo = {
    url: SiteBaseURL,
    title: SiteTitle,
    description: 'Software Engineer with 6+ years of experience building scalable systems, REST APIs, and microservices. Specialized in Golang, Python, and cloud technologies.',
    image: SiteBaseURL + '/images/cover.png',
  }

  return (
    <Layout pageInfo={pageInfo}>
      <div className='min-h-screen bg-zinc-900 selection:bg-red-500/30'>
        <Header />
        <main id='main-content'>
          <Hero />
          <Experience />
          <Projects />
          <Blogs posts={posts.slice(0, 3)} />
          <About />
        </main>
        <Footer />
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
