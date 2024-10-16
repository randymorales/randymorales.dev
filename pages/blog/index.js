import { PostsDirectory, SiteBaseURL } from '@/lib/constants'
import { getAllPostsMetadata, getAllPostTags } from '@/lib/posts'
import BlogPostsSection from '@/components/BlogPostsSection'
import Layout from '@/components/Layout'
import TagsSection from '@/components/TagsSection'

export default function BlogIndex({ posts, tags }) {
  const pageInfo = {
    url: SiteBaseURL + PostsDirectory,
    title: 'Blog',
    description: 'Randy Morales - Programming Blog',
    image: SiteBaseURL + '/images/cover.png',
  }

  return (
    <Layout pageInfo={pageInfo} large={true}>
      <div className='pt-16 pb-8 flex flex-col lg:flex-row lg:space-x-8 my-12'>
        <div className='divide-y divide-gray-700 w-full lg:w-4/5 '>
          <h2 className='text-white text-4xl font-bold mb-12'>All Posts</h2>
          <div className='mb-8 lg:mb-0'>
            <BlogPostsSection posts={posts} />
          </div>
        </div>
        <div className='w-full lg:w-1/5 lg:sticky lg:top-4'>
          <TagsSection tags={tags} />
        </div>
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
