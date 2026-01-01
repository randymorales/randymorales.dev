import fs from 'fs'
import Head from 'next/head'
import { SiteTitle } from '@/lib/constants'
import generateRSS from '@/lib/rss'
import { getAllPostsMetadata } from '@/lib/posts'

export default function Home() {
  return (
    <>
      <Head>
        <title>{SiteTitle}</title>
        <meta name="description" content="Randy Morales - Software Engineer" />
      </Head>
      <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Randy Morales</h1>
          <p className="text-xl text-zinc-400 mb-8">Software Engineer</p>
          <p className="text-zinc-500">Landing page under construction - FASE 1 complete</p>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPostsMetadata()

  // Write RSS feed files.
  const rss = generateRSS(posts)
  fs.writeFileSync(`./public/rss.xml`, rss)

  return {
    props: {},
  }
}
