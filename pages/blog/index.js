import { useState } from 'react'
import { Search as SearchIcon } from 'lucide-react'
import { PostsDirectory, SiteBaseURL } from '@/lib/constants'
import { getAllPostsMetadata, getAllPostTags } from '@/lib/posts'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TagsSection from '@/components/TagsSection'
import Search from '@/components/Search'
import Blogs from '@/components/Blogs'

export default function BlogIndex({ posts, tags }) {
  const [showSearch, setShowSearch] = useState(false)

  const pageInfo = {
    url: SiteBaseURL + PostsDirectory,
    title: 'Blog - Randy Morales',
    description: 'Articles about software engineering, cloud technologies, and system design',
    image: SiteBaseURL + '/images/cover.png',
  }

  return (
    <Layout pageInfo={pageInfo}>
      <div className='min-h-screen bg-zinc-900 flex flex-col'>
        <Header />

        <main id='main-content' className='flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full'>
          {/* Header Section */}
          <div className='flex flex-col md:flex-row justify-between items-center md:items-start mb-16'>
            {/* Left: Title */}
            <div className='text-center md:text-left mb-6 md:mb-0'>
              <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
                Blog & Articles
              </h1>
              <div className='w-20 h-1 bg-red-600 rounded-full mx-auto md:mx-0'></div>
            </div>

            {/* Right: Search Button */}
            <button type='button'
              onClick={() => setShowSearch(true)}
              aria-label='Open search dialog'
              className='inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors border border-zinc-700 hover:border-red-500/50'
            >
              <SearchIcon size={20} aria-hidden='true' />
              <span>Search in articles...</span>
            </button>
          </div>

          {/* Content Grid */}
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-12'>
            {/* Posts Section - 4 columns */}
            <div className='lg:col-span-4'>
              <Blogs posts={posts} showHeader={false} showViewAll={false} />
            </div>

            {/* Sidebar - 1 column */}
            <aside className='lg:col-span-1'>
              <TagsSection tags={tags} />
            </aside>
          </div>
        </main>

        <Footer />

        {/* Search Modal */}
        {showSearch && <Search onClose={() => setShowSearch(false)} />}
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
