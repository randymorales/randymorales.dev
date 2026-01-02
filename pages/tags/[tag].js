import { SiteBaseURL } from '@/lib/constants'
import { getAllPostTags, getPostsMetadataByTag } from '@/lib/posts'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PostCard from '@/components/PostCard'
import { Tag as TagIcon } from 'lucide-react'

export default function Tag({ posts, tag }) {
  const pageInfo = {
    url: SiteBaseURL + `/tags/` + tag,
    title: `${tag} - Randy Morales`,
    description: `Articles tagged with ${tag}`,
    image: SiteBaseURL + '/images/cover.png',
  }

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
                {tag}
              </h1>
            </div>
            <div className='w-20 h-1 bg-red-600 rounded-full'></div>
            <p className='mt-4 text-zinc-400'>
              {posts.length} {posts.length === 1 ? 'article' : 'articles'} found
            </p>
          </div>

          {/* Posts Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  // Return a list of paths of posts by tag.
  const paths = getAllPostTags(true)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // Return a list of posts by tag.
  const tag = params.tag
  const posts = await getPostsMetadataByTag(tag)
  return {
    props: {
      posts,
      tag,
    },
  }
}
