import { SiteBaseURL } from '@/lib/constants'
import { getAllPostsMetadata, getAllPostTags } from '@/lib/posts'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Tag as TagIcon } from 'lucide-react'

export default function TagsIndex({ posts, tags }) {
  const pageInfo = {
    url: SiteBaseURL + '/tags',
    title: 'Tags - Randy Morales',
    description: 'Browse articles by topic',
    image: SiteBaseURL + '/images/cover.png',
  }

  // tags is an object { tagName: count }
  const sortedTags = Object.entries(tags).sort((a, b) => b[1] - a[1])

  return (
    <Layout pageInfo={pageInfo}>
      <div className='min-h-screen bg-zinc-900 flex flex-col'>
        <Header />

        <main className='flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full'>
          {/* Header Section */}
          <div className='mb-16'>
            <div className='flex items-center gap-3 mb-4'>
              <TagIcon className='text-red-400' size={32} />
              <h1 className='text-4xl md:text-5xl font-bold text-white'>
                Browse by Topic
              </h1>
            </div>
            <div className='w-20 h-1 bg-red-600 rounded-full'></div>
            <p className='mt-4 text-zinc-400'>
              Explore {sortedTags.length} topics across {posts.length} articles
            </p>
          </div>

          {/* Tags Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {sortedTags.map(([tag, count]) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className='group bg-zinc-800 border border-zinc-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1'
              >
                <div className='flex items-start justify-between mb-3'>
                  <TagIcon className='text-red-400 group-hover:scale-110 transition-transform' size={24} />
                  <span className='bg-zinc-900 text-zinc-400 text-xs px-3 py-1 rounded-full group-hover:bg-red-900/30 group-hover:text-red-300 transition-colors'>
                    {count} {count === 1 ? 'post' : 'posts'}
                  </span>
                </div>
                <h2 className='text-xl font-bold text-white group-hover:text-red-400 transition-colors'>
                  {tag}
                </h2>
              </Link>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const posts = getAllPostsMetadata()
  const tags = getAllPostTags(false)

  return {
    props: {
      posts,
      tags,
    },
  }
}
