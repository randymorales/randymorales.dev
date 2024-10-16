import { SiteBaseURL } from '@/lib/constants'
import { getAllPostsMetadata, getAllPostTags } from '@/lib/posts'
import Layout from '@/components/Layout'
import TagsSection from '@/components/TagsSection'

export default function TagsIndex({ posts, tags }) {
  const pageInfo = {
    url: SiteBaseURL + '/tags',
    title: 'Tags',
    description: 'Randy Morales - Programming Blog',
    image: SiteBaseURL + '/images/cover.png',
  }

  return (
    <Layout pageInfo={pageInfo} large={true}>
      <div className='mx-auto my-auto py-16 w-4/5'>
        <TagsSection tags={tags} />
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
