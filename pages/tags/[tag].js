import { getTagIcon, SiteBaseURL } from '@/lib/constants'
import { getAllPostTags, getPostsMetadataByTag } from '@/lib/posts'
import Layout from '@/components/Layout'
import BlogPostsSection from '@/components/BlogPostsSection'

export default function Tag({ posts, tag }) {
  const pageInfo = {
    url: SiteBaseURL + `/tags/` + tag,
    title: `${tag} Tag`.toLowerCase(),
    description: `${tag} Tag`.toLowerCase(),
    image: SiteBaseURL + '/images/cover.png',
  }

  return (
    <Layout pageInfo={pageInfo} large={true}>
      <div className='divide-y divide-gray-700'>
        <div className='mb-10'>
          <h2 className='mt-24'>
            Tag:{' '}
            <span className='text-accentColor items-center'>
              {`${getTagIcon(tag)}${tag}`}
            </span>
          </h2>

          <h2>
            Posts: <span className='text-accentColor'>{posts.length}</span>
          </h2>
        </div>

        {/* List blog posts */}
        <BlogPostsSection posts={posts} />
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
